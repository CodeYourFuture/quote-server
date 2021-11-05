// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const lodash = require("lodash");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");
const randomPickLodash = lodash.sample(quotes);
// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send(
    "Ali's Quote Server!  Ask me for /quotes/random, or /quotes, or /quotes/search"
  );
});

app.get("/quotes", (req, res) => {
  res.json(quotes);
});

app.get("/quotes/random", (req, res) => {
  // const pickFromArray = (arr) => arr[Math.floor(Math.random() * arr.length)]; // change it to use lodash
  res.json(randomPickLodash);
});

// search quotes

app.get("/quotes/search", (req, res) => {
  const found = req.query.term.toLocaleLowerCase();
  if (found) {
    res.json(
      quotes.filter(
        (quote) =>
          quote.author.toLocaleLowerCase().includes(found) ||
          quote.quote.toLocaleLowerCase().includes(found)
      )
    );
  } else {
    res.status(400).send({
      msg: `not found anything with this term ${found}`,
    });
  }
});

//START OF YOUR CODE...

//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//

//Start our server so that it listens for HTTP requests!
const PORT = process.env.PORT || 4000;

const listener = app.listen(PORT, () => {
  console.log(`Your app is listening on port ${PORT}`);
});
