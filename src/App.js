import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home.js';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact.js';
import Header from './components/Header/Header.js';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </div>
    </div>
  );
}

export default App;
