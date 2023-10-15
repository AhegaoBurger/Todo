from django.contrib import admin
from django.urls import path, include
from rest_framework_social_oauth2 import views as auth_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('tickets.urls')),
    path('auth/login/google/', auth_views.ConvertTokenView.as_view(), name='google_login'),
]