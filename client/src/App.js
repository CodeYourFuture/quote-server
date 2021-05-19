import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import AllQuotes from './components/AllQuotes';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' render={() => (<AllQuotes />)} />
        <Route exact path='/random' render={() => (<RandomQuote />)} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
