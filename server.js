const express = require("express");
const req = require("express/lib/request");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");

app.get("/", function (request, response) {
  response.send(
    "<h1>Welcome to the quote server , Ask me for /quotes/random, or /quotes...!</h1>"
  );
});
app.get("/quotes", function (request, response) {
  //get all the quotes
  response.json(
    quotes.map((item) => {
      return `${item.quote}  Author: ${item.author}`;
    })
  );
});

app.get("/quotes/random", function (request, response) {
  // pick a random quote
  function pickFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  response.json(pickFromArray(quotes));
  console.log(`${pickFromArray(quotes)}`);
});
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

app.get("/quotes/search", function (request, response) {
  // search for a word
  function searchArray(arr) {
    let arr1 = arr.filter(
      (quote) =>
        quote.quote.toLocaleLowerCase().includes(request.query.term) ||
        quote.author.toLocaleLowerCase().includes(request.query.term)
    );
    if (arr1.length > 0) {
      return arr1.map((quote) => {
        `      ${quote.quote}  ${quote.author}`;
      });
    } else {
      return `${request.query.term}  not found`;
    }
  }
  response.json(
    `YOU ARE SEARCHING FOR THE WORD: ((${request.query.term})) ${searchArray(
      quotes
    )}`
  );
});

app.get("/echo", function (request, response) {
  // echo search
  response.send(`You said ${request.query.word}`);
});

const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});

