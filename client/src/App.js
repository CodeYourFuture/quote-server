import "./App.css";
import Quotes from "./Quotes";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import QuoteRandom from "./QuoteRandom";
import Welcome from "./Welcome";

function App() {
  return (
    <div>
      {/* <div className="App ">
        <h2> Dilek's Quote Page! </h2>
        <Link to="/quotes/random">
          <button className="btn btn-info m-2">Random Quote</button>
        </Link>
        <Link to="/quotes">
          <button className="btn btn-info m-2">All Quotes</button>
        </Link>
      </div> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Welcome/>} />
          <Route path="/quotes/random" element={<QuoteRandom/>} />
          <Route path="/quotes" element={<Quotes/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
