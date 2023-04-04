import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    //console.log("Runnnnnnning");

    fetch("http://localhost:4000/quotes")
      .then((res) => {
        console.log("Runnnnnnning");
        return res.json();
      })
      .then((data) => setData(data))
      .catch((error) => {
        console.error("HHHH");
        console.error(error);
      });
  }, []);

  return <div className="App"></div>;
}

export default App;
