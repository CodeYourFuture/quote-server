import React, { useState, useEffect } from "react";
import "./Quotes.css";

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [click, setClick] = useState(0);
  console.log(quotes);

  useEffect(() => {
    fetch("https://fatima-node1-quote.glitch.me/quotes/random")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQuotes(data);
      });
  }, [click]);
  return (
    <div className="position">
      <div className="border">
        <h2>{quotes.quote}</h2>
        <h4>{quotes.author}</h4>
      </div>
      <button className="button" onClick={() => setClick(click + 1)}>
        Next Quotes
      </button>
    </div>
  );
};

export default Quotes;
