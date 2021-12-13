// server.js
// This is where your node app starts

//load the 'lodash'
const lodash = require("lodash");

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//START OF YOUR CODE...
//   /                  - Return some helpful welcome info (text)
app.get("/", (req, res) => {
  res.send("Welcome to our server!")
})

//   /quotes            - Should return all quotes (json)
app.get("/quotes", (req, res) => {
  res.json(quotes);
});

//   /quotes/random     - Should return ONE quote (json)
app.get("/quotes/random", (req, res) => {
  res.json(pickFromArray(quotes));
});


function filteredQuotes (string){
  return quotes.filter(quote => quote.quote.toLowerCase().includes(string.toLowerCase()) || quote.author.toLowerCase().includes(string.toLowerCase()))
}

app.get("/quotes/search", (req, res) => {
  res.json(filteredQuotes(req.query.term));
});

//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return lodash.sample(arr);
}

//Start our server so that it listens for HTTP requests!
const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
