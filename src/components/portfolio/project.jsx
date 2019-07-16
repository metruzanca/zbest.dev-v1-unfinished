import React from 'react';

const projectStyle = {
    height:'150px',
    width:'150px',
    border: '1px solid green',
}

const Project = (props) => {
    return (
        <div style={projectStyle}>
            <h1>Title {props.children}</h1>
            <p>Short description</p>
        </div>
    );
}

export default Project;