import React,{useState} from 'react'
import './Navbar.css'
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleVisibility = ()=> setIsOpen(isOpen=>!isOpen)

    return (
    <nav>
        <div className='logo-ctn'>
            <span className='logo'>LZ</span>
        </div>
        <span onClick={toggleVisibility} className='open-menu'>==</span>
        <div className={`navbar ${isOpen ? "open" : ""}`}>
            <span onClick={toggleVisibility} className='close-menu'>X</span>
            <ul className='nav-links'>
                <li className='nav-item'><a href="#">Inicio</a></li>
                <li className='nav-item'><a href="#about">Sobre Mi</a></li>
                <li className='nav-item'><a href="#projects">Proyectos</a></li>
                <li className='nav-item'><a href="#contact">Contacto</a></li>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar