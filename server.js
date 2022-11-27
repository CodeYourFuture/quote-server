// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");

//START OF YOUR CODE...

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send(
    "Delroy's Quote Server!  Ask me for /quotes/random, or /quotes<br/>If you would like to do a search enter e.g. /quotes/search?term=success"
  );
});

app.get("/quotes", function (request, response) {
  response.send(quotes);
});

app.get("/quotes/random", function (request, response) {
  response.send(pickFromArray(quotes));
});

// An intermediate step - echo the parameter
// e.g. /echo?word=ismail should just return You said 'ismail'

app.get("/echo", function (request, response) {
  if ('query' in request && 'word' in request.query) {
              response.send(
                `You said '${request.query.word}'`
              ); 
  }
});

/*
Allow the user of your quotes API to search your list of quotes.

It should work with requests like this one:

/quotes/search?term=life
/quotes/search?term=success
/quotes/search?term=miss

Make your search case-insensitive
Make the search return matches on quote OR author text.
*/

app.get("/quotes/search", function (request, response) {
  if ("query" in request && "term" in request.query) {
    const searchTerm = request.query.term.toLowerCase();
    // console.log(searchTerm)
    const results = quotes.filter(
      ({ quote, author }) =>
        quote.toLowerCase().includes(searchTerm) ||
        author.toLowerCase().includes(searchTerm)
    );
    response.send(results);
  }
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
