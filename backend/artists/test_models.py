from django.test import TestCase
from .models import *


class ArtistTestCase(TestCase):
    def setUp(self) -> None:
        Artist.objects.all().delete()

    def test_artist(self):
        Artist.objects.create(artist_name="test", email="test@email.com",
                              first_name="test", last_name="test", phone_number="test", address="test")

        self.assertEqual(Artist.objects.count(), 1)
        self.assertEqual(Artist.objects.get().artist_name, "test")
        self.assertEqual(Artist.objects.get().email, "test@email.com")
        self.assertEqual(Artist.objects.get().first_name, "test")
        self.assertEqual(Artist.objects.get().last_name, "test")
        self.assertEqual(Artist.objects.get().phone_number, "test")
        self.assertEqual(Artist.objects.get().address, "test")
        self.assertEqual(Artist.objects.get().full_name(), "test test")

    def test_artist_full_name(self):
        Artist.objects.create(artist_name="test", email="test@email.com",
                              first_name="test", last_name="test", phone_number="test", address="test")
        self.assertEqual(Artist.objects.get().full_name(), "test test")

    def test_artist_str(self):
        Artist.objects.create(artist_name="test", email="test@email.com",
                              first_name="test", last_name="test", phone_number="test", address="test")
        self.assertEqual(Artist.objects.get().__str__(), "test")
