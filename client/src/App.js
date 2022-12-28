import React from 'react'
import './App.css';
import GetRandomQuotes from './components/GetRandomQuotes';
import Header from './components/Header';
import WelcomeMessage from './components/WelcomeMessage';

function App() {
  return (
    <div className="App">
      <Header />
      <WelcomeMessage />
      <GetRandomQuotes />      
    </div>
  );
}

export default App;
