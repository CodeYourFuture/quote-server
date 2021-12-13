const express = require("express");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");

app.get("/", function (request, response) {
  response.send(
    "<h1>Welcome to the quote server , Ask me for /quotes/random, or /quotes...!</h1>"
  );
});
app.get("/quotes", function (request, response) {
  response.json(
    quotes.map((item) => {
      return `${item.quote}  Author: ${item.author}`;
    })
  );
});

app.get("/quotes/random", function (request, response) {
  function pickFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  response.json(pickFromArray(quotes));
  console.log(`${pickFromArray(quotes)}`);
});
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Start our server so that it listens for HTTP requests!
const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
