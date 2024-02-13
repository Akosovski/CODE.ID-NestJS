
from __future__ import unicode_literals
from django.db import migrations
from django.contrib.auth.admin import User
import os

def create_superuser1(apps, schema_editor):
    superuser = User()
    superuser.is_active = True
    superuser.is_superuser = True
    superuser.is_staff = True
    superuser.username = os.environ.get('SUPERUSER_NAME1')
    superuser.email = os.environ.get('SUPERUSER_EMAIL1'),
    superuser.set_password(os.environ.get('SUPERUSER_PASSWORD1'),)
    superuser.save()

def create_superuser2(apps, schema_editor):
    superuser = User()
    superuser.is_active = True
    superuser.is_superuser = True
    superuser.is_staff = True
    superuser.username = os.environ.get('SUPERUSER_NAME2')
    superuser.email = os.environ.get('SUPERUSER_EMAIL2'),
    superuser.set_password(os.environ.get('SUPERUSER_PASSWORD2'),)
    superuser.save()

class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.RunPython(create_superuser1),
        migrations.RunPython(create_superuser2)
    ]