
const { req, res } = require("express");
const express = require("express");
const app = express();

const quotes = require("./quotes.json");


app.get("/", function (req, res) {
  res.send(
    "<h1>Welcome to the quote server , Ask me for /quotes/random, or /quotes...!</h1>"
  );
});


app.get("/quotes", function (req, res) {
  res.json([quotes]);
});

app.get("/quotes/random", (req, res) => {
  const pickedRandomQuotes = pickFromArray(quotes);
  res.json([pickedRandomQuotes]);
});


//Level 2 Challenge - allow quote searches!
app.get("/quotes/search", (req, res) => {
  const searchTermForQuotes = (searchQTerm) => {
    const lowerCasedSearchQ = searchQTerm.toLowerCase();
    return quotes.filter(
      (element) =>
        element.quote.toLowerCase().includes(lowerCasedSearchQ) ||
        element.author.toLowerCase().includes(lowerCasedSearchQ)
    );
  };
  res.json([searchTermForQuotes(request.query.term)]);
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
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});

