// import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import QuoteArea from "./QuoteArea";
import SearchArea from "./SearchArea";
import AllQuotes from "./AllQuotes";
import NavBar from "./NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [data, setData] = useState("");

  const handleClick = () => {
    getRandomQuote();
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  const getRandomQuote = () => {
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
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<QuoteArea data={data} handleClick={handleClick} />}
          />
          <Route path="/quotes/search" element={<SearchArea />} />
          <Route path="/quotes" element={<AllQuotes />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
