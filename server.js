// server.js
// This is where your node app starts
//load the 'express' module which makes writing webservers easy
const express = require("express");
// const lodash = require("lodash");
const _ = require("lodash");

const app = express();
const port = 8000;

//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Malkit's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...
app.get("/quotes", function (request, response) {
  response.send(quotes);
});

app.get("/quotes/random", function (request, response) {
  response.send(_.sample(quotes));
});

app.get("/quotes/search", function (request, response) {
  let term = request.query.term;
  let answer = searchArray(quotes, term);
  response.send(answer);
});

//...END OF YOUR CODE

function searchArray(arr, searchTerm) {
  let searchResults = arr.filter((aQuote) => {
    return aQuote.quote.toUpperCase().includes(searchTerm.toUpperCase()) || aQuote.author.toUpperCase().includes(searchTerm.toUpperCase());
  });

  return searchResults;
}

//Start our server so that it listens for HTTP requests!
// const listener = app.listen(process.env.PORT, function () {
//   console.log("Your app is listening on port " + listener.address().port);
// });

//Start our server so that it listens for HTTP requests!
const listener = app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});
