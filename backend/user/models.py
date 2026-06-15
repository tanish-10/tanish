from django.db import models

class User(models.Model):
    userId = models.CharField(max_length=100, unique=True)
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)
    isAdmin = models.BooleanField(default=False)

    def __str__(self):
        return self.userId