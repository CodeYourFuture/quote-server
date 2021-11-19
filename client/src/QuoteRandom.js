import React, { useState, useEffect } from "react";
import "./App.css";

function QuoteRandom() {
  const [quoteRandom, setQuoteRandom] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/quotes/random")
      .then((res) => res.json())
      .then((random) => {
        console.log(random);
        setQuoteRandom(random);
      });
  }, []);

  return (
    <div className="bg-light">
      <a href="/">
        {" "}
        <button className="btn btn-link text-info ">HOME PAGE</button>
      </a>
      <div
        style={{ height: "750px" }}
        className="d-flex flex-column  align-items-center bg-light justify-content-center "
      >
        <div
          className="card m-2 d-flex align-items-center justify-content-center quote-cart "
          style={{ width: "50%", height: "250px" }}
        >
          <div className="card-body flex-column d-flex align-items-center justify-content-evenly ">
            <p className="card-text">"{quoteRandom.quote}"</p>
            <h3 className="card-title">{quoteRandom.author}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteRandom;
