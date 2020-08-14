// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const lodash = require("lodash");
const _ = require("lodash");
var cors = require("cors");
const app = express();
app.use(cors());

//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send(
    "Fatima's Quote Server!  Ask me for /quotes/random, or /quotes"
  );
});

//START OF YOUR CODE...

app.get("/quotes", (req, res) => {
  res.json(quotes);
});

let requstedQuote;
app.get("/quotes/random", (req, res) => {
  let quote = pickFromArray(quotes).quote;
  let author = pickFromArray(quotes).author;
  requstedQuote = { quote: `${quote}`, author: `${author}` };
  res.json(requstedQuote);
});
app.get("/quotes/search", (req, res) => {
  let term = req.query.term;
  let choosenQuote = quotes.filter((word) =>
    word.quote.toLowerCase().includes(term.toLowerCase())
  );
  res.json(choosenQuote);
});
app.get("/quotes/lodash", (req, res) => {
  let found = _.sampleSize(quotes, 2);
  res.json(found);
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
const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
