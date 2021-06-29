// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");

//  port for 
const PORT = process.env.PORT || 5000;

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send(`Use endpoint /quotes to display all the quotes. Use endpoint /quotes/random to display a random quote. Use endpoint / quotes/search?term=your search word here`);
});

//START OF YOUR CODE...
app.get('/quotes', (req, res) => {
  res.send(quotes);
});

app.get('/quotes/random', (req, res) => {
  res.send(pickFromArray(quotes));
});

app.get('/quotes/search', (req, res) => {
  let term = req.query.term;
  let match = quotes.filter(({ quote, author }) => {
    return (
      quote.toLowerCase().includes(term.toLowerCase()) ||
      author.toLowerCase().includes(term.toLowerCase())
    )
  });
  res.send(match);
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
