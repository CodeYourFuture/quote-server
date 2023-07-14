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
  response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...
app.get("/quotes", (req, res) => {
  res.send({ quotes });
});

app.get("/quotes/search", (req, res) => {
  const searchTerm = req.query.term;
  const filteredQuotes = quotes.filter((quote) => {
    const searchQuote = quote.quote.toLowerCase();
    const searchAuthor = quote.author.toLowerCase();
    return searchQuote.includes(searchTerm.toLowerCase()) || searchAuthor.includes(searchTerm.toLowerCase());
  });
  res.json(filteredQuotes);
});


/* app.use("/quotes", (req, res, next) => {
  const filters = req.query;
  const filteredUsers = quotes.filter((user) => {
    let isValid = true;
    for (key in filters) {
      console.log(key, user[key], filters[key]);
      isValid = isValid && user[key] == filters[key];
    }
    return isValid;
  });
  res.send(filteredUsers);
}); */

app.get("/quotes/random", (req, res) => {
  res.send(pickFromArray(quotes));
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
/* const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
}); */

app.listen("3000", () =>
  console.log("Server is listening on port 3000. Ready to accept requests!")
);
