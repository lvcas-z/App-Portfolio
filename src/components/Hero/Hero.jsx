import React,{useState} from 'react'
import './Hero.css'
const Hero = () => {
    const [isGlow, setIsGlow] = useState(false)

    const toggleGlow = ()=> setIsGlow(isGlow=>!isGlow)

    return (
        <div className='hero-ctn'>
            <div onMouseOut={toggleGlow} className={`glowing-ctn ${isGlow ? 'active' : ''}`}>
                <h1 className={`hero-title ${isGlow ? 'active' : ''}`}>Lucas Zelaya</h1>
                <h3 className={`hero-subtitle ${isGlow ? 'active' : ''}`}>FRONTEND DEVELOPER</h3>
            </div>
        </div>
    )
}

export default Hero