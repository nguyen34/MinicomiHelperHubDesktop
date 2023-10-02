from django.test import TestCase, Client
from .views import *
from .models import *
from django.urls import reverse
import json


class ArtistViewsTestCase(TestCase):
    def setUp(self) -> None:
        self.client = Client()
        Artist.objects.all().delete()

    def test_test_endpoint(self):
        response = self.client.get(reverse("test_endpoint"))
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["message"], "Hello World!")
