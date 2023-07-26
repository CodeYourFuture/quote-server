import { useState, useEffect } from "react";

const QuotesCard = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = () => {
    fetch("https://junita-quote-server.glitch.me/quotes/random")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  };

  const handleClick = () => {
    FetchData();
  };
  return (
    <div>
      <h1>Quote-server</h1>
      
      <p className="quote"> {data.quote}</p>
      <p className="author">Author- {data.author}</p>
      <button className="button" onClick={handleClick}>
        Random Quote
      </button>
    </div>
  );
};

export default QuotesCard;
