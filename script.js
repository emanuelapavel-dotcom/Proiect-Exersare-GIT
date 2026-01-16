// Funcție pentru a prelua prețul BTC de la Binance
async function getBTCPrice() {
    const binanceURL = "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT";

    try {
        const response = await fetch(binanceURL);
        const data = await response.json();
        
        // Binance returnează un obiect de forma: { symbol: "BTCUSDT", price: "42000.00" }
        const price = parseFloat(data.price).toFixed(2);
        
        // Afișăm prețul în consolă și în interfață
        console.log("Preț actual BTC:", price);
        
        // Presupunem că ai un element cu id-ul 'status' în HTML
        const statusElement = document.getElementById('status');
        if (statusElement) {
            statusElement.innerHTML = `Preț Live BTC: <strong>$${price}</strong>`;
        }
    } catch (error) {
        console.error("Eroare la preluarea prețului de pe Binance:", error);
    }
}

// Apelăm funcția imediat ce se încarcă scriptul
getBTCPrice();

// Opțional: Actualizăm prețul automat la fiecare 30 de secunde
setInterval(getBTCPrice, 30000);