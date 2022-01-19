// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const { send } = require("express/lib/response");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Roman's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...


app.get("/quotes", (req, res) => {
  res.json(quotes);
});

/*app.get("/quotes/random", (req, res) => {
  const random = pickFromArray(quotes);
  res.send(random);
});*/

app.get("/quotes/random", (req, res) => {
  res.json(pickFromArray(quotes));
});

app.get("/echo", (req, res) => {
  let word = req.query.word;
  res.send(`You have asked for the word: ${word}`)
})

app.get("/quotes/search", (req, res) => {
  let term = req.query.term;
  const filterQuotes = quotes.filter(item => item.quote.toLowerCase().includes(term.toLowerCase()) || item.author.toLowerCase().includes(term.toLowerCase()));
    res.json(filterQuotes);
});

const PORT = process.env.PORT || 5005;
//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Start our server so that it listens for HTTP requests!
const listener = app.listen(PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
/*const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);*/
});
