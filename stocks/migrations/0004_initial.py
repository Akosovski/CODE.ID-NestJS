# Generated by Django 4.1 on 2023-11-17 03:17

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Stock',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(max_length=255)),
                ('product_name', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('product_price', models.DecimalField(max_digits=12, decimal_places=2)),
                ('dateadded', models.DateTimeField(auto_now=False)),
                ('dateupdated', models.DateTimeField(auto_now=False)),
                ('stock', models.IntegerField(default=1)),
                ('product_image', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('product_stack', models.IntegerField(default=1),
        ),
            ],
        ),
    ]