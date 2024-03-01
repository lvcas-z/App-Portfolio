import React from 'react'
import codingImg from '../../assets/coding.svg'
import cv from '../../assets/ZelayaLucas.pdf'

import './About.css'
const About = () => {
return (
    <div className='about-ctn' id='about'>
        <h3>Sobre mi</h3>
        <div className='about-me-ctn'>
            <div className='about-img-ctn'>
                <img src={codingImg} alt="codeando"/>
            </div>
            <div className='about-info-ctn'>
                <p>Me encantan los desafios y aportar valor a distintos proyectos. Disfruto de aprender nuevas tecnologias y herramientas para poder crecer dia a dia. Actualmente me encuentro aprendiendo React Native y mejorando mi nivel de inglés</p>
                <div className='about-btn-ctn'>
                    <a href="#contact">Contacto</a>
                    <a href={cv}>Ver CV</a>
                </div>
            </div>
        </div>
    </div>
)
}

export default About