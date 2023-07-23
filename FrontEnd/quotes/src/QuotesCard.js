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
  }

const handleClick = () => {
    FetchData()
}
return (
  <div>
    <h1>Quote-server</h1>
    <img
      src="https://americanprofile.com/wp-content/uploads/2014/01/plan-a-motivational-quote.jpg"
      alt="pic"
      className="image"
    ></img>
    <p className="quote"> {data.quote}</p>
    <p className="author">Author- {data.author}</p>
    <button className="button" onClick={handleClick}>
      Next Quote
    </button>
  </div>
);
}

export default QuotesCard;
    