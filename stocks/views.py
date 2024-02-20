from dataclasses import field
from django.db import models
from django.db.models import F, Q, Sum, ExpressionWrapper, fields
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
    
    stocks = stocks.annotate(
        total_stock=ExpressionWrapper(
            F('stock_S') + F('stock_M') + F('stock_L') + F('stock_XXL') + F('stock'),
            output_field=fields.IntegerField()
        )
    )
    paginator = Paginator(stocks, 10)
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
        stock_S = request.POST.get('stock_S')
        stock_M = request.POST.get('stock_M')
        stock_L = request.POST.get('stock_L')
        stock_XXL = request.POST.get('stock_XXL')
        stock = request.POST.get('stock')
        product_price = request.POST.get('product_price')
        product_image = request.FILES.get('product_image')

        if not product_name:
            messages.error(request, 'Nama Tidak Boleh Kosong!')
            return render(request, 'stocks/index.html')

        if not code:
            messages.error(request, 'Kategori Harus Dipilih!')
            return render(request, 'stocks/index.html')
        
        if not product_price:
            product_price = 1000

        if not stock_S:
            stock_S = 0
        if not stock_M:
            stock_M = 0
        if not stock_L:
            stock_L = 0
        if not stock_XXL:
            stock_XXL = 0
        if not stock:
            stock = 0   

        Stock.objects.create(
            owner=request.user, 
            code=code, 
            product_name=product_name, 
            product_price=product_price, 
            description=description,
            stock_S=stock_S, 
            stock_M=stock_M, 
            stock_L=stock_L, 
            stock_XXL=stock_XXL,
            stock=stock, 
            product_stack=stacker,
            product_image=product_image,
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

        stocks = Stock.objects.annotate(
            search=SearchVector(selector),
            total_stock=ExpressionWrapper(
                    F('stock_S') + F('stock_M') + F('stock_L') + F('stock_XXL') + F('stock'),
                    output_field=fields.IntegerField()
                )
            ).filter(Q(product_name__icontains=searcher) | Q(code__icontains=searcher))
        
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
        stock_S = request.POST.get('stock_S')
        stock_M = request.POST.get('stock_M')
        stock_L = request.POST.get('stock_L')
        stock_XXL = request.POST.get('stock_XXL')
        stock = request.POST.get('stock')
        product_price = request.POST.get('product_price')

        if not product_name:
            messages.error(request, 'Nama Tidak Boleh Kosong!')
            return render(request, 'stocks/index.html')
        
        if not product_price:
            product_price = 1000

        if not stock_S:
            stock_S = 0
        if not stock_M:
            stock_M = 0
        if not stock_L:
            stock_L = 0
        if not stock_XXL:
            stock_XXL = 0
        if not stock:
            stock = 0   
        
        stocks.owner = request.user
        stocks.product_name = product_name
        stocks.description = description
        stocks.stock_S = stock_S
        stocks.stock_M = stock_M
        stocks.stock_L = stock_L
        stocks.stock_XXL = stock_XXL
        stocks.stock = stock
        stocks.product_price = product_price
        stocks.dateupdated = timezone.now()

        stocks.save(update_fields=['owner', 'product_name', 'product_price', 'description', 'stock_S', 'stock_M', 'stock_L', 'stock_XXL', 'stock', 'dateupdated'])
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