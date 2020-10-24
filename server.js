// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const { random } = require("lodash");
const app = express();
const lodash = require('lodash');
var cors = require('cors')
app.use(cors())

//load the quotes JSON
let quoteList=require("./quotes.json");
let quotes=require("./quotes.json");
lodash.sample(quoteList);

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
});

app.get("/quotes", function (request, response) {
  response.json(quotes);
});

app.get("/quotes/random", function (request, response) {
  response.send(pickFromArray(quotes));
});
//    `/quotes/search?term=life`
//START OF YOUR CODE...
app.get(`/quotes/search`, function (request, response) {
  let searchItem=request.query.term;
  
  let searchedquote=quoteList.filter(quoteObject=>quoteObject.quote.toLowerCase().includes(searchItem) || quoteObject.author.toLowerCase().includes(searchItem) );
  response.json(searchedquote);
  // console.log("Hello Kid")
});

app.get("/echo", function (request, response) {
  let searchItem=request.query.word;
  response.send("Your Said "+searchItem);
});


app.get("/lodashtesting", function (request, response) {
  let searchItem=request.query.word;
  let randomquote = lodash.sample(quoteList);
  response.json(randomquote);
});

//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Start our server so that it listens for HTTP requests!
// const listener = app.listen(3000, function () {
//   console.log("Your app is listening on port 3000 ");
// });

app.listen(8080)
