// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const lodash = require("lodash");
const app = express();
const cors = require("cors");
app.use(cors());
//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...

// display all quotes
app.get("/quotes", function (request, response) {
  response.json(quotes);
});

app.get("/quotes/random", function (request, response) {
  response.json(pickFromArray(quotes));
});

app.get("/quotes/search", function (request, response) {
  let searchQuery = request.query.term;
  let matchingQuotes = getMatchingQuotes(searchQuery);
  response.json(matchingQuotes);
});

function getMatchingQuotes(searchTerm) {
  return quotes.filter(
    (singleQuote) =>
      singleQuote.quote.toLowerCase().includes(searchTerm) ||
      singleQuote.author.toLowerCase().includes(searchTerm)
  );
}

app.get("/echo", function (request, response) {
  let wordQuery = request.query.word;
  response.send(`You said ${wordQuery}`);
});

//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(myArray) {
  return lodash.sample(myArray);
}

//Start our server so that it listens for HTTP requests!
const listener = app.listen(3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
