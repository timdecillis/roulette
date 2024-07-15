from django.urls import path
from . import views

urlpatterns = [
    path('api/endpoint1/', views.Endpoint1View.as_view(), name='endpoint1'),
    path('api/endpoint2/', views.Endpoint2View.as_view(), name='endpoint2'),
]
