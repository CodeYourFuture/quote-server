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
  res.send(quotesWithId.find((quote) => quote.id === Number(req.params.id)));
});

function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

module.exports = router;
