const express = require("express");
const app = express();
const quotes = require("./quotes.json");

function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
app.get("/quotes/", (request, response) => {
  response.json(quotes)
});
app.get("quotes/random", (request, response) => {
  response.send(pickFromArray(quotes))
});



app.listen(3000, () => {
  console.log("All good. App listening from port 3000")
});