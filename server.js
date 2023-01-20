// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Hey there, Welcome to Gelson's Quotes of the day!");
});

//START OF YOUR CODE...
app.get("/quotes", function (request, response) {
  response.status(200).json(quotes);
});

app.get("/quotes/random", function (request, response) {
response.status(200).json(pickFromArray(quotes));
});

app.get("/quotes/search", function (request, response) {
  const term = request.query.term;
  const filt = quotes.filter(item =>{
    if(item.quote === term){
      return 
    }
  })
  response.status(200).json(filt);
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
const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
