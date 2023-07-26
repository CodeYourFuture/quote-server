// import logo from "./logo.svg";
// import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import QuoteArea from "./QuoteArea";
import SearchArea from "./SearchArea";
import AllQuotes from "./AllQuotes";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <nav className="navbar">
          <Link to="/" className="nav-item">
            Random Quotes
          </Link>
          <Link to="/quotes" className="nav-item">
            All Quotes
          </Link>
          <Link to="/quotes/search" className="nav-item">
            Search Quotes
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<QuoteArea />} />
          <Route path="/quotes/search" element={<SearchArea />} />
          <Route path="/quotes" element={<AllQuotes />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
