// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use('/quotes', require('./routes/api/quotes'));



//  when server is deployed, the port number will be stored in an environment variable and for development it is 5000.
const PORT = process.env.PORT || 5000;

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send(`/quotes to display all the quotes. /quotes/random to display a random quote. / quotes/search?term=search word`);
});

//START OF YOUR CODE...

//...END OF YOUR CODE



//Start our server so that it listens for HTTP requests!
const listener = app.listen(PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
