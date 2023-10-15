from django.contrib import admin
from django.urls import path, include
from tickets.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('tickets.urls')),
]