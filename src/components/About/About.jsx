import React from 'react'
import codingImg from '../../assets/coding.png'
import './About.css'
const About = () => {
return (
    <>
        <h2>Sobre mi</h2>
        <div className='about-ctn'>
            <div className='about-img-ctn'>
                <img src={codingImg} alt=""/>
            </div>
            <div className='about-info-ctn'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ullam atque corrupti hic soluta nihil suscipit. Aperiam optio esse provident at labore, sit suscipit veniam modi, molestias reiciendis expedita rerum.</p>
                </div>
        </div>
    </>
)
}

export default About