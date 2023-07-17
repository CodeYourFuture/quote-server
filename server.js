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
app.get("/", function (request, response) {
  response.send("Saliha's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...

app.get("/quotes", function (request, response) {
  response.send({quotes});
});

app.get("/quotes/random", function (request, response) {
  
   // Pick a random quote from the array using the pickFromArray function
   const randomQuote = pickFromArray(quotes);
 
   // Send the random quote as the response
   response.send(randomQuote);
});

//  http://localhost:62297/quotes/search?term=life/success/miss
// app.get("/quotes/search", function (request, response) {
//   // let term = request.query.term
//   // response.send(term);
// });

// advance
app.get("/quotes/search", function (request, response) {
  const term = request.query.term;
  const searchResults = searchQuotes(term);
  response.send({searchResults});
});


// ## Level 2 Challenge - allow quote _searches_!
function searchQuotes(term) {
  const results = quotes.filter(
    (quote) =>
      quote.quote.toLowerCase().includes(term.toLowerCase()) ||
      quote.author.toLowerCase().includes(term.toLowerCase()) ||
      quote === ""
  );
  return results;
}


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


