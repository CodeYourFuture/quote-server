// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    fetchRandomQuote();
  }, []);


  const fetchRandomQuote = async () => {
    try {
      const response = await axios.get('')
      setQuote(response.data);
    }catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          {quote?.quote}
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        <footer>- {quote?.author}</footer>
        <button onClick={fetchRandomQuote}>Get New Quote</button>
      </header>
    </div>
  );
}

export default App;
