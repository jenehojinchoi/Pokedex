import json
import bcrypt
import jwt

from django.core.validators import validate_email
from django.http import JsonResponse, HttpResponse
from django.views import View

from .models import User
from pokemons.models import Pokemon, LikePokemon
from .utils import login_decorator
from my_settings import SECRET_KEY, ALGORITHM

class SignUpView(View):
    def post(self, request):
        try:
            data = json.loads(request.body)

            email = data.get('email', None)
            password = data.get('password', None)

            if User.objects.filter(email=email).exists():
                return JsonResponse({"message" : "EMAIL_EXISTS"}, status = 400)
            
            if not email or not password:
                return JsonResponse({"message" : "REQUIRED_FIELD"}, status = 400)
            
            validate_email(email)
                
            hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

            User.objects.create(
                email = email,
                password = hashed_password
            )

            return JsonResponse({"message" : "SUCCESS"}, status = 201)

        except:
            return JsonResponse({"message" : "INVALID_EMAIL"}, status = 400)

class SignInView(View):
    def post(self, request):
        try: 
            data = json.loads(request.body)

            email = data.get('email', None)
            password = data.get('password', None)

            if not (email and password):
                return JsonResponse({"message" : "REQUIRED_FIELD"}, status=400)

            if not User.objects.filter(email=email):
                return JsonResponse({"message" : "INVALID_USER"}, status=401)

            user = User.objects.get(email=email)

            if bcrypt.checkpw(password.encode('utf-8'), user.password.encode('utf-8')):
                access_token = jwt.encode({"id" : user.id }, SECRET_KEY, algorithm=ALGORITHM)
                return JsonResponse({"message" : "SUCCESS", "TOKEN" : access_token}, status=200)

            return JsonResponse({"message" : "UNAUTHORIZED_APPROACH"}, status=401)

        except KeyError:
            return JsonResponse({"message" : "KEY_ERROR"}, status=400)
 
class LikeView(View):
    @login_decorator
    def post(self, request):
        try: 
            data = json.loads(request.body)

            email = data.get('email', None)
            pokemon_name = data.get('pokemonName', None)
            pokemon_apiId = data.get('pokemonApiId', None)

            user = User.objects.get(email=email)

            pokemon = Pokemon.objects.get_or_create(
                name = pokemon_name,
                apiId = pokemon_apiId
            )[0]

            if LikePokemon.objects.filter(user=user, pokemon=pokemon).exists():
                LikePokemon.objects.filter(user=user, pokemon=pokemon).delete()
                return JsonResponse({"message" : "LIKE_DELETE_SUCCESS"}, status=200)
            else:
                LikePokemon.objects.create(user=user, pokemon=pokemon)
                return JsonResponse({"message" : "LIKE_SUCCESS"}, status=200)

        except:

            return JsonResponse({"message" : "LIKE_FAIL"}, status = 400)


class LikedPokemonListView(View):
    @login_decorator
    def get(self, request):
        try:
            email = request.GET.get('email')
            user = User.objects.get(email=email)

            likes = LikePokemon.objects.filter(user=user)
            liked_pokemon_list = [{
                "id" : like.pokemon.id,
                "apiId" : like.pokemon.apiId,
                "name": like.pokemon.name
            } for like in likes]

            return JsonResponse({"data" : {'likedPokemonList' : liked_pokemon_list}}, status=200)

        except:
            return JsonResponse({"message" : "GET_LIKES_FAIL"}, status = 400)
        