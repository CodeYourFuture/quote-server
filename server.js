// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const { response } = require("express");
const express = require("express");
const app = express();
// var cors = require("cors");
// app.use(cors());

//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Laxmi's Quote Server!  Ask me for /quotes/random, or /quotes");
});

function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//START OF YOUR CODE...

app.get("/quotes", function (request, response) {
  response.json(quotes);
});

app.get("/quotes/random", function (request, response) {
  response.json(pickFromArray(quotes));
});

//level 2

//Create a search handler for quotes
app.get("/quotes/search", (req, res) => {
  const term = req.query.term; //Get the search term from the URL query string

  // Query the database for quotes containing the specified term
  const quotes = db.quotes.filter(
    (quote) =>
      quote.text.indexOf(term) !== -1 || quote.author.indexOf(term) !== -1
  );

  // Send an array of quotes as a response
  res.json(quotes);
});

//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
// function pickFromArray(arr) {
//   return arr[Math.floor(Math.random() * arr.length)];
// }

//Start our server so that it listens for HTTP requests!
const listener = app.listen(3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
