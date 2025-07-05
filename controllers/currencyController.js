const { getExchangeRates } = require('../models/currencyModel');

const getRates = async (req, res) => {
    const baseCurrency = req.query.base;

    if (!baseCurrency) {
        return res.status(400).json({ error: 'Base currency is required, e.g., ?base=USD' });
    }

    try {
        const data = await getExchangeRates(baseCurrency.toUpperCase());
        res.json({
            base: data.base_code,
            rates: data.conversion_rates
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getRates };
