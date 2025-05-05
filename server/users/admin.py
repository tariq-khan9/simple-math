from django.contrib import admin
from .models import MathUser, Profile, MathOperation, UserStates

class ProfileInline(admin.TabularInline):
    model = Profile



# Register Admins with Inlines
@admin.register(MathUser)
class MathUserAdmin(admin.ModelAdmin):
    inlines = [ProfileInline]

@admin.register(MathOperation)
class MathOperationAdmin(admin.ModelAdmin):
    pass

@admin.register(UserStates)
class UserStatesAdmin(admin.ModelAdmin):
    pass