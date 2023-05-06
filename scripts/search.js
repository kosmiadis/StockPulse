const searchStocksInput = document.querySelector('#search-stock-input')
const searchResults = document.querySelector('.search-results')


function displaySearchedStocks(stocks) {
    searchResults.innerHTML = ''

    for (const stock of stocks) {
        searchResults.insertAdjacentHTML('afterbegin',
            `
                <div class='stock-prev'>
                    <div className="name">
                        <p>${stock.name}</p>
                    </div>

                    <div className="last-price">
                        <p>${stock.last_price}</p>
                    </div>                    
                </div>
            `
        )
    }
    
    
}

searchStocksInput.addEventListener('input', e => {
    if (e.target.value !== '') {
        const resultsList = INDICES.filter(itMatches)
        displaySearchedStocks(resultsList)
        console.log(resultsList)
    }
    else {
        searchResults.innerHTML = ''
    }
    
    
})

function itMatches (value) {
    let currInput = searchStocksInput.value.toUpperCase()
    return value.name.toUpperCase().includes(currInput)
}