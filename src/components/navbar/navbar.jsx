import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';


const btnResume = (e) =>{
    console.log('click');
    
}

/**
 * TODO: need to add state to this component instead of modifying the style thru the main app.
 */

class NavBar extends React.Component{
    nav = document.getElementsByClassName('nav');

    setHighlight(){
        for (let navItem of this.nav) navItem.classList.remove('current');
        const current = document.getElementById(this.props.page);
        current.classList.add('current');
    }

    componentDidMount(){
        this.setHighlight();
    }

    componentDidUpdate(){
        this.setHighlight();
    }

    render(){
        return(
            <header id='header'>
                <Link to="/" id="logo">
                    <svg className="nav-logo" xmlns="http://www.w3.org/2000/svg" width="25.644" height="41.27" viewBox="0 0 25.644 41.27">
                        <g id="Group_87" data-name="Group 87" transform="translate(0)">
                            <path id="Subtraction_1" data-name="Subtraction 1" d="M20.148,17.519H0L10.074,0l.16.278L3.942,15.33H18.889l1.257,2.187Z" transform="translate(5.497 20.642)" fill="#f6df4c" />
                            <path id="Subtraction_2" data-name="Subtraction 2" d="M20.148,17.519H0L10.074,0l.16.278L3.942,15.33H18.889l1.257,2.187Z" transform="translate(20.148 20.642) rotate(180)" fill="#f6df4c" />
                            <path id="Slash" d="M0,39.009,12.373.553,14.975,0,2.662,38.443,0,39.009Z" transform="matrix(0.978, 0.208, -0.208, 0.978, 9.558, 0)" fill="#f6df4c" />
                        </g>
                    </svg>
                </Link>
                <nav>
                    <ul>
                        <li id="nav-home" className="nav current"><Link to="/#home">Home</Link></li>
                        <li id="nav-portfolio" className="nav"><Link to="/#portfolio">Portfolio</Link></li>
                        <li id="nav-about" className="nav"><Link to="/#about">About</Link></li>
                        <li id="nav-contact" className="nav"><Link to="/#contact">Contact</Link></li>
                        <li id="nav-blog" className="nav"><Link to="/blog">Blog</Link></li>
                    </ul>
                </nav>
                <div id="social">
                    {/* Probably best not use img tags but something with a css bg. Buttons or links or similar */}
                    <a href="https://github.com/metruzanca">
                        <img src="/img/github.png" alt="github"/>
                    </a>
                    <a href="https://www.linkedin.com/in/samuel-z-8b9479116/">
                        <img src="/img/linkedin.png" alt="linkedin"/>
                    </a>
                    <button className="btn-resume" onClick={btnResume}>
                        <img src="/img/pdf.png" alt="resume"/>
                    </button>
                </div>
            </header>
        );
    }
}

export default NavBar;