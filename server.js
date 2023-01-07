// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const { response } = require("express");
const express = require("express");
const app = express();

//load the quotes JSON
const Quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)

//START OF YOUR CODE...
app.get("/quotes", function (request, response) {
  response.send(Quotes);
});

const randomQuote = pickFromArray(Quotes);
app.get("/quotes/random", function (request, response) {
  response.send(randomQuote);
});



//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

app.get("/quotes/search", (request, response) => {
  const term = request.query.term.toLowerCase();
  const filterItem = Quotes.filter(
    (eachquote) =>
      eachquote.quote.toLowerCase().includes(term) ||
      eachquote.author.toLowerCase().includes(term)
  );
  response.send(filterItem);
});



app.get("/echo", (request, response)=> {
  const word = request.query.word
  response.send(`You said ${word}`);
})


//...END OF YOUR CODE

//Start our server so that it listens for HTTP requests!
const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
