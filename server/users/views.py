from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import MathOperation,MathUser, Profile, UserStates
from .serializers import MathOperationSerializer, MathUserSerializer, UserStatesSerializer

@api_view(["GET"])
def math_operation(request):
    operation = MathOperation.objects.all()
    serializer = MathOperationSerializer(operation, many=True)
    return Response(serializer.data)

@api_view(["GET"])
def users(request):
    user = MathUser.objects.all()
    serializer = MathUserSerializer(user, many=True)
    return Response(serializer.data)

@api_view(["GET"])
def user_states(request):
    state = UserStates.objects.all()
    serializer = UserStatesSerializer(state, many=True)
    return Response(serializer.data)