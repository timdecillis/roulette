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
    def post(self, request):
        colors = ['blue', 'red', 'yellow', 'green', 'purple', 'orange']
        currentColor = request.data["currentColor"]
        nextColor = random.choice(colors)
        print('current:', currentColor, 'next:', nextColor)
        while(nextColor == currentColor):
            print('trying again!')
            nextColor = random.choice(colors)
        return Response(nextColor, status=status.HTTP_200_OK)
