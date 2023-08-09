import {useState, useEffect} from "react";
import './App.css';
import Button from "./component/Button";
import Input from "./component/Input";
import Quote from "./component/Quote";

function App() {
  const [quote, setQuote] = useState(
    {
      quote: "Loading quote...",
      author: "Loading quote's author..."
    }
  );

  const [keyword, setKeyword] = useState("");

  const [searchQuotes, setSearchQuotes] = useState([]);




  useEffect(getRandomQuote, []);

  function getRandomQuote() {
    fetch("https://afsha1-quote-server.glitch.me/quotes/random")
      .then(res => res.json())
      .then(data => setQuote(data));
  }

  const searchQuote = () => {
    fetch(`https://afsha1-quote-server.glitch.me/quotes/search?term=${keyword}`)
      .then((res) => res.json())
      .then((data) => setSearchQuotes(data));
      console.log(searchQuotes);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Quote quote={quote} />
        <Button onClickHandler={getRandomQuote} label="Get Random Quote" />
        <Input className="searchInput" type="text" onChangeHandler={setKeyword} placeholder="Search"/>
        <Button onClickHandler={searchQuote} label="Search Quote"/>
      </header>
      <>
        {searchQuotes.map((searchQuote, index) => (<Quote key={index} quote={searchQuote} />))}
      </>
    </div>
  );
}

export default App;
