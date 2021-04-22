// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();
const lodash = require("lodash");
const cors = require("cors");
app.use(cors());

//load the quotes JSON
const quotes = require("./quotes.json");

//Check that port 4040 is not in use otherwise set it to a different port
const PORT = process.env.PORT || 4040;

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
const pickFromArray = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", (req, res) => {
  res.send(
    "<h1>Welcome to Chizim's Quote Server!</h1><p> Ask me for /quotes /quotes/random or /quotes/search?term={your-search-term}</p>"
  );
});

//START OF YOUR CODE...

// Returns a result of array of all the quotes
app.get("/quotes", (req, res) => {
  res.send(quotes);
});

// Randomly select and display ONE quote (json)
// app.get("/quotes/random", (req, res) => {
//   res.send(pickFromArray(quotes));
// });

app.get("/quotes/random", (req, res) => {
  res.send(lodash.sample(quotes))
})

// implement search based on the term entered on the browser
app.get("/quotes/search", (req, res) => {
  const filteredQuotes = quotes.filter(
    (quote) =>
      quote.quote.toLowerCase().includes(req.query.term.toLowerCase()) ||
      quote.author.toLowerCase().includes(req.query.term.toLowerCase())
  );

  res.send(filteredQuotes);
});

//...END OF YOUR CODE

//Start our server so that it listens for HTTP requests!
app.listen(PORT, () => console.log(`Your app is listening on port ${PORT}`));
