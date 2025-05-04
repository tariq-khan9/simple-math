from django.http import JsonResponse
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import AccessToken
from django.contrib.auth.hashers import check_password
import jwt
from django.core.mail import send_mail
from decouple import config
from rest_framework import status
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from simple_math import settings
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

@api_view(["POST"])
@parser_classes([MultiPartParser, FormParser])
def register_user(request):

    name = request.data.get("name")
    email = request.data.get("email")
    password = request.data.get("password")
    image = request.FILES.get("image")  # Handle uploaded image file

    # Basic validation
    if not all([name, email, password]):
        return Response({"error": "Name, email, and password are required."}, status=status.HTTP_400_BAD_REQUEST)

    if MathUser.objects.filter(email=email).exists():
        return Response({"error": "Email already registered."}, status=status.HTTP_400_BAD_REQUEST)

    try:
        # Create user
        user = MathUser.objects.create_user(
            username=name,
            email=email,
            password=password
        )
        user.is_active = False  
        user.save()

        # Create profile and assign avatar if image uploaded
        profile_data = {"user": user}
        if image:
            profile_data["avatar"] = image
        Profile.objects.create(**profile_data)

         # JWT token
        token = jwt.encode({'email': email}, config("SECRET_KEY"), algorithm='HS256')

        verify_url = f"{config('CLIENT_URL')}/verify/{token}"

        
        send_mail(
            subject="Email Verification",
            message=f"Welcome! Please verify your email by clicking this link: {verify_url}",
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[email],
            fail_silently=False,
        )
        
        return Response({"message": "User registered. Please check your email to verify your account."}, status=status.HTTP_201_CREATED)

    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    

@api_view(['POST'])
def resend_verification(request):
    email = request.data.get('email')
    
    try:
        user = MathUser.objects.get(email=email)
        
        if not user:
             return Response(
                {"detail": "User doesnt exist"},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        if user.is_active:
            return Response(
                {"detail": "Email is already verified"},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Generate new token and send email
        token = jwt.encode({'email': email}, settings.SECRET_KEY, algorithm='HS256')
        verify_url = f"{settings.CLIENT_URL}/verify/{token}"
        
        send_mail(
            subject="Email Verification",
            message=f"Welcome! Please verify your email by clicking this link: {verify_url}",
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[email],
            fail_silently=False,
        )
        
        return Response({"detail": "Verification email resent successfully"})
        
    except MathUser.DoesNotExist:
        return Response(
            {"detail": "Email not found"},
            status=status.HTTP_404_NOT_FOUND
        )
    except Exception as e:
        return Response(
            {"detail": str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )


@api_view(["POST"])
def verify_email(request):
    auth_token = request.data.get('authToken')
    
    try:
        # Verify JWT token
        decoded = jwt.decode(auth_token, settings.SECRET_KEY, algorithms=['HS256'])
        email = decoded.get('email')
        
        if not email:
            return JsonResponse({'message': 'Invalid token'}, status=400)
        
        # Find and update user
        try:
            user = MathUser.objects.get(email=email)
            user.is_active = True
            user.save()
            return JsonResponse({'message': 'Email verified successfully!'}, status=200)
        except MathUser.DoesNotExist:
            return JsonResponse({'message': 'User not found'}, status=400)
            
    except jwt.ExpiredSignatureError:
        return JsonResponse({'message': 'Expired verification link'}, status=400)
    except jwt.InvalidTokenError:
        return JsonResponse({'message': 'Invalid verification link'}, status=400)
    except Exception as e:
        return JsonResponse({'message': str(e)}, status=400)



@api_view(["GET"])
def user_states(request):
    state = UserStates.objects.all()
    serializer = UserStatesSerializer(state, many=True)
    return Response(serializer.data)


    
@api_view(['POST'])
def login_view(request):
    email = request.data.get('email')
    password = request.data.get('password')
    print(email, password)
    try:
        # Fetch the user by email
        user_obj = MathUser.objects.get(email=email)
    except MathUser.DoesNotExist:
        return Response({"detail": "Email not found"}, status=status.HTTP_400_BAD_REQUEST)
    
    # Use Django's check_password to compare the plain password with the hashed one
    if check_password(password, user_obj.password):
        # If password is correct
        if not user_obj.is_active:
            return Response(
                {
                    "detail": "Email not verified/active",
                    "resend_url": "/api/resend-verification/",  # Optional: add resend endpoint
                    "email": user_obj.email  # Optional: return email for resend functionality
                },
                status=status.HTTP_401_UNAUTHORIZED
            )
        access = AccessToken.for_user(user_obj)
        user_serializer = MathUserSerializer(user_obj)
        return Response({
            "token": str(access),
            "user": user_serializer.data
        }) 
     
    else:
        # If the password doesn't match
        return Response({"detail": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['POST'])
def bulk_update_user_states(request):
    
    data = request.data  # expecting a list of objects
    
 
  
    if not isinstance(data, list):
        return Response({'error': 'Input data must be a list of objects.'}, status=status.HTTP_400_BAD_REQUEST)

    for item in data:
        try:
            user_id = item.get('userId')
            operation_id = item.get('operation_id')
            difficulty_level = item.get('difficulty_level')
            attempts = item.get('attempts', 0)
            successes = item.get('successes', 0)

            if not (user_id and operation_id and difficulty_level is not None):
                return Response({'error': 'Missing required fields in one of the objects.'}, status=status.HTTP_400_BAD_REQUEST)

            # Try to get existing record
            user_state = UserStates.objects.filter(
                user_id=user_id,
                operation_id=operation_id,
                difficulty_level=difficulty_level
            ).first()

            if user_state:
                # If exists, add attempts and successes
                user_state.attempts += attempts
                user_state.successes += successes
                user_state.save()
            else:
                # If not exists, create new
                UserStates.objects.create(
                    user_id=user_id,
                    operation_id=operation_id,
                    difficulty_level=difficulty_level,
                    attempts=attempts,
                    successes=successes
                )

        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

    return Response({'message': 'UserStates updated/created successfully.'}, status=status.HTTP_200_OK)