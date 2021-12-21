const express = require("express");
const lodash = require("lodash");
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

//***************This is to get a random quotes without using a library************************/

// app.get("/quotes/random", function (request, response) {
// pick a random quote
//   function pickFromArray(arr) {
//     return arr[Math.floor(Math.random() * arr.length)];
//   }
//   response.json(pickFromArray(quotes));
//   console.log(`${pickFromArray(quotes)}`);
// });
// function pickFromArray(arr) {
//   return arr[Math.floor(Math.random() * arr.length)];
// }

app.get("/quotes/search", function (request, response) {
  // search for a word
  function searchArray(arr) {
    let arr1 = arr
      .filter(
        (quote) =>
          quote.quote.toLocaleLowerCase().includes(request.query.term) ||
          quote.author.toLocaleLowerCase().includes(request.query.term)
      )
      .map((quote) => `${quote.quote}  author:${quote.author}         `);
    if (arr1.length > 0) {
      return `SEARCH RESULTS FOR THe WORD :${request.query.term.toUpperCase()} (${arr1})`;
    } else {
      return "Word Not Found";
    }
  }
  response.json(` ${searchArray(quotes)}`);
});

app.get("/echo", function (request, response) {
  // echo search
  response.send(`You said ${request.query.word}`);
});
// challenge ,Use a library to make random picking easier

app.get("/quotes/random", function (request, response) {
  // pick a random quote

  response.json(lodash.sample(quotes));
});
const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
