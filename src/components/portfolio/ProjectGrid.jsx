import React from 'react';
import Project from './project'

/**
 * Todo: Implement foreach based on props that will generated project tags etc.
 */

const ProjectGrid = ({projects}) => {
console.log(projects)
    return (
        <div className="project-grid">
        	{projects.map((project, index) =>(
            	<Project
					key={project.id}
					className={'project show ' + project.tags.join(' ')}
            		title={project.title}
            		description={project.description}
            		repository={project.repository}
            		live={project.live}
            	/>
        	))}
        </div>
    );
}

export default ProjectGrid;