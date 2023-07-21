// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const cors =require ("cors");
const app = express();
const PORT = process.env.PORT || 3001;
// app.use(cors());
app.use(express.json());
//load the quotes JSON
const quotes = require("./quotes.json");
const crud = require('./quotes-with-id.json');

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Tony's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...
app.get('/quotes',(req,res,next)=>{
  res.json(quotes);
});

app.get('/quotes/random', (req,res,next)=>{
  res.json(pickFromArray(quotes));
});

app.get('/quotes/search',(res,req,next)=>{
  const searchTerm = req.query.term;
  const matchedQuotes =quotes.filter((x) =>{
    x.quote.toLowerCase().includes(searchTerm.toLowerCase()) ||
    x.author.toLowerCase().includes(searchTerm.toLowerCase());
    res.json(matchedQuotes);

  })
  
})
app.get('/crud',(req,res)=> {
  res.json(crud);
})
// crud starts from here

//post request
app.post('/crud',(req,res)=> {
  console.log('tony is messed up')
  const newQuote=req.body;
  crud.push(newQuote);
  res.status(201).send({newQuote})
 
})

//put
let people =['Tony']
app.put('people',(req,res)=> {
people.push(req.body.split('/n'))
res.json(people)
})

app.get('/people',(req,res)=>{
  res.json(people)
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
app.listen(PORT, () => {
  console.log("Your app is listening on port " + PORT);
});
