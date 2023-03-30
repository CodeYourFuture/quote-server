// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const cors = require("cors");
const lodash = require("lodash");
const app = express();
const port=3001
// const port=3000

//load the quotes JSON
const quotes = require("./quotes.json");
app.use(cors());
// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send(" I am testing if the the Node is working");
});


app.get("/quotes", function (request, response) {

  response.json(quotes);
});

app.get("/quotes/random", function (request, response) {
  response.json([lodash.sample(quotes)]);
});


app.get("/quotes/search", function (request, response) {
  const { term, otherQuery } = request.query
  const string = term.toLowerCase();
  //======>??????? how can i have more than one query
   response.json(searchResult(quotes,string));
});



//START OF YOUR CODE...

//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const searchResult = (arr,str) => {
  return arr.filter(object => Object.values(object).some(value => value.toLowerCase().includes(str)))
 //return arr.map(object =>Object.values(object)).filter(object => object.includes(str))
}

//Start our server so that it listens for HTTP requests!
 app.listen(port, () => {
  console.log(`Your app is listening on port ${port}` );
});
