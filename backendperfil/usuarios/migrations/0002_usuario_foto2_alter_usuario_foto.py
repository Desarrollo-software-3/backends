# Generated by Django 4.1.5 on 2023-10-28 22:25

from django.db import migrations, models
import usuarios.models


class Migration(migrations.Migration):

    dependencies = [
        ('usuarios', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='usuario',
            name='foto2',
            field=models.CharField(default='default_value_for_foto2', max_length=50),
        ),
        migrations.AlterField(
            model_name='usuario',
            name='foto',
            field=models.ImageField(blank=True, default='fotos_usuarios/default.png', null=True, upload_to=usuarios.models.custom_file_name),
        ),
    ]