import React from 'react';
import './ProjectItem.css';
import { BiHomeAlt2 } from 'react-icons/bi';
import { FiGithub } from 'react-icons/fi';
import projects from '../../../data/data';

const ProjectItem = () => {
    return (
        <div className='projects-ctn'>
            {projects.map((project) => {

                const isRepositoryEmpty = !project.repositorio;
                const isUrlEmpty = !project.url;
                const altText = project.img ? project.nombre : '';
                return (
                    <div key={project.id} className='project-ctn'>
                        <div className='project-img-ctn'>
                            {project.img && <img className='project-img' src={project.img} alt={altText} />}
                        </div>
                        <h4 className='project-title'>{project.nombre}</h4>
                        <p className='project-text'>Tecnologias: {project.tecnologias}</p>
                        <div className='project-btn-ctn'>
                            <a
                                href={project.repositorio}
                                className={isRepositoryEmpty ? 'disabled-link' : ''}
                            >
                                <FiGithub /> Github
                            </a>
                            <a
                                href={project.url}
                                className={isUrlEmpty ? 'disabled-link' : ''}
                            >
                                <BiHomeAlt2 /> Deploy
                            </a>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ProjectItem;