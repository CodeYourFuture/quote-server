// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");  // create run npm install to create the node's PACKAGE
const app = express();

const PortNumber= process.env.PORT || 3000;

//load the quotes JSON
const quotes = require("./quotes.json");
//console.log(quotes);

// in order to use an external file in node you must require it
const quoteWithIdJson= require('./quotes-with-id.json');
const { query } = require("express");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", (request, response) => {
  response.send("<h1>Rodrigue's Quote Server!  Ask me for /quotes/random, or /quotes</h1>");
});

//START OF YOUR CODE...
// /quotes router
app.get("/quotes", (requestObject, responseObject) => {
  responseObject.json(quotes);
});


// quotes/random router
app.get("/quotes/random", function (request, response) {
  response.send(pickFromArray(quotes));
});


// quotes/search router

app.get("/quotes/search", (request, response) =>{
  const search= request.query.term;
  if (search){
    const searchWord = quotes.filter(wordUse => {
      return(
        wordUse.quote.toLowerCase().includes(search) || 
        wordUse.author.toLowerCase().includes(search)
      );
    })
    response.send(searchWord);
  }
  else{
    response.json("Enter the correct word to search")
  }
})

// const search= (arrWords) => {
//   const searchWord= query.term;
//   return arrWords.filter(wordUse => 
//     if(wordUse.toLowerCase().includes(searchWord) ||wordUse.author.toLowerCase().includes(searchWord)){
//       return arrWords;
//     }
//   )}
  // ;
  //response.json(search(quotes));

app.listen(PortNumber, () => {
  console.log(`The server is listening to port ${PortNumber}`)
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
// const listener = app.listen(process.env.PORT, function () {
//   console.log("Your app is listening on port " + listener.address().port);
// });
