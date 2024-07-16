from django.shortcuts import render
import random

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class Button1View(APIView):
    def get(self, request):
        # x = round(5.76543)
        number = random.randint(0, 100)
        data = {"message": number}

        return Response(data, status=status.HTTP_200_OK)

class Button2View(APIView):
    def get(self, request):
        data = {"message": "Hello from button 2"}
        return Response(data, status=status.HTTP_200_OK)
