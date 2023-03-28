import { useState, useEffect } from "react";

const QuoteArea = () => {
  const [data, setData] = useState("");

  const handleClick = () => {
    getRandomQuote();
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  const getRandomQuote = () => {
    fetch("https://react-full-stack-ebb3.onrender.com/quotes/random")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="quote-area">
      <p>{data.quote}</p>
      <span>{data.author}</span>
      <aside>
        <button onClick={handleClick} className="generate">
          Regenerate Quote
        </button>
      </aside>
    </div>
  );
};

export default QuoteArea;
