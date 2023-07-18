import React, { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [quote, setQuote] = useState("Loading...."); // setter function

  useEffect(() => {
    fetch("https://saqib-javed-a-quote-server.glitch.me/quotes/random")
      .then((response) => response.json())
      .then((data) => setQuote(data));
  }, []);

  return (
    <>
      <div className="App">
        <h1>Quotes from famous people</h1>
      </div>
      <div>
        <p>Quote: {quote.quote}</p>
        <p>Author: {quote.author}</p>
        <Button />
        <Button />
      </div>
    </>
  );
}

export default App;
