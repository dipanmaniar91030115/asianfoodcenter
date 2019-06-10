from django.urls import path

from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('recipes/', views.RecipeListView.as_view(), name='recipes'),
    path('chefs/', views.ChefListView.as_view(), name = 'chefs'),
    path('gallery/', views.gallery, name = 'gallery'),
    path('recipe/<int:pk>', views.RecipeDetailView.as_view(), name='recipe_detail'),
    path('chef/<int:pk>', views.ChefDetailView.as_view(), name='chef_detail'),

]

urlpatterns += [
    path('recipe_by_chef/',views.RecipeByCheftListView.as_view(), name = 'my_recipes'),
]

urlpatterns += [  
    path('chefs/create/', views.ChefCreate.as_view(), name='chef_create'),
]
