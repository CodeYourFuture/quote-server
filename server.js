// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");
const { json } = require("express");

// change the PORT
const PORT = process.env.PORT || 5000;
// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...

//respond with all quotes
app.get("/quotes", (req, res) => {
  res.json(quotes);
});

//respond with a random quote
app.get("/quotes/random", (req, res) => {
  let randomQuote = pickFromArray(quotes);
  res.json(randomQuote);
});

//respond with all quotes in a search

app.get("/quotes/search", (req, res) => {
  let queryStr = req.query;
  console.log(queryStr.term);
  if (queryStr.term) {
    let searchRes = quotes.filter((line) =>
      line.quote.toLocaleLowerCase().includes(queryStr.term.toLocaleLowerCase())
    );
    res.json(searchRes);
  }

  console.log(searchRes);
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
const listener = app.listen(PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
