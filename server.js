const express = require("express");
const app = express();
const lodash = require("lodash");
const cors = require("cors");

app.use(cors());

const quotes = require("./quotes.json");

app.get("/", function (request, response) {
  response.send(
    "Humail's Quote Server!  Ask me for /quotes/random, or /quotes"
  );
});

app.get("/quotes", function (request, response) {
  response.send(quotes);
});

app.get("/quotes/random", function (request, response) {
  response.send(lodash.sample(quotes));
});

app.get("/quotes/search", function (request, response) {
  let searchTerm = request.query.term.toLowerCase();
  response.send(
    quotes.filter((element) => {
      if (
        element.quote.toLowerCase().includes(searchTerm) ||
        element.author.toLowerCase().includes(searchTerm)
      ) {
        return element;
      }
    })
  );
});

function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
