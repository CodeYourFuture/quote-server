import React, {useState, useEffect} from 'react'
import "./App.css";

function Quote() {
 const [quote, setQuote] = useState({});
 //const [author, setAuther] = useState("");
 useEffect(() => {
   fetch("https://abadi-quote-server.glitch.me/quotes/random")
   //fetch("http://localhost:5000/quotes/random")
     .then((res) => res.json())
     .then((data) => {
       console.log(data);
       setQuote(() => data);
     });
 }, [])
 return (
   <div className="quote">
     <p>{quote.quote}</p>
     <p>{quote.author}</p>
   </div>
 );
}

export default Quote
