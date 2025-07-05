const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const currencyRoutes = require('./routes/currencyRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Correct CORS: no trailing slash
app.use(cors({
  origin: 'https://avishkar-kabadicurrencyconverter.vercel.app'
}));

// ✅ Routes
app.use('/api', currencyRoutes);

// ✅ Fixed log message (correct quotes)
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`✅ Accepting requests from https://avishkar-kabadicurrencyconverter.vercel.app`);
});
