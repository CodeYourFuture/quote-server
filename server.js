// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
//-- added cours for crossbrowser
//const cors = require("cors");

//load the quotes JSON
const quotes = require("./quotes.json");
const { response } = require("express");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...
app.get("/quotes", (request, response) => {
  response.json(quotes);
});
app.get("/quotes/random", (request, response) => {
  console.log(quotes);
  response.json(quotes);
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
const listener = app.listen(PORT, function () {
  console.log(`Your app is listening on port  + ${listener.address().port} + ${PORT}`, listener);
});
