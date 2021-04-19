// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
//load the quotes JSON
const quotes = require("./quotes.json");

function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/api/home", function (request, response) {
  // response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
  response.status(200).json({
    status: "success",
    data: "Welcome in Quote app",
  });
});

app.get("/api/quotes", function (request, response) {
  // response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
  response.status(200).json({
    status: "success",
    length: quotes.length,
    data: quotes,
  });
});

app.get("/api/quotes/random", function (request, response) {
  const data = pickFromArray(quotes);
  // response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
  response.status(200).json({
    status: "success",
    length: quotes.length,
    data: [data],
  });
});

//Start our server so that it listens for HTTP requests!
// const listener = app.listen(process.env.PORT, function () {
//   console.log("Your app is listening on port " + listener.address().port);
// });

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

const listener = app.listen(PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
