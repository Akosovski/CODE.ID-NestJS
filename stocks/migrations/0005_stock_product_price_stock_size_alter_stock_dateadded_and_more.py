# Generated by Django 4.1 on 2024-02-13 07:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stocks', '0004_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='stock',
            name='product_price',
            field=models.DecimalField(decimal_places=2, default=1000, max_digits=12),
        ),
        migrations.AddField(
            model_name='stock',
            name='size',
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='stock',
            name='dateadded',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='stock',
            name='dateupdated',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
