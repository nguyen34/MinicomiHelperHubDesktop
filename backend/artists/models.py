from django.db import models

# Create your models here.


class Artist(models.Model):
    artist_name = models.CharField(max_length=100)
    email = models.EmailField()
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=100)
    address = models.CharField(max_length=100)

    def __str__(self):
        return self.artist_name

    def full_name(self):
        return f"{self.first_name} {self.last_name}"
