import React,{useState} from 'react'
import {FaReact,FaJsSquare,FaCss3Alt,FaHtml5,FaSass,FaGitAlt,FaBootstrap} from 'react-icons/fa'
import {GrMysql} from 'react-icons/gr'
import './Hero.css'
const Hero = () => {

    return (
        <div className='hero-ctn'>
            <div className="glowing-ctn">
                <h1 className="hero-title ">Lucas Zelaya</h1>
                <h2 className="hero-subtitle">FRONTEND DEVELOPER</h2>
            </div>
            <div className='skills-ctn'>
            <ul className='skills-items'>
                <div className='skill-item'>
                    <FaReact/>
                    <li>React</li>
                </div>
                <div className='skill-item'>
                    <FaJsSquare/>
                    <li>Javascript</li>
                </div>
                <div className='skill-item'>
                        <FaCss3Alt/>
                    <li>CSS</li>
                </div>
                <div className='skill-item'>
                    <FaHtml5/>
                    <li>HTML</li>
                </div>
                <div className='skill-item'>
                    <FaSass/>
                    <li>SASS</li>
                </div>
                <div className='skill-item'>
                    <FaGitAlt/>
                    <li>Git</li>
                </div>
                <div className='skill-item'>
                    <GrMysql/>
                    <li>MySQL</li>
                </div>
            </ul>
        </div>
        </div>
    )
}

export default Hero