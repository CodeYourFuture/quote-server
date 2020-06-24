// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const cors = require('cors')

const app = express();
app.use(cors())


//load the quotes JSON
const quotes = require("./quotes-with-id.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Min's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...
app.get("/quotes/random", (req,res)=>{
  res.send(pickFromArray(quotes))
})

app.get("/quotes",(req,res)=>{
  res.json(quotes)
})

app.get("/quotes/search", (req,res)=>{
  console.log(`We are searching for ${req.query.term}`);
  if(req.query.term){
    const searchQuote= quotes.filter(quote=>quote.quote.toLowerCase().includes(req.query.term.toLowerCase()))
    res.send(searchQuote)
  }
  
})
app.get("/quotes/minko",(req,res)=>{
  res.json(quotes)
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
let port = process.env.PORT;
if (port == null || port == "") {
  port = 5555;
}

app.listen(port, () => console.log(`Listening on port ${port}`));
