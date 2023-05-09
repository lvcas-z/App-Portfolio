import React,{useState} from 'react'
import {FaReact,FaJsSquare,FaCss3Alt,FaHtml5,FaSass,FaGitAlt} from 'react-icons/fa'
import {GrMysql} from 'react-icons/gr'
import 'animate.css';
import './Hero.css'
const Hero = () => {

    return (
        <div className='hero-ctn'>
            <div>
                <h1 className="hero-title animate__animated animate__fadeIn" style={{animationDelay: '0.5s'}}>Lucas Zelaya</h1>
                <h2 className="hero-subtitle animate__animated animate__fadeInDown" style={{animationDelay: '1s'}}>FRONTEND DEVELOPER</h2>
            </div>
            <div className='skills-ctn'>
            <ul className='skills-items'>
                <div className='skill-item animate__animated animate__fadeIn' style={{animationDelay: '1.4s'}}>
                    <FaReact fill='cyan'/>
                    <li>React</li>
                </div>
                <div className='skill-item animate__animated animate__fadeIn' style={{animationDelay: '1.6s'}}>
                    <FaJsSquare fill='yellow'/>
                    <li>Javascript</li>
                </div>
                <div className='skill-item animate__animated animate__fadeIn' style={{animationDelay: '1.8s'}}>
                    <FaCss3Alt fill='royalblue'/>
                    <li>CSS</li>
                </div>
                <div className='skill-item animate__animated animate__fadeIn' style={{animationDelay: '2s'}}>
                    <FaHtml5 fill='chocolate'/>
                    <li>HTML</li>
                </div>
                <div className='skill-item animate__animated animate__fadeIn' style={{animationDelay: '2.1s'}}>
                    <FaSass fill='deeppink'/>
                    <li>SASS</li>
                </div>
                <div className='skill-item animate__animated animate__fadeIn' style={{animationDelay: '2.3s'}}>
                    <FaGitAlt fill='orange'/>
                    <li>Git</li>
                </div>
                <div className='skill-item animate__animated animate__fadeIn' style={{animationDelay: '2.5s'}}>
                    <GrMysql fill='aquamarine'/>
                    <li>MySQL</li>
                </div>
            </ul>
        </div>
        </div>
    )
}

export default Hero