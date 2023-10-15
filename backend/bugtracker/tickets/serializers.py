from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Bug

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class BugSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bug
        fields = '__all__'

# class ProjectSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Project
#         fields = '__all__'

# class CommentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Comment
#         fields = '__all__'

# class StatusUpdateSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = StatusUpdate
#         fields = '__all__'