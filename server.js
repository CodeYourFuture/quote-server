// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
// const quotes = require("./quotes.js")
const app = express();


//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("WELCOME TO QUOTE SERVER API");
});

//START OF YOUR CODE...
app.get("/quotes", function (request, response) {
  response.send(pickAllFromArray(quotes));
});

app.get("/quotes/random", function (request, response) {
  response.send(pickRandomFromArray(quotes));
});

//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickRandomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function pickAllFromArray(arr) {
  return arr.map(elem => {
    return elem
  })
}

//Start our server so that it listens for HTTP requests!
const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
