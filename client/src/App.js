// import logo from "./logo.svg";
// import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import QuoteArea from "./QuoteArea";
import SearchArea from "./SearchArea";
import AllQuotes from "./AllQuotes";
import NavBar from "./NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <NavBar />
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
