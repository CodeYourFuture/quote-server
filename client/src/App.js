// import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import QuoteArea from "./QuoteArea";

function App() {
  const [data, setData] = useState("");

  const handleClick = () => {
    getQuote();
  };

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    fetch("/quotes/random")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <Header />
      <QuoteArea data={data} handleClick={handleClick} />
    </div>
  );
}

export default App;
