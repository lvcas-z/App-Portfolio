import React from 'react'
import codingImg from '../../assets/coding.png'
import './About.css'
const About = () => {
return (
    <div className='about-ctn'>
        <h3>Sobre mi</h3>
        <div className='about-me-ctn'>
            <div className='about-img-ctn'>
                <img src={codingImg} alt=""/>
            </div>
            <div className='about-info-ctn'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ullam atque corrupti hic soluta nihil suscipit. Aperiam optio esse provident at labore, sit suscipit veniam modi, molestias reiciendis expedita rerum.</p>
            </div>
        </div>
        <div className='skills-ctn'>
            <h3>Skills</h3>
            <ul className='skills-items'>
                <li className='skill-item'>Icon</li>
                <li className='skill-item'>Icon</li>
                <li className='skill-item'>Icon</li>
                <li className='skill-item'>Icon</li>
            </ul>
        </div>
    </div>
)
}

export default About