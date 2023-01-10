// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 3000;

//const quotesTemnplate = fs.readFileSync("./quotesTemplate.html", 'utf-8');

//load the quotes JSON
const quotes = require("./quotes.json");
// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Khadar Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...
app.get("/quotes", function (request, response) {
  response.send(quotes);
});

app.get("/quotes/random", function (request, response) {
  response.send(pickFromArray(quotes));
});

// level 2

app.get(`/quotes/search`, (req, res) => {
  const term = req.query.term //.toLowerCase();
  const filteredWord = quotes.filter(
    (word) =>
      word.quote.toLowerCase().includes(term) ||
      word.author.toLowerCase().includes(term)
  );

  res.send(filteredWord);
});


//An intermediate step - echo the parameter

app.get(`/quotes/echo`, (req, res) => {
  const word = req.query.word
  console.log(`you have said ${word}`);
  res.send(`you have said ${word}`);
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
app.listen(port, function () {
  console.log("Your app is listening on port ");
});

//+ listener.address().port
