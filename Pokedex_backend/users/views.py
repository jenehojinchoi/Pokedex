import json

from django.http import JsonResponse
from django.views import View

from .models import User

class SignUpView(View):
    def post(self, request):
        try:
            data = json.loads(request.body)

            email = data['email']
            password = data['password']

            if User.objects.filter(email=email).exists():
                return JsonResponse({"message" : "EMAIL_EXISTS"}, status = 400)
            
            User.objects.create(
                email = email,
                password = password
            )

            return JsonResponse({"message" : "SUCCESS"}, status = 201)

        except:
            return JsonResponse({"message" : "ERROR"}, status = 400)

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

            if (user.password == password):
                # add access_token 
                return JsonResponse({"message" : "SUCCESS"}, status=200)


            return JsonResponse({"message" : "UNAUTHORIZED_APPROACH"}, status=401)

        except KeyError:
            return JsonResponse({"message" : "KEY_ERROR"}, status=400)
 
