// server.js
// This is where your node app starts

// Load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();
const lodash = require("lodash");

// Load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
});

// Return all quotes
app.get("/quotes", function (request, response) {
  response.json(quotes);
});

// Return one random quote
app.get("/quotes/random", function (request, response) {
   //const randomQuote = pickFromArray(quotes);
   const randomQuote = lodash.sample(quotes);
  response.json(randomQuote);
});

app.get("/quotes/search", function (request, response) {
  const searchTerm = request.query.term.toLowerCase(); 
  const searchResults = quotes.filter(
    (quote) =>
      quote.text.toLowerCase().includes(searchTerm) || 
      quote.author.toLowerCase().includes(searchTerm) 
  );
  response.json(searchResults);
});

// You can use this function to pick one element at random from a given array
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Start our server so that it listens for HTTP requests!
const listener = app.listen(process.env.PORT || 3002, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
