import json
import bcrypt
import jwt

from django.core.validators import validate_email
from django.http import JsonResponse
from django.views import View

from .models import User
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
        data = json.loads(request.body)

        try: 
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
 
