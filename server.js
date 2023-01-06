// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();
const port = /* process.env.PORT ||*/ 5000;

const getQuotes = require("./router/getQuotes.js");

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

// app.get("/quotes", async (req, res) => {
//   try {
//     let quotesList = quotes;
//     res.json(quotesList);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

app.use("/quotes", getQuotes);

app.get("/quotes/random", async (req, res) => {
  try {
    let quote = pickFromArray(quotes);
    res.json(quote);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/quotes/search", async (req, res) => {
  try {
    //let quotesList = quotes;
    let searchTerm = req.query.term;
    console.log(searchTerm);
    if (!searchTerm) {
      res.send({ message: "Try typing in a search term" });
    } else {
      let searchedQuotes = quotes.filter((q) => {
        return (
          q.quote.toLowerCase().includes(searchTerm) ||
          q.author.toLowerCase().includes(searchTerm)
        );
      });
      if (!searchedQuotes.length) {
        res.status(400).send({ message: "Try another search term" });
      } else res.json(searchedQuotes);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

// app.get("quotes/random", (req, res) => {
//   let quote = pickFromArray(quotes);
//   res.json(quote);
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
app.listen(port, function () {
  console.log("Server is listening on port " + port);
});
