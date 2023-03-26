import React, { useState, useEffect } from "react";
import "./RandomQuotes.css"; // import CSS file

function RandomQuotes() {
  const [quote, setQuote] = useState("");
  const [currentQuote, setCurrentQuote] = useState({});
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("/quotes")
      .then((response) => response.json())
      .then((data) => setQuotes(data.quotes))
      .catch((error) => console.error(error));
  }, []);

  function getRandomQuote() {
    const newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setCurrentQuote(newQuote);
    setQuote(newQuote.quote);
  }

  function getPrevQuote() {
    const index = quotes.findIndex((q) => q.id === currentQuote.id);
    const prevIndex = (index + quotes.length - 1) % quotes.length;
    setCurrentQuote(quotes[prevIndex]);
    setQuote(quotes[prevIndex].quote);
  }

  function getNextQuote() {
    const index = quotes.findIndex((q) => q.id === currentQuote.id);
    const nextIndex = (index + 1) % quotes.length;
    setCurrentQuote(quotes[nextIndex]);
    setQuote(quotes[nextIndex].quote);
  }

  return (
    <div>
      <h1>Random Quote</h1>
      <p>{quote}</p>
      <button className="quote-button" onClick={getPrevQuote}>
        Previous Quote
      </button>
      <button className="quote-button" onClick={getRandomQuote}>
        Random Quote
      </button>
      <button className="quote-button" onClick={getNextQuote}>
        Next Quote
      </button>
    </div>
  );
}

export default RandomQuotes;
