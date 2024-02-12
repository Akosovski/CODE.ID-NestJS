from . import views
from django.urls import path, include
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('', views.index, name="stocks"),
    path('authentication/', include('authentication.urls')),
    path('add-stock', views.add_stock, name="add-stock"),
    path('detail-stock/<int:id>', views.detail_stock, name="detail-stock"),
    path('edit-stock/<int:id>', views.edit_stock, name="edit-stock"),
    path('delete-stock/<int:id>', views.delete_stock, name="delete-stock"),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
#  + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)