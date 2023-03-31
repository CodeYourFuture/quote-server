// import {useState, useEffect} from "react";
import './App.css';
import Header from './Header';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';



function App() {
return (
  <div className='App'>
    <Header />

  <BrowserRouter>
    <nav className='navigation'>
      <Link to = '/' className= 'navbar'>
        Random Quote
      </Link>
      <Link to = '/quotes' className= 'navbar'>
        Quote Selection
      </Link>
      <Link to = '/quotes/search' className= 'navbar'>
        Search Quote
      </Link>
    </nav>
  </BrowserRouter>
  </div>
)

}

  

export default App;
