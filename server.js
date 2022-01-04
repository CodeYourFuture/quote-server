// server.js
// This is where your node app starts
const lodash = require("lodash");

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (req, res) {
  res.send("Uzma's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...
app.get("/quotes", function (req, res) {
  res.json(quotes);
});

app.get("/quotes/random", function (req, res) {
  //const randomQuote = pickFromArray(quotes);
  res.json(pickFromArray(quotes));
});

//...END OF YOUR CODE

function searchedQuotes(string) {
  return quotes.filter(
    (quote) =>
      quote.quote.toLowerCase().includes(string.toLowerCase()) ||
      quote.author.toLowerCase().includes(string.toLowerCase())
  );
}

app.get("/quotes/search", (req, res) => {
  res.json(searchedQuotes(req.query.term));
});

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  //return arr[Math.floor(Math.random() * arr.length)];
  return lodash.sample(arr);
}

//Start our server so that it listens for HTTP requests!
const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
