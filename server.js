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
  response.send("Laxmi's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...

app.get("/quotes", function (request, response) {
  response.send(quotes);
});

app.get("/quotes/random", function (request, response) {
  response.send(pickFromArray(quotes));
});

app.get("/quotes/search", (req, res) => {
  let searchQuery = req.query.amount;
  res.send("Hello World! You searched for " + searchQuery);
});

// app.get("/quotes/search", (req, res) => {
//   let searchTerm = req.query.term.toLowerCase(); //make the search case-insensitive
//   let matchingQueries = [];
//   for (let i = 0; i < quotes.length; i++) {
//     let quoteText = quotes[i].text.toLowerCase(); //make the search case-insensitive
//     let authorName = quotes[i].author.toLowerCase(); //make the search case-insensitive
//     if (quoteText.includes(searchTerm) || authorName.includes(searchTerm)) {
//       matchingQueries.push(quotes[i]);
//     }
//   }
//   res.status(200).json({
//     results: matchingQueries,
//   });
// });
//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Start our server so that it listens for HTTP requests!
const listener = app.listen(3030, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
