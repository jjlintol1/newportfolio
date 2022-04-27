import React from 'react';
import './App.css';

import { About, Footer, Header, Impact, Inspiration, Values } from './containers';
import { Navbar } from './components';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Values />
      <About />
      <Impact />
      <Inspiration />
      <Footer />
    </div>
  );
}

export default App;
