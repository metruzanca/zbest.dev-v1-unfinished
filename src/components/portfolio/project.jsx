import React from 'react';

const Project = (props) => {
    return (
        <div className="project">
            <h1>Title {props.children}</h1>
            <p>Short description</p>
        </div>
    );
}

export default Project;