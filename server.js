const express = require("express");
const app = express();
const port = 3000;
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
  res.send(pickFromArray(quotes));
});

app.get("/quotes/search", function (request, response) {
  // request.query.searchTerm; in the input element name is = searchTerm
  // to toLowerCase? because we want to be case in sensetive
  // in search it's better to use filter instead of find(), because we may have more than one option.
  response.send(
    quotes.filter(
      (item) =>
        item.quote
          .toLowerCase()
          .includes(request.query.searchTerm.toLowerCase()) ||
        item.author
          .toLowerCase()
          .includes(request.query.searchTerm.toLowerCase())
    )
  );
});

/*res.send(quotes.filter((val) => {
            if (word === "") {
              return val;
            } else if (
              val.quote.toLowerCase().includes(word.toLowerCase())) {
              return val;
            }
          })); */

app.listen(port, () => console.log("Your app is listening on port 3000"));
// const listener = app.listen(process.env.PORT, function () {
//   console.log("Your app is listening on port " + listener.address().port);
// });

function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
