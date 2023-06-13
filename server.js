// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//load the quotes JSON
const quotesData = require("./db_config.js");

app.get("/", function (request, response) {
  response.send(
    "Andriana's Quote Server!  Ask me for /quotes/random, or /quotes"
  );
});

//START OF YOUR CODE...

app.get("/quotes", (req, res) => {
  const searchTerm = req.query.term || "";

  let getQuery = "SELECT * FROM quotes";

  let searchQuery =
    "WHERE lower(quote) LIKE '%' || $1 || '%' OR lower(author) LIKE '%' || $1 || '%'";

  quotesData
    .query(getQuery + " " + searchQuery, [searchTerm])
    .then((result) => {
      if (result.rowCount === 0) {
        return res.json({ error: "No quotes available" });
      } else {
        return res.status(200).json({ search_query: result.rows });
      }
    })
    .catch((error) => console.log(error));
});

app.get("/quotes/random", (req, res) => {
  const randomQuery = "SELECT * FROM quotes ORDER BY RANDOM() LIMIT 1";

  quotesData
    .query(randomQuery)
    .then((result) => res.status(200).json(result.rows[0]))
    .catch((error) => console.log(error));
});

function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

app.listen(PORT, function () {
  console.log("Your app is listening on port " + PORT);
});
