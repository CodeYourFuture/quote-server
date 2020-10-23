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
  response.send("Ali Haider's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...
//quotes
app.get("/quotes", function (request, response) {
  response.send(quotes);
});
//quotes/random
app.get("/quotes/random", function (request, response) {
  response.send(pickFromArray(quotes));
});
//quotes/search?term=life
   
app.get("/quotes/search", function(request, response) {
  let term = request.query.term.toLowerCase(); 
  response.send(pickTerm(quotes,term));
});

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function pickTerm(arr,word) {
    let  arrLo= arr.map(function(a) { 
    a.quote = a.quote.toLowerCase();
    a.author = a.author.toLowerCase();
    return a;
});
    
  let filteredArr = arrLo.filter((i)=>{
    return i.quote.includes(word) || i.author.includes(word)});
  return filteredArr;
}

//Start our server so that it listens for HTTP requests!
const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
