// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const mongodb = require("mongodb");
const _ = require("lodash");

const app = express();
require("dotenv").config();
const cors = require("cors");
app.use(cors());
//load the quotes JSON

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)

//START OF YOUR CODE...
app.get("/quotes", function (request, response) {
  const client = new mongodb.MongoClient(
    "mongodb+srv://cyfstudent:Byt53rgWR6e5GY13@cluster0-pi6ui.mongodb.net"
  );

  client.connect(() => {
    const db = client.db("quotes");
    const collection = db.collection("quotes");

    collection.find().toArray((err, quotes) => {
      response.send(err || quotes);
      client.close();
    });
  });
});
app.get("/quotes/random", function (request, response) {
  const client = new mongodb.MongoClient(
    "mongodb+srv://cyfstudent:Byt53rgWR6e5GY13@cluster0-pi6ui.mongodb.net"
  );

  client.connect(() => {
    const db = client.db("quotes");
    const collection = db.collection("quotes");

    collection.find().toArray((err, quotes) => {
      response.send(err || _.sample(quotes));
      client.close();
    });
  });
});

//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
// function pickFromArray(arr) {
//   return arr[Math.floor(Math.random() * arr.length)];
// }
const port = process.env.PORT || 5000;
//Start our server so that it listens for HTTP requests!
const listener = app.listen(port, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
