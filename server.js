// server.js
// This is where your node app starts

//load the 'express' module which makes writing web servers easy
const express = require("express");
const app = express();

const lodash = require("lodash")

//load the quotes JSON
const Quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
// app.get("/", function(request, response) {
//   response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
// });

//START OF YOUR CODE...
//import quotes from "..quotes.json/";
app.get("/", function(request, response) {
  response.send("hello world");
});

app.get("/one", function(request, response) {
    response.send("hello first route");
  });

  app.get("/quotes", function(request, response) {
    response.send(JSON.stringify(Quotes));
  });

  function pickFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  app.get("/quotes/random", function(request, response) {

    response.send(lodash.sample(Quotes));
  });

  app.get("/quotes/search", function(req,res) {
  const term = req.query.term;
  console.log(term);
  if (term) {
    res.send(
      Quotes.filter(
        (word) =>
          word.quote.toLowerCase().includes(term.toLowerCase()) ||
          word.author.toLowerCase().includes(term.toLowerCase())
      )
    );
  } else {
    res.sendStatus(404);
  }
});

//   app.get("/quotes/search", function(request, response) {

//   var textToSearch = 'life';
//   var filteredArray = Quotes.map(quote=>quote.quote).filter((str)=>{
//   return str.toLowerCase().indexOf(textToSearch.toLowerCase()) >= 0;});
  
//  // var querySearch1 = request.query.textToSearch;
//   response.send()
//   });
//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//

//Start our server so that it listens for HTTP requests!
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
