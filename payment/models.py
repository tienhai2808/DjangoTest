from django.db import models
from django.contrib.auth.models import User
from myapp.models import Product, ProductVariant
from django.db.models.signals import post_save, pre_save
from django.dispatch import receiver
import datetime
# Create your models here.

class ShippingAddress(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
  shipping_full_name = models.CharField(max_length=255)
  shipping_phone = models.CharField(max_length=255)
  shipping_address = models.CharField(max_length=255)
  shipping_city = models.CharField(max_length=50)
  shipping_state = models.CharField(max_length=50)
  
  class Meta:
    verbose_name_plural = "Shipping Address"
  
  def __str__(self):
    return f'Shipping Address - {str(self.id)}'
  
def create_shipping_address(sender, instance, created, **kwargs):
  if created:
    user_shipping_address = ShippingAddress(user = instance)
    user_shipping_address.save()
post_save.connect(create_shipping_address, sender=User)
    
  

class Order(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
  full_name = models.CharField(max_length=250)
  phone = models.EmailField(max_length=250)
  shipping_address = models.TextField(max_length=15000)
  amount_paid= models.DecimalField(max_digits=10, decimal_places=0)
  payment_method = models.CharField(max_length=250)
  card_number = models.CharField(max_length=30, blank=True, null=True)
  bank = models.CharField(max_length=50, blank=True, null=True)
  date_ordered = models.DateTimeField(blank=True, null=True)
  shipped = models.BooleanField(default=False)
  date_shipped = models.DateTimeField(blank=True, null=True)
  
  def __str__(self):
    return f'Order - {str(self.id)}'

@receiver(pre_save, sender=Order)
def set_shipped_date_on_update(sender, instance, **kwargs):
  if instance.pk:
    now = datetime.datetime.now()
    obj = sender._default_manager.get(pk = instance.pk)
    if instance.shipped and not obj.shipped:
      instance.date_shipped = now


class OrderItem(models.Model):
  order = models.ForeignKey(Order, on_delete=models.CASCADE, null=True)
  product_variant = models.ForeignKey(ProductVariant, on_delete=models.CASCADE, null=True)
  user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
  quantity = models.PositiveBigIntegerField(default=1)
  price = models.DecimalField(max_digits=10, decimal_places=0)
  
  def __str__(self):
    return f'Order Item - {str(self.id)}'
  
