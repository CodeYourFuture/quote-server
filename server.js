// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");

// Handlers for routes:
// Home route

app.get("/", function (request, response) {
  response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...
// Returns all quotes (json)
app.get("/quotes", function (request, response) {
  response.json(quotes);
});

// Returns ONE quote (json)
app.get("/quotes/random", function (request, response) {
  response.json(pickFromArray(quotes));
});

//Pick one element at random from a given array
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Start our server so that it listens for HTTP requests!
const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
