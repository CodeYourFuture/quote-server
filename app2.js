import logo from './logo.svg';
import './App.css';
import { useEffect, useState} from "react"

function App() {
  const [inputValue, setInputValue] = useState(undefined);
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("")
  const [random, setRandom] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:3001/quotes/${url}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data)
      });
  }, [url]);
 
  let changeUrl = (value) => {
    setUrl(value)
  }

  // useEffect(() => {
  //   fetch(`http://localhost:3001/quotes/random`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //       console.log(data)
  //     });
  // }, [inputValue]);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <input type={'search'} value={inputValue} onKeyUp={(event) => {
          setInputValue(event.target.value)
          changeUrl(`search?term=${inputValue}`)}}/>
        <div>{data.map(object => {
          return (
            <div><p>{object.quote}</p>
            <p>{object.author}</p>
            </div>
          )
        })}</div>
        {/* <button onClick={() =>{
          setRandom("random")
          changeUrl(random)
        }}>random data</button> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
