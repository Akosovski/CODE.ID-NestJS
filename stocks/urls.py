from . import views
from django.urls import path, include
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('', views.index, name="stocks"),
    path('authentication/', include('authentication.urls')),
    path('add-product', views.add_product, name="add-product"),
]