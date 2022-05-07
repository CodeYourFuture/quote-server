//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");

//load the quotes JSON
const quotes = require("./quotes.json");

const port = process.env.PORT || 8080;

const corsOptions = {
  origin: process.env.ORIGIN || "http://localhost:3000",
};

app.use(cors(corsOptions));

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", (request, response) => {
  response.send("Mahri's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...
app.get("/quotes", (request, response) => {
  response.send(quotes);
});

app.get("/quotes/random", (request, response) => {
  response.send(pickFromArray(quotes));
});

///quotes/search?term=life
app.get("/quotes/search", (request, response) => {
  let searchQuery = request.query.term;
  let filteredQuote = quotes.filter((obj) => {
    return (
      obj.quote.toLowerCase().includes(searchQuery.toLowerCase()) ||
      obj.author.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });
  response.send(filteredQuote);
});

//parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

app.listen(port, () => console.log(`Example app listening on ${port} port!`));
