from django.db import models
from django.contrib.auth.admin import User
from django.utils.timezone import now

# Create your models here.
class Stock(models.Model):
    code = models.IntegerField()
    product_name = models.CharField(max_length=255)
    description = models.TextField()
    dateadded = models.DateField(default=now)
    dateupdated = models.DateField(default=now)
    owner = models.ForeignKey(to=User, on_delete=models.CASCADE)
    stock = models.IntegerField(default=1)
    product_image = models.ImageField(null=True, blank=True, upload_to="images/")

    def __str__(self):
        return self.product_name