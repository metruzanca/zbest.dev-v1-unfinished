import React from 'react';
import './hero.css';

const action = {
    color: "#80FFCF",
    border: "2px solid #80FFCF",
    borderRadius: "10%",
    padding: "20px",
    fontSize:"1.25rem"

}

class Hero extends React.Component{
    render(){
        return(
            <div className="hero-section">
                <div className="hero-headers">
                    <h1>Hello, I'm 
                        <span> Samuele <svg xmlns="http://www.w3.org/2000/svg" width="19.74588" height="31.7779" viewBox="0 -6 25.644 41.27">
                            <g id="Group_88" data-name="Group 88" transform="translate(73.593 -1118.939)">
                                <path id="Subtraction_1" data-name="Subtraction 1" d="M20.148,17.519H0L10.074,0l.16.278L3.942,15.33H18.889l1.257,2.187Z" transform="translate(-68.096 1136.468)" fill="#f6df4c" />
                                <path id="Subtraction_2" data-name="Subtraction 2" d="M20.148,17.519H0L10.074,0l.16.278L3.942,15.33H18.889l1.257,2.187Z" transform="translate(-53.445 1136.468) rotate(180)" fill="#f6df4c" />
                                <path id="Subtraction_4" data-name="Subtraction 4" d="M1.856,38.984h0l20.1-35.043h2.66L4.577,38.983Z" transform="translate(-74 1115)" fill="#f6df4c" />
                            </g>
                    </svg>anca</span>.</h1>
                    <h1>I'm a Full-Stack JS Developer.</h1>
                </div>
                <div className="call-to-action" style={action}>
                    Read More ↓
                </div>
            </div>
        )
    }
}
export default Hero;