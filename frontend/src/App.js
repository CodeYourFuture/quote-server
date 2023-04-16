import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/quotes")
      .then((res) => {
        console.log("Runnnnnnning");
        return res.json();
      })
      .then((data) => {
        setMyData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("HHHH");
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      {myData.map((q,index) => (
        <section>
          <p>{q.quote}</p>
          <span>{q.author}</span>
        </section>
      ))}
    </div>
  );
}

export default App;
