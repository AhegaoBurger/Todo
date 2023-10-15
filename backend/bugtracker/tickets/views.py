from rest_framework import viewsets
from django.contrib.auth.models import User
from .models import Bug
from .serializers import BugSerializer, UserSerializer
from django.http import JsonResponse
from google.oauth2 import id_token
from google.auth.transport import requests
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt  # To exempt this view from CSRF protection, since it's an API endpoint
def google_login(request):
    if request.method == "POST":
        try:
            body_unicode = request.body.decode('utf-8')
            body = json.loads(body_unicode)
            token = body['token']
            idinfo = id_token.verify_oauth2_token(token, requests.Request(), '1060612665560-bavf4bnjtsrdu1ep6if4kssggv9ko56a.apps.googleusercontent.com')

            if idinfo['iss'] not in ['accounts.google.com', 'https://accounts.google.com']:
                raise ValueError('Wrong issuer.')

            email = idinfo['email']

            # Check if the user exists, otherwise create one
            user, created = User.objects.get_or_create(username=email, defaults={'email': email})

            if created:
                # Log the user in, possibly by setting some session variables
                return JsonResponse({"success": True, "message": "User created."})

            else:
                # User already exists, so log them in
                return JsonResponse({"success": True, "message": "User logged in."})

        except Exception as e:
            return JsonResponse({"success": False, "error": str(e)})
    else:
        return JsonResponse({"success": False, "error": "Only POST method allowed."})

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class BugViewSet(viewsets.ModelViewSet):
    queryset = Bug.objects.all()
    serializer_class = BugSerializer


# class ProjectViewSet(viewsets.ModelViewSet):
#     queryset = Project.objects.all()
#     serializer_class = ProjectSerializer

# class CommentViewSet(viewsets.ModelViewSet):
#     queryset = Comment.objects.all()
#     serializer_class = CommentSerializer

# class StatusUpdateViewSet(viewsets.ModelViewSet):
#     queryset = StatusUpdate.objects.all()
#     serializer_class = StatusUpdateSerializer
