
from django.urls import  path
from .views import math_operation, users, user_states

urlpatterns = [
    path("operation/", math_operation),
    path("users/", users),
    path("states/", user_states),
  
   
]


