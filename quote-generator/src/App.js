import React from 'react';

import './App.css';
import './quoteGenerator.css';
import Header from './Header.js';
import QuoteDisplay from './QuoteDisplay.js';

function App() {
  return (
    <div>
    <Header />
    <div className="container">
    <QuoteDisplay />
     </div>
    
    </div>  
  );
}

export default App;
