//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");
const arr = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)

//info text
app.get("/", function (request, response) {
  response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//all quotes
app.get("/quotes", (req, res) => {
  res.json(quotes)
})

//one quote
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
app.get("/quotes/random", function (req, res) {
  res.send(pickFromArray(arr));
});

//Start our server so that it listens for HTTP requests!
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Your app is listening on port ${PORT}`))