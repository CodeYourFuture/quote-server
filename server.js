//load the 'express' module 
const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;

//server listens for HTTP requests.
const listener = app.listen(PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});

//load the quotes JSON
const quotes = require("./quotes.json");

//Import ability to host static folders. 
app.use(express.static(path.join(__dirname, "public")));

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

//query.param = term: /quotes/search?term=life
app.get("/quotes/search", (req, res) => {
  res.json(
    quotes.filter((arr) => {
      return (
        arr.quote.toLowerCase().includes(req.query.term.toLowerCase()) ||
        arr.author.toLowerCase().includes(req.query.term.toLowerCase())
      );
    })
  );
});

//sending back search term for concepts sake. 
app.get("/quotes/echo", (req, res) => {
  res.json(`You said ${req.query.term}`);
});





