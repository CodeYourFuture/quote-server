
const express = require("express");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...
app.get('/quotes', (req, res) => { 
  const listQuotes = quotes.map((quote)=>
  return quote.quote;) 
  res.send(listQuotes'<h1> Welcome to the Quote Server' </h1>)
});

app.get("/quote/random", (req, res) => {
  const randomQuote = pickFromArray(quotes);
  res.send(randomQuote);
});

app.get("quotes/search", (req, res) => {
  const search = req.query.term;
  if(req.query.term === undefined) {
    return res.jason({
      msg:"Please specify a search term.
      /quotes/search?term=:query",
    });
  }
  res.send(quotes.filter 
    ((quote) =>
      quote.quote.toLowerCase().includes(search.toLowerCase()) ||
        quote.author.toLowerCase().includes(search.toLowerCase())
    )
  );
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
const listener = app.listen(3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
