from django.db import models

# Create your models here.

class UserData(models.Model):
    name=models.CharField(max_length=60)
    email=models.EmailField()
    message=models.CharField(max_length=355)
    created=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
      
