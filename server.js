// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const { response } = require("express");
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Aaishah's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...
app.get('/quotes', (request, response) => {
  response.json(quotes)
})

app.get('/quotes/random', (req, res) => {
  res.json(pickFromArray(quotes))  
})

app.get('/quotes/searched', (req, res) => {
  const searchedQuote = req.query.search
  const randomQuotes = quotes.filter((obj) => {
    if ((obj.quote.toLowerCase().includes(searchedQuote.toLowerCase())) ||(obj.author.toLowerCase().includes(searchedQuote.toLowerCase())) ){
      return obj;
    }
  })
  res.json(randomQuotes)

})
//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Start our server so that it listens for HTTP requests!
// const listener = app.listen(process.env.PORT, function () {
//   console.log("Your app is listening on port " + listener.address().port);
// });
app.listen(port, () => {
  console.log("Your app is listening on port " + port);
})
