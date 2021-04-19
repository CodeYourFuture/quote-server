import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data2, setData] = useState("updated");

  useEffect(() => {
    axios.get("/home").then((response) => {
      setData(response.data.data);
    });
  }, []);

  const functionFetcher = () => {
    axios.get("/som").then((response) => {
      console.log(response);
      setData(response.data.data);
    });
  };

  return (
    <div className="App">
      <header></header>
      <body>
        <button onClick={functionFetcher}>
          Something here is going on or no?
        </button>
        <p>{data2}</p>
      </body>
    </div>
  );
}

export default App;
