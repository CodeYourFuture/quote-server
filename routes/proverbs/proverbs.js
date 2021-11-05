const express = require("express");
const router = express.Router();
const proverbs = require('../../proverbs.json');
const lodash = require('lodash');

// Proverbs Get Response
router.get("/", function (req, res) {
  res.json(proverbs);
});

// proverbs/random Get Response
router.get("/random", function (req, res) {
  const randomProverb = lodash.sample(proverbs);
  res.json(randomProverb);
});

// proverbs Search Get Response
router.get("/search", function (req, res) {
  const searchTerm = req.query.term.toLowerCase();
  const loweredCaseQuotes = proverbs.map(({ proverb, origin }) => {
    const loweredCaseProverb = proverb.toLowerCase();
    const loweredCaseOrigin = origin.toLowerCase();
    return { loweredCaseProverb, loweredCaseOrigin };
  });
  const searchedProverbs = [];
  loweredCaseQuotes.forEach((q, i) => {
    if (
      q.loweredCaseProverb.includes(searchTerm) ||
      q.loweredCaseOrigin.includes(searchTerm)
    ) {
      searchedProverbs.push(proverbs[i]);
    }
  });

  res.json(searchedProverbs);
});

module.exports = router;


