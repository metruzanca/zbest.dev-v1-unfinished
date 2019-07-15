import React from 'react';
import './App.scss';
import NavBar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import Bar from './components/bar/bar';
import Portfolio from './components/portfolio/portfolio';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Bar/>
      <Portfolio/>
      <div className="contact">
        <div className="form"></div>
      </div>

      <footer>
        <div className="footer-highlight">
          Yo
        </div>
        <div className="footer-info">
          <div>
            <h2>Title</h2>
            <p>Text</p>
          </div>
          <div>
            <h2>Title</h2>
            <p>Text</p>
          </div>
        </div>
        <div className="footer-copyright">
          <p>
            © 2019 Copyright: <a href="https://zbest.dev">ZBest.dev</a>
          </p>
        </div>
      </footer>   
    </div>
  );
}

export default App;