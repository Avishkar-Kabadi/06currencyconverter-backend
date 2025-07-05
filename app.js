const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const currencyRoutes = require('./routes/currencyRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: 'https://avishkar-kabadicurrencyconverter.vercel.app/'
}));

app.use('/api', currencyRoutes);

app.listen(PORT, () => {
    console.log(`https://avishkar-kabadicurrencyconverter.vercel.app/');
});
