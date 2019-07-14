import React from 'react';
import './App.css';
import NavBar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import Bar from './components/bar/bar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Bar/>
      <div className="content">
      </div>
      <div className="contact">
        <div className="form"></div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
// 