import React from 'react'
import codingImg from '../../assets/coding.png'
// import {FaReact,FaJsSquare,FaCss3Alt,FaHtml5,FaSass,FaGitAlt,FaBootstrap} from 'react-icons/fa'
import './About.css'
const About = () => {
return (
    <div className='about-ctn' id='about'>
        <h3>Sobre mi</h3>
        <div className='about-me-ctn'>
            <div className='about-img-ctn'>
                <img src={codingImg} alt=""/>
            </div>
            <div className='about-info-ctn'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ullam atque corrupti hic soluta nihil suscipit. Aperiam optio esse provident at labore, sit suscipit veniam modi, molestias reiciendis expedita rerum.</p>
            </div>
        </div>
        {/* <div className='skills-ctn'>
            <h3>Skills</h3>
            <ul className='skills-items'>
                <div className='skill-item'>
                    <FaReact color="aqua"/>
                    <li>React</li>
                </div>
                <div className='skill-item'>
                    <FaJsSquare color="yellow"/>
                    <li>Javascript</li>
                </div>
                <div className='skill-item'>
                        <FaCss3Alt color="blue"/>
                    <li>CSS</li>
                </div>
                <div className='skill-item'>
                    <FaHtml5 color="orange"/>
                    <li>HTML</li>
                </div>
                <div className='skill-item'>
                    <FaSass color="pink"/>
                    <li>SASS</li>
                </div>
                <div className='skill-item'>
                    <FaGitAlt color="orange"/>
                    <li>Git</li>
                </div>
                <div className='skill-item'>
                    <FaBootstrap color="purple"/>
                    <li>Bootstrap</li>
                </div>
            </ul>
        </div> */}
    </div>
)
}

export default About