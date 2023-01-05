// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const { response } = require("express");
const express = require("express");
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





app.get("/random_quote", function (request, response) {
  let selected = pickFromArray(quotes);
  response.send(selected);
});

//START OF YOUR CODE...

app.get("/quotes", function (request, response) {
  response.json(quotes);
});

app.get("/quotes/random", (req, res) => {
  res.json(pickFromArray(quotes));
});

app.get("/quotes/search", (req, res) => {
  const term = req.query.term;

  res.json(quotes.filter(q => q.quote.toLowerCase().includes(term)));
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
const listener = app.listen(3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
