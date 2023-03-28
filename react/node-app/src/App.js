import logo from './logo.svg';
import './App.css';
import { useEffect, useState} from "react"

function App() {
  const [inputValue, setInputValue] = useState(undefined);
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:3001/quotes/search?term=${inputValue}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data)
      });
  }, [inputValue]);
 

 const buttonHandler = () => {
  fetch(`http://localhost:3001/quotes/random`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data)
      });

    }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
      Quotes
        </p>
        
      
      </header>
      <div className='main'>
        <div className='search-bar-container'>
        <div><label for="search-input" >Search</label>
      <input type={'search'} id="search-input" value={inputValue} onChange={event => 
          setInputValue(event.target.value)
          }/></div>
      
          <button onClick={buttonHandler}>random quote</button>
      </div>
        <div className='card-container'>{data.map(object => {
          return (
            <div className='card'><p>{object.quote}</p>
            <p>{object.author}</p>
            </div>
          )
        })}</div>
        
        </div>
    </div>
  );
}

export default App;
