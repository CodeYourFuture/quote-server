// const express = require("express");

// const lodash = require("lodash");
// const app = express();

// const quotes = require("./quotes.json");

// app.get("/", function (request, response) {
//   response.send(
//     "Madiha's Quote Generator!  Ask me for /quotes/random, or /quotes"
//   );
// });

// app.get("/quotes", function (request, response) {
//   response.json(quotes);
// });

// app.get("/quotes/random", function (request, response) {
//   response.send(lodash.sample(quotes));
// });

// //Start our server
// const listener = app.listen(process.env.PORT || 3000, function () {
//   console.log("Your app is listening on port " + listener.address().port);
// });

// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");

app.get("/", function (request, response) {
  response.send(
    `<h1> Welcome to Amanuel's Quote Server!<h1>
    <p> To get all quotes  use: /quotes </p>
    <p> To get random quotes  use: /quotes/random</p>
    <p> To search any term in the  quotes or author use /quotes/search?term=search-term </p>
    `
  );
});

//all quotes route
app.get("/quotes", function (request, response) {
  response.json(quotes);
});
// random quotes route
app.get("/quotes/random", function (request, response) {
  response.json(pickFromArray(quotes));
});

//  quotes search route
app.get("/quotes/search", function (request, response) {
  let term = request.query.term;

  if (!term) {
    console.log("I am undefined");
    return response.sendStatus(404);
  }
  term = term.toLowerCase();
  let filteredQuotes = quotes.filter(
    (words) =>
      words.quote.toLowerCase().includes(term) ||
      words.author.toLowerCase().includes(term)
  );
  response.json(filteredQuotes);
});

function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Start our server so that it listens for HTTP requests!
const listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
