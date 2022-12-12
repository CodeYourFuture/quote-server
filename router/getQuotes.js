const express = require("express");
const router = express.Router()
const quotes = require("../quotes.json");



router.get("/", async (req, res) => {
  try {
    let quotesList = quotes;
    res.json(quotesList);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;