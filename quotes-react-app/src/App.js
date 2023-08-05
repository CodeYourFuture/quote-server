import React,{useState,useEffect} from "react"
import './App.css';
import QuotesButton from "./components/QuotesButton";


function App() {

  const[quote, setQuote]=useState({ quote: '', author: '' });

  const GenerateQuote = () => {
    fetch("https://quote-server-fu7w.onrender.com/quotes/random")
      .then((result) => result.json())
      .then((data) => {
        setQuote(data);
      });
  };

  useEffect(()=>{
    GenerateQuote();
  },[]);

  return ( 
    <div className="App">
     <h1>{quote.quote}</h1>
     <h2>{quote.author}</h2>
     <QuotesButton onClick={GenerateQuote}/>
    </div>
  )
}

export default App;
