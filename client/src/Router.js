import {BrowserRouter, Link,  Routes, Route, } from "react-router-dom";
import Home from "./pages/Home";
import Quotes from "./pages/Quotes";
import Random from "./pages/Random";
import Search from "./pages/Search";
import "./App.css";


const Router = () => {
  return (
    <BrowserRouter>
      <div className="main-header">
        <nav className="main-header__nav">
          <ul className="main-header__item-list">
            <li className="main-header__item">
              <Link to="/home">Home</Link>
            </li>
            <li className="main-header__item">
              <Link to="/quotes">All Quotes</Link>
            </li>
            <li className="main-header__item">
              <Link to="/random">Random Quote</Link>
            </li>
            <li className="main-header__item">
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/random" element={<Random />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
 
export default Router;