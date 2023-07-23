// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const { response } = require("express");
const express = require("express");
const app = express();
const port = 9090;

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
app.get("/quotes", (request, response) => {
  response.json(quotes)
})

app.get("/quotes/random", (request, response) => {
  const randomQuote = pickFromArray(quotes)
  response.json(randomQuote)
});

app.get("/quotes/search", (request, response) => {
  const search = request.query.term.toUpperCase()
  const filteredQuote = quotes.filter(
    (e) =>
      e.quote.toUpperCase().includes(search) ||
      e.author.toUpperCase().includes(search) 
  );
  response.json(filteredQuote);
});

app.get("/albums/:albumId", function (request, response) {
  // req.params.albumId will match the value in the url after /albums/
  const search = request.params.albumId
  const filteredQuoteById = quotes.filter((e) => e.id.includes(search))
  response.send(filteredQuoteById)
});

function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Start our server so that it listens for HTTP requests!
const listener = app.listen(3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
