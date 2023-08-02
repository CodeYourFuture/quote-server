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
app.get("/", (req, res) => res.send(`Welcome, to our quotes server!`));

//   /quotes            - Should return all quotes (json)
app.get("/quotes", (req, res) => res.json(quotes));

//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Azin's Quote Server!  Ask me for /quotes/random, or /quotes");
});

app.get("/quotes/random", (req, res) => res.send(pickFromArray(quotes)));
//START OF YOUR CODE...

app.get("/quotes/search", (req, res) => {
  let term = req.query.term;

  let result = quotes.filter((q) => {
    return q.author.toLowerCase().includes(term) || q.quote.toLowerCase().includes(term);
  });
  res.json(result);
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
