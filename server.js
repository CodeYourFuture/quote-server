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
  response.send("junita's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...
app.get("/quotes", function (request, response) {
  response.send(quotes);
});

app.get("/quotes/random", function (request, response) {
  response.send(pickFromArray(quotes));
});

//...END OF YOUR CODE

function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

app.get("/quotes/search", function (request, response) {
  const term = request.query.term;
  const filteredQuotes = quotes.filter(function (quote) {
    return quote.quote.toLowerCase().includes(term.toLowerCase());
  });
  response.send(filteredQuotes);
});


//Start our server so that it listens for HTTP requests!
const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
