from django.shortcuts import render
from django.http import HttpResponse
from django.http import Http404
from django.contrib.auth.mixins import LoginRequiredMixin
from .models import Chef, Recipe
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy


def home(request):
     # Number of visits to this view, as counted in the session variable.
    num_visits=request.session.get('num_visits', 0)
    request.session['num_visits'] = num_visits+1

    return render(request, 'home.html', context={ 'num_visits': num_visits})

def recipe_detail(request, id):
    try:
        recipe = Recipe.objects.get(id=id)
    except Recipe.DoesNotExist:
        raise Http404('Recipe not found')
    return render(request, 'recipe_detail.html', {'recipe': recipe})

def gallery(request):
    return render(request, 'gallery.html')

def chef_detail(request, id):
    try:
        chef = Chef.objects.get(id=id)
    except Chef.DoesNotExist:
        raise Http404('Chef not found')
    return render(request, 'chef_detail.html', {'chef': chef})

from django.views import generic

class RecipeListView(generic.ListView):
    model = Recipe
    paginate_by = 10

# way to restrict access to logged-in users in your class-based views
class ChefListView(generic.ListView):
    model = Chef
    paginate_by = 10

# chefs login can view thier own recipes
class RecipeDetailView(LoginRequiredMixin, generic.DetailView):
    model = Recipe


class ChefDetailView(generic.DetailView):
    model = Chef

from django.contrib.auth.mixins import LoginRequiredMixin

class RecipeByCheftListView(LoginRequiredMixin,generic.ListView):
    """Generic class-based view listing books on loan to current user."""
    model = Recipe
    template_name ='home/recipe_list_user.html'
    paginate_by = 10
    
    def get_queryset(self):
        return Recipe.objects.filter(available = 'True')

class ChefCreate(CreateView):
    model = Chef
    fields = ['first_name', 'last_name', 'email_address', 'phone_number']
    initial = {'email_address': 'abc@gmail.com'}
