// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy

const express = require("express");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  console.log("Hellloooooo!!!!!!")
  let searchQuery = request.query.search;
    if(searchQuery){
    response.send(quotes.filter((quote) => quote.quote.includes(searchQuery)));
  } else {
    response.send(
      "Anna's Quote Server!  Ask me for /quotes/random, or /quotes"
    );
  }
});

//START OF YOUR CODE...
app.get("/quotes", (req, res) => res.send(quotes));

app.get("/quotes/random", (req, res) => {
  let random = Math.floor(Math.random() * quotes.length);
  res.send(quotes[random])
})

app.get("/quotes/search", (req, res) => {
  let searchValue = req.query.word
  let searchTerm = req.query.term 
  if(searchValue){
    res.send(quotes.filter((quote) => quote.quote.includes(searchValue)));
  } 
  if(searchTerm){
    res.send(quotes.filter((quote) => quote.quote.includes(searchTerm)));
  }
  
})

app.get("/echo", (req, res) => res.send(`You said "${req.query.word}"`))

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
