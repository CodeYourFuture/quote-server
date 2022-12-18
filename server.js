// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const cors = require('cors')
const app = express();

//load the quotes JSON
app.use(cors())
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/quotes/random", function (request, response) {
  let quote = pickFromArray(quotes)
  response.send(quote);
});

app.get("/quotes/search", function (request, response) {
  response.send(quotes);
});

app.get("/quotes/search", function (request, response) {
  let results = quotes.filter(q => q.quote.indexOf(request.query.term) > 0);
  response.send(results[0]);
});

let corsOptions = {
  origin: 'https://jscomplete.com',
  optionsSuccessStatus: 200
}



//START OF YOUR CODE...

//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Start our server so that it listens for HTTP requests!
const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
