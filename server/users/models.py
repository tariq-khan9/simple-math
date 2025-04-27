from django.db import models
from django.contrib.auth.models import AbstractUser



class MathUser(AbstractUser):
    email = models.EmailField(unique=True)
    USERNAME_FIELD = 'email'  # Allow users to log in with email
    REQUIRED_FIELDS = ['username']  # If you want the username to remain required
    
    def __str__(self):
        return self.username


class Profile(models.Model):
    user = models.OneToOneField(MathUser, on_delete=models.CASCADE, related_name="profile")
    avatar = models.ImageField(upload_to="avatars/", null=True, blank=True)
    bio = models.TextField(null=True, blank=True)

    def __str__(self):
        return f"Profile of {self.user.username}"
    
class MathOperation(models.Model):
    code = models.IntegerField(default=0)
    name = models.CharField(max_length=255)  # Operation name, e.g., 'Op1', 'Op2', ...
    description = models.TextField()  # Optional, for operation description

    def __str__(self):
        return self.name
    
class UserStates(models.Model):
    user = models.ForeignKey(MathUser, on_delete=models.CASCADE)
    operation = models.ForeignKey(MathOperation, on_delete=models.CASCADE)
    difficulty_level = models.IntegerField()  # Example: 1, 2, 3, etc.
    attempts = models.IntegerField(default=0)  # Number of attempts
    successes = models.IntegerField(default=0)  # Number of successful attempts

    class Meta:
        unique_together = ('user', 'operation', 'difficulty_level')
        verbose_name_plural = 'User Operation Difficulties'

    def __str__(self):
        return f"{self.user.username} - {self.operation.name} - Level {self.difficulty_level}"
