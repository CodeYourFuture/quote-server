// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const { sample } = require("lodash");
const app = express();


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
app.get("/quotes", function(req, res) {
  res.json(quotes);
});

// app.get("/quotes/random", function(req, res) {
//   const randomIndex = Math.floor(Math.random() * quotes.length);
//   const randomQuote = quotes[randomIndex];
//   res.json(randomQuote);
// });

app.get("/echo", function(req, res) {
  const word = req.query.word;
  res.send(`You said '${word}'`);
});

app.get("/quotes/search", function(req, res) {
  const searchTerm = req.query.term;

  if (!searchTerm) {
    res.status(400).send("Search term is missing.");
    return;
  }

  const searchResult = quotes.filter((quote) => {
    return quote.quote.toLowerCase().includes(searchTerm.toLowerCase());
  });

  res.status(200).send({ searchResult });
});

app.get("/quotes/random", function(req, res) {
  const randomQuote = sample(quotes);
  res.json(randomQuote);
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
const listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
