// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();
const _ = require('lodash')
const cors = require("cors");
app.use(cors());

//load the quotes JSON
const quotes = require("./quotes-with-id.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Tayfun's Quote Server!  Ask me for /quotes/random, or /quotes");
});


//START OF YOUR CODE...

app.get("/quotes", function (request, response) {
  response.send(quotes);
});

app.get("/quotes/random", (req, res) => {
  res.send(_.sample(quotes));
});

app.get("/quotes/search", (req, res) => {
  const term = req.query.term;
  if (req.query.term) {
    const searchedQuote = quotes.filter(
      (quotes) =>
      quotes.quote.toLowerCase().includes(term.toLowerCase()) ||
      quotes.author.toLowerCase().includes(term.toLowerCase())
      
    );
    res.send(searchedQuote)
  } else {
    res.send (400, "No term provided")
  }
});


app.get("/quotes/search", (req, res) => {
  const term = req.query.term;
  const searchData = quotes.filter(
    (quotes) =>
      quotes.quote.toLowerCase().includes(term.toLowerCase()) ||
      quotes.author.toLowerCase().includes(term.toLowerCase())
  );
  res.send(searchData);
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
const PORT = process.env.PORT || 5000;
const listener = app.listen(PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
