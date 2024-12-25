# Stock Tracker Dashboard

The **Stock Tracker Dashboard** is a responsive web application that allows users to track stock prices, view trending stocks, and compare multiple stocks through a dynamic table and interactive charts. It uses the Alpha Vantage API to fetch real-time stock data and visualizes it with the Chart.js library.

---

## Features

- **Search Stocks:** Users can search for specific stocks by their symbols (e.g., AAPL, TSLA).
- **Trending Stocks Dropdown:** Quickly access data for popular stocks from a predefined list.
- **Stock Data Visualization:** View stock price trends using interactive line charts.
- **Stock Comparison Table:** Compare stock symbols, prices, changes, and volumes.
- **Responsive Design:** The dashboard is fully responsive, ensuring compatibility across devices.

---

## Technologies Used

- **HTML**: Structure of the web page.
- **CSS**: Styling and responsive design.
- **JavaScript**: Functionality and API integration.
- **Chart.js**: Data visualization for stock prices.
- **Alpha Vantage API**: Fetching stock market data.

---

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/stock-tracker-dashboard.git
   ```
2. Navigate to the project directory:
   ```bash
   cd stock-tracker-dashboard
   ```
3. Open the `index.html` file in your browser to view the app.

---

## Configuration

- Replace the `apiKey` in the `index.js` file with your own API key from [Alpha Vantage](https://www.alphavantage.co/):
  ```javascript
  const apiKey = "your_api_key_here";
  ```

---

## How to Use

1. Open the **Stock Tracker Dashboard** in your web browser.
2. Use the **Search Stock** section to enter a stock symbol and view its details and price trends.
3. Select a stock from the **Trending Stocks Dropdown** to quickly access its data.
4. View detailed stock data in the **Stock Data Section**, including price and volume.
5. Compare multiple stocks in the **Stock Comparison Table**.

---

## Folder Structure

```
stock-tracker-dashboard/
├── index.html       # Main HTML file
├── styles.css       # CSS for styling the dashboard
├── index.js         # JavaScript functionality
└── README.md        # Documentation (this file)
```

---

## Known Issues

- The comparison table does not update dynamically with added stocks. Improvements are planned in future versions.

---

## Future Enhancements

- Add real-time stock updates with websockets.
- Enable users to add/remove stocks dynamically to/from the comparison table.
- Implement user authentication for personalized stock watchlists.

---

## Credits

- **API:** [Alpha Vantage](https://www.alphavantage.co/)
- **Visualization:** [Chart.js](https://www.chartjs.org/)

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.