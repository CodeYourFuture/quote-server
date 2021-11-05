const express = require('express');
const router = express.Router();
const quotes = require('../../quotes.json');
const lodash = require('lodash');

// Quotes Get Response
router.get('/', function (req, res) {
  res.json(quotes);
})

// Quotes/random Get Response
router.get('/random', function (req, res) {
  const randomQuote = lodash.sample(quotes);
  res.json(randomQuote);
})

// Quotes Search Get Response
router.get('/search', function (req, res) {
  const searchTerm = req.query.term.toLowerCase();
  const loweredCaseQuotes = quotes.map(({quote, author}) => {
    const loweredCaseQuote = quote.toLowerCase();
    const loweredCaseAuthor = author.toLowerCase();
    return { loweredCaseQuote, loweredCaseAuthor };
  })
  const searchedQuotes = [];
  loweredCaseQuotes.forEach((q, i) => {
    if (
      q.loweredCaseQuote.includes(searchTerm) ||
      q.loweredCaseAuthor.includes(searchTerm)
    ) {
      searchedQuotes.push(quotes[i]);
    }
  });

  res.json(searchedQuotes);
})

module.exports = router;