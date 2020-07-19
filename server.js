const express = require("express");
const mongodb = require("mongodb");
const lodash = require("lodash");
const http = require('http');
require ("dotenv").config();

const app = express();

const uri = process.env.DATABASE_URI;

app.get("/", function(req, res) {
  res.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
});

app.get("/quotes", (req, res) => {
  const client = new mongodb.MongoClient(uri);

  client.connect(() => {
    console.log("collection")
    const db = client.db("quotes");
    const collection = db.collection("quotes");
    collection.find().toArray((err, quotes) => {
      res.send(err || quotes);
      client.close();
    });
  });
});

app.get("/quotes/random", (req, res) => {
  const client = new mongodb.MongoClient(uri);

  client.connect(() => {
    const db = client.db("quotes");
    const collection = db.collection("quotes");

    collection.find().toArray((err, quote) => {
      res.send(err || lodash.sample(quote));
      client.close();
    });
  });
});

app.get("/quotes/search", (req, res) => {
  const client = new mongodb.MongoClient(uri);

  client.connect(() => {
    const db = client.db("quotes");
    const collection = db.collection("quotes");
    const { term } = req.query;

    collection.find().toArray((err, quotes) => {
      if (err) {
        res.send(err);
        client.close();
      } else {
        const searchedObj = quotes.filter(
          quote =>
            quote.quote.toLowerCase().includes(term.toLowerCase()) ||
            quote.author.toLowerCase().includes(term.toLowerCase())
        );
        res.send(searchedObj);
        client.close();
      }
    });
  });
});

const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
