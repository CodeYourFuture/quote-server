const express = require('express');
const router = express.Router();
//load the quotes JSON
const quotes = require('../../quotes.json')
const lodash = require('lodash')

router.get('/', function (request, response) {
  response.status(200).send("Anza Azam's Quote Server!  Ask me for /quotes/random, /quotes or quotes/search?term=anyword")
})

//START OF YOUR CODE...
//all quotes
const allQuotes = (req, res) => {
  res.status(200).json({ msg: "All Quotes", quotes: quotes })
}
const randomQuote = (req, res) => {
  
  
  let randomSelectedQuote = lodash.sample(quotes)
  res.status(200).json(randomSelectedQuote)
}

const searchQuote = (req, res) => {
  const searchTerm = req.query.term
  const result = quotes.filter(
    quote => {
      let word = searchTerm.toLowerCase();
     return quote['quote'].toLowerCase().includes(word)||
        quote['author'].toLowerCase().includes(word)
    })
  res.status(200).json({ msg: "Searched Quotes are: ", result: result })
}



router.get('/quotes', allQuotes)
router.get('/quotes/random', randomQuote)
router.get('/quotes/search', searchQuote)

module.exports = router;