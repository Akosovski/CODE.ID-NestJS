from dataclasses import field
from django.db import models
from django.db.models import Sum
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

    stocks = Stock.objects.all()
    paginator = Paginator(stocks, 15)
    page_number = request.GET.get('page')
    page_obj = Paginator.get_page(paginator, page_number)

    context = {  
        'stocks': stocks,
        'page_obj': page_obj,
    }

    return render(request, 'stocks/index.html', context)

@login_required(login_url = '/authentication/login')
def add_stock(request):
    if request.method == 'POST':
        product_name = request.POST.get('product_name')
        code = request.POST.get('category')
        stock = request.POST.get('stock')
        product_image = request.POST.get('product_image')

        if not product_name:
            messages.error(request, 'Nama Tidak Boleh Kosong!')
            return render(request, 'stocks/index.html')
                
        if not stock:
            messages.error(request, 'Stock Tidak Boleh Kosong!')
            return render(request, 'stocks/index.html')

        if not code:
            messages.error(request, 'Kategori harus dipilih!')
            return render(request, 'stocks/index.html')

        Stock.objects.create(owner=request.user, code=code, product_name=product_name, stock=stock, product_image=product_image)
        messages.success(request, 'Pengadaan Produk Sukses!')
        
        return render(request, 'stocks/add_stock.html', context)
    
def close_modal(request):
     return render(request, 'stocks/add_stock.html')
 