import React, { useState, useEffect } from "react";
import "../App.css";


const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    fetch("/quotes")
      .then((res) => res.json())
      .then((data) => {
          console.log(data);
          setQuotes(data)
      });
  });
  return (
    <div className="quotes-container">
      <h1>All Quotes</h1>
      <div className="all-quotes">
        {quotes.map((quote) => (
          <div className="single-quotes">
            <p>{quote.quote}</p>
            <p>{quote.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quotes;
