//LEVEL 1
const express = require("express");
const app = express();
const quotes = require("./quotes.json");

//Picks a random value from an array
function randomiser(arr){
    let initial = 0;
    let final = (arr.length - 1);
    let randIndex = Math.floor(Math.random() * (final- initial)) + initial;
    return arr[randIndex];
}

const randElem = randomiser(quotes)

//  Return some helpful welcome info (text)
app.get("/", function(request, response) {
  response.send("Remen's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...
// quotes returns all quotes (json)
app.get("/quotes", function(request, response) {
  response.send(quotes)
});

// quotes/random returns ONE quote (json)
app.get('/quotes/random', function(request, response) {
  response.send(randElem)
});

//LEVEL 2
app.get("/quotes/search", function (req, res) {
  const searchTerm = req.query.term;
  function search(arry){
    return arry.filter(element => element.quote.includes(searchTerm))
  }
res.send(search(quotes));
});


const PORT = 6048;
const listener = app.listen(PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});


