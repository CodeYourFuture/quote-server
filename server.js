// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const bodyParser = require("body-parser");

// const { fileURLToPath } = require("url"); 
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
app.use(express.json());
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, "./client/build")));
//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Dawit's Quote Server!  Ask me for /quotes/random, or /quotes");
});
// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "./", "views", "index.html"));
// });

// START OF YOUR CODE...
app.get("/quotes", (req, res) => {
  res.json(quotes);
});
// app.get("/quotes", (req, res) => {
//   res.json(quotes).sendFile(path.join(__dirname, "./", "views", "allQuotes.html"));
// });

// app.get("/quotes/random", (req, res) => {
//   let randomQuote = pickFromArray(quotes)
//   res.json(randomQuote);
// });
app.get("/quotes/random", (req, res) => {
  let randomQuote = pickFromArray(quotes)
  res.json(randomQuote);
});
// app.get("/quotes/random", (req, res) => {
//   let randomQuote = pickFromArray(quotes);
//   res
//     .json(randomQuote)
//     .sendFile(path.join(__dirname, "./", "views", "random.html"));
// });
app.get("/quotes/search", (req, res) => {
  let searchQuery = req.query.term;
  console.log(searchQuery)
  const filteredQuotes = quotes.filter(
    (quote) =>
      quote.quote.toLowerCase().includes(searchQuery.toLowerCase()) ||
      quote.author.toLowerCase().includes(searchQuery.toLowerCase())
  );
  res.send(filteredQuotes);
});
// app.get("/quotes/random/search", (req, res) => {
//   let searchQuery = req.query.term;
//   const filteredQuotes = quotes.filter(
//     (quote) =>
//       quote.quote.toLowerCase().includes(searchQuery) ||
//       quote.author.toLowerCase().includes(searchQuery)
//   );
//   res
//     .json(filteredQuotes)
//     .sendFile(path.join(__dirname, "./", "views", "search.html"));
// });

//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Start our server so that it listens for HTTP requests!
app.listen(PORT, function () {
  console.log("Your app is listening on port " + PORT);
});
