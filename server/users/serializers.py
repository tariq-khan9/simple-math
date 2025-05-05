from rest_framework import serializers
from .models import MathUser, MathOperation, Profile, UserStates

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['avatar']


class MathUserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer()

    class Meta:
        model = MathUser
        fields = ['username','email', 'profile']


class MathOperationSerializer(serializers.ModelSerializer):

    class Meta:
        model = MathOperation
        fields = '__all__'

class UserStatesSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserStates
        fields = '__all__'

