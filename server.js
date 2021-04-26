// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const { response, request } = require("express");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", (request, response) => {
  response.send("Liew's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...
// get all quotes
app.get("/quotes", (request, response) => {
  response.json(quotes);
});

// get single random quotes
app.get("/quotes/random", (request, response) => {
  response.send(pickFromArray(quotes));
  // res.send(lodash.sample(quotes));
});

// get quote with keyword search
app.get("/quotes/search", (request, response) => {
  const searchTerm = request.query.term;
  const searchedQuote = quotes.filter(
    (elem) =>
      elem.quote.toLowerCase().includes(searchTerm.toLowerCase()) ||
      elem.author.toLowerCase().includes(searchTerm.toLowerCase())
  );
  response.json(searchedQuote);
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
const listener = app.listen(port, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
