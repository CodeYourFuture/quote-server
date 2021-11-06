// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();
const lodash = require("lodash")

//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Mya's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...
app.get("/quotes", function (request, response) {
  response.json(quotes);
});

// app.get("/quotes/random", function (request, response) {
//   const randomQuote = pickFromArray(quotes);
//   response.json(randomQuote);
// });

app.get("/quotes/random", (req,res)=>{
  res.json(lodash.sample(quotes));
});

app.get("/quotes/search", function (request, response) {
  const searchTerm = request.query.term.toLowerCase();
  const loweredCaseQuotes = quotes.map(({ quote, author }) => {
    const loweredCaseQuote = quote.toLowerCase();
    const loweredCaseAuthor = author.toLowerCase();
    return { loweredCaseQuote, loweredCaseAuthor };
  });
  const searchedQuotes = [];
  loweredCaseQuotes.forEach((quote, index) => {
    if (
      quote.loweredCaseQuote.includes(searchTerm) ||
      quote.loweredCaseAuthor.includes(searchTerm)
    ) {
      searchedQuotes.push(quotes[index]);
    }
  });

  res.json(searchedQuotes);
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
const listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
