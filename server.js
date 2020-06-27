// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
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

//START OF YOUR CODE...
app.get('/quotes',(req, res)=>{
  res.send(quotes)
});

app.get('/quotes/random', (req, res)=>{
  res.send(pickFromArray(quotes))
})

app.get('/quotes/search', (req, res)=>{
  console.log('search for a qoute', req.query.term)
  if(req.query.term){
    const search = quotes.filter(quote => {
      return quote.quote.includes(req.query.term)
     })
     res.send(search)

  }else{
    res.send('sorry it seems you did not use any word to search for')
  }
  
})

// import quote from './quotes.json'
// const express = require("express");
// const app = express();
// const quotes = require("./quotes.json");

// app.get("/", function (request, response) {
//   response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
// });

// const listener = app.listen(3000, ()=> console.log('server starts on 3000'))


//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Start our server so that it listens for HTTP requests!
const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
