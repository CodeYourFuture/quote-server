// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();
const lodash = require("lodash");
const cors = require("cors")

//load the quotes JSON
const quotes = require("./quotes.json");
app.use(cors());
app.use(express.json());
// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("seble's Quote Server!  Ask me for /quotes/random, or /quotes");
});

app.get("/quotes", function (request, response) {
  response.json(quotes);
});

app.get("/quotes/search", function (req, response) {
  let quotesCopy = req.query.term;
  console.log(quotesCopy)

  const filteredQuotes = quotes.filter(
    (quote) =>
      quote.quote.toLowerCase().includes(quotesCopy.toLowerCase()) ||
      quote.author.toLowerCase().includes(quotesCopy.toLowerCase())
      
  );
  response.send(filteredQuotes);
});

app.get("/quote/random", function (request, response) {
   let selected = pickFromArray(quotes);
  response.json(selected)
   
  // response.send(lodash.sample(quotes));
});

//START OF YOUR CODE...
app.get("/quotes/random", (req, res) => {
  let selected = pickFromArray(quotes)
  res.json(selected)
   .sendFile(path.join(__dirname, "./", "views", "random.html"));
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
const listener = app.listen(3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
