import React,{useState,useEffect} from 'react'
import './Header.css'
const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleVisibility = ()=> setIsOpen(isOpen=>!isOpen)

    return (
    <header>
        <div className='logo-ctn'>
            <span className='logo'>LZ</span>
        </div>
        <span onClick={toggleVisibility} className='open-menu'>==</span>
        <nav className={isOpen ? "open" : ""}>
            <span onClick={toggleVisibility} className='close-menu'>X</span>
            <ul className='nav-links'>
                <li className='nav-item'>Inicio</li>
                <li className='nav-item'>Sobre Mi</li>
                <li className='nav-item'>Proyectos</li>
                <li className='nav-item'>Contacto</li>
            </ul>
        </nav>
    </header>
    )
}

export default Header