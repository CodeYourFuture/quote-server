import {BrowserRouter, Link,  Routes, Route, } from "react-router-dom";
import Home from "./pages/Home";
import Quotes from "./pages/Quotes";
import Random from "./pages/Random";
import Search from "./pages/Search";


const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <h2>Product List</h2>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/quotes">All Quotes</Link>
            </li>
            <li>
              <Link to="/random">Random Quote</Link>
            </li>
            <li>
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