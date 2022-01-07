// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send(
    "Welcome to Funky Pete's Quote Server! Browse all quotes using: /quotes, get a random quote using: /quotes/random, or search for a specific quote using: search?word='SEARCHWORDHERE' "
  );
});

//START OF YOUR CODE...

app.get("/quotes", (req, res) => {
  res.json(quotes);
});

app.get("/quotes/random", (req, res) => {
  res.json(pickFromArray(quotes));
});

app.get("/quotes/search", (req, res) => {
  const searchTerm = req.query.word;
  res.json(
    quotes.filter((entry) => {
      return (
        entry.quote.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
  );
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
// const listener = app.listen(process.env.PORT, function () {
//   console.log("Your app is listening on port " + listener.address().port);
// });

const PORT = process.env.PORT || 5000;
const listener = app.listen(PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
