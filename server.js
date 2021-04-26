// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");

const PORT = 3000 || process.env.PORT;

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send(
    "Nirmeet's Quote Server!  Ask me for /quotes/random, or /quotes"
  );
});

//START OF YOUR CODE...

// get request to get all the quotes
app.get("/quotes", function (request, response) {
  response.json(quotes);
});

// get request to get a random quote
app.get("/quotes/random", function (request, response) {
  response.json(pickFromArray(quotes));
});

// get request to get the quotes that match the searched term
app.get("/quotes/search", function (request, response) {
  const searchTerm = request.query.term;
  const filteredQuotes = quotes.filter(
    (element) =>
      element.quote.toLowerCase().includes(searchTerm.toLowerCase()) ||
      element.author.toLowerCase().includes(searchTerm.toLowerCase())
  );
  response.json(filteredQuotes);
  console.log(searchTerm);
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
