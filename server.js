// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();
const port = 3000;
const lodash = require("lodash");
//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send(
    "Irianni's Quote Server!  Ask me for /quotes/random, or /quotes"
  );
});

//START OF YOUR CODE...

app.get("/", function (request, response) {
  response.send(
    "Irianni's Quote Server!  Ask me for /quotes/random, or /quotes"
  );
});

//START OF YOUR CODE...

app.get("/quotes", function (request, response) {
  response.json(quotes);
});

app.get("/quotes/random", function (request, response) {
  response.send(pickFromArray(quotes));
});

app.get("/quotes/search", function (request, response) {
  const word = request.query.word;
  const matchingWord = quotes.filter(
    (quote) =>
      quote.quote.toLowerCase().includes(word.toLowerCase()) ||
      quote.author.toLowerCase().includes(word.toLowerCase())
  );
  response.send(matchingWord);
});

//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  //return arr[Math.floor(Math.random() * arr.length)];
  return lodash.sample(arr);
}

//Start our server so that it listens for HTTP requests!
const listener = app.listen(port, function () {
  console.log("Your app is listening on port 3000");
});
