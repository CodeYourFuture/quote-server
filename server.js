// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const { request, response } = require("express");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
//load the quotes JSON
const quotes = require("./quotes-with-id.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.sendFile("./index.html", { root: __dirname });
});

//START OF YOUR CODE...
//Send all quotes
app.get("/quotes", (request, response) => {
  response.send(quotes);
});
//Send random quote
app.get("/quotes/random", (request, response) => {
  response.send(pickFromArray(quotes));
});
//Search quote
app.get("/quotes/search", (request, response) => {
  const searchTerm = request.query.term.toLocaleLowerCase();
  const quotesIncludeTerm = quotes.filter(
    (quote) =>
      quote.author
        .toLocaleLowerCase()
        .includes(searchTerm) ||
      quote.quote.toLocaleLowerCase().includes(searchTerm)
  );
  response.send(quotesIncludeTerm);

  // response.send(pickFromArray(quotes));
});
//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const listener = app.listen(
  process.env.PORT || 5000,
  function () {
    console.log(
      "Your app is listening on port " +
        listener.address().port
    );
  }
);
