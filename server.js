const express = require("express");
const app = express();
const lodash = require("lodash");

//load the quotes JSON
const quotes = require("./quotes.json");
// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Seyed's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...
app.get("/quotes", (request, response) => {
  response.json(quotes);
});

app.get("/quotes/search", (request, response) => {
  const queryTerm = String(request.query.term).toLowerCase();
  const searchedItem = quotes.filter((quote) => {
    if (quote.quote.includes(queryTerm)) return quote.quote;
  });
  response.send(searchedItem);
});

app.get("/quotes/random", (request, response) => {
  const randomQuote = pickFromArray(quotes);
  response.send(randomQuote);
});

app.get("/quotes/sample", (request, response) => {
  response.send(lodash.sample(quotes));
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
