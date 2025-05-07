
from django.urls import  path
from .views import math_operation, users, user_states, login_view,current_user, register_user,resend_verification,verify_email, bulk_update_user_states

urlpatterns = [
    path("operation/", math_operation),
    path("users/", users),
    path("states/<int:user_id>/", user_states),
    path("login/", login_view),
    path("current-user", current_user),
    path("register/", register_user),
    path("verify-email/", verify_email),
    path("resend-email/", resend_verification),
    path("update-states", bulk_update_user_states)
   
]


