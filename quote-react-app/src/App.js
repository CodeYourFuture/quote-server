import React, {useState, useEffect} from 'react';
import './App.css';
// import quotes from "./quotes.js"
function App() {
  const [getQuote, setGetQuote] = useState(true)
  const[quote, setQuote] = useState({})

//How to use URL including random. we want useEffect to re-render when we press the button
useEffect(() =>{
  fetch(" https://silver-linen-education.glitch.me/quotes/random")
  .then((response) => response.json())
  .then((data)=>{
    setQuote(data)
  })
}, [getQuote])
const handleClick =()=> {
  setGetQuote(!getQuote)

}
  return (
    <div className="Button-quotes">
      <button  onClick={handleClick}>button</button>
       <div className="quotes">
         <p className="quotes">{quote.quote}</p>
  
        <p style={{fontWeight: "bold", fontStyle: "italic"}}>{quote.author}</p>
        </div>
    </div>
  );
}

export default App;
