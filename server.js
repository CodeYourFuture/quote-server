// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", (request, response) => {
  response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...
app.get("/quotes", (request, response) => {
  response.send(quotes);
});

app.get("/quotes/random", (request, response) => {
  response.send(pickFromArray(quotes));
});

///quotes/search?term=life
app.get("/quotes/search", (request, response) => {
  let searchQuery = request.query.term;
  let filteredQuote = quotes.filter((obj) => {
    return (
      obj.quote.toLowerCase().includes(searchQuery.toLowerCase()) ||
      obj.author.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });
  response.send(filteredQuote);
});
//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

let PORT = 3005;
//Start our server so that it listens for HTTP requests!
app.listen(PORT, function () {
  console.log("Your app is listening on port " + PORT);
});
