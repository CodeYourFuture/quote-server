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
  response.header({
    "content-Type": "application/json"
  })
  response.send(
    "Natalie's Quote Server!  Ask me for /quotes/random, or /quotes"
  );
});

//START OF YOUR CODE...
//Link for Postman - http://localhost:3001/

app.get("/quotes", function (request, response) {
  response.send({ quotes });
});

app.get("/quotes/random", function (request, response) {
  response.send(pickFromArray(quotes));
});

app.get("/quotes/search", function (request, response) {
  const term = request.query.term;
  const word = request.query.word;
  response.send(searchTerm(term, quotes));
})
//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function searchTerm(string, arr) {
  const myString = string.toLowerCase();
  return arr.filter(item => item.quote.toLowerCase().includes(myString) || item.author.toLowerCase().includes(myString))
}
//Start our server so that it listens for HTTP requests!
const listener = app.listen(3001, function () {
  console.log("Your app is listening on port " + listener.address().port);
});


// /quotes/search?term=life
// /quotes/search?term=success
// /quotes/search?term=miss