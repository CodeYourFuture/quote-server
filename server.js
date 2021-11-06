// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();
//lodash for array sampling

const cors = require('cors');
app.use(cors());
app.use('/',require('./routes/api/quotes'))
//load the quotes JSON
const quotes = require("./quotes.json");


// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)





//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//

//Start our server so that it listens for HTTP requests!
const listener = app.listen(process.env.PORT ||3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
