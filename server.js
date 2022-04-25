// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const { response } = require("express");
const express = require("express");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Jacint's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...

app.get("/quotes", (req, res) => {
  const date = new Date;
  console.log(`[${date}] All quotes requested`);
  res.send(quotes);
  console.log(`[${date}] All quotes served`);
});

app.get("/quotes/random", (req, res) => {
  const date = new Date;
  console.log(`[${date}] A random quote requested`)
  res.send(pickFromArray(quotes));
  console.log(`[${date}] A random quote served`);
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
// const listener = app.listen(process.env.PORT, function () {
//   console.log("Your app is listening on port " + listener.address().port);
// });

// Wrote my own listener
const PORT = 3000;
app.listen(PORT, () => {
  const date = new Date;
  console.log(`[${date}] Server is listening on port ${PORT}`);
})