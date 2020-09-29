import React from 'react'
import Fade from 'react-reveal/Fade'
import hero from '../../assets/hero.png'
import logo from '../../assets/logo.png'
import Rotate from 'react-reveal/Rotate'

function Hero () {
    return (
        <section id='home' >
            <Fade left duration={1000} delay={500} distance="30px" className='flex-row'>
                <div className='d-flex flex-row justify-content-center align-items-start'>
                    <img src={hero} alt='Vitor Bigelli | vitorbigelli | Bitmoji' className='avatar-image'/> 
                    <div className='d-flex flex-column justify-content-start align-items-center'>
                        <Rotate delay={1500} duration={1000}> 
                            <img src={logo} alt='Vito Bigelli | vitorbigelli | Logo' className='logo-image'/>
                        </Rotate>
                        <h5 className='centralize home-title'>
                            Full Stack Web Developer
                        </h5> 
                    </div>
                </div>
            </Fade>                        
        </section>
    )
}

export default Hero