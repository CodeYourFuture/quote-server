
const express = require("express");
const quotes = require("./quotes.json");


const app = express();




app.get("/", function (request, response) {
  response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
});



function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}


const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
