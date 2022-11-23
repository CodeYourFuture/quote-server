// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
app.get("/", (req, res) => {
  res.send("Ele's Node Challenge");
})
//   /quotes            - Should return all quotes (json)
app.get("/quotes", (req, res) =>{
  res.send(quotes)
})
//   /quotes/random     - Should return ONE quote (json)

function pickFromArray(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

app.get("/quotes/random", function (request, response) {
  response.send(pickFromArray(quotes));
});

// app.get("/quotes/:quote", function (request, response) {
//   let quote = parseInt(request.params.quote);
//   response.send(quotes.find(element => element.quote ===quote));
// });

app.get('/quotes', (req, res) => {
  if (req.query.quote) {
      const search = req.query.quote.toLowerCase();
      const matched = quotes.filter(quote => quote.toLowerCase().includes(search));
      res.send(matched);
  }
  else {
      res.send(quotes);
  }
});


//START OF YOUR CODE...

//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//


//Start our server so that it listens for HTTP requests!
const listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
