
from __future__ import unicode_literals
from django.db import migrations
from django.contrib.auth.admin import User
import os

def create_superuser(apps, schema_editor):
    superuser = User()
    superuser.is_active = True
    superuser.is_superuser = True
    superuser.is_staff = True
    superuser.username = os.environ.get('SUPERUSER_NAME')
    superuser.email = os.environ.get('SUPERUSER_EMAIL'),
    superuser.set_password(os.environ.get('SUPERUSER_PASSWORD'),)
    superuser.save()

class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.RunPython(create_superuser)
    ]