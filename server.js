// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();
const port = 3000;

//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send(
    "Mesgna's Quote Server!  Ask me for /quotes/random, or /quotes"
  );
});

//START OF YOUR CODE...
app.get("/quotes", (req, res) => {
  res.json(quotes);
});

app.get("/quotes/random", (req, res) => {
  res.json(pickFromArray(quotes));
});

app.get("/quotes/search", function(req,res){
  let searchTerm = req.query.term
  let result = quotes.filter((elem)=>{
    return elem.quote.includes(searchTerm.toLowerCase())
  })
res.json(result)
})
app.get("/author/search", function(req,res){

  let searchTerm = req.query.term
  let result = quotes.filter((elem)=>{
    return elem.author.toLowerCase().includes(searchTerm.toLowerCase())
  })
  res.send(result)
})

//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Start our server so that it listens for HTTP requests!
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
