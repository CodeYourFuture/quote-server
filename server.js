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

// Homepage Get Response
app.get("/", function (request, response) {
  response.send("Omer's Quote Server!  Ask me for /quotes/random, or /quotes");
});

// Quotes Get Response
app.get('/quotes', function (req, res) {
  res.json(quotes);
})

// Quotes/random Get Response
app.get('/quotes/random', function (req, res) {
  const randomQuote = pickFromArray(quotes);
  res.json(randomQuote);
})

// Quotes Search Get Response
app.get('/quotes/search', function (req, res) {
  const searchTerm = req.query.term.toLowerCase();
  const loweredCaseQuotes = quotes.map(({quote, author}) => {
    const loweredCaseQuote = quote.toLowerCase();
    const loweredCaseAuthor = author.toLowerCase();
    return { loweredCaseQuote, loweredCaseAuthor };
  })
  const searchedQuotes = [];
  loweredCaseQuotes.forEach((q, i) => {
    if (
      q.loweredCaseQuote.includes(searchTerm) ||
      q.loweredCaseAuthor.includes(searchTerm)
    ) {
      searchedQuotes.push(quotes[i]);
    }
  });

  res.json(searchedQuotes);
})

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
