// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const { response } = require("express");
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

app.get("/quotes", (req,res)=>{
  res.send(quotes);
})
app.get("/quotes/random", function (req, response) {
  const random = pickFromArray(quotes);
  response.send(random);
});

app.get("/quotes/search", (req, res) => {
  const searchTerm = req.query.term
  if (searchTerm !== undefined){
  const findAnyQuotes= quotes.filter((x) => x.quote.includes(searchTerm));
  res.send(findAnyQuotes);
 }
  req.send(quotes);
});

app.get("/echo", (req,res)=>{
  const echoRoute= req.query.word
  res.send(`You said ${echoRoute}`);
});



//START OF YOUR CODE...

//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
const port = process.env.PORT || 9090;
//Start our server so that it listens for HTTP requests!
const listener = app.listen(port, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
