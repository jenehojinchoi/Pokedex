from django.urls import path
from users.views import SignUpView, SignInView, LikeView, LikedPokemonListView

urlpatterns = [
   path('signup', SignUpView.as_view()),
   path('signin', SignInView.as_view()),
   path('like', LikeView.as_view()),
   path('likedlist', LikedPokemonListView.as_view()),
]