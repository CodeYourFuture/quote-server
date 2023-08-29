const lodash = require('lodash');
const express = require('express');
const app = express();
const quotes = require('./quotes.json');

app.get('/', (req, res) => {
  res.send(
    'Quote Server! Ask me for /quotes/random to get a random quote, /quotes for all quotes, or /quotes/search?q=your_query to find a specific quote'
  );
});

app.get('/quotes', (req, res) => {
  res.json(quotes);
});

app.get('/quotes/random', (req, res) => {
  res.send(lodash.sample([...quotes]));
});

app.get('/quotes/search', (req, res) => {
  try {
    const searchTerm = req.query.q;
    const filteredQuotes = quotes.filter(
      quoteObj =>
        quoteObj.quote.toLowerCase().includes(searchTerm.toLowerCase()) ||
        quoteObj.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filteredQuotes.length < 1) {
      res.send("Couldn't find any matches with your searched item.");
    }
    res.json(filteredQuotes);
  } catch (err) {
    console.log(err);
  }
});

const port = process.env.PORT || 3000;
const listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
