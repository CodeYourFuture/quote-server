import "./App.css";
import React, { useEffect, useState } from "react";
import { BsFillChatQuoteFill } from "react-icons/bs";
function App() {
  const [quotes, setQuotes ] = useState([]);
  useEffect(() =>{
    try {
       fetch("https://yunusfirat-quote-server.glitch.me/quotes/random")
      .then((response) => response.json()).then((data) => setQuotes(data));
    } catch (error) {
      console.log(error);
    }
  },[]);

  const getQuote = () => {
    fetch("https://yunusfirat-quote-server.glitch.me/quotes/random")
    .then((response) => response.json()).then((data) => setQuotes(data));
  };
  return (
    <div className="App">
      <div className="container">
        <div className="article">
        <p><BsFillChatQuoteFill /> {quotes.quote}</p>
        <h4>{quotes.author}</h4>
        </div>
      </div>
      <div className="random">
      <button onClick={getQuote}>get new quote</button>
      </div>
    </div>
  );
}

export default App;
