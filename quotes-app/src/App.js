import './App.css';
const fetch = require('sync-fetch')
function App() {
  const fetchData = () => {
  return fetch('https://elated-trapezoidal-baroness.glitch.me/quotes/random').json();
};
const data = fetchData();
  return (
    <div className="App">
      <header className="App-header">
      <p>
        Quote application
      </p>
      <div>{data.quote}</div>
      </header>
    </div>
  );
}

export default App;
