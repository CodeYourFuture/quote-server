const helperFunctions = require("../helper_functions/helperFunctions");

const data = {
  //quotes: require("../model/test.json"),
  quotes: require("../model/quotes.json"),
  setQuotes: function (data) {
    this.quotes = data;
  },
};

const getAllQuotes = (req, res) => {
  res.json(data.quotes);
};

const getRandomQuote = (req, res) => {
  let randomQ = helperFunctions.pickFromArray(data.quotes);
  res.json([randomQ]);
};
const getSearchQuote = (req, res) => {
  let term = req.query.term;

  try {
    // added optional chaining to mitigate erros
    const searchResult = data.quotes.filter(
      (el) =>
        el.quote.toLocaleLowerCase().includes(term) || el.author?.toLocaleLowerCase().includes(term)
    );

    console.log(searchResult);
    res.json([...searchResult]);
  } catch (err) {
    console.error(err.stack);
    res.status(500).send("sorry there was an internal server error");
  }
};

module.exports = {
  getAllQuotes,
  getRandomQuote,
  getSearchQuote,
};
