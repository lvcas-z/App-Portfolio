import React from 'react'
import './ProjectItem.css'
import projects from '../../../data/data'
const ProjectItem = () => {
    return (
        <div className='projects-ctn'>
            {
                projects.map(project=>{
                    return (
                        <div key={project.id} className='project-ctn'>
                            <div className='project-img-ctn'>
                                <img src={project.img}/>
                            </div>
                            <h4>{project.name}</h4>
                            <div className='project-btn-ctn'>
                                <a href={project.repositorio}>Repositorio</a>
                                <a href={project.url}>Sitio Web</a>
                            </div>
                        </div>)})}
        </div>
    )
}

export default ProjectItem