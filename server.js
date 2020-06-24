const express = require('express');
const app = express();

const quotes = require('./quotes.json');

const cors = require('cors');

app.use(cors());

app.get('/', function (request, response) {
  response.send(
    'Yohannes Quote Generator Server!  Ask me for /quotes/random, or /quotes or /quotes/search?term=life'
  );
});

app.get('/quotes', function (request, response) {
  response.json(quotes);
});
app.get('/quotes/random', function (request, response) {
  const randomQuote = pickFromArray(quotes);
  response.json(randomQuote);
});
app.get('/quotes/search', function (request, response) {
  const searchTerm = request.query.term;
  const searchResult = quotes.filter((element) => {
    return (
      element.quote.toLowerCase().includes(searchTerm.toLowerCase()) ||
      element.quote.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  response.json(searchResult);
});

function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
const portNumber = process.env.PORT || 8000;
const listener = app.listen(portNumber, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
