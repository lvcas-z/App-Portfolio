import React from 'react'
import ProjectItem from './ProjectItem/ProjectItem'
const Projects = ({data}) => {
    return (
        <div id='projects'>
            <h3>Proyectos</h3>
            <ProjectItem projects={data.projects}/>
        </div>
    )
}

export default Projects