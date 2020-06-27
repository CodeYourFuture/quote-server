// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();
const cors = require("cors");
const _ = require("lodash");
app.use(cors());

//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send(
    "Welcome Ferhat's Quote Server!  Ask me for /quotes/random, or /quotes"
  );
});
app.get("/quotes", (req, res) => {
  const allQuotes = quotes.map((item) => item.quote);
  res.send(allQuotes);
});
app.get("/quotes/random", (req, res) => {
  res.send(_.sample(quotes));
});

app.get("/quotes/search", (req, res) => {
  if (req.query.term) {
    const searchQuote = quotes.filter(
      (item) =>
        item.quote.toLowerCase().includes(req.query.term.toLowerCase()) ||
        item.author.toLowerCase().includes(req.query.term.toLowerCase())
    );
    res.send(searchQuote);
  } else {
    res.send(400, "No term parameter provided !");
  }
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}
app.listen(port);

//START OF YOUR CODE...

//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Start our server so that it listens for HTTP requests!
// const listener = app.listen(process.env.PORT, function () {
//   console.log("Your app is listening on port " + listener.address().port);
// });
