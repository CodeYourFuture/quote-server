// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors({ origin: "*" }));
//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
// app.get("/", function (request, response) {
//   response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
// });

//START OF YOUR CODE...
app.get("/", function (request, response) {
  response.send(
    "Kavita's Quote Server!  Ask me for /quotes/random, or /quotes."
  );
});
app.get("/", function (req, res) {
  res.send("Welcome to Random quote website");
});
app.get("/quotes", function (request, response) {
  response.json(quotes);
});
app.get("/quotes/random", function (request, response) {
  response.json(pickFromArray(quotes));
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
const port = process.env.PORT || 5000;
const listener = app.listen(port, function () {
  console.log("Your app is listening on port 5000" + listener.address().port);
});
