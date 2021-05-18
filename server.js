// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");
const lodash = require("lodash");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Diba's Quote Server!  Ask me for /quotes/random, or /quotes");
});

app.get("/quotes", function (request, response) {
  response.send(quotes);
});
app.get("/quotes/random", function (request, response) {
 let result= lodash.sample(quotes);
  response.send(result)
});

app.get("/search", function (request, response) {
  let term = request.query.term.toLowerCase();
  let result = search(quotes, term);
  response.send(result);
});

function search(quotes, value) {
  return quotes.filter(
    (quote) =>
      quote.quote.toLowerCase().includes(value) ||
      quote.author.toLowerCase().includes(value)
  );
}
//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
const Port = process.env.PORT || 3000;
//Start our server so that it listens for HTTP requests!
const listener = app.listen(Port, function () {
  console.log("Your app is listening on port " + Port);
});
