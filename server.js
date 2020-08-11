// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const _ = require("lodash");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)

app.get("/", (request, response) =>{
  response.send("Nawal's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...
app.get("/quotes", (request, response)=>{
response.send(quotes)
})

// app.get("/quotes/random", (request, response)=>{
//   response.send(pickFromArray(quotes))
// })

app.get("/quotes/random", (request, response)=>{
  response.json(_.sample(quotes))
})

//Level 2

//- `/quotes/search?term=life`
//`/quotes/search?term=success`
//`/quotes/search?term=miss`

app.get("/quotes/search", (request, response)=>{   //decide route 
  // searching query called term
  let searchTerm = request.query.term 
let result;           
  // checking for value of the term
if(!searchTerm){
  response.send("Please add a valid term")
}
result = quotes.filter(term => term.quote.includes(searchTerm))
if(result.length < 1){
  response.send("There is no quote with this term")
}
response.send(result)
})



//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

app.get("/*", (request, response) => {
  
  response.send("The route is not found");
});
//Start our server so that it listens for HTTP requests!
const listener = app.listen(process.env.PORT || 3001, function () {
  console.log("Your app is listening on port " + listener.address().port) 
});
