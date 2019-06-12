from django.forms import ModelForm

from home.models import Chef

class ChefModelForm(ModelForm):

    # using ModelForm to validate email and phone number
    class Meta:
        model = Chef
        fields = ['fisrt_name', 'last_name', 'email_address', 'phone_number']
