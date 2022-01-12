from django.urls import path
from django.contrib.auth.views import LoginView, LogoutView

from .views import login, principal, index, estudiante, jefedepto, vicedecano, vicedecanogu, ayuda

urlpatterns = [
    path('', index),
    path('login', login),
    path('logout', LogoutView.as_view()),
    path('ayuda', ayuda),
    path('principal', principal),
    path('estudiante', estudiante),
    path('jefedepto', jefedepto),
    path('vicedecano', vicedecano),
    path('vicedecanogu', vicedecanogu),
]
