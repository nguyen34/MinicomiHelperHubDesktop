from django.urls import path
import artists.views as views

urlpatterns = [
    path("artists/test/", views.test_endpoint, name="test_endpoint"),
]
