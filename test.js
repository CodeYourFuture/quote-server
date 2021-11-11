// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const {request, response} = require("express");
const express = require("express");
const app = express();

const PORT = process.env.port || 3000;
//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", (req, res) =>{
    response.send("Bimbola's Quote Server!  Ask me for /quotes/random, or /quotes");
  // res.send("<h1>Bimbola's Quote Server! </h1><p> Ask me for /quotes/random, or /quotes/search?term={search-this-page}</p>";

});

//START OF YOUR CODE...
app.get("/quotes", (req, res) =>{
res.json(quotes);
});

app.get("/quotes", (req, res) =>{
const termSearch = request.query.term
const quote = quotes.filter((quote)=>
quote.quote.toLowerCase().includes(termSearch.toLowerCase()) ||
quote.author.toLowerCase().includes(termSearch.toLowerCase()) 
);
  
  if(termSearch && quote.length !== 0){
    responses.json(quote);
  }else{
    res.status(400).json({msg: "no matches found for your search"})
  }
  }
//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Start our server so that it listens for HTTP requests!
  app.listen(PORT);
// const listener = app.listen(process.env.PORT, function() {
//   console.log("Your app is listening on port " + listener.address().port);
// });