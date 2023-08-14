// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const lodash = require("lodash");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

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
  // response.send(pickFromArray(quotes));
  response.send(lodash.sample(quotes));
});

app.get("/quotes/search", function (request, response) {
  const term = request.query.term.toLocaleLowerCase();
  const result = searchTerm(term);
  response.send(result);
});

//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
// function pickFromArray(arr) {
//   return arr[Math.floor(Math.random() * arr.length)];
// }

function searchTerm(term) {
  const filteredResults = quotes.filter(
    (el) =>
      el.quote.toLocaleLowerCase().includes(term) ||
      el.author.toLocaleLowerCase().includes(term)
  );
  return filteredResults;
}

//Start our server so that it listens for HTTP requests!
const listener = app.listen(3030, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
