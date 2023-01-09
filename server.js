//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();
// const port = 9090

//load the quotes JSON
const quotes = require("./quotes.json");




//START OF YOUR CODE...

app.get("/quotes", function (request, response) {
  response.send(quotes);
});


app.get("/quotes/random", function (request, response) {
  response.send(pickFromArray(quotes));
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
const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
