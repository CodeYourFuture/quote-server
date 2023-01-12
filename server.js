// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const { response } = require('express');
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors({ origin: '*' }));

//load the quotes JSON
const quotes = require('./quotes.json');

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get('/', function (request, response) {
  response.send("Alex's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...

// Level 1 Challenge: `/quotes` - returns ALL of the quotes, as JSON.
app.get('/quotes', function (req, res) {
  res.json(quotes);
});

// Level 1 Challenge: `/quotes/random` - returns ONE of the quotes, picked differently at random each time it is requested.
app.get('/quotes/random', (req, res) => {
  res.json(pickFromArray(quotes));
});

app.get('/quotes/search', (req, res) => {
  let searchTerm = req.query.term;
  if (!searchTerm) {
    res.send('Error: please input a valid search term');
  } else {
    quotes.filter((q) => {
      if (
        q.quote.toLowerCase().includes(searchTerm) ||
        q.author.toLowerCase().includes(searchTerm)
      ) {
        res.json(q);
      }
    });
  }
});

// app.get('/quotes/search', (req, res) => {
//   let quotesCopy = quotes;
//   let term = req.query.term;
//   term &&
//     res.json(
//       quotesCopy.filter((quote) => {
//         quote.quote.toLowerCase().includes(term) ||
//           quote.author.toLowerCase().includes(term);
//       })
//     );
// });

// Glitch link: (https://glitch.com/edit/#!/alexphillip-quote-server?path=server.js%3A1%3A0)

//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Start our server so that it listens for HTTP requests!
const listener = app.listen(3003, function () {
  console.log('Your app is listening on port 3003');
});
