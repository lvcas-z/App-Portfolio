import React from 'react'
import './Header.css'
const Header = () => {
    return (
    <nav>
        <div className='logo-ctn'>
            <span>LZ</span>
        </div>
        <div className='nav-links-ctn'>
            <ul className='nav-links'>
                <li className='nav-item'>Inicio</li>
                <li className='nav-item'>Sobre Mi</li>
                <li className='nav-item'>Proyectos</li>
                <li className='nav-item'>Contacto</li>
            </ul>
        </div>
    </nav>
    )
}

export default Header