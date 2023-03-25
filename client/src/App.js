// import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import QuoteArea from "./QuoteArea";

function App() {
  const [data, setData] = useState("");
  // const [input, setInput] = useState("");

  // function handleSearch(event) {
  //   setInput(event.target.value);
  // }

  const handleClick = () => {
    getQuote();
  };

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    fetch("https://react-full-stack-ebb3.onrender.com/quotes/random")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <Header />
      {/* <SearchArea input={input} handleSearch={handleSearch} /> */}
      <QuoteArea data={data} handleClick={handleClick} />
      <Footer />
    </div>
  );
}

// function SearchArea(props) {
//   return (
//     <input type="text" value={props.input} onChange={props.handleSearch} />
//   );
// }

export default App;
