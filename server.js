// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();
const PORT = process.env.port || 3000;

// const lodash = require("lodash");
// const cors = require("cors");
// app.use(cors());

//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
   
app.get("/", function (request, response) {
  response.send("Bimbola's Quote Server!  Ask me for /quotes/random, or /quotes");
});
app.get("/quotes", function (request,response){
  response.send(quotes);
})

app.get("/quotes/random", function (request, response){
  const randomQuote = pickFromArray(quotes);
response.send(randomQuote);
  
} )

app.get("/quotes/search", (req, res) => {
  const termSearch = req.query.term;
  console.log(termSearch);
  const quote = quotes.filter((ele)=>
  ele.quote.toLowerCase().includes(termSearch.toLowerCase()) ||
  ele.author.toLowerCase().includes(termSearch.toLowerCase()) 
  );
    
    // if(quote.length !== 0){
    //   req.json(quote);
    // }else{
    //   res.status(400).json({msg: "no matches found for your search"})
    // }
    res.send(quote)
    })
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
const listener = app.listen(PORT, function () {
  console.log("Your app is listening on port " + PORT);
});
