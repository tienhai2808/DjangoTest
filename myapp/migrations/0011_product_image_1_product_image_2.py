# Generated by Django 5.1 on 2024-09-02 08:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0010_collection_remove_product_images_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='image_1',
            field=models.URLField(blank=True, max_length=500, null=True),
        ),
        migrations.AddField(
            model_name='product',
            name='image_2',
            field=models.URLField(blank=True, max_length=500, null=True),
        ),
    ]