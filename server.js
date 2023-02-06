// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const req = require("express/lib/request");
const lodash = require("lodash");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send(
    "<h1>Hi there! my name is Rabie, welcome to my quote server Api</h1>"
  );
});

//START OF YOUR CODE...
// a route to get all quotes
app.get("/quotes", function (request, response) {
  response.send(quotes);
});

// route to receive a random quote
app.get("/quotes/random", function (request, response) {
  const randomQuoteGenerator = quotes[lodash.random(quotes.length - 1)];
  response.send(randomQuoteGenerator);
});

// route to search through all quotes
app.get("/quotes/search", function (request, response) {
  const term = request.query.term;
  const filtered = quotes.filter(
    (quote) =>
      quote.author.toLowerCase().includes(term.toLowerCase()) ||
      quote.quote.toLowerCase().includes(term.toLowerCase())
  );
  response.send(filtered);
});

//...END OF YOUR CODE

//Start our server so that it listens for HTTP requests!
const listener = app.listen(process.env.PORT || 3000, "localhost", function () {
  console.log("Your app is listening on port " + listener.address().port);
});
