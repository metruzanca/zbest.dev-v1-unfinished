import React from 'react';


const liveStyle = {
    float: "left",
    position: "absolute",
    bottom: 0,
    left: 0,
    color: "#80FFCF",
    margin: "20px 50px"
}

const codeStyle = {
    float: "right",
    position: "absolute",
    bottom: 0,
    right: 0,
    color: "#80FFCF",
    margin: "20px 50px"
}

const Project = (props) => {
	console.log(props.id)
    return (
        <div className={props.className}>
            <h1 className="project-title">{props.title}</h1>
            <div className="project-info">{props.description}</div>
            <br/>
            {props.tags.map(tag =>{
                return <><span>{tag}</span> </>
            })}
            <br/>
            <a href={props.live} style={liveStyle}>View Live</a>
            <a href={props.code} style={codeStyle}>View Code</a>
        </div>
    );
}

export default Project;