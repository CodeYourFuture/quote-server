// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();

var cors = require('cors')

app.use(cors()) // Use this after the variable declaration

//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Well come to the web page quoets");
});

//START OF YOUR CODE...
app.get("/quotes", function (req, res) {
  res.json(quotes);
});

app.get("/quotes/random", function (req, res) {
  res.json(pickFromArray(quotes));
});

app.get("/search", function (req, res) {
  const { term } = req.query;

  let result = quotes.filter((element) => {
    return (
      element.quote.toLowerCase().includes(term.toLowerCase()) ||
      element.author.toLowerCase().includes(term.toLowerCase())
    );
  });

  res.json(result);
});


//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

 const PORT = process.env.PORT || 38623;

// app.listen(PORT, () => console.log(`server started on prot ${PORT}`));

//Start our server so that it listens for HTTP requests!
const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().PORT);
});
