import React from 'react';
import Project from './project'

/**
 * Todo: Implement foreach based on props that will generated project tags etc.
 */

const ProjectGrid = () => {
    let i = 1;
    return (
        <div className="project-grid">
            <Project className="project">{i++}</Project>
            <Project className="project">{i++}</Project>
            <Project className="project">{i++}</Project>
            <Project className="project">{i++}</Project>
        </div>
    );
}

export default ProjectGrid;