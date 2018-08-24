from django.db import models


# Create your models here.
class Base(models.Model):
  id_base = models.AutoField(primary_key=True)
  name = models.CharField(max_length=45, blank=True, null=True, unique=True)


class Market(models.Model):
  id_market = models.AutoField(primary_key=True)
  name = models.CharField(max_length=45, blank=True, null=True, unique=True)

class Symbol(models.Model):
  id_symbol = models.AutoField(primary_key=True)
  symbol = models.CharField(max_length=45, blank=True, null=True, unique=True)
  name = models.CharField(max_length=45, blank=True, null=True)
  active = models.BooleanField(default=True)

class Symbol_Base(models.Model):
  id_symbol_base = models.AutoField(primary_key=True)
  symbol_id_symbol = models.ForeignKey(Symbol, models.DO_NOTHING, db_column='symbol_id_symbol')
  market_id_market = models.ForeignKey(Market, models.DO_NOTHING, db_column='market_id_market')

class Candles(models.Model):
  id_candles = models.BigIntegerField(primary_key=True)
  open = models.DecimalField(max_digits=36, decimal_places=18, blank=True, null=True)
  high = models.DecimalField(max_digits=36, decimal_places=18, blank=True, null=True)
  low = models.DecimalField(max_digits=36, decimal_places=18, blank=True, null=True)
  close = models.DecimalField(max_digits=36, decimal_places=18, blank=True, null=True)
  volume = models.DecimalField(max_digits=36, decimal_places=18, blank=True, null=True)
  timestamp = models.BigIntegerField(blank=True, null=True)
  base_id_base = models.ForeignKey(Base, models.DO_NOTHING, db_column='base_id_base')
  symbol_id_symbol = models.ForeignKey(Symbol, models.DO_NOTHING, db_column='symbol_id_symbol')
  market_id_market = models.ForeignKey(Market, models.DO_NOTHING, db_column='market_id_market')
