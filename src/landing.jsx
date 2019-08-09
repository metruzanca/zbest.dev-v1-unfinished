import React from 'react';
import './App.scss';
import NavBar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import Bar from './components/bar';
import Portfolio from './components/portfolio/portfolio';
import Contact from './components/contact/contact';
import Quotes from './components/quotes/quotes';
import Footer from './components/footer';
import { InView } from 'react-intersection-observer';

class Landing extends React.Component{
  
  threshold = 0;//.5;

  constructor(props) {
    super(props);
    this.state = {
      page:props.page
    }
  }

  monitor = (inView, entry) => {
    if (entry.isIntersecting) {
      this.setState({
        page: `nav-${entry.target.id}`
      })
      console.log('Entering: ' + entry.target.id);
    }
  }

  monitorNav = (inView, entry) => {
    const nav = document.getElementById('header');
    if (!inView) {
      nav.classList.add('nav-scrolled');
    } else {
      nav.classList.remove('nav-scrolled');
    }
    this.monitor(inView, entry);
  }

  render(){
    return(
      <div className="App">
        <NavBar page={this.state.page}/>
        <InView threshold={0} as="div" id="home" className="hero-section" onChange={this.monitorNav}>
          <Hero />
        </InView>
        <Bar/>
        <InView threshold={this.threshold} as="div" id="portfolio" onChange={this.monitor}>
          <Portfolio/>
        </InView>
        <InView threshold={this.threshold} as="div" id="about" onChange={this.monitor} className="content">
          <div id="about-me">
            <h1>About me</h1>
            <p>
              My main goal in life is: "To become The Best version of myself".<br />
              My domain is a constant reminder to what I strive to become.<br />
            </p>
            <br/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis officiis sed, facilis vitae soluta commodi itaque perspiciatis, doloremque unde optio non facere ipsa deserunt asperiores autem at accusantium inventore? Aperiam?</p>
            <br/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis officiis sed, facilis vitae soluta commodi itaque perspiciatis, doloremque unde optio non facere ipsa deserunt asperiores autem at accusantium inventore? Aperiam?</p>
          </div>
          <div id="wakatime">
            <figure>
              <embed src="https://wakatime.com/share/@9f8d80c3-f466-4a54-884b-414b8bf37f5b/e861b466-c76e-45d2-8fae-7482227a064c.svg"/>
            </figure>
          </div>
        </InView>
        <InView threshold={this.threshold} as="div" id="contact" onChange={this.monitor}>
          <Contact/>
        </InView>
        <Footer/>   
      </div>
      );
  }
}

export default Landing;