// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const lodash = require("lodash");

const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Farzaneh's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...

app.get("/quotes", (req, res) => {
  res.status(200).json({
    data: quotes
  })
});

app.get("/quotes/random", (req, res) => {
  // const quote = pickFromArray(quotes);
  const quote = lodash.sample(quotes);
  res.status(200).json({ data: quote });
});

app.get("/quotes/search", (req, res) => {
  const text = req.query.term.toLocaleLowerCase();
  const filteredQuotes = quotes.filter(search =>
    search.author.toLocaleLowerCase().includes(text) || search.quote.toLocaleLowerCase().includes(text));
  res.status(200).json(filteredQuotes);
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
const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
