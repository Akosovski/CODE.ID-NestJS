from dataclasses import field
from django.db import models
from django.db.models import Sum
from django.db.models import Q
from django.utils import timezone
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
    items = Stock.objects.all()
    base_stock = sum(items.values_list('product_stack', flat=True))
    stacker = 0

    if base_stock == 0:
        stacker += 1
    else:
        stacker = base_stock

    if request.method == 'POST':

        product_name = request.POST.get('product_name')
        description = request.POST.get('description')
        code = request.POST.get('category') + str(stacker)
        stock = request.POST.get('stock')
        product_price = request.POST.get('product_price')
        # product_image = request.FILES.get('product_image')

        if not product_name:
            messages.error(request, 'Nama Tidak Boleh Kosong!')
            return render(request, 'stocks/index.html')
        
        if not description:
            messages.error(request, 'Deskripsi Tidak Boleh Kosong!')
            return render(request, 'stocks/index.html')
        
        if not product_price:
            messages.error(request, 'Harga Tidak Boleh Kosong!')
            return render(request, 'stocks/index.html')
                
        if not stock:
            messages.error(request, 'Stock Tidak Boleh Kosong!')
            return render(request, 'stocks/index.html')

        if not code:
            messages.error(request, 'Kategori Harus Dipilih!')
            return render(request, 'stocks/index.html')

        Stock.objects.create(
            owner=request.user, 
            code=code, 
            product_name=product_name, 
            product_price=product_price, 
            description=description,
            stock=stock, 
            product_stack=stacker,
            dateadded=timezone.now(),
            dateupdated=timezone.now()
        )
        messages.success(request, 'Pengadaan Produk Sukses!')
        
    return render(request, 'stocks/add_stock.html')

@login_required(login_url = '/authentication/login')
def detail_stock(request, id):
    stock = Stock.objects.get(pk=id)
    context = {
        'stock': stock
    }
    return render(request, 'stocks/detail_stock.html', context)

@login_required(login_url = '/authentication/login')
def search_stock(request):
    if request.method == 'GET':
        searcher = ""
        context = {
            'searcher': searcher,
        }
        return render(request, 'stocks/search_stock.html', context)

    if request.method == 'POST':
        searcher = request.POST.get('search')
        selector = request.POST.get('selector')
        stocks = Stock.objects.annotate(search=SearchVector(selector)).filter(Q(product_name__icontains=searcher) | Q(code__icontains=searcher))
        paginator = Paginator(stocks, 15)
        page_number = request.GET.get('page')
        page_obj = Paginator.get_page(paginator, page_number)
    
        context = {
            'stocks': stocks,
            'searcher': searcher,
            'page_obj': page_obj,
        }
        return render(request, 'stocks/search_stock.html', context)
    
@login_required(login_url = '/authentication/login')
def edit_stock(request, id):
    stocks = Stock.objects.get(pk=id)
    context = {
        'stocks': stocks,
        'values': stocks,
    }
    if request.method == 'GET':
        return render(request, 'stocks/edit_stock.html', context)

    if request.method == 'POST':
        product_name = request.POST.get('product_name')
        description = request.POST.get('description')
        code = request.POST.get('code')
        stock = request.POST.get('stock')
        product_price = request.POST.get('product_price')
        # product_image = request.POST.get('product_image')

        if not product_name:
            messages.error(request, 'Nama Tidak Boleh Kosong!')
            return render(request, 'stocks/edit_stock.html', context)
        
        if not description:
            messages.error(request, 'Deskripsi Tidak Boleh Kosong!')
            return render(request, 'stocks/index.html', context)
        
        if not product_price:
            messages.error(request, 'Harga Tidak Boleh Kosong!')
            return render(request, 'stocks/index.html', context)
                
        if not stock:
            messages.error(request, 'Stock Tidak Boleh Kosong!')
            return render(request, 'stocks/edit_stock.html', context)
        
        stocks.owner = request.user
        stocks.product_name = product_name
        stocks.stock = stock
        stocks.product_price = product_price
        stocks.code = code
        stocks.dateupdated = timezone.now()
        # stocks.product_image = product_image

        stocks.save(update_fields=['owner', 'product_name', 'product_price', 'description', 'stock', 'dateupdated'])
        messages.success(request, 'Perubahan Produk Sukses!')
        return redirect('stocks')

    return render(request, 'stocks/edit_stock.html')

def delete_stock(request, id):
    stock = Stock.objects.get(pk=id)
    if stock.product_image:
        stock.product_image.delete()
    stock.delete()

    messages.success(request, 'Produk Telah Dihapus!')
    return redirect('stocks')