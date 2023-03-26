
import React, { useState, useEffect } from "react";
import RandomQuotes from "./RandomQuotes";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/quotes")
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data.quotes);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const [quotes, setQuotes] = useState([]);

  return (
    <div>{loading ? <p>Loading...</p> : <RandomQuotes quotes={quotes} />}</div>
  );
}

export default App;
