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
  response.send("<h1>Hello there! welcome to my quote server Api</h1>");
});

//START OF YOUR CODE...
app.get("/quotes", function (request, response) {
  response.send(quotes);
});

app.get("/quotes/random", function (request, response) {
  const randomQuote = quotes[lodash.random(quotes.length - 1)];
  response.send(randomQuote);
});

app.get(`/quotes/search`, function (request, response) {
  const term = request.query.term;
  const filteredQuotes = quotes.filter(
    (quote) =>
      quote.author.toLowerCase().includes(term.toLowerCase()) ||
      quote.quote.toLowerCase().includes(term.toLowerCase())
  );
  response.send(filteredQuotes);
});

app.get("/echo", function (request, response) {
  const word = request.query.word;
  response.send(`you said ${word}`);
});

//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//

// function pickFromArray(arr) {
//   return arr[Math.floor(Math.random() * arr.length)];
// }

//Start our server so that it listens for HTTP requests!
const listener = app.listen(process.env.PORT || 3000, "localhost", function () {
  console.log("Your app is listening on port " + listener.address().port);
});
