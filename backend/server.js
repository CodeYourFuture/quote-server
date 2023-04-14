const express = require("express");
const app = express();
const port = 4000;

const cors = require("cors");

app.use(cors());
const lodash = require("lodash"); //a library like lodash to make it simpler to do tasks like picking randomly from an array.
const quotes = require("./quotes.json");

app.get("/", function (request, response) {
  response.send(
    "Zobeir's Quote Server!  Ask me for /quotes/random, or /quotes"
  );
});

app.get("/quotes", (req, res) => {
  res.send(quotes.map((q) => `${q.quote + "   " + q.author}`));
});

app.get(`/quotes/random`, (req, res) => {
  res.send(lodash.sample(quotes));
});

app.get("/quotes/search", function (request, response) {
  response.send(
    quotes.filter(
      (item) =>
        item.quote.toLowerCase().includes(request.query.term.toLowerCase()) ||
        item.author.toLowerCase().includes(request.query.term.toLowerCase())
    )
  );
}); // request.query.searchTerm; in the input element name is = searchTerm
// to toLowerCase? because we want to be case-insensitive
// in search it's better to use filter instead of find(), because we may have more than one option.

/*app.get("/quotes/search", function (request, response) {
  response.send(
    quotes.filter((item) => {
      if (request.query.uservalue ) {
        ( item.quote .toLowerCase().includes(
            request.query.uservalue.toLowerCase() ||
              item.author.toLocaleLowerCase().includes(request.query.uservalue) .toLowerCase() ) ) {
        return item
              }
              else {
                return []
              }
      }
    })
  );
}); */

app.listen(port, () => console.log("Your app is listening on port 4000"));
// const listener = app.listen(process.env.PORT, function () {
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
