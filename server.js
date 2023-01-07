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
  response.send("Emily's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...
app.get("/", function (request, response) {
  response.send("You need to request /search?word=whatever");
});

app.get("/quotes", function (request, response) {
  response.send("Emily's Quote Server!  Ask me for /quotes/random, or /quotes");
});

app.get("/quotes/random", function (request, response) {
  let randomQuote = pickFromArray(quotes);
  response.send(randomQuote);
});

app.get("/quotes", function (request, response) {
  response.send(
    "Emily's Quote Server!  Ask me for /quotes/random, or /quotes or request /search?word=whatever"
  );
});

app.get("/quotes/search", function (request, response) {
  let searchedWord = request.query.word;
  if (searchedWord) {
    const lowerCaseSearchedWord = searchedWord.toLowerCase();
    let filteredQuotes = quotes.filter(
      (quote) =>
        quote.author.toLowerCase().includes(lowerCaseSearchedWord) ||
        quote.quote.toLowerCase().includes(lowerCaseSearchedWord)
    );
    response.send(filteredQuotes);
  } else {
    response.send([]);
  }
});

app.get("/echo", function (request, response) {
  response.send(`You said ${request.query.word}`);
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
const port = process.env.PORT || 9090;
const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
