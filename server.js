const lodash = require("lodash");
const express = require("express");
const app = express();
const port = 3030;

//start listening to server
app.listen(port, function () {
  console.log("Your app is listening on port ");
});

//load the quotes JSON
const quotes = require("./quotes.json");

// http://localhost:3030/ - Return some helpful welcome info (text)
app.get("/", function (request, response) {
  response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//   http://localhost:3030/quotes            - Should return all quotes (json)
app.get("/quotes", function (request, response) {
  response.send(quotes);
});

//   http://localhost:3030/quotes/random    - Should return ONE quote (json)
app.get("/quotes/random", function (request, response) {
  let randomQuote = lodash.sample(quotes);
  response.send(randomQuote);
});

//   http://localhost:3030/quotes/search?term=life
app.get("/quotes/search", (request, response) => {
  const searchTerm = request.query.term.toLowerCase(); // Get the search term from the query parameter and convert to lowercase
  console.log(searchTerm);
  const filteredQuotes = quotes.filter(
    (quote) =>
      quote.quote.toLowerCase().includes(searchTerm) ||
      quote.author.toLowerCase().includes(searchTerm)
  ); // Filter the quotes array to include only those that contain the search term in the text
  response.json(filteredQuotes); // Return the filtered quotes as JSON
});
