const lodash = require('lodash');
const express = require('express');
const app = express();
const quotes = require('./quotes.json');

app.get('/', (req, res) => {
    res.send("Quote Server! Ask me for /quotes/random to get a random quote, /quotes for all quotes, or /quotes/search?term=your_query to find a specific quote");
});

app.get('/quotes', (req, res) => {
    res.json(quotes)
});

app.get('/quotes/random', (req, res) => {
    res.send(lodash.sample([...quotes]));
});

app.get('/quotes/search', (req, res) => {
    const searchTerm = req.query.term;
    const filteredQuotes = quotes.filter(quoteObj => quoteObj.quote.toLowerCase().includes(searchTerm.toLowerCase()) || quoteObj.author.toLowerCase().includes(searchTerm.toLowerCase()));
    res.json(filteredQuotes);
});

const listener = app.listen(3000, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});
