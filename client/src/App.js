// import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/quotes")
      .then((response) => response.json())
      .then((data) => setData(data));
    // .catch((error) => console.log(error)));
  }, []);
  return (
    <div className="App">
      <Header />
      <QuoteArea data={data} />
    </div>
  );
}

const QuoteArea = (props) => {
  console.log(props);

  return <div></div>;
};

export default App;
