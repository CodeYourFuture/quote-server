import React, { useState, useEffect } from "react";
import Quote from "./Quote";
import quotesData from "./quotes-with-id.json";

const App = () => {
  const [quote, setQuote] = useState({ text: "", author: "" });

  const fetchRandomQuote = () => {
    const randomQuote = pickFromArray(quotesData);
    setQuote(randomQuote);
  };

  useEffect(() => {
    fetchRandomQuote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Remove the dependency array

  const pickFromArray = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  };

  return (
    <div className="quote">
      <h1>Random Quote</h1>
      <Quote text={quote.quote} author={quote.author} />
      <button onClick={fetchRandomQuote}>Get New Quote</button>
    </div>
  );
};

export default App;
