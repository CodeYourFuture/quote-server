// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require('express')
const lodash = require('lodash')
const cors = require('cors')
const app = express()
app.use(cors({ origin: '*' }))

//load the quotes JSON
const quotes = require('./quotes.json')

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get('/', (request, response) => {
  response.send(
    "Michelle's Quote Server!  Ask me for /quotes/random, or /quotes"
  )
})

//START OF YOUR CODE...
app.get('/quotes', (req, res) => {
  res.json(quotes)
})

app.get('/quotes/random', (req, res) => {
  res.json(lodash.sample(quotes))
})

app.get('/quotes/search', (req, res) => {
  let qoutesCopy = quotes
  const term = req.query.term

  term &&
    res.json(
      qoutesCopy.filter(
        (q) =>
          q.quote.toLowerCase().includes(term) ||
          q.author.toLowerCase().includes(term)
      )
    )
})
//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//

//Start our server so that it listens for HTTP requests!
const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port)
})
