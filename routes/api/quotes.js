const express = require("express");
const router = express.Router();

//load the quotes JSON
const quotes = require("../../quotes.json");
const quotesWithId = require("../../quotes-with-id.json");

router.get("/", (req, res) => res.json(quotes));

router.get("/random", (req, res) => {
  res.send(pickFromArray(quotesWithId));
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id)
  const quote = quotesWithId.find((quote) => quote.id === id)
  res.send(quote);
});

function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

module.exports = router;
