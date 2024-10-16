from django.shortcuts import render
from rest_framework import viewsets,permissions
from .models import UserData
from .serializer import userDataSerializer
# from django.http import HttpResponse
from rest_framework.response import Response
# Create your views here.


# def home(req):
#     return HttpResponse("the home page")

class userDataViewSet(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = UserData.objects.all()
    serializer_class = userDataSerializer

    # def list(self,req):
    #     queryset = self.queryset
    #     serializer = self.serializer_class(queryset,many=True)
    #     return Response(serializer.data) 
    
    # def create(self,req):
    #     serializer = self.serializer_class(data=req.data)
    #     if serializer.is_valid():
    #         serializer.save() 
    #         return Response(serializer.data)
    #     else:
    #         return Response(serializer.errors,status=400)

    def list(self,req):
        serializer = self.serializer_class(self.queryset,many=True)
        return Response(serializer.data)
    
    def create(self,req):
        serializer = self.serializer_class(data=req.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors,status=400)
        
    def retrieve(self,req,pk=None):
        userdata = self.queryset.get(pk=pk)
        serializer = self.serializer_class(userdata)
        return Response(serializer.data)
    
    def update(self,req,pk=None):
        user = self.queryset.get(pk=pk)
        serializer = self.serializer_class(user,data=req.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            Response(serializer.errors,status=400)
        
    def delete(self,req,pk=None):
        user = self.queryset.get(pk=pk)
        user.delete()
        return Response(status=204)
