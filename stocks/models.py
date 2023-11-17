from django.db import models
from django.contrib.auth.admin import User
from django.utils.timezone import now

# Create your models here.
class Stock(models.Model):
    code = models.CharField(max_length=255)
    product_name = models.CharField(max_length=255)
    description = models.TextField()
    dateadded = models.DateTimeField(auto_now=True)
    dateupdated = models.DateTimeField(auto_now=True)
    owner = models.ForeignKey(to=User, on_delete=models.CASCADE)
    stock = models.IntegerField(default=1)
    product_image = models.ImageField(null=True, blank=True, upload_to="images/")
    product_stack = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return self.product_name