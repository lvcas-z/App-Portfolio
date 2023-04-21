import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <footer>
            <div className='footer-menu'>
                <div>
                    <h4>Titulo</h4>
                </div>
                <div>
                    <h4>Navegacion</h4>
                    <ul className='footer-links'>
                        <li className='footer-item'>Inicio</li>
                        <li className='footer-item'>Sobre Mi</li>
                        <li className='footer-item'>Proyectos</li>
                        <li className='footer-item'>Contacto</li>
                    </ul>
                </div>
                <div>
                    <h4>Titulo</h4>
                </div>
            </div>
            <p className='copyright'>© Hecho por Lucas Zelaya</p>
        </footer>
    )
}

export default Footer