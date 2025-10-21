const express = require('express');
const app = express();

// IMPORTANT: Render sets the PORT environment variable.
const PORT = process.env.PORT || 3000;

// A simple in-memory list of quotes
const quotes = [
  "The best way to predict the future is to create it.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "Your time is limited, don't waste it living someone else's life.",
];

// Endpoint for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Simple Quote API! Visit /quote for a random quote.');
});

// Endpoint for a random quote
app.get('/quote', (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote: randomQuote });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});