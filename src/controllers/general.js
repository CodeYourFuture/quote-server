const quotes = require("../../quotes.json");

export function home(req, res) {
  res.renderTemplate("index", {
    title: "Home Page",
    message: `Neill's Quote Server!  Ask me for Inspirational quotes`,
  });
}

export function allQuotes(req, res) {
  let allQuotes = quotes.map(q => q.quote).join(" ");

  res.renderTemplate("index", {
    title: "All quotes at a glance",
    // message: quotes.map(q => q.quote).join(" "),
    message: allQuotes,
  });
}

export function random(req, res) {
  res.renderTemplate("index", {
    title: "Quotes Random",
    message: pickFromArray(quotes).quote,
  });
}
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
