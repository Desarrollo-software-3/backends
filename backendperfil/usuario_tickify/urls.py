"""usuario_tickify URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from usuarios.views import obtener_usuario_por_correo, editar_usuario_por_correo

urlpatterns = [
    path('admin/', admin.site.urls),
    path('obtener_usuario/', obtener_usuario_por_correo, name='obtener_usuario'),
    path('actualiazar_usuario/', editar_usuario_por_correo, name='actualiazar_usuario'),
]
