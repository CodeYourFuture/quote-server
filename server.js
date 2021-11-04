// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (req, res) {
  res.send("Dharma's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...
app.get("/quotes", (req, res) => {
  res.json(quotes);
});

app.get("/quotes/random", (req, res) => {
  const pickFromArray = (arr) => arr[Math.floor(Math.random() * arr.length)];
  res.send(pickFromArray(quotes));
});

app.get("/quotes/search", (req, res) => {
  const searchQuotes = (searchQuery) => {
    if (!searchQuery) {
      return [];
    }
    return quotes.filter(
      (item) =>
        item.quote.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.author.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };
  res.send(searchQuotes(req.query.term));
});

//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
//const pickFromArray = arr => arr[Math.floor(Math.random() * arr.length)];

//Start our server so that it listens for HTTP requests!
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
