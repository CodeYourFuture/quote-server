const express = require("express");
const router = express.Router();

const quotes = require("./quotes.json");

const message =
  "Here are commands to help you navigate on the server: '/' Start page, '/quotes' Get all quotes, '/quotes/random' Get a random quote";

function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

router.get("/", (req, res, next) => {
  res.json({ message: message });
});

router.get("/quotes", (req, res, next) => {
  res.json(quotes);
});

router.get("/quotes/random", (req, res, next) => {
  res.json(pickFromArray(quotes));
});

router.get("/quotes/search", (req, res, next) => {
  const searchTerm = req.query.term.toLocaleLowerCase();
  const result = quotes.filter(({ quote }) =>
    quote.toLocaleLowerCase().includes(searchTerm)
  );
  res.json(result);
});

module.exports = router;
