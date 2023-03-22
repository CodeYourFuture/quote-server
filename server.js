// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
//-- add cours for crossbrowser
//const cors = require("cors");

/*
// - - moved to the quotesControler -- //
//load the quotes JSON
const quotes = require("./model/quotes.json"); */

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("olus's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...
app.use("/quotes", require("./routes/quotes"));
/* 
// -- moved to controler filer //
app.get("/quotes", (request, response) => {
  response.json(quotes);
}); */
/*
// -- moved to controler filer //
app.get("/quotes/random", (request, response) => {
  console.log(quotes);
  response.json(quotes);
}); */
//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
/*
// moved function to helperfunction file
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
 */
app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("json")) {
    res.json({ error: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

//Start our server so that it listens for HTTP requests!
const listener = app.listen(PORT, function () {
  console.log(`Your app is listening on port  + ${listener.address().port} + ${PORT}`);
});
