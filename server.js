// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const cors = require('cors')
const app = express();

app.use(cors())
//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...

// /quotes/search?term=life
// /quotes/search?term=success
// /quotes/search?term=miss


app.get('/quotes/search', (request, response) => {
  let searchQuery = request.query.term.toLowerCase()
  response.send(quotes.filter(quote => 
     quote.quote.toLowerCase().includes(searchQuery) || quote.author.toLowerCase().includes(searchQuery)
  ))
})

app.get("/quotes",(request, response) => {
  response.send(quotes)
})

app.get("/quotes/random", (request, response) => {
  response.send(pickFromArray(quotes))
})
//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

//Start our server so that it listens for HTTP requests!
const listener = app.listen(process.env.PORT || 3001, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
