import React, {useState, useEffect} from 'react';
import './App.css';
// import quotes from "./quotes.js"
function App() {
  const [getQuote, setGetQuote] = useState([])
  const[quoteList, setQuoteList] = useState({})
  let update;
useEffect(() =>{
  fetch("https://silver-linen-education.glitch.me/quotes")
  .then((response) => response.json())
  .then((data)=>{
    setQuoteList(data)
    // setGetQuote(data)
    // eslint-disable-next-line
    update = data;
    console.log(data)
  })
}, [update])
const handleClick =()=> {
  console.log("---------");
  console.log(getQuote);
  console.log("---------");
  let newQuote = quoteList[Math.floor(Math.random() * quoteList.length)]
//  update = getQuote
  setGetQuote(newQuote)
}
  return (
    <div className="Button-quotes">
      <button  onClick={handleClick}>button</button>
       <div className="quotes">{getQuote.quote}
        <p>{getQuote.author}</p>
        </div>
    </div>
  );
}
export default App;