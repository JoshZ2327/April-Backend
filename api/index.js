const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS
app.use(cors({ origin: '*' }));

// Middleware to parse JSON
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.send('Backend is running!');
});

// Portfolio route
app.get('/api/portfolio', (req, res) => {
    res.json([
        { token: 'SOL', amount: 25 },
        { token: 'USDC', amount: 1000 },
        { token: 'ETH', amount: 1.5 }
    ]);
});

module.exports = app;
