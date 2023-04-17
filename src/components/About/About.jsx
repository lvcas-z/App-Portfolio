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
            <div className='info-ctn'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste, doloremque alias maxime earum explicabo in voluptatibus quasi, corporis facere incidunt! Cupiditate minus, magnam animi in illo nisi vel facilis?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste, doloremque alias maxime earum explicabo in voluptatibus quasi, corporis facere incidunt! Cupiditate minus, magnam animi in illo nisi vel facilis?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste, doloremque alias maxime earum explicabo in voluptatibus quasi, corporis facere incidunt! Cupiditate minus, magnam animi in illo nisi vel facilis?</p>
                </div>
        </div>
    </>
)
}

export default About