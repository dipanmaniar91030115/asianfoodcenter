from django.contrib import admin

from .models import Chef, Cooktime, Recipe

# Register your models here.
admin.site.register(Chef)
admin.site.register(Cooktime)
admin.site.register(Recipe)


