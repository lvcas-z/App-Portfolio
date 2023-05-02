import React from 'react'
import './ProjectItem.css'
import {BiHomeAlt2} from 'react-icons/bi'
import{FiGithub} from 'react-icons/fi'
import projects from '../../../data/data'
import AtroposWrapper from '../../Wrapper/AtroposWrapper'

const ProjectItem = () => {
    return (
        <div className='projects-ctn'>
            {
                projects.map(project=>{
                    return (
                        <AtroposWrapper key={project.id}>
                                <div data-atropos-offset="0" className='project-ctn'>
                                    <div data-atropos-offset="5"className='project-img-ctn'>
                                        <img className='project-img' src={project.img}/>
                                    </div>
                                    <h4 className='project-title'>{project.nombre}</h4>
                                    <p className='project-text'>Tecnologias : {project.tecnologias}</p>
                                    <div className='project-btn-ctn'>
                                        <a  data-atropos-offset="4" href={project.repositorio}><FiGithub/> Github</a>
                                        <a  data-atropos-offset="4" href={project.url}><BiHomeAlt2/>Deploy</a>
                                    </div>
                                </div>
                        </AtroposWrapper>
                        )})}
        </div>
    )
}

export default ProjectItem