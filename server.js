// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const cors = require('cors')
const mongodb = require('mongodb')
const dotenv = require("dotenv");

 dotenv.config()
const url = process.env.MONGOLAB_URI;


const app = express();
app.use(cors())


//load the quotes JSON
//const quotes = require("./quotes-with-id.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (req, res) {
  const client =  mongodb.MongoClient(url)
   client.connect(()=>{
     const db = client.db("quotes")
     const collection = db.collection("quotes")

     collection.find().toArray((err,quotes)=>{
       res.send(err||quotes)
       client.close()
     })

   })
  
});

//START OF YOUR CODE...
app.get("/quotes/random", (req, res) => {
  const client = mongodb.MongoClient(url);
  client.connect(() => {
    const db = client.db("quotes");
    const collection = db.collection("quotes");
    collection.find().toArray();

    collection.find().toArray((err, quotes) => {
      res.send(err || pickFromArray(quotes));
      client.close();
    });
  });
});

app.get("/quotes/search", (req, res) => {
  const client = mongodb.MongoClient(url);
  client.connect(() => {
    const db = client.db("quotes");
    const collection = db.collection("quotes");
    const searchQuote ={}
    if(req.query.author){
      searchQuote.author=req.query.author
    }
    if(req.query.quote){
      searchQuote.quote =req.query.quote
    }
    console.log(searchQuote)

    collection.find(searchQuote).toArray((err, quote) => {
      res.send(err || quote);
      client.close();
    });
  });
});







// //...END OF YOUR CODE

// //You can use this function to pick one element at random from a given array
// //example: pickFromArray([1,2,3,4]), or
// //example: pickFromArray(myContactsArray)
// //
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Start our server so that it listens for HTTP requests!
let port = process.env.PORT;
if (port == null || port == "") {
  port = 5555;
}

app.listen(port, () => console.log(`Listening on port ${port}`));
