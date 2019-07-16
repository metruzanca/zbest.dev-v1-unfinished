import React from 'react';
import './App.scss';
import NavBar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import Bar from './components/bar';
import Portfolio from './components/portfolio/portfolio';
import Contact from './components/contact/contact';

import { InView } from 'react-intersection-observer';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nav: 'nav-about',
    };
  }

  monitor = (inView, entry) => {
    if (entry.isIntersecting) {
      // this.setState(nav)
      // console.log(entry.target.id);
      this.setState({
        nav: `nav-${entry.target.id}`
      })
    }
  }

  monitorHero = (inView, entry) => {
    const nav = document.getElementById('header');
    if (!inView) {
      nav.classList.add('nav-scrolled');
    } else {
      nav.classList.remove('nav-scrolled');
    }
    this.monitor(inView, entry);
  }

  render(){
    return (
      <div className="App">
        <NavBar page={this.state.nav}/>
        <InView as="div" id="home" className="hero-section" onChange={this.monitorHero}>
          <Hero />
        </InView>
        <Bar/>
        <InView as="div" id="portfolio" onChange={this.monitor}>
          <Portfolio/>
        </InView>
        <InView as="div" id="about" onChange={this.monitor} className="content">
          me
        </InView>
        <InView as="div" id="contact" onChange={this.monitor}>
          <Contact/>
        </InView>
  
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

}

export default App;