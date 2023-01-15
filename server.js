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

//START OF YOUR CODE...

app.get("/", function (request, response) {
  response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
});

app.get("/quotes", function (request, respond) {
  respond.send({ quotes });
});

app.get("/quotes/random", function (request, respond) {
  let randonQuote = pickFromArray(quotes);
  respond.send({ randonQuote });
});

app.get("/quotes/search", function (request, response) {
  let searchQuery = request.query.term;
  // console.log(searchQuery);
  const quoteWithTerm = quotes.filter(
    (quote) =>
      quote.quote.toLowerCase().includes(searchQuery.toLocaleLowerCase()) ||
      quote.author.toLowerCase().includes(searchQuery.toLocaleLowerCase())
  );
  response.send({ quoteWithTerm });
});

//****comment when you need to use on Glitch
const listener = app.listen(9090, function () {
  console.log("Your app is listening on port " + listener.address().port);
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
//******Uncomment when you need to use glitch because is not more local (9090)
// const listener = app.listen(process.env.PORT, function () {
//   console.log("Your app is listening on port " + listener.address().port);
// });
