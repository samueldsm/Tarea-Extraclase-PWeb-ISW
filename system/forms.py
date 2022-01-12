from django import forms

class LoginForm(forms.Form):
    user_username = forms.CharField(label='Usuario', max_length=100, required=True)
    user_password = forms.CharField(label='Contraseña', max_length=100, required=True)
    user_remember = forms.BooleanField(required=False)
