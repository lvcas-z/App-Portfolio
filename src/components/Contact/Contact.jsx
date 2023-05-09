import React from 'react'
import './Contact.css'
import {BsLinkedin,BsGithub} from 'react-icons/bs'
const Contact = () => {
    return (
        <div id='contact'>
            <h3>Contacto</h3>
            <div className='contact-form-ctn'>
                <div className='contact-links-ctn'>
                    <p className='contact-links-text'>Gracias por visitar mi pagina,si te gustaria contactarme para colaborar en algun proyecto o presentarme alguna propuesta aca te dejo mi contacto : </p>
                    <a href="https://www.linkedin.com/in/lucasivanzelaya/">
                        <div className='contact-link'>
                            <BsLinkedin/>    
                        </div>
                    </a>
                    <a href="https://github.com/lvcas-z">
                        <div className='contact-link'>
                            <BsGithub/>    
                        </div>
                    </a>
                </div>
                <form className='form-ctn'>
                    <input type="text" placeholder='Nombre' />
                    <input type="email" placeholder='Ingrese su correo' />
                    <input type="text" placeholder='Deje su mensaje aqui'/>
                    <input className='send-btn' type="button" value="Enviar" />
                </form>
            </div>
        </div>
    )
}

export default Contact