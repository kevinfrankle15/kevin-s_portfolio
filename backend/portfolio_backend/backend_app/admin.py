from django.contrib import admin
from .models import *
# Register your models here.

admin.site.register(UserData)  # To view admin portal we have to create user 
# python manage.py createsuperuser 