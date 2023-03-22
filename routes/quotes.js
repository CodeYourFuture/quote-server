//const errorHandler = require("../middleware/errorHandler");
const express = require("express");
const router = express.Router();

const quotesController = require("../controllers/quotesController");

router.get("/", quotesController.getAllQuotes);

router.get("/random", quotesController.getRandomQuote);

router.get("/search", quotesController.getSearchQuote);

/* // removed error handler an not working as expected 
router.use(errorHandler); */
module.exports = router;
