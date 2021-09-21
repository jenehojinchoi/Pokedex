from django.urls import path
from users.views import SignUpView, SignInView, UserLikeView

urlpatterns = [
   path('signup', SignUpView.as_view()),
   path('signin', SignInView.as_view()),
   path('like', UserLikeView.as_view()),
]