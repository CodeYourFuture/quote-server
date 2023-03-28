import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://cyf-zahraatayyar-nodecourseworkweek1.onrender.com/quotes")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setQuotes(data);
      });
  }, []);

  // const [randomQuote, setRandomQuote] = useState(null);

  // useEffect(() => {
  //   fetch(
  //     "https://cyf-zahraatayyar-nodecourseworkweek1.onrender.com/quotes/random"
  //   )
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setRandomQuote(data);
  //     });
  // }, []);

  return (
    <div className="App">
      {quotes.map((x, index) => {
        return (
          <div key={index} className="quote-container">
            <p className="quote">{x.quote}</p>
            <p className="author">- {x.author}</p>
          </div>
        );
      })}
      {/* {randomQuote && (
        <div className="quote-container">
          <p>{randomQuote.quote}</p>
          <p>- {randomQuote.author}</p>
        </div>
      )} */}
    </div>
  );
}

export default App;
