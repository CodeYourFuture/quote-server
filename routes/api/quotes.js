const quotes = require('../../quotes.js');
const express = require('express');
const {response} = require('express');
const router = express.Router();

router.get('/', (req, res) => res.json(quotes));

router.get('/random', (req, res) => {
  res.send(pickFromArray(quotes));
});

function pickFromArray(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

router.get('/search', (req, res) => {
  const searchWord = req.query.term;
  const searchResults = quotes.filter((quote) =>
    quote.quote.toLowerCase().includes(searchWord)
  );
  res.send(searchResults);
});
module.exports = quotes;
module.exports = router;
