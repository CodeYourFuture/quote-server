// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();
const fs = require("fs");
const lodash = require("lodash");
const PORT = 3000;

//load the quotes JSON
const quotes = require("./quotes.json");

// neccessary to avoid CORS errors on Heroku
const cors = require('cors');
app.use(cors());

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Baz's Quote Server! Ask me for /quotes/ or /quotes/random or /quotes/search?term=_____");
});

//START OF YOUR CODE...
app.get("/quotes", function (request, response) {
  response.sendFile(__dirname + "/quotes.json");
});

app.get("/quotes/random", function (request, response) {
  // response.send(pickFromArray(quotes));
  response.send(lodash.sample(quotes));
});

app.get("/quotes/search", function (request, response) {
  let searchQuery = request.query.term;
  let searchResults = quotes.filter(element => element.quote.toLowerCase().includes(searchQuery.toLowerCase()) || element.author.toLowerCase().includes(searchQuery.toLowerCase()));
  response.send(searchResults);
})
//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
// function pickFromArray(arr) {
//   return arr[Math.floor(Math.random() * arr.length)];
// }

//Start our server so that it listens for HTTP requests!
app.listen(process.env.PORT || PORT, function () {
  console.log(`The server is running on ${PORT}`);
});
