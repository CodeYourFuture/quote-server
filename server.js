// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();

app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});


//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Hello! Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...
app.get("/quotes", function (request, response) {
  let resText = ""; 
  quotes.forEach(e => { resText = resText + `QUATE: ${e.quote} \n AUTHOR: ${e.author}`});
  response.send(`Here are the quotes \r\n ${resText}`);
});


app.get("/quotes/random", function (request, response) {
  let oneQuote = pickFromArray(quotes);
  response.send(`The quote is: "${oneQuote.quote}" and the author is ${oneQuote.author}`);
 
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
