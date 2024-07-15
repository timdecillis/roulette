from django.urls import path
from . import views

urlpatterns = [
    path('button1/', views.Button1View.as_view(), name='endpoint1'),
    path('button2/', views.Button2View.as_view(), name='endpoint2'),
]
