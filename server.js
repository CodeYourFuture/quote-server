// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();
const port = 3030;

//start listening to server
app.listen(port, function () {
  console.log("Your app is listening on port ");
});

//load the quotes JSON
const quotes = require("./quotes.json");

//function for getting random element from array
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

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
  let randomQuote = pickFromArray(quotes);
  response.send(randomQuote);
});
