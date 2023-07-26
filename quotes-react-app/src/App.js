import React, { useEffect, useState } from "react";
import "./App.css";
// import Button from "./components/Button";
import Footer from "./components/Footer";

function App() {
  const [quote, setQuote] = useState(""); // setter function
  

// get random quotes on click
  function clickHandler() {
    fetch("https://saqib-javed-a-quote-server.glitch.me/quotes/random")
      .then((response) => response.json())
      .then((data) => setQuote(data));
  };
  
  //fetching random quotes
 
  useEffect(() => {
    fetch("https://saqib-javed-a-quote-server.glitch.me/quotes/random")
      .then((response) => response.json())
      .then((data) => setQuote(data));
  }, []);

  return (
    <>
      <div>
        <h1>Quotes from famous people</h1>
      </div>
      <div className="container">
        <p className="quotes">" {quote.quote} "</p>
        <p className="author">Author: {quote.author}</p>
        <button className="btn" onClick={clickHandler}>
          Get Random Quotes
        </button>
        {/* <Button /> */}
      </div>
      <Footer />
    </>
  );
}

export default App;
