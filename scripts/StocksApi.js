const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd484baf498mshe3064663fb18d66p1ba42cjsnd882a67f72e8',
		'X-RapidAPI-Host': 'schwab.p.rapidapi.com'
	}
};

let INDICES = []
/*let INDICES = [
    {name: 'S&P 500', last_price: '4,061.22', symbol: '$SPX', region: 'Americas'}, 
    {name: 'DJIA', last_price: '33,127.74', symbol: '$DJI', region: 'Americas'}, 
    {name: 'NYSE', last_price: '15,117.67', symbol: '$NYA', region: 'Americas'}, 
    {name: 'NASDAQ', last_price: '11,966.40', symbol: '$COMPX', region: 'Americas'}, 
    {name: 'NYSE MKT', last_price: '3,914.13', symbol: '$XAX', region: 'Americas'}, 
    {name: 'Russell 2000', last_price: '1,718.81', symbol: '$RUT', region: 'Americas'}, 
    {name: 'Dow Jones Total Stock Market', last_price: '40,425.87', symbol: '$DWCF', region: 'Americas'}, 
    {name: 'S&P 400 Mid Cap', last_price: '2,410.22', symbol: '$MID', region: 'Americas'}, 
    {name: 'S&P 600 Small Cap', last_price: '1,112.45', symbol: '$SML', region: 'Americas'}, 
    {name: 'Nasdaq 100', last_price: '12,982.48', symbol: '$NDX', region: 'Americas'}, 
    {name: 'NYSE Financials', last_price: '8,321.68', symbol: '$NYK', region: 'Americas'}, 
    {name: 'CBOE Market Volatility', last_price: '18.36', symbol: '$VIX', region: 'Americas'}, 
    {name: 'Dow Jones Utilities', last_price: '955.82', symbol: '$DJU', region: 'Americas'}, 
    {name: 'Dow Jones Transportation', last_price: '13,828.59', symbol: '$DJT', region: 'Americas'}, 
    {name: '10 Year Treasury Note', last_price: '34.52', symbol: '$TNX', region: 'Americas'}, 
    {name: '30 Year Treasury Bond', last_price: '37.87', symbol: '$TYX', region: 'Americas'}, 
    {name: 'Dow Jones Canada', last_price: '576.24', symbol: '$CADOWD', region: 'Americas'},
    {name: 'S&P Latin America', last_price: '217.09', symbol: '$SCRTLA', region: 'Americas'},
    {name: 'Schwab 1000 Index', last_price: '13,343.94', symbol: '$SNX', region: 'Americas'}
]*/

const Stocks = () => {

    const fetchStock = (stockName) => {
        fetch(`https://schwab.p.rapidapi.com/quote/get-details?symbol=${stockName}`, options)
        .then(res => res.json())
        .then(stockData => console.log(stockData))
    }

    const fetchAllStocks = () => {
        fetch('https://schwab.p.rapidapi.com/market/get-indices', options)
        .then(res => res.json())
        .then(data => {
            
            setIndices(data.QuotesAmericas)
        } )
    }

    const setIndices = (data) => {
        for (const quote of data) {
            INDICES.push({name: quote.Name, last_price: quote.LastPrice, symbol: quote.Symbol, region: quote.Region })
        }
    }

    return {fetchStock, fetchAllStocks}
}

window.addEventListener('load', e => {
    const stocks = Stocks()
    stocks.fetchAllStocks()
})








