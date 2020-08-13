// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const lodash = require('lodash');
// var cors = require('cors')
const app = express();
// app.use(cors());


//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:

//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", (req, res)=> {
  res.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
});


//START OF YOUR CODE...
//Quote generator
app.get("/quotes",  (req, res)=> {
  res.json(quotes);
});

// Random quote generator
// app.get("/quotes/random", (req, res) =>{
//   res.json(pickFromArray(quotes))
// })
//Lodash library:

app.get("/quotes/random", (req, res) =>{
  res.json(lodash.sample(quotes))
})
// Level2
app.get("/quotes/search", (req, res)=>{
  let searchTerm = req.query.term;
  // let limit = req.query.limit;
  let result;
 
  result = quotes.filter(element => element.quote.toLowerCase().includes(searchTerm.toLowerCase()))
  if(!searchTerm){
    res.send("Please add a valid term")
  }
  // if(limit){
  //   result = quotes.slice(0, Number(limit))
  //   res.send(result)
  // }
 if(result.length<1){
  res.send("There is no quote with this term")
  } 
  res.json(result)
})

//Extra work to print out like (`You said 'ismail'`):

app.get("/quotes/echo",  (req, res)=> {
  let word = req.query.word;

  res.json(`You said: ${word}`);
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
const listener = app.listen(process.env.PORT || 3001, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
