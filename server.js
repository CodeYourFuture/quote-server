// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();
const lodash = require('lodash');
let cors = require('cors');
//load the quotes JSON
const quotes = require("./quotes.json");
app.use(cors());
// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...
app.get("/quotes", (req, res) => {
  res.json(quotes);
});

app.get("/quotes/random", (req, res) => {
  res.json(lodash.sample(quotes));
});

app.get("/quotes/search", (req, res) => {
  const { term: searchTerm } = req.query

  res.json(quotes.filter((element) => {
    return element.quote.toLowerCase().includes(searchTerm.toLowerCase()) || element.author.toLowerCase().includes(searchTerm.toLowerCase())
  }));
});
//...END OF YOUR CODE
app.get("/quotes/search", function (req, res) {
  const text = req.query.term;
  let searchQoute = text ? quotes.filter(quoty => quoty.quote.includes(text.toLowerCase()) || quoty.author.includes(text.toLowerCase)) : [];
  res.json(searchQoute);
});
//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
// function pickFromArray(arr) {
//   return arr[Math.floor(Math.random() * arr.length)];
// }

//Start our server so that it listens for HTTP requests!
const listener = app.listen(process.env.PORT || 5000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
