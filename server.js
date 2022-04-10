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
  response.send(
    "Selahaddin's Quote Server!  Ask me for /quotes/random, or /quotes"
  );
});

//START OF YOUR CODE...
// `/quotes` - returns ALL of the quotes, as JSON.
app.get("/quotes", function (req, res) {
  res.json(quotes);
});

//   /quotes/random - returns ONE quote as JSON
app.get("/quotes/random", function (req, res) {
  res.json(pickFromArray(quotes));
});

//Search for a quote
app.get("/quotes/search", function (req, res) {
  const term = req.query.term;
  if(term){
    const result = quotes.filter((quote) => {
      return (
        quote.quote.toLowerCase().includes(term.toLowerCase()) ||
        quote.author.toLowerCase().includes(term.toLowerCase())
      );
    });
    res.json(result);
  } else {
    res.status(404).send("Search term not found");
  }
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
const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
