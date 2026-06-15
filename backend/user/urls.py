from django.urls import path
from .views import register, login, get_user, delete_user, get_all_users

urlpatterns = [
    path('register/', register),
    path('login/', login),

    # ✅ PUT THIS FIRST
    path('users/', get_all_users),

    # 👇 dynamic routes AFTER
    path('<str:userId>/delete/', delete_user),
    path('<str:userId>/', get_user),
]