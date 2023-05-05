const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd484baf498mshe3064663fb18d66p1ba42cjsnd882a67f72e8',
		'X-RapidAPI-Host': 'schwab.p.rapidapi.com'
	}
};

const Stocks = () => {

    const fetchStock = (stockName) => {
        fetch(`https://schwab.p.rapidapi.com/quote/get-details?symbol=${stockName}`, options)
        .then(res => res.json())
        .then(stockData => console.log(stockData))
    }

    const fetchAllStocks = () => {
        
    }



    return {fetchStock, fetchAllStocks}
}

const stock = Stocks()
stock.fetchStock('TSLA')




