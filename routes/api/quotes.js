const express = require('express');
const router = express.Router();
//load the quotes JSON
const quotes = require('../../quotes.json')
const lodash = require('lodash')

router.get('/', function (request, response) {
  response.send("Neill's Quote Server!  Ask me for /quotes/random, /quotes or quotes/search?term=anyword")
})

//START OF YOUR CODE...
//all quotes
const allQuotes = (req, res) => {
  res.send({msg:"All Quotes",quotes: quotes })
}
const randomQuote = (req, res) => {
  //const randomPickedQuote = pickFromArray(quotes)
  let randomSelectedQuote = lodash.sample(quotes)
  res.send(randomSelectedQuote)
}

const searchQuote = (req, res) => {
  const searchTerm = req.query.term
  const result = quotes.filter(
    quote =>
      quote['quote'].toLowerCase().includes(searchTerm.toLowerCase()) ||
      quote['author'].toLowerCase().includes(searchTerm.toLowerCase())
  )
  res.send({ msg: "Searched Quotes are: ", result: result })
}
function pickFromArray (arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

router.get('/quotes', allQuotes)
router.get('/quotes/random', randomQuote)
router.get('/quotes/search', searchQuote)

module.exports = router;