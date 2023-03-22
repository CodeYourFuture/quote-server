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

module.exports = {
  getAllQuotes,
  getRandomQuote,
};
