from django.test import TestCase
from django.contrib.auth.models import User

class CustomUserTestCase(TestCase):
    def setUp(self):
        User.objects.create(username="testuser", password="password")

    def test_user_str(self):
        user = User.objects.get(username="testuser")
        self.assertEqual(str(user), user.username)
