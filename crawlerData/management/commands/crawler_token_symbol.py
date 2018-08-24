from django.core.management.base import BaseCommand, CommandError
from crawlerData.models import Base, Market, Symbol
from crawlerData.management.commands.common import getSymbol
import requests

class Command(BaseCommand):
  help = 'Type the help text here'

  def add_arguments(self, parser):
    parser.add_argument('market', nargs='?', type=str)

  def handle(self, *args, **options):
    # Add yout logic here
    # This is the task that will be run
    market = None
    if options['market'] is not None:
      market = options['market']
    if market is None:
      supports = getSymbol();
      for result in supports['result']:
        symbol = Symbol()
        symbol.symbol = result['base']['symbol']
        symbol.name = result['base']['name']
        headers = {
          "Accept": "application/json",
        }
        url = 'https://api.cryptowat.ch/pairs'
        params = {}
        response = requests.get(url=url, params=params, headers=headers)

    self.stdout.write('This was extremely simple!!!')