// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const { request, response } = require("express");
const express = require("express");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...
app.get("/quotes", (request, response) => {
  console.log(quotes);
  response.send({ quotes });
});
app.get("/quotes/random", (req, res) => {
  const randomqutes = pickFromArray(quotes);
  res.send({ randomqutes });
});
app.get("/quotes/search", (request, response) => {
  const termResult = request.query.term || request.query.word;

  const filterterm = quotes.filter((qut) => {
    let isitIncludesName = qut.quote.split(" ").includes(termResult);
    return isitIncludesName;
    // qut.quote.toLocaleLowerCase().includes(termResult.toLocaleLowerCase())
  });

  response.send({ filterterm });
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
const port = process.env.PORT || 9090;
const listener = app.listen(port, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
