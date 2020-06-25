// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const lodash= require("lodash");
const cors = require("cors");
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

app.get("/quotes", (request, response)=>{
  response.send(quotes)
});

app.get("/quotes/random", (request, response)=>{
  response.send(lodash.sample(quotes))
});

app.get("/quotes/search", (req, res)=>{
  console.log(`we,re searching for a ${req.query.term} in quotes `)
  if(req.query.term){
    const searchedQuotes = quotes.filter(quoteObj =>{
      return (
        quoteObj.quote.toLowerCase().includes(req.query.term.toLowerCase()) || 
        quoteObj.author.toLowerCase().includes(req.query.term.toLowerCase())
      )
    })
    res.send(searchedQuotes)
  }else{
    res.send(400, "no term parameter provided!");
  }
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
