// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();

//load the quotes JSON 
      
const quotes = require("./quotes.json");
const PORT = process.env.PORT || 8009;


// Now register handlers for some routes:
//- Return some helpful welcome info (text)
app.get("/", (req, res) => {
  res.send("Welcome to the quotes server!");
});



// app.get("/", function (request, response) {
//   response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
// });



//START OF YOUR CODE...
//- Should return all quotes (json)
app.get("/quotes", (req, res) => {
  res.json(quotes);
}); 

  app.get("/quotes", function (request, response) {
    response.send("All quotes: " + JSON.stringify(quotes));
  });

  //   /quotes/random     - Should return ONE quote (json)

  app.get("/quotes/random", function (request, response) {
    response.send("Random quote: " + JSON.stringify(quotes[Math.floor(Math.random() * quotes.length)]));
  });

  //   /quotes/:id        - Should return ONE quote (json)
  // app.get("/quotes/:id", function (request, response) {
  //   response.send("Quote with id: " + request.params.id + " is " + JSON.stringify(quotes[request.params.id]));
  // });

  // receive a search term from the client and return the matching quotes (json) 
  // app.get("/quotes/search/:term", function (request, response) {
  //   let searchTerm = request.params.term;
  //   let matchingQuotes = quotes.filter(function (quote) {
  //     return quote.quote.toLowerCase().includes(searchTerm.toLowerCase());
  //   });
  //   response.send("Search results for " + searchTerm + ": " + JSON.stringify(matchingQuotes));
  // });

  
//receive a search term (a string) to look for then find any quotes that contain that string in their quote text then return only those matching quotes (json) 
app.get("/quotes/search", function (request, response) {
  console.log("Searching for: ");
  let searchTerm = request.query.term;
  let matchingQuotes = quotes.filter(function (quote) {
    return quote.quote.includes(searchTerm);
  });
  response.send("Search results for " + searchTerm + ": " + JSON.stringify(matchingQuotes));
});


  


//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Start our server so that it listens for HTTP requests!
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
