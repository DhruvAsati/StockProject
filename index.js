const apiKey = "o0XMa5QHRl8CRS9Ik5OWUzV3KK6yVTv9";
const baseUrl = "https://www.alphavantage.co/query";

async function fetchStockData(symbol) {
    const response = await fetch(`${baseUrl}?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`);
    const data = await response.json();
    return data['Time Series (Daily)'];
}

function renderStockChart(stockData) {
    const labels = Object.keys(stockData).reverse();
    const prices = labels.map(date => stockData[date]['4. close']);

    const ctx = document.getElementById('stock-chart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Stock Price',
                data: prices,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false
            }]
        }
    });
}

function displayStockDetails(stockData, symbol) {
    const latestDate = Object.keys(stockData)[0];
    const latestData = stockData[latestDate];

    const stockDetails = `
        <p><strong>Symbol:</strong> ${symbol}</p>
        <p><strong>Price:</strong> ${latestData['4. close']}</p>
        <p><strong>Volume:</strong> ${latestData['5. volume']}</p>
    `;
    document.getElementById('stock-details').innerHTML = stockDetails;
    updateComparisonTable(symbol, latestData);
}

function updateComparisonTable(symbol, latestData) {
    const tableBody = document.getElementById('comparison-table').querySelector('tbody');

    const existingRow = Array.from(tableBody.rows).find(row => row.cells[0].textContent === symbol);
    if (existingRow) {
        existingRow.cells[1].textContent = latestData['4. close'];
        existingRow.cells[2].textContent = calculateChange(latestData['4. close'], latestData['1. open']);
        existingRow.cells[3].textContent = latestData['5. volume'];
    } else {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${symbol}</td>
            <td>${latestData['4. close']}</td>
            <td>${calculateChange(latestData['4. close'], latestData['1. open'])}</td>
            <td>${latestData['5. volume']}</td>
        `;
    }
}

function calculateChange(closePrice, openPrice) {
    const change = closePrice - openPrice;
    return change.toFixed(2);
}

document.getElementById('search-btn').addEventListener('click', async () => {
    const symbol = document.getElementById('stock-symbol').value.toUpperCase();
    if (symbol) {
        const stockData = await fetchStockData(symbol);
        displayStockDetails(stockData, symbol);
        renderStockChart(stockData);
    }
});

async function fetchTrendingStocks() {
    const trendingStocks = ['AAPL', 'MSFT', 'GOOGL', 'TSLA', 'AMZN', 'NFLX', 'FB', 'NVDA', 'BABA', 'INTC'];
    const dropdown = document.getElementById('trending-dropdown');
    trendingStocks.forEach(stock => {
        const option = document.createElement('option');
        option.value = stock;
        option.text = stock;
        dropdown.add(option);
    });
}

document.getElementById('trending-dropdown').addEventListener('change', async (event) => {
    const symbol = event.target.value;
    if (symbol) {
        const stockData = await fetchStockData(symbol);
        displayStockDetails(stockData, symbol);
        renderStockChart(stockData);
    }
});

fetchTrendingStocks();
