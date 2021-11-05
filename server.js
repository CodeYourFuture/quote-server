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
  response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
});

app.get("/quotes", (req, res) => {
  res.json(quotes);
});

// app.get("/quotes/random", (req, res) => {
//   const pickFromArray = (arr) =>  arr[Math.floor(Math.random() * arr.length)];
//   res.json(pickFromArray(quotes));
// });

//START OF YOUR CODE...

//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//

//Start our server so that it listens for HTTP requests!
const PORT = process.env.PORT || 4000;

const listener = app.listen(PORT, () => {
  console.log(`Your app is listening on port ${PORT}`);
});
