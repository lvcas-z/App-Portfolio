import React from 'react'
import './Contact.css'
const Contact = () => {
    return (
        <div>
            <h3>Contacto</h3>
            <div className='contact-form-ctn'>
                <div>
                    <p className='contact-form-text'>Gracias por visitar mi pagina,si te gustaria contactarme para colaborar en algun proyecto , charlar o saber mas sobre mi , aqui te dejo mi contacto</p>
                </div>
                <form className='form-ctn'>
                    <input type="text" placeholder='Nombre' />
                    <input type="email" placeholder='Ingrese su correo' />
                    <input type="text" placeholder='Deje su mensaje aqui'/>
                    <input type="button" value="Enviar" />
                </form>
            </div>
        </div>
    )
}

export default Contact