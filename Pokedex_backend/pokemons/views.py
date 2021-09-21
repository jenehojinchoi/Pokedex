import json

from django.http import JsonResponse
from django.views import View

from users.models import User
from pokemons.models import Pokemon, LikePokemon
from users.utils import login_decorator

class AddPokemonView(View):
    def post(self, request):
        try:
            data = json.loads(request.body)

            name = data.get('name', None)
            apiId = data.get('apiId', None)

            if Pokemon.objects.filter(name=name).exists() or Pokemon.objects.filter(apiId=apiId).exists():
                return JsonResponse({"message" : "POKEMON_ALREADY_EXISTS"}, status = 400)

            Pokemon.objects.create(
                name = name,
                apiId = apiId
            )
            return JsonResponse({"message" : "SUCCESS"}, status = 201)

        except:
            return JsonResponse({"message" : "INVALID_POKEMON"}, status = 400)