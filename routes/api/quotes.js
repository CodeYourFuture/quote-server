const express = require('express');
const router = express.Router();
const _ = require("lodash");

//load the quotes JSON
const quotes = require("../../quotes.json");

// all quotes
router.get('/', (req, res) => {
  res.send(quotes);
});

// single quote
router.get('/random', (req, res) => {
  // res.send(pickFromArray(quotes));
  res.send(_.sample(quotes));
});

router.get('/search', (req, res) => {
  let term = req.query.term;
  let match = quotes.filter(({ quote, author }) => {
    return (
      quote.toLowerCase().includes(term.toLowerCase()) ||
      author.toLowerCase().includes(term.toLowerCase())
    )
  });
  res.send(match);
});

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

module.exports = router;