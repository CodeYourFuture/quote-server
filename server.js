// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();
const lodash = require("lodash");

//load the quotes JSON
const quotes = require("./quotes.json");

//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)

app.get("/", (req, res) => {
  res.send(
    "<div><h1>Hey! How to use this API: </h1><ul><li>Use /quotes to get a full list of quotes</li><li>/quotes/random to get a random quote.</li><li>/quotes/search?term=:query to search for quotes</li></ul></div>"
  );
});

// return all quotes
app.get("/quotes", (req, res) => {
  res.json(quotes);
});

// return a random quote
app.get("/quotes/random", (req, res) => {
  res.json(lodash.sample(quotes));
});

app.get("/quotes/search", (req, res) => {
  const search = req.query.term;
  if (req.query.term === undefined) {
    return res.json({
      msg: "Please specify a search term. /quotes/search?term=:query",
    });
  }
  res.send(
    quotes.filter(
      (quote) =>
        quote.quote.toLowerCase().includes(search.toLowerCase()) ||
        quote.author.toLowerCase().includes(search.toLowerCase())
    )
  );
});

//Start our server so that it listens for HTTP requests!
const listener = app.listen(5000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
