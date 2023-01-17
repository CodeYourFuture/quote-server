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
  response.send("Doris's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE... Level 1 Challenge - make the quote server
app.get("/quotes", function (request, response) {
  response.send(quotes);
});

app.get("/quotes/random", function (request, response) {
  response.send(pickFromArray(quotes));
});

// Level 2 Challenge - allow quote searches!
app.get("/quotes/search", function (req, res) {
  const searchWord = req.query.term;
  const result = search(searchWord);
  res.json(result);
});

//search by a term
function search(word) {
  return quotes.filter((quote) =>
    quote.quote.toLowerCase().includes(word.toLowerCase())
  );
}

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
const listener = app.listen(port, function () {
  console.log("Your app is listening on port " + port);
  // console.log(process.env.PORT);
});
