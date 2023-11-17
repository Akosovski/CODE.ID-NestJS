from dataclasses import field
from django.db import models
from .models import Stock
from django.contrib.auth.decorators import login_required
from django.contrib.postgres.search import SearchVector
from multiprocessing import context
from django.shortcuts import render, redirect
from django.contrib.auth.admin import User
from django.contrib import messages
from django.core.paginator import Paginator
from django.template.loader import render_to_string

@login_required(login_url = '/authentication/login')
def index(request):
    return render(request, 'stocks/index.html')

@login_required(login_url = '/authentication/login')
def add_product(request):
    if request.method == 'POST':
        code = request.POST.get('code')
        product_name = request.POST.get('product_name')
        description = request.POST.get('description')
        stock = request.POST.get('stock')
        product_image = request.POST.get('product_image')

        if not product_name:
            messages.error(request, 'Nama Tidak Boleh Kosong!')
            return render(request, 'stocks/index.html')
        
        if not description:
            messages.error(request, 'Deskripsi Tidak Boleh Kosong!')
            return render(request, 'stocks/index.html')
        
        if not stock:
            messages.error(request, 'Stock Tidak Boleh Kosong!')
            return render(request, 'stocks/index.html')
        
        Stock.objects.create(owner=request.user, code=code, product_name=product_name, description=description, stock=stock, product_image=product_image)
        messages.success(request, 'Pengadaan Produk Sukses!')
        
        return redirect('stocks')