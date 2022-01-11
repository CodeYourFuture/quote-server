//load the 'express' module 
const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;

//Import ability to host static folders. 
app.use(express.static(path.join(__dirname, "public")));

//load the quotes JSON
const quotes = require("./quotes.json");

//Register handlers for routes:
app.get("/", function (request, response) {
  response.send("Sinead's Quote Server!  Ask me for random quotes using: /quotes/random, or all quotes by using: /quotes");
});

app.get("/quotes", function (request, response) {
  response.send(quotes);
});

app.get("/quotes/random", function (request, response) {
  response.send(pickFromArray(quotes));
});

//random quote selector 
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//server listens for HTTP requests.
const listener = app.listen(PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});

