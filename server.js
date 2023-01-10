// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const { response } = require("express");
const express = require("express");
const app = express();
const _ = require("lodash");
const port = 9090;
//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...

app.get("/quotes", (request, response) => {
  response.send({ quotes });
});

app.get("/quotes/search", (request, response) => {
  const searchTerm = request.query.term;
  const quoteWithTerm = quotes.filter(
    (quote) =>
      quote.quote.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      quote.author.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );
  response.send({ quoteWithTerm });
});

app.get("/quotes/random", (request, response) => {
  // const randomQuote = pickFromArray(quotes);
  const randomQuote = _.sample(quotes);
  response.send({ randomQuote });
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
const listener = app.listen(port || process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
