// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const cors = require('cors')
const app = express();
app.use(cors());

//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Osman's Quote Server!  Ask me for all Quotes here /quotes. Get a random quote from here /quotes/random. Or search for one here /quotes/search?term=[YOUR-SEARCH-TERM]");
});

//START OF YOUR CODE...
app.get("/quotes", function (req, res) {
  res.json(quotes);
});

app.get("/quotes/random", function (req, res) {
  res.json(pickFromArray(quotes));
});

app.get("/quotes/search", function (req, res) {
  let term = req.query.term
  let result = quotes.filter((item) => {
    return item.quote.toLowerCase().includes(term.toLowerCase()) || item.author.toLowerCase().includes(term.toLowerCase())
  })
  res.json(result);
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
const listener = app.listen(4000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
