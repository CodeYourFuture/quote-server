// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)

//START OF YOUR CODE...

// Homepage Get Response
app.get("/", function (request, response) {
  response.send("Omer's Quote Server!  Ask me for /quotes/random, or /quotes/search?term=xxx, or even /proverbs...");
});

// Quotes Routes
app.use('/quotes', require('./routes/quotes/quotes'));

// Proverbs Routes
app.use('/proverbs', require('./routes/proverbs/proverbs'));

//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//

//Start our server so that it listens for HTTP requests!
const listener = app.listen(PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
