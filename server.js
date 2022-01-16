// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const { request } = require("express");
const express = require("express");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
// app.get("/", function (request, response) {
//   response.send("Mireille's Quote Server!  Ask me for /quotes/random, or /quotes");
// });

// //START OF YOUR CODE...

// //return all of the quotes
// app.get('/quotes', function (request, response) {
//   response.send(quotes);
// });

// app.get('/quotes/random', function (request, response) {
//   response.send(pickFromArray(quotes));
// });

//challenge 2

app.get('/search', function (request, response) {
  let word = request.query.word.toLowerCase();
  response.json(quotes.filter((quot) => quot.quote.includes(word)));
});

app.get('/echo', function (request, response) {
  let word = request.query.word.toLowerCase();
  response.send(`You said ${word}`);
});

app.get('/', function (request, response) {
  response.send('You need to request /search?word=whatever');
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
