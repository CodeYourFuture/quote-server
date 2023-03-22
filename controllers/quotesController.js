const helperFunctions = require("../helper_functions/helperFunctions");

const data = {
  //quotes: require("../model/test.json"),
  quotes: require("../model/quotes.json"),
  setQuotes: function (data) {
    this.quotes = data;
  },
};
/* 
imported from helperfunctions
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
 */

const getAllQuotes = (req, res) => {
  //console.log(data.quotes);
  res.json(data.quotes);
};

const getRandomQuote = (req, res) => {
  let randomQ = helperFunctions.pickFromArray(data.quotes);
  console.log(randomQ);
  res.json([randomQ]);
};
const getSearchQuote = (req, res) => {
  /* 
   `/quotes/search?term=life`
- `/quotes/search?term=success`
- `/quotes/search?term=miss`
  */
  let term = req.query.term;
  //console.log(typeof term);
  // term in a string
  //console.log(data.quotes);
  //console.log(data.quotes[0]);
  //console.log(data.quotes[0].quote.toLocaleLowerCase().includes(term));

  try {
    /* const searchResult = data.quotes.filter(
    (el) => el.quote.includes(`${term}`) || el.autor.includes(term)
  );*/
    // added optional chaining to mitigate erros
    const searchResult = data.quotes.filter(
      (el) =>
        el.quote.toLocaleLowerCase().includes(term) || el.author?.toLocaleLowerCase().includes(term)
    );
    //console.log(searchResult, "search result");
    //console.log(searchResult.length, "search total");

    //question: how to exist out of a funciton if ther is an error
    // how to short sercut out of an function, do i need to wrap it in a t

    console.log(searchResult);
    res.json([...searchResult]);
    //res.send(term);
  } catch (err) {
    console.error(err.stack);
    res.status(500).send("sorry there was an internal server error");
  } finally {
  }
};

module.exports = {
  getAllQuotes,
  getRandomQuote,
  getSearchQuote,
};
