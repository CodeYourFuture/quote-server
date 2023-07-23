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
    <h1>Quote-Library</h1>
    <img
      src="https://i.etsystatic.com/33077836/r/il/87d935/3555304369/il_fullxfull.3555304369_6kn7.jpg"
      alt="pic"
      className="image"
    ></img>
    <h3>Find your favourite quote</h3>
    <p className="quote"> {data.quote}</p>
    <p className="author">Author- {data.author}</p>
    <button className="button" onClick={handleClick}>
      Next Quote
    </button>
  </div>
);
}

export default QuotesCard;
    