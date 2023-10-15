from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'projects', views.ProjectViewSet)
router.register(r'bugs', views.BugViewSet)
router.register(r'comments', views.CommentViewSet)
router.register(r'statusupdates', views.StatusUpdateViewSet)

urlpatterns = [
    path('', include(router.urls)),
]