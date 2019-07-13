import React from 'react';
import './App.css';
import NavBar from './components/navbar/navbar';
import Hero from './components/hero/hero'

function App() {
  return (
    <div className="App">
      <Hero/>
      <NavBar/>
      <div className="content">
      </div>
      <div className="contact">
        <div className="form"></div>
      </div>
      <div className="footer"></div>
     {/* test */}
    </div>
  );
}

export default App;
