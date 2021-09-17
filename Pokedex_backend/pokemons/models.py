from django.db import models
from users.models import User
 
class Pokemon(models.Model):
    name = models.CharField(max_length=50)

    class Meta:
        db_table = 'pokemons'

class LikePokemon(models.Model):
    user      = models.ForeignKey('users.User', on_delete=models.CASCADE)
    pokemon   = models.ForeignKey('Pokemon', on_delete=models.CASCADE)

    class Meta:
        db_table = 'likes_users'
