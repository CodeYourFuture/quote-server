const express = require("express");
const app = express();
const lodash = require("lodash");
const PORT = 3001;

const quotes = require("./quotes.json");

const cors = require('cors');
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.get("/", function (request, response) {
  // console.log("GET / route");
  // response.send("Baz's Quote Server! Ask me for /quotes/ or /quotes/random or /quotes/search?term=_____");
  response.sendFile(__dirname + "/index.html");
});

app.get("/quotes", function (request, response) {
  // console.log("GET /quotes route");
  response.sendFile(__dirname + "/quotes.json");
});

app.get("/quotes/random", function (request, response) {
  // console.log("GET /quotes/random route");
  // response.send(pickFromArray(quotes));
  response.send(lodash.sample(quotes));
});

app.get("/quotes/search", function (request, response) {
  // console.log("GET /quotes/search?term= route");
  const searchQuery = request.query.term;
  const searchResults = quotes.filter(element => element.quote.toLowerCase().includes(searchQuery.toLowerCase()) || element.author.toLowerCase().includes(searchQuery.toLowerCase()));
  response.send(searchResults);
})

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
// function pickFromArray(arr) {
//   return arr[Math.floor(Math.random() * arr.length)];
// }

const listener = app.listen(process.env.PORT || PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});