// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

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
  // console.log("Quotes here");
  response.send({ quotes });
});

app.get("/quotes/random", (request, response) => {
  console.log("Random quotes here");
  response.send(pickFromArray(quotes));
});
// search?term=kevin
app.get("/quotes/search", (request, response) => {
  const term = request.query.term.toLocaleLowerCase();
  console.log("You said", term);

  const filter = quotes.filter(eachQuote => eachQuote.quote.toLocaleLowerCase().includes(term) || eachQuote.author.toLocaleLowerCase().includes(term));
  response.send(filter);
});
//echo?word=Musa
app.get("/echo", (request, response) => {
  const word = request.query.word;
  response.send(`You said ${word}`)
  console.log("You said", word);
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
app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});
//listener.address().
