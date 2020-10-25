
const { response } = require("express");
const express = require("express");
const app = express();
//load the quotes JSON
const quotes = require("./quotes.json");
const lodash = require('lodash')
var cors = require('cors')
app.use(cors())





// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)



//START OF YOUR CODE...

///////////////


app.get("/quotes", (req, res)=>{
res.json(quotes);
})

app.get("/quotes/random", (req, res)=>{
let myRandomQuotes = pickFromArray(quotes);
res.json(myRandomQuotes);
  })

  app.get("/quotes/search", (req, res)=>{
    //declare a variable to make user search
      let searchQuery = req.query.term
    //  for(let i = 0; i < quotes.length; i++){
    //    if(quotes[i].quote.toLowerCase().includes(searchQuery) || quotes[i].author.toLowerCase().includes(searchQuery)){
    //      res.json(quotes[i].quote + " " + quotes[i].author);
    //    }
    //  }
    //  res.json([]);
    // let quoteList = require("./quotes.json")
    let searchedQuotes = quotes.filter((quoteObj)=>quoteObj.quote.toLowerCase().includes(searchQuery) ||quoteObj.author.toLowerCase().includes(searchQuery))
    res.json(searchedQuotes)
      })

      app.get("/echo", (req, res)=>{
       let myWord = req.query.word;
       res.send("hi" + myWord)
          })
  
          app.get("/lodashtesting", function (request, response) {
            let searchItem=request.query.word;
            let randomQuote = lodash.sample(quotes);
            response.json(randomQuote);
          });      
    
//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Start our server so that it listens for HTTP requests!
const listener = app.listen(3000, function () {
  console.log("Your app is listening on port 3000");
});
