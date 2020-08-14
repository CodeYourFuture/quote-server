// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const lodash = require("lodash");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");
const Quotes = require("./quotes-with-id.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Leida's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...
//Add a /quotes route to return all quotes a JSON
app.get("/quotes", (request, response) => {
  response.json(quotes);
});
//Add a /quotes/random route to return one of the quotes picked randomly
// app.get("/quotes/random", (request, response) => {
//   response.json(pickFromArray(quotes));
// });
app.get("/quotes/random", (request, response) => {
  response.json(lodash.sample(quotes));
});

//Allow the user to search the list of quotes

app.get("/quotes/search", function (request, response) {
  let term = request.query.term;

  const searched = quotes.filter((q) =>
    (q.quote + q.author).toLowerCase().includes(term.toLowerCase())
  );

  if (searched !== undefined) {
    response.json(searched);
  } else {
    response
      .status(404)
      .send("No quote match your search. Please add another term!");
  }
});

app.get("/quotes/echo", function (request, response) {
  let word = request.query.word;
  response.send(`You typed ${word}`);
});

// Get one quote based on id

app.get("/quotes/:id", (request, response) => {
  const id = Number(request.params.id);
  const idSearched = Quotes.filter((q) => q.id === id);
  const found = Quotes.some((q) => q.id === id);

  if (found) {
    response.json(idSearched);
  } else {
    response
      .status(404)
      .send(
        `No quotes match the id ${id}. Please try id numbers between 0 and 101!`
      );
  }
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
const listener = app.listen(process.env.PORT || 9090, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
