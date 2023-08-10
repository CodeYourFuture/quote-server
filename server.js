// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const lodash = require("lodash");
const app = express();

const PORT =9000;

//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("siver's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...
app.get("/quotes", function (req, res){
  res.send(quotes)
})



app.get("/quotes/random", function (req, res) {
res.send(lodash.sample(quotes))
})
app.get("/quotes/search", function(req, res) {
  const term = req.query.term.toLowerCase();
  const searchResult=quotes.filter((quote)=>
  quote.quote.toLowerCase().includes(term) ||
  quote.author.toLowerCase().includes(term)
  );
  res.json(searchResult);
  
   
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
const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
