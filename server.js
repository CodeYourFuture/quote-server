// this brings in the environment variables from .env
require("dotenv").config();

const express = require("express");

// this prevents Cross Origin Request errors
const cors = require("cors");

const loadash = require("lodash");

const app = express();

app.use(cors());

const quotes = require("./quotes-with-id.json");

app.get("/", (req, res) => {
  response.send(
    "Kristina's Quote Server!  Ask me for /quotes/random, or /quotes"
  );
});

app.get("/quotes", (req, res) => {
  console.log("/quotes");
  res.send(quotes);
});

app.get("/quotes/random", (req, res) => {
  console.log("/quotes/random");
  res.send(loadash.sample(quotes));
});

app.get("/quotes/search", (req, res) => {
  console.log("/quotes/search");
  let searchValue = req.query.term;
  let filteredArr = quotes.filter((element) =>
    element.quote.toLowerCase().includes(searchValue)
  );
  res.send(filteredArr);
});

app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + process.env.PORT);
});
