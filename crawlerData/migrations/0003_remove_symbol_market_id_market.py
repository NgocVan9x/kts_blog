# Generated by Django 2.0.7 on 2018-07-30 08:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('crawlerData', '0002_symbol_base'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='symbol',
            name='market_id_market',
        ),
    ]
