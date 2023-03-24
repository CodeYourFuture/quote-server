import { useState, useEffect } from "react";

export const SearchQuote = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4444/quotes/search?term=${inputValue}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, [inputValue]);

  return (
    <div className="quotes-wrapper">
      <div className="quotes-label-input">
        <label className="search-quote-label" htmlFor="search-quote">
          Search for a quote:
        </label>
        <input
          className="quotes-input"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      {inputValue ? (
        <div className="quote-content">
          {data?.map((item) => {
            return (
              <div className="quote-content">
                <p>"{item.quote}"</p>
                <p>Author: {item.author}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
