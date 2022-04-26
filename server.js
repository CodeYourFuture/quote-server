// server.js
// This is where your node app starts
const { res, req } = require("express");
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
  res.send(
    "Shadi's Quote Server!  Ask me for /quotes/random, or /quotes or /quotes/search?term="
  );
});

//START OF YOUR CODE...

app.get("/quotes", (req, res) => {
  res.json(quotes);
});

app.get("/quotes/random", (req, res) => {
  const randomQ = pickFromArray(quotes);
  res.send(randomQ);
});

app.get("/quotes/search", (req, res) => {
  let searchQuery = req.query.term;
  const searchQuotes = quotes.filter(
    (info) =>
      info.quote.toLowerCase().includes(searchQuery) ||
      info.author.toLowerCase().includes(searchQuery)
  );
  res.send(searchQuotes);
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
