// // server.js
// // This is where your node app starts

// //load the 'express' module which makes writing webservers easy
// const express = require("express");
// const cors = require('cors');

// const app = express();
// app.use(cors());

// const quotes = require("./quotes.json");

// // Now register handlers for some routes:
// //   /                  - Return some helpful welcome info (text)
// //   /quotes            - Should return all quotes (json)
// //   /quotes/random     - Should return ONE quote (json)
// app.get("/", function (request, response) {
//   response.send("Saliha's Quote Server!  Ask me for /quotes/random, or /quotes");
// });

// app.get("/quotes", function (request, response) {
//   response.send({quotes});
// });

// app.get("/quotes/random", function (request, response) {
//    // Pick a random quote from the array using the pickFromArray function
//    const randomQuote = pickFromArray(quotes);
//    // Send the random quote as the response
//    response.send(randomQuote);
// });

//  // Route for searching by term
//  // - `/quotes/search?term=life`
// app.get("/quotes/search", function (request, response) {
//   let term = request.query.term
//   response.send(term);
// });

// // ## Level 2 Challenge - allow quote _searches_!
// function searchQuotes(term) {
//   const results = quotes.filter(
//     (quote) =>
//       quote.quote.toLowerCase().includes(term.toLowerCase()) ||
//       quote.author.toLowerCase().includes(term.toLowerCase()) ||
//       quote === ""
//   );
//   return results;
// }

// // advance
// app.get("/quotes/search", function (request, response) {
//   const term = request.query.term;
//   const searchResults = searchQuotes(term);
//   response.send({searchResults});
// });

// //You can use this function to pick one element at random from a given array
// //example: pickFromArray([1,2,3,4]), or
// //example: pickFromArray(myContactsArray)
// //
// function pickFromArray(arr) {
//   return arr[Math.floor(Math.random() * arr.length)];
// }

// // // // Route search for  `/echo?word=ismail
// // // app.get("/quotes/search", function(request, response){
// // //   console.log(request.query.word, "<----search word");
// // //   const word = quotes.filter((quote) => quote.word === word.toLowerCase()
// // //   );
// // //   return word;
// // // })


// //Start our server so that it listens for HTTP requests!
// const listener = app.listen(process.env.PORT, function () {
//   console.log("Your app is listening on port " + listener.address().port);
// });









// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const { query } = require("express");
const cors = ("cors");
const express = require("express");
const app = express();

// Enable CORS for all origins (allow all origins)
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // Allow all origins, you can set specific origins as well
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send(
    "saliha's Quote Server!  Ask me for /quotes/random, or /quotes"
  );
});

//START OF YOUR CODE...

app.get("/quotes", function (request, response) {
  response.send({ quotes });
});

app.get("/quotes/random", function (request, response) {
  // Pick a random quote from the array using the pickFromArray function
  const randomQuote = pickFromArray(quotes);

  // Send the random quote as the response
  response.send(randomQuote);
});

// - `/quotes/search?term=life`
//  http://localhost:62297/quotes/search?term=life/success/miss
// app.get("/quotes/search", function (request, response) {
//   // let term = request.query.term
//   // response.send(term);
// });

// advance
app.get("/quotes/search", function (request, response) {
  const term = request.query.term.toLowerCase();
  const searchResults = searchQuotes(term);
  response.send({ searchResults });
});

// - bonus: make your search case-insensitive
// - bonus: make the search return matches on quote OR author text.
function searchQuotes(term) {
  const results = quotes.filter((quote) =>
      quote.quote.toLowerCase().includes(term.toLowerCase()) ||
      quote.author.toLowerCase().includes(term.toLowerCase()) ||
      quote === ""
  );
  return results;
}

// // Route search for  `/echo?word=ismail
// app.get("/quotes/search", function(request, response){
//   console.log(request.query.word, "<----search word");
//   const word = quotes.filter((quote) => quote.word === word.toLowerCase()
//   );
//   return word;
// })

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


