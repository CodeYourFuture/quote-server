const express = require("express");
const app = express();
const quotes = require("./quotes.json");
const cors = require("cors");
const lodash = require('lodash');

app.use(cors())
//START OF YOUR CODE...

app.get("/", function (request, response) {
  response.send(
    "Mahmut's Quote Server!  Ask me for /quotes/random, or /quotes"
  );
});
app.get("/quotes", (req, res) => {
  res.json(quotes);
});

app.get("/quotes/random", (req, res) => {
  res.json(lodash.sample(quotes));
});

// app.get("/quotes/search", (req, res) => {
//   if (req.query.term) {
//     const search = quotes.filter((element) =>
//       element.quote.toLowerCase().includes(req.query.term.toLowerCase()) ||
//       element.author.toLowerCase().includes(req.query.term.toLowerCase())
//     );
//     res.send(search);
//   } else {
//     res.status(400).send('Sorry!')
//   }
// });


//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
// function pickFromArray(arr) {
//   return arr[Math.floor(Math.random() * arr.length)];
// }


// Start our server so that it listens for HTTP requests!
const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
// const PORT = process.env.PORT || 3001;
// // process.env.PORT check first environmentvaiable than 5000

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
