// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();
//lodash for array sampling
const lodash = require("lodash");
const cors = require('cors');
app.use(cors());

//load the quotes JSON
const quotes = require("./quotes.json");
let number= lodash.sample(quotes);

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...
//all quotes
const allQuotes = (req, res) => {
  res.send(quotes)
}
const randomQuote = (req, res) => {
  const randomPickedQuote= pickFromArray(quotes);
  res.send(number);
}
 

const searchQuote = (req, res) => {
  const searchTerm = req.query.term;
  const result = quotes.filter(quote => quote["quote"].includes(searchTerm.toLowerCase())
    || quote["author"].includes(searchTerm.toLowerCase()))
  res.send(result);
}
app.get('/quotes', allQuotes)
app.get('/quotes/random', randomQuote)
app.get('/quotes/search', searchQuote) 



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
