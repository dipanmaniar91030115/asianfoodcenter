from django.db import models
from django.contrib.auth.models import User


class Recipe(models.Model):

    recipe_name = models.CharField(max_length=150)
    cooktime = models.ForeignKey('Cooktime', on_delete=models.SET_NULL, null=True)
    description = models.TextField()
    available = models.BooleanField()
    chef = models.ForeignKey('Chef', on_delete=models.SET_NULL, null=True)

    class Meta:
        permissions = (("can_change_availability", "Set recipe as available"),)

    def __str__(self):
        return self.recipe_name 


class Cooktime(models.Model):
    cooketime = models.CharField(max_length=50)

    def __str__(self):
        return self.cooketime

class Chef(models.Model):

    PROVIDER_CHOICES =(
        ('Jackson Vom', 'Number one noodle house'),
        ('Luma Chifara', 'First street asian company'),
        ('Butter Lin', 'World famous dishes')
    )

    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    chef_username = models.CharField(max_length=30)
    email_address = models.CharField(max_length=30)
    phone_number = models.CharField(max_length=15)
    provider = models.CharField(choices=PROVIDER_CHOICES, max_length=30)

    def __str__(self):
        return self.first_name + ' ' + self.last_name + ' - ' + self.provider
