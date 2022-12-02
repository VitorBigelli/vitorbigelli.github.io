import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'
import hero from '../../assets/hero.png'
import logo from '../../assets/logo.png'
import Rotate from 'react-reveal/Rotate'

function Hero () {

    return (
        <header id='home' >
            <Fade left duration={1000} delay={500} distance="30px" className='flex-column'>
                <img src={hero} alt='Vitor Bigelli | vitorbigelli | Bitmoji' className='avatar-image'/> 
                <h5 className='centralize home-title'>
                    Vitor Bigelli
                </h5> 
                <h3> Full Stack Web Developer</h3>
            </Fade>                        
        </header>
    )
}

export default Hero