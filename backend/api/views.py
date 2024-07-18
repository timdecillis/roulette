import random

from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class NumberView(APIView):
    def get(self, request):
        try:
            number = random.randint(0, 100)
            return Response(number, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class ColorView(APIView):
    def post(self, request):
        try:
            colors = ['blue', 'red', 'yellow', 'green', 'purple', 'orange']
            currentColor = request.data["currentColor"]
            nextColor = random.choice(colors)
            while(nextColor == currentColor):
                nextColor = random.choice(colors)
            return Response(nextColor, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)
