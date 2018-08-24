import requests

def getPriceDataBinance():
    headers = {
        "Accept": "application/json",
    }
    url = 'https://api.binance.com/api/v3/ticker/price'
    params = {}
    response = requests.get(url=url, params=params, headers=headers)
    return response.json()

def getSymbol():
    headers = {
        "Accept": "application/json",
    }
    url = 'https://api.cryptowat.ch/pairs'
    params = {}
    response = requests.get(url=url, params=params, headers=headers)
    return response.json()
