import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    // fetch(`http://localhost:4444/quotes/search?term=${inputValue}`)
    fetch(`http://localhost:4444/quotes/random`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, [inputValue]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <input type="search" value={inputValue} onChange={(event) => setInputValue(event.target.value)}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
