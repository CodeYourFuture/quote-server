// server.js
// This is where your node app starts
//**********To Start the server**********/
//**********npm run dev*********//
///////change this in the package.json/////
/*  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
*/

////installing nodemon service to restart the node server in every change.
////npm install nodemon

//load the 'express' module which makes writing webservers easy
const express = require("express");
const cors = require("cors");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");

app.use(cors());

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/quotes", function (request, response) {
  response.send(quotes);
});

app.get("/quotes/random", function (request, response) {
  response.send(pickFromArray(quotes));
});

app.get("/", function (request, response) {
  response.send("Israel's Quote Server!  Ask me for /quotes/random, or /quotes");
});

app.get("/quotes/search", function (request, response) {
  let word = request.query.word;  
  const quoteSearchResult = quotes.some(search => { search.quote.toLowerCase === word.toLowerCase })




//   })
//   const searchQuotes = quotes.filter((filteredQuote) => {
//     let searchToLowerCase = req.query.term.toLowerCase();
//     if (
//       filteredQuote.quote.toLowerCase().includes(searchToLowerCase) /*&&  
//       filteredQuote.author.toLowerCase().includes(searchToLowerCase)*/
//     ) {
//       return true;
//     } else {
//       return false;
//     }
//   });
//   response.send(searchQuotes);
// });

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFpromise
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Start our server so that it listens for HTTP requests!
const listener = app.listen(4000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});