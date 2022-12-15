import React, { useState, useEffect } from "react";

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
    <div>
      <h1>All Quotes</h1>
      {quotes.map((quote) => (
        <div>
          <p>{quote.quote}</p>
          <p>{quote.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Quotes;
