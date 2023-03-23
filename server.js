// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();

//load the quotes JSON
const Quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send(
    "Lorena's Quote Server!  Ask me for /quotes/random, or /quotes"
  );
});

//START OF YOUR CODE...
app.get("/quotes", function (request, response) {
  console.log(request.query.quote);
  response.send({ Quotes });
});

app.get("/quotes/random", function (request, response) {
  response.send(Quotes[Math.floor(Math.random() * Quotes.length)]);
});
app.get("/quotes/search", function (request, response) {
  console.log(request.query.term);
  response.send(
    Quotes.filter(
      (el) =>
        el.quote.toLowerCase().includes(request.query.term.toLowerCase()) ||
        el.author.toLowerCase().includes(request.query.term.toLowerCase())
    )
  );
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
