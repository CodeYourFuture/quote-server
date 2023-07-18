import {useState, useEffect} from "react";
import './App.css';

function App() {
  const [quote, setQuote] = useState(
    {
      quote: "loading...",
      author: "loading..."
    }
  );

  useEffect(() => {
    fetch("https://afsha1-quote-server.glitch.me/quotes/random")
      .then(res => res.json())
      .then(data => setQuote(data));
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>{quote.quote}</h1>
        <h2>{quote.author}</h2>
      </header>
    </div>
  );
}

export default App;
