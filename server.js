// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");
const { response } = require("express");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
// app.get("/", function (request, response) {
//   response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
// });

//START OF YOUR CODE...
app.get("/quotes", (req, res) => {
  const showQuotes = quotes.map((item) => item.quote);
  res.send(showQuotes);
});

app.get("/quotes/random", (req, res) => {
  res.send(pickFromArray(quotes));
});

app.get("/", (req, res) => {
  res.send("<h2>If you see this page you are on the right path!</h2>");
});

app.get("/quotes/search", (req, res) => {
  if (req.query.term) {
    const searchQuote = quotes.filter(
      (item) =>
        item.quote.toLowerCase().includes(req.query.term.toLowerCase()) ||
        item.author.toLowerCase().includes(req.query.term.toLowerCase())
    );
    return res.send(searchQuote);
  }
  // } else {
  //   res.send(400, "Please provide a term!");
  // }
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
const PORT = process.env.PORT || 5000;
const listener = app.listen(PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
