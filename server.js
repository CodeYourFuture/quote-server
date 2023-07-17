// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");
const lodash = require("lodash");
// lodash.sample(myArray)

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send(
    "Delnia's Quote Server!  Ask me for /quotes/random, or /quotes"
  );
});

//START OF YOUR CODE...
app.get("/quotes", function (request, response) {
  response.send({ quotes });
});

app.get("/quotes/search", function (request, response) {
  let searchTerm = request.query.term;
  let searchedQuotes = quotes.filter(
    (quote) =>
      quote.quote.includes(searchTerm) || quote.author.includes(searchTerm)
  );
  response.send(searchedQuotes);
});
app.get("/quotes/random", function (request, response) {
  let randomQuote = lodash.sample(quotes);
  response.send(randomQuote);
});

//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Start our server so that it listens for HTTP requests!
const listener = app.listen(3002, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
