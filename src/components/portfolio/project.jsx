import React from 'react';

const Project = (props) => {
    return (
        <div className="project">
            <h1 className="project-title">Title {props.children}</h1>
            <div className="project-info">Short description</div>
        </div>
    );
}

export default Project;