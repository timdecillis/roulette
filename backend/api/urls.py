from django.urls import path
from . import views

urlpatterns = [
    path('number/', views.NumberView.as_view(), name='endpoint1'),
    path('color/', views.ColorView.as_view(), name='endpoint2'),
]
