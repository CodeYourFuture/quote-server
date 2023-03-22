const express = require("express");
const router = express.Router();

const quotesController = require("../controllers/quotesController");

router.get("/", quotesController.getAllQuotes);

router.get("/random", quotesController.getRandomQuote);

module.exports = router;
