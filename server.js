// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const { request } = require("express");
const express = require("express");
const app = express();
// const port = process.env.PORT || 4000;
const port = 3000;

//load the quotes JSON
const quotes = require("./quotes.json");
const { search } = require("./router/getQuotes.js");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Hayat's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...
// app.get("/quotes", (req, res) => {
//   let quotesList = quotes;
//   res.json(quotesList);
// });

app.get("/quotes", async(req, res) => {
  try{
    let quotesList = quotes;
    res.status(200).send(quotesList);
  } catch(err){
    res.status(500).send(err);
  }
})


app.get("/quotes/random", (req, res) => {
  let quote = pickFromArray(quotes);
  res.json(quote);
});

app.get("/quotes/random", async(req, res) => {
  try {
    let quote = pickFromArray(quotes);
    res.status(200).json(quote);
  } catch (err) {
    res.status(500).send(err);
  }
})

app.get("/quotes/search", async (req, res) => {
  try {
    let searchTerm = req.query.term.toLowerCase();
    console.log(searchTerm);
    if(!searchTerm){
      res.send({"message":"You've not entered any search term!"})
    } else {
      let searchedQuote = quotes.filter((quote) => {
        return (
          quote.quote.toLowerCase().includes(searchTerm) ||
          quote.author.toLowerCase().includes(searchTerm)
        );
      });
      if(!searchedQuote.length){
        res.status(400).send({"Message":`No quotes found with ${searchTerm}`});
      } else {
        res.status(200).json(searchedQuote);
      }
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
// function pickFromArray(arr) {
//   return arr[Math.floor(Math.random() * arr.length)];
// }

//Start our server so that it listens for HTTP requests!
app.listen(port, function () {
  // console.log("Your app is listening on port " + listener.address().port);
  console.log("Server is listening on port " + port);
});
