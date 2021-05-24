// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const theQuotes = require("./quotes.json");
const _ = require('lodash');
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
var cors = require("cors");
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)

// app.get("/", function (request, response) {
//   response.send("Ahmad Janah's Quote Server!  Ask me for /quotes/random, or /quotes");
// });

//START OF YOUR CODE...
const myQuotes = theQuotes;

// Handlebars Middleware

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Homepage

app.get("/", (req, res) => res.render("index", ));

app.get("/quotes", (req,res) => {
  res.send(myQuotes);
})

app.get("/quotes/random", (req, res) => {
  res.send(_.sample(myQuotes));   // pickFromArray(myQuotes)
})

app.get("/quotes/search", (req, res) => {
  let criteria = req.query.term.toUpperCase();
  res.send(myQuotes.filter(quot => quot.quote.toUpperCase().includes(criteria) || quot.author.toUpperCase().includes(criteria)));
})

//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Start our server so that it listens for HTTP requests!
const listener = app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});


const albumsData = [
  {
    albumId: "10",
    artistName: "Beyoncé",
    collectionName: "Lemonade",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music20/v4/23/c1/9e/23c19e53-783f-ae47-7212-03cc9998bd84/source/100x100bb.jpg",
    releaseDate: "2016-04-25T07:00:00Z",
    primaryGenreName: "Pop",
    url:
      "https://www.youtube.com/embed/PeonBmeFR8o?rel=0&amp;controls=0&amp;showinfo=0",
  },
  {
    albumId: "11",
    artistName: "Beyoncé",
    collectionName: "Dangerously In Love",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
    releaseDate: "2003-06-24T07:00:00Z",
    primaryGenreName: "Pop",
    url:
      "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0",
  },
  {
    albumId: "12",
    artistName: "Beyoncé",
    collectionName: "In Love",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
    releaseDate: "2003-06-24T07:00:00Z",
    primaryGenreName: "Pop",
    url:
      "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0",
  },
];

app.get("/albums", function (req, res) {
  res.send(albumsData);
});

app.get("/albums/:albumId", function (req, res) {
   console.log(req.params.albumId);
  res.send(albumsData.filter(album => album.albumId === req.params.albumId));
  // res.send(albumsData[req.params.albumId]);
});

app.post("/albums", function (req, res) {
  albumsData.push(req.body);
  if (!req.body.url || !req.body.albumId || !req.body.artistName || !req.body.collectionName || !req.body.artworkUrl100 || !req.body.releaseDate || !req.body.primaryGenreName)
    {
      res.status(400);
      res.send("You are missing some required fields");
    }
  res.status(201);
  res.send(albumsData);
});


app.delete("/albums/:albumId", function (req, res) {
  console.log(req.params.albumId);
  let temp;
  for (let i = 0; i < albumsData.length; i++){
    if (albumsData[i].albumId === req.params.albumId ){
      temp = albumsData[i];
      albumsData.splice(i,1);
    }    
  }
  if (temp === undefined)
  {
    console.log(temp);
    res.status(404);
    res.send(`The item ${req.params.albumId} is not exist`);
  }
  else {
    res.status(200);
    res.send(`The item ${req.params.albumId} has been deleted`); // .filter(album => album.albumId !== req.params.albumId));
  }
  // res.send(albumsData[req.params.albumId]);
});