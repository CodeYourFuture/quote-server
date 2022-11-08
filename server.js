// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");

// Setting up the route Homepage
app.get("/", function (req, res) {
  res.json("Tresor's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF MY CODE...

// Returning All the quotes as JSON
app.get("/quotes", (req, res) => {
  res.json(quotes);
})

// Returning one of the Quotes randomly as JSON
app.get("/quotes/random",(req,res)=>{
  res.json(pickFromArray(quotes));
})

//...END OF MY CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
//Start our server so that it listens for HTTP requests!
const listener = app.listen(3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});