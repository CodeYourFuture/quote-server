// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();
const lodash = require("lodash");

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

app.get("/quotes", function (request, response) {
  response.send(quotes);
});

app.get("/quotes/random", function (request, response) {
  let randomQuote = lodash.sample(quotes);
  // const randomQuote = quotes[Math.floor(Math.random() * (quotes.length - 1))];
  response.send(randomQuote);
});

// Had some input at this point with adding term and word

const searchQuote = (term) => {
  let searchedArray = [];
  for (let entry of quotes) {
    const quoteLowered = entry.quote.toLowerCase();
    const authorLowered = entry.author.toLowerCase();
    if (quoteLowered.includes(term) || authorLowered.includes(term)) {
      searchedArray.push(entry);
    }
  }
  return searchedArray;
};

app.get("/quotes/search", function (request, response) {
  // below a short way of doing a ternary operator
  let term = request.query.term || request.query.word;
  term = term.toLowerCase();
  let foundQuotes = searchQuote(term);
  response.send(foundQuotes);
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
const listener = app.listen(process.env.PORT || 5000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
