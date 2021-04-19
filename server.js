// server.js
// This is where your node app starts

//load the 'express' module which makes writing web servers easy
const express = require("express");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", (req, res) => {
  res.send("Biruk's Quote Server!  Ask me for /quotes,  quotes/random or /quotes/search?term=[your-search-term]");
});

//START OF YOUR CODE...
app.get('/quotes', (req, res) => {
  res.send(quotes);
})

app.get('/quotes/random', (req, res) => {
  res.send(pickFromArray(quotes));
})

app.get('/quotes/search', (req, res) => {
  const filtered = quotes.filter(quote => quote.quote.toLocaleLowerCase().includes(req.query.term.toLocaleLowerCase()) || quote.author.toLocaleLowerCase().includes(req.query.term.toLocaleLowerCase()));
  const letters = /^[A-Za-z]+$/;
  if (req.query.term.indexOf(' ') !== -1 || !req.query.term.match(letters)) {
    res.status(400).json({message: "Please make sure your search term is a single keyword and contains no characters rather than letters."});
  } else if (filtered.length < 1){
    res.status(400).json({message: "Please try another keyword."});
  } else {
    res.send(filtered);
  }
  
})
//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
let port = process.env.PORT;
if (port === null || port === "") {
  port = 8000;
}
// app.listen(port);
//Start our server so that it listens for HTTP requests!
const listener = app.listen(port, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
