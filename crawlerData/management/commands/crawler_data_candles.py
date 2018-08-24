from django.core.management.base import BaseCommand, CommandError
import sys
class Command(BaseCommand):
    help = 'Type the help text here'

    def add_arguments(self, parser):
        parser.add_argument('market',  nargs='?', type=str)
        parser.add_argument('interval',  nargs='?', type=str)
        parser.add_argument('symbol', type=str, nargs='?')

    def handle(self, *args, **options):
        # Add yout logic here
        # This is the task that will be run
        market = interval = symbol = ''
        if options['market'] is not None:
            market = options['market']
        if options['interval'] is not None:
            interval = options['interval']
        if options['symbol'] is not None:
            symbol = options['symbol']
        print(market)
        self.stdout.write('This was extremely simple!!!' +market+interval+symbol)