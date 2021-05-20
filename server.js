// server.js
// This is where your node app starts
//first commit
//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)

app.get("/", (request, response) =>  {
  response.send("<h1>Ali Nosratipour's Quote Server!<br>  Ask me for /quotes/random, or /quotes</h1>");
});

app.get("/quotes", (request, response) =>  {
  response.send(quotes);
});

app.get("/quotes/random", (request, response) =>  {
  let result = pickFromArray(quotes);
  response.send(result)
});



app.get("/quotes/search",  (request, response)=> {
  let term = request.query.term.toLowerCase();
  let result = searchResult(quotes, term);
  response.send(result);
});

// filter's the searchn term
const  searchResult = (quotes, param) =>{
      const filtered =  quotes.filter( item => {
      const {quote,author}= item;
      return  quote.toLowerCase().includes(param) || author.toLowerCase().includes(param);
      });     
    return filtered;
  }

const PORT = process.env.PORT || 3000;

//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)

function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
//const PORT = process.env.PORT || 3000;
//Start our server so that it listens for HTTP requests!
const listener = app.listen(PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
