import React from 'react';

const Project = (props) => {
	console.log(props.id)
    return (
        <div className="project">
            <h1 className="project-title">{props.title}</h1>
            <div className="project-info">{props.description}</div>
        </div>
    );
}

export default Project;