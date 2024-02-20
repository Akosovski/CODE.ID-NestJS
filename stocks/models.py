from django.db import models
from django.contrib.auth.admin import User
from django.utils.timezone import now

# Create your models here.
class Stock(models.Model):
    code = models.CharField(max_length=255)
    product_name = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    dateadded = models.DateTimeField(auto_now=True)
    dateupdated = models.DateTimeField(auto_now=True)
    owner = models.ForeignKey(to=User, on_delete=models.CASCADE)
    stock_S = models.IntegerField(null=True, blank=True, default=0)
    stock_M = models.IntegerField(null=True, blank=True, default=0)
    stock_L = models.IntegerField(null=True, blank=True, default=0)
    stock_XXL = models.IntegerField(null=True, blank=True, default=0)
    stock = models.IntegerField(null=True, blank=True, default=0)
    product_image = models.ImageField(null=True, blank=True, upload_to="images/")
    product_price = models.DecimalField(max_digits=12, decimal_places=2, default=1000)

    def __str__(self):
        return self.product_name