// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const lodash = require("lodash");
const app = express();

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

//---Wellcome Page----
app.get("/", (req, res) => {
  res.send(
    `<h1> Wellcome to Quote Server (by Neill).</h1>
    <h2>Ask for "/quotes/random", or "/quotes"</h2>`
  );
});

//------Get all quotes------
app.get("/quotes", (req, res) => {
  if (quotes !== undefined) {
    res.json(quotes);
  } else {
    res.status(404).send("not found");
  }
});

//------Get Random Quotes----
app.get("/quotes/random", (req, res) => {
  if (quotes) {
    res.json(lodash.sample(quotes));
  } else {
    res.status(404).send("not found");
  }
});

//-----search-------
app.get("/quotes/search", (req, res) => {
  const searchTerm = req.query.term.toLowerCase();
  if (quotes !== undefined) {
    res.json(
      quotes.filter(
        (word) =>
          word.quote.toLowerCase().includes(searchTerm) ||
          word.author.toLowerCase().includes(searchTerm)
      )
    );
  } else {
    res.status(404).send("not found");
  }
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
const PORT = 8080;
const listener = app.listen(process.env.PORT || PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
