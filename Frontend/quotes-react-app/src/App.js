import './App.css';
import CardWithQuotes from "./CardWithQuotes.js"
import SearchBar from './SearchBar';

function App() {

  return (
    <div className="App">
      <h2>The Most Famous Quotes of All Time</h2>
      <div className='page-holder'>
        <div className='card-Wrapper'>
          <CardWithQuotes />
        </div>
        <SearchBar />
      </div>


    </div>
  );
}

export default App;
