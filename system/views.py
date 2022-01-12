from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.contrib.auth import authenticate, login as login_django
from django.contrib.auth.decorators import login_required

from .forms import LoginForm


# Checking permission: https://docs.djangoproject.com/en/3.2/topics/auth/default/


# Create your views here.
def index(request):
    if not request.user.is_authenticated:
        return HttpResponseRedirect(redirect_to="login")
    else:
        return HttpResponseRedirect(redirect_to="principal")


def login(request):
    context = {}
    if request.method == "POST":
        form = LoginForm(request.POST)
        if form.is_valid():
            user = authenticate(request, username=form.cleaned_data['user_username'],
                                password=form.cleaned_data['user_password'])
            if user is not None:
                login_django(request, user)
                next_url = request.GET.get('next', None)
                if next_url:
                    return HttpResponseRedirect(next_url)
                return HttpResponseRedirect(redirect_to='principal')
        context = {
            'error': True,
        }
    return render(request, 'login.html', context)


def ayuda(request):
    return render(request, 'ayuda.html', {})


@login_required
def principal(request):
    return render(request, 'principal.html', {})


@login_required
def estudiante(request):
    return render(request, 'estudiante.html', {})


@login_required
def jefedepto(request):
    return render(request, 'jefedepto.html', {})


@login_required
def vicedecano(request):
    return render(request, 'vicedecano.html', {})


@login_required
def vicedecanogu(request):
    return render(request, 'vicedecanogu.html', {})
