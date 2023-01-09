// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...

//------Get all quotes------
app.get("/quotes", function (request, response) {
  if (quotes !== undefined) {
    response.json(quotes);
  }else{
    response.status(404).send("Not found");
  }
});

//------Get Random Quotes----
app.get("/quotes/random", function (request, response) {
  if (quotes !== undefined) {
    const randomQuote = pickFromArray(quotes);
    response.json(randomQuote);
  } else {
    response.status(404).send("Not found");
  }
});
//-----Quotes search-------
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
const listener = app.listen(PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
