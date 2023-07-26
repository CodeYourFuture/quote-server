// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();
const port = 3030;
const lodash = require("lodash");
const cors = require("cors");

//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)

app.use(cors());
app.get("/", function (request, response) {
  response.send("Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...
//returns ALL of the quotes, as JSON.
app.get("/quotes", function (request, response) {
  response.json(quotes);
});

//Random quotes
app.get("/quotes/random", function (request, response) {
  response.send(lodash.sample(quotes));
});

app.get("/quotes/search", function (request, response) {
  if (!request.query.word) {
    response.send("the word is missing");
  }
  response.send(
    quotes.filter(
      (element) =>
        element.quote
          .toLowerCase()
          .includes(request.query.word.toLowerCase()) ||
        element.author.toLowerCase().includes(request.query.word.toLowerCase())
    )
  );
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
const listener = app.listen(port, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
