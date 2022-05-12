// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");
const singleIdQuotes = require("./quotes-with-id.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Mohammad Alamin's Quote Server with nodemon running!  Ask me for /quotes/random, or /quotes");
});

//All quotes
app.get("/quotes", (req, res) => {
  res.send(quotes)
})
// Random quotes 
app.get("/quotes/random", (req, res) => {
  res.send(pickFromArray(quotes));
})
// Get quotes by id
app.get("/quotes/:id", (req, res) => {
 const quotesById = singleIdQuotes.filter((e) => e.id === parseInt(req.params.id))
 res.send(quotesById)
});
//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Start our server so that it listens for HTTP requests! process.env.PORT

const PORT = 3000;
const listener = app.listen(PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});


//----------------------

