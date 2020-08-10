const express = require('express');
const quotes = require('./quotes');
const PORT = process.env.PORT || 5000;
const app = express();
app.get('/api/quotes', (req, res) => res.json(quotes));

app.get('/api/quotes/random', (req, res) => {
  res.send(pickFromArray(quotes));
});

function pickFromArray(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
