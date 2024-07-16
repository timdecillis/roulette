from django.shortcuts import render
import random

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class Button1View(APIView):
    def get(self, request):
        number = random.randint(0, 100)
        return Response(number, status=status.HTTP_200_OK)

class Button2View(APIView):
    def get(self, request):
        colors = ['blue', 'red', 'yellow', 'green', 'purple', 'orange']
        data = random.choice(colors)
        return Response(data, status=status.HTTP_200_OK)
