// server.js
// This is where your node app starts
const PORT = 3000;

//load the quotes JSON
const quotes = require("./quotes.json");

//load the 'express' module which makes writing webservers easy
const { response } = require("express");
const express = require("express");
const app = express();

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("<h1>Negin's Quote Server!  Ask me for /quotes/random, or /quotes</h1>");
});

//START OF YOUR CODE...
//Shows all the quotes
app.get("/quotes", (req, res) => {
  res.send(quotes);
});

//Shows random quotes
app.get("/quotes/random", (req, res) => {
  const randomQuote = pickFromArray(quotes);
  res.json(randomQuote);
});

app.get("/search", (req, res) => {
  const searchQuery = req.query.term.toLowerCase();
  const searchQuotes = quotes.filter(
    (quoteInfo) =>
      quoteInfo.quote.toLowerCase().includes(searchQuery) ||
      quoteInfo.author.toLowerCase().includes(searchQuery)
  );
  res.send(searchQuotes);
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
const listener = app.listen(PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
