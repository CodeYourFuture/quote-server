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
  const body = `<h2>Welcome to my Quote Server!</h2><br/><br/>
  <p>To view all quotes use the route: /quotes. You can also view a quote at random via /quotes/random.</p>
  <p>You can also search for quotes. Use the following format to do so: /quotes/search?term=[your_search_keyword]</p>`;
  response.send(body);
  // response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...
//    route: /quotes
app.get("/quotes", function (request, response) {
  response.json(quotes);
});

//    route: /quotes/random
app.get("/quotes/random", function (request, response) {
  const quote = pickFromArray(quotes);
  response.json(quote);
});

//    quote search feature
app.get("/quotes/search", (request, response) => {
  const searchTerm = request.query.term;
  // check if the route path is of the correct format
  if (!searchTerm) {
    // if it is not
    return response.sendStatus(400); // send a "Bad Request" error response (message).
  }
  // otherwise, continue to search action
  const searchResult = quotes.filter(
    (quoteData) =>
      // **make sure the search is not case-sensitive
      quoteData.quote.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quoteData.author.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // send the search result to the client in JSON format
  response.json(searchResult);
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
const PORT = 3001;
app.listen(PORT, () => console.log("App listening on port " + PORT));
// const listener = app.listen(process.env.PORT, function () {
//   console.log("Your app is listening on port " + listener.address().port);
// });
