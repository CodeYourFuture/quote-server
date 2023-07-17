// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const lodash = require("lodash");
const app = express();
const lodash = require("lodash");


//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)

app.get("/", (request, response) => {
  response.json("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...
app.get("/quotes", (request,response) => {
  response.json(quotes)
})

app.get("/quotes/random", (request, response) => {
const randomQuote = pickFromArray(quotes);
  response.json(randomQuote);
});

app.get("/quotes/search", (request, response) => {
  const search = request.query.term.toUpperCase();

  // /echo?word=ismail
  app.get("/echo", (request, respponse) => {
    let queryWord = request.query.word;
    response.send(`you said ${queryWord}`);
  });

  const searchQuotes = (arr) =>
    arr.filter(
      (element) =>
        element.quote.toUpperCase().includes(search) ||
        element.author.toUpperCase().includes(search)
    );
  response.json(searchQuotes(quotes));
})

//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return lodash.sample(myArray);
}


//Start our server so that it listens for HTTP requests!
const listener = app.listen(3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});


