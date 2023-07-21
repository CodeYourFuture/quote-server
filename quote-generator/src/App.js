// import {useState, useEffect} from "react";
import './App.css';
import Header from './Header';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import AllQuotes from './AllQuotes';
import Footer from './Footer';
import RandomQuote from './RandomQuote';



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
    <Routes>
      <Route path='/quotes' element = {<AllQuotes/>} /> 
      <Route path ='/' element ={<RandomQuote />} />
    </Routes>
  </BrowserRouter>
  <Footer />
  </div>
)

}

  

export default App;
