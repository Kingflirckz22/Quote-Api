const express = require('express');
const cors = require('cors');
const app = express();

// IMPORTANT: Render sets the PORT environment variable.


// A simple in-memory list of quotes
const quotes = [
  "The best way to predict the future is to create it.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "Your time is limited, don't waste it living someone else's life.",
  "Simplicity is the soul of Efficiency",
  "Testing leads to failure, Failure leads to understanding",
  "Do not watch the clock, Do what it does, Keep going",
  "Knowledge is power, But might be your demise",
  "Always remeber at the end of the day, it's always night",

];


// Get the allowed URL from an environment variable
// We will set this variable in Dokploy
const FRONTEND_URL = process.env.FRONTEND_URL; 
console.log("Allowed Frontend Origin:", FRONTEND_URL);
app.use(cors({
  origin: FRONTEND_URL
}));
// Be specific about who can use your API
// const VERCEL_FRONTEND_URL = 'https://quote-frontend-three.vercel.app'; 

// app.use(cors({
//   origin: VERCEL_FRONTEND_URL
// }));
// app.use(cors());
//Render sets the PORT environment variable.
const PORT = process.env.PORT || 3000;

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