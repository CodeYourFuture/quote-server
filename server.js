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
app.get("/", function (request, response) {
  console.log(quotes);
  response.send("Tom's Quote Server!  Ask me for /quotes/random, or /quotes");
});
app.get("/quotes", function (request, response) {
  response.send(quotes);
});
app.get("/quotes/random", function (request, response) {
  response.send(pickFromArray(quotes));
});
app.get("/quotes/search", function (request, response) {
  const quotesInSearch = quotes.filter((x) => {
    return (
      x.author.toLowerCase().includes(request.query.term.toLowerCase()) ||
      x.quote.toLowerCase().includes(request.query.term.toLowerCase())
    );
  });
  // if you just want one random one:
  // response.send(pickFromArray(quotesInSearch));
  // if you want the list:
  response.send(quotesInSearch);
});

//START OF YOUR CODE...

//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Start our server so that it listens for HTTP requests!
// altered this because it was becoming a pain to keep changing the address
const listener = app.listen(8000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
