import React, { useState, useEffect } from "react";
import "../App.css";


const Random = () => {
  const [random, setRandom] = useState([]);
  const [randomQuote, setRandomQuote] = useState(false);
  useEffect(() => {
    if (randomQuote) {
      fetch("/quotes/random")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setRandom(data);
          setRandomQuote(false);
        });
    }
  }, [randomQuote]);
  return (
    <div>
      <button onClick={() => setRandomQuote(true)}>Random Quote</button>
      <div className="random">
        <p>{random.quote}</p>
        <p>{random.author}</p>
      </div>
    </div>
  );
};

export default Random;
