// Define the function to convert currency
async function convertCurrency(event: Event) {
    event.preventDefault(); // Prevent form submission
    const amount1 = document.getElementById('amount') as HTMLInputElement;
    const amount=Number(amount1.value);
    const fromCurrencyInput = document.getElementById('fromCurrency') as HTMLInputElement;
    const toCurrencyInput = document.getElementById('toCurrency') as HTMLInputElement;

    const fromCurrency = fromCurrencyInput.value.toUpperCase();
    const toCurrency = toCurrencyInput.value.toUpperCase();

    try {
        const result = await convertCurrencyAPI(amount, fromCurrency, toCurrency);
        document.getElementById('result')!.innerText = `${amount} ${fromCurrency} equals ${result} ${toCurrency}`;
    } catch (error) {
        console.error('An error occurred:', error);
        document.getElementById('result')!.innerText = 'An error occurred. Please try again.';
    }
}

// Function to fetch exchange rates from the API
async function fetchExchangeRates(baseCurrency: string): Promise<any> {
    try {
        const response = await fetch(`https://open.er-api.com/v6/latest/${baseCurrency}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
        throw error;
    }
}

// Function to convert currency
async function convertCurrencyAPI(amount: number, from: string, to: string): Promise<number> {
    try {
        const exchangeRates = await fetchExchangeRates(from);
        const conversionRate = exchangeRates.rates[to];
        if (conversionRate === undefined) {
            throw new Error(`Conversion rate from ${from} to ${to} not available.`);
        }
        return amount * conversionRate;
    } catch (error) {
        console.error('Error converting currency:', error);
        throw error;
    }
}
document.getElementById('currencyConverterForm')!.addEventListener('submit', convertCurrency);