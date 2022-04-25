const express = require("express");
const router = express.Router();

//load the quotes JSON
const quotes = require("../../quotes.json");
const quotesWithId = require("../../quotes-with-id.json");

router.get("/", (req, res) => res.json(quotes));

router.get("/:id", (req, res) => {
  res.json(quotesWithId.filter((quote) => quote.id === Number(req.params.id)));
});

module.exports = router;
