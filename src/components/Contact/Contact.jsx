import React,{useState} from 'react'
import './Contact.css'
import {BsLinkedin,BsGithub,BsMailbox2} from 'react-icons/bs'
const Contact = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(name);
        console.log(email);
        console.log(message);
    }

    return (
        <div id='contact'>
            <h3>Contacto</h3>
            <div className='contact-ctn'>
                <div className='contact-links-ctn '>
                    <a href="https://www.linkedin.com/in/lucasivanzelaya/">
                        <div className='contact-link linkedin-link'>
                            <BsLinkedin/>    
                        </div>
                    </a>
                    <a href="https://github.com/lvcas-z">
                        <div className='contact-link github-link'>
                            <BsGithub/>    
                        </div>
                    </a>
                    <a href="mailto:lvcaszelaya@gmail.com">
                        <div className='contact-link email-link'>
                            <BsMailbox2/>    
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact