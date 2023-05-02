import React from 'react'
import './ProjectItem.css'
import {BiHomeAlt2} from 'react-icons/bi'
import{FiGithub} from 'react-icons/fi'
import projects from '../../../data/data'
const ProjectItem = () => {
    return (
        <div className='projects-ctn'>
            {
                projects.map(project=>{
                    return (
                        <div key={project.id} className='project-ctn'>
                            <div className='project-img-ctn'>
                                <img className='project-img' src={project.img}/>
                            </div>
                            <h4 className='project-title'>{project.nombre}</h4>
                            <p className='project-text'>Tecnologias : {project.tecnologias}</p>
                            <div className='project-btn-ctn'>
                                <a href={project.repositorio}><FiGithub/> Github</a>
                                <a href={project.url}><BiHomeAlt2/>Deploy</a>
                            </div>
                        </div>)})}
        </div>
    )
}

export default ProjectItem