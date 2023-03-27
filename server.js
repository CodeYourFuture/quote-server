// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const PORT = 3000;

//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", (req, res) => {
  res.send("Zahraa's Quote Server! Ask me for /quotes/random, or /quotes");
});

// request ( MIDDLEWARE ) response

//START OF YOUR CODE...

app.get("/quotes", (req, res) => {
  // res.send(quotes);
  res.json(quotes);
});

app.get("/quotes/random", (req, res) => {
  const quote = pickFromArray(quotes);
  console.log(quote);
  // res.send(quote);
  res.json(quote);
});

app.get("/quotes/search", (req, res) => {
  // /quotes/search?term=life
  // console.log(req.query); // { term : "life" }
  const searchTerm = req.query.term; // "life"
  // console.log(searchTerm);

  const matchedQuotes = quotes.filter(
    (x) =>
      x.quote.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      x.author.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  res.json(matchedQuotes);
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
app.listen(PORT, () => {
  console.log("Your app is listening on port " + PORT);
});
