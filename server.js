// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const { request, response } = require("express");
const express = require("express");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", (request, response) => {
  response.send(
    "Mo Nahvi's Quote Server!  Ask me for /quotes/random, or /quotes"
  );
});

//START OF YOUR CODE...
app.get("/", (req, res) => {
  res.send("MoReel's Quote Server!  Ask me for /quotes/random, or /quotes");
});

app.get("/quotes", (req, res) => {
  res.send(quotes);
});

app.get("/quotes/random", (req, res) => {
  res.send(pickFromArray(quotes));
});

app.get("/quotes/search", (req, res) => {
  const termQuery = req.query.term;

  if (!termQuery) {
    return res.status(400).json({ error: "Search term is required!" });
  }

  termQuery
    ? res.send({
        results: quotes.filter((quote) => {
          return (
            quote.quote.toLowerCase().includes(termQuery.toLowerCase()) ||
            quote.author.toLowerCase().includes(termQuery.toLowerCase())
          );
        }),
      })
    : res.send([]);
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
