// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();
const PORT = 3000;
//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send(
    "Alireza's Quote Server!  Ask me for /quotes/random, or /quotes  You can search by /quotes/search?term=YourWordHere  or you can choose a quote by id /quotes/id/12 "
  );
});

//START OF YOUR CODE...
app.get(`/quotes/random`, (req, res) => {
  res.send(pickFromArray(quotes));
});
app.get(`/two`, (req, res) => {
  res.send([pickFromArray(quotes), pickFromArray(quotes)]);
});
app.get(`/quotes`, (req, res) => {
  res.send(quotes);
});
app.get(`/quotes/id/:id`, (req, res) => {
  const quote = quotes[Number(req.params.id)];
  if (quote) res.send(quote);
  res.status(404).send("Whoops, not here sorry!!!");
});
app.get("/quotes/search", function (req, res) {
  const searchQuery = req.query.term.toLowerCase();
  const filterQuote = quotes.filter(
    (u) =>
      u.quote.toLowerCase().includes(searchQuery) ||
      u.author.toLowerCase().includes(searchQuery)
  );
  if (filterQuote) res.send(filterQuote);
  res.status(404).send("Whoops, not found!!!");
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
  // process.env.PORT
  console.log("Your app is listening on port " + listener.address().port);
  console.log(`My server is running on ${PORT}`);
});
