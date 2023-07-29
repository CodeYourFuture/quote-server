// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const lodash = require('lodash');
const express = require("express");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");
const { response } = require('express');

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", (request, response) => {
  response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...(level 1 -challenge)
app.get("/quotes", (request, response) => {
  response.json(quotes);
});
//...END OF YOUR CODE
app.get("/quotes/random", (request, response) => {
 const randomQuote = pickFromArray(quotes)
  response.json(randomQuote);
});
//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// level 2 challenge

app.get("/quotes/search", (request, response) => {
  const search = request.query.term.toUpperCase();
    const filteredQuotes = 
  quotes.filter(
    (elm) =>
     elm.quote.toUpperCase().includes(search)||
     elm.author.toUpperCase().includes(search)
    )
  
  response.json(filteredQuotes);
});
//Start our server so that it listens for HTTP requests!
const listener = app.listen(3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
// intermediate level
app.get("/quotes/random", (request, response)=> {
  const randomQuote = lodash.sample(quotes);
  response.json(randomQuote);
});

// Advance: Add a react app 

const cors = require('cors');
app.use(cors());
