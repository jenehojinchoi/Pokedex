from django.urls import path
from pokemons.views import AddPokemonView

urlpatterns = [
   path('add', AddPokemonView.as_view()),
]