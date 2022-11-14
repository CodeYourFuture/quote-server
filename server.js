// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const cors = require("cors")
const lodash = require("lodash");
const app = express();

app.use(cors({origin: "*"}))

//load the quotes JSON
let quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Anthony's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...

//load the quotes-with-id JSON
const randomQuote = require("./quotes.json");

app.get("/quotes", (req, res) => res.json(quotes));
app.get("/quotes/random", (req, res) => res.json(pickFromArray(randomQuote)));
app.get("/quotes/search", (req, res) => {
  let term = req.query.term.toLowerCase();
  let searchRes = quotes.filter(e => e.quote.toLowerCase().includes(term) || e.author.toLowerCase().includes(term));
  //let searchRes = lodash.filter(quotes, (n) => n.quote.includes(term) || n.author.includes(term))
  res.json(searchRes);
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
const listener = app.listen(process.env.PORT || 3001, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
