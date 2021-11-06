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
app.get("/", function (req, res) {
  res.send("Morteza's Quote Server!  Ask me for /quotes/random, or /quotes");
});



//START OF YOUR CODE...
app.get("/quotes", function (req, res) {
  res.send(quotes);
});

app.get("/quotes/random", function (req, res) {
  res.send(pickFromArray(quotes));
});
//...END OF YOUR CODE
app.get("/quotes/search", function (req, res) {
  let search = (req.query.term).toLowerCase();
  const filterQuotes = quotes.filter((quote) => quote.quote.toLowerCase().includes(search) || quote.author.toLowerCase().includes(search))
  res.send(filterQuotes);
});


//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Start our server so that it listens for HTTP requests!
const listener = app.listen(process.env.PORT || 8000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
