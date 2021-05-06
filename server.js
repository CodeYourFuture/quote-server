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
  response.send("Jon's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...

//Get all the quotes
app.get("/quotes", (req, res) => {
  res.json(quotes);
});

// Get random quote using the function provided
app.get("/quotes/random", (req, res) => {
  res.json(pickFromArray(quotes));
});

//Allow quote search 
app.get("/quotes/search", (req, res) => {
  const searchedQuote = req.query.term;
  //Check for error
  if (!searchedQuote) {
    return res.sendStatus(400);
  }
  const searchResult = quotes.filter(
    (data) =>
      // make sure the search is not case-sensitive
      data.quote.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  res.json(searchResult);

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
const listener = app.listen(process.env.PORT || 5000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
