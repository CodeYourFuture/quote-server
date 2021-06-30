// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");
// console.log(quotes);

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...

// level 1
app.get("/quotes", function(req, res) {
   res.send(quotes);
})

app.get("/quotes/random", function(req, res) {
  res.send(pickFromArray(quotes));
});

// level 2
app.get("/quotes/search", function(req, res) {
  let word = req.query.word;
  if(word) {
    const searchWord = quotes.filter(word => {
      return (word.quote.toLowerCase().includes(word.toLowerCase()) ||
       word.author.toLowerCase().includes(word.toLowerCase()));
    });
    res.send(searchWord);
  } else {
    res.send([]);
  }
});
//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(alex) {
  return alex[Math.floor(Math.random() * alex.length)];
}


//Start our server so that it listens for HTTP requests!
// const listener = app.listen(process.env.PORT, function () {
//   console.log("Your app is listening on port " + listener.address().port);
// });
const PORT=5000;
const listener = app.listen(PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
