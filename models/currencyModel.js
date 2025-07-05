const axios = require('axios');
require('dotenv').config();

const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;

async function getExchangeRates(baseCurrency) {
    try {
        const url = `${BASE_URL}/${API_KEY}/latest/${baseCurrency}`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error("API Error:", error.message);
        throw new Error("Failed to fetch exchange rates: " + error.message);

    }
}

module.exports = { getExchangeRates };
