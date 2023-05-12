import React,{useState} from 'react'
import {MdMenu,MdClose} from 'react-icons/md'
import './Navbar.css'
import logo from '../../assets/logo.png'
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleVisibility = ()=> setIsOpen(isOpen=>!isOpen)

    return (
    <nav>
        <div className='logo-ctn'>
            <a href='.'><img className='logo' src={logo} alt="logo"/></a>
        </div>
        <div onClick={toggleVisibility} className='open-menu'><MdMenu fill='white'/></div>
        <div className={`navbar ${isOpen ? "open" : ""}`}>
            <div onClick={toggleVisibility} className='close-menu'><MdClose fill='white'/></div>
            <ul className='nav-links'>
                <li className='nav-item'><a href=".">Inicio</a></li>
                <li className='nav-item'><a href="#about">Sobre Mi</a></li>
                <li className='nav-item'><a href="#projects">Proyectos</a></li>
                <li className='nav-item'><a href="#contact">Contacto</a></li>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar