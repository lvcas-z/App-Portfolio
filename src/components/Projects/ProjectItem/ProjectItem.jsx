import React from 'react'
import './ProjectItem.css'
const ProjectItem = ({projects}) => {
    return (
        <div className='projects-ctn'>
            {
                projects.map(project=>{
                    return (
                        <div key={project.id} className='project-ctn'>
                            <div className='project-img-ctn'>
                                <img src={project.img}/>
                            </div>
                            <h4>{project.nombre}</h4>
                            <div className='project-btn-ctn'>
                                <button>Repositorio</button>
                                <button>Sitio Web</button>
                            </div>
                        </div>)})}
        </div>
    )
}

export default ProjectItem