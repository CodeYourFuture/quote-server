// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();
const lodash = require('lodash'); 
//load the quotes JSON
const quotes = require("./quotes.json");

let sasd = lodash.sample(quotes);

let cors = require("cors")

app.use(cors())


// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("<h1>Yunus's Quote Server!  Ask me for /quotes/random, or /quotes</h1>");
});

//START OF YOUR CODE...
const PORT =  process.env.PORT || 3000;

// get all quotes
app.get("/quotes", (req, res) => {
  res.json(quotes);
})
//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)

// get random quote
// function pickFromArray(arr) {
//     return arr[Math.floor(Math.random() * arr.length)];
//   }

app.get("/quotes/random", (req, res) => {
      // res.json(pickFromArray(quotes));
      res.json(lodash.sample(quotes));
    
    })
    
          //...END OF YOUR CODE
          
          //  LEVEL 2
          // - `/quotes/search?term=life`
          // - `/quotes/search?term=success`
          // - `/quotes/search?term=miss`
app.get("/quotes/search", (req,res) => {
const term = req.query.term.toLowerCase();
const found = quotes.some(quote => quote.quote.toLowerCase().includes(term) || quote.author.toLowerCase().includes(term));
console.log(found);
if(found){
  res.json(quotes.filter(quote => quote.quote.toLowerCase().includes(term) ||  quote.author.toLowerCase().includes(term)))
}else {
  res.status(400).json({ msg: `No quote with the term of ${term}`});
}
})
          
          
          
          //Start our server so that it listens for HTTP requests!
          // const listener = app.listen(process.env.PORT, function () {
            //   console.log("Your app is listening on port " + listener.address().port);
            // });
            
            const listener = app.listen(PORT, () => console.log(`Your app is listening on port ${PORT}`));
