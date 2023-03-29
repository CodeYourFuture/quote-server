import {useState, useEffect} from "react";
import './App.css';

function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch('https://quotes-server-by-tony.glitch.me/quotes').then((response) =>{
      return response.json();
    })
    .then((data)=> {
      setQuotes(data);
    });
  }, []);
  
  return (
    <div className="App">
      {quotes.map((x, index) =>{
        return(
          <div key={index} className='quote-container'>
            <p className='quote'>{x.quote}</p>
            <p className="author">{x.author}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
