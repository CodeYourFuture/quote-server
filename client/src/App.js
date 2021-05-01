import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [dataPage, setDataPage] = useState("updated");
  const [dataQuotes, setDataQuotes] = useState([]);
  const [querySearch, setQuerySearch] = useState("");

  useEffect(() => {
    axios.get("/api/home").then((response) => {
      setDataPage(response.data.data);
    });
  }, []);

  // const functionFetcher = () => {
  //   axios.get("/home").then((response) => {
  //     console.log(response);
  //     setData([response.data.data]);
  //   });
  // };

  const functionFetcherQuote = () => {
    axios.get("/api/quotes").then((response) => {
      console.log(response.data.data);
      setDataQuotes(response.data.data);
    });
  };

  const functionFetcherQuotes = () => {
    axios.get("/api/quotes/random").then((response) => {
      console.log(response.data.data);
      setDataQuotes(response.data.data);
    });
  };

  const searchConfirmationFunction = () => {
    axios.get(`/api/quotes/search?query=${querySearch}`).then((response) => {
      console.log(response.data.data);
      setDataQuotes(response.data.data);
    });
  };

  return (
    <div className="App">
      <h1>{dataPage}</h1>
      <h2>2 in 1 App</h2>
      <h2>React.js - frontend</h2>
      <h2>Express.js - backend</h2>
      <p>
        Access to API: <br /> /api/home <br /> /api/quotes
        <br /> /api/quotes/random <br /> /api/quotes/search
      </p>
      <input
        type="text"
        placeholder="Search"
        value={querySearch}
        onChange={(e) => setQuerySearch(e.target.value)}
      />
      <button onClick={searchConfirmationFunction}>Search</button>
      <button onClick={functionFetcherQuote}>All Quotes</button>
      <button onClick={functionFetcherQuotes}>One Quote</button>
      {dataQuotes.map((item) => {
        return (
          <div>
            <h2>{item.quote}</h2>
            <h3>{item.author}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;
