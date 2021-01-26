import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'
import hero from '../../assets/hero.png'
import logo from '../../assets/logo.png'
import Rotate from 'react-reveal/Rotate'

function Hero () {

    return (
        <section id='home' >
            <Fade left duration={1000} delay={500} distance="30px" className='flex-row'>
                    {/* <img src={hero} alt='Vitor Bigelli | vitorbigelli | Bitmoji' className='avatar-image'/>  */}
                    <h2> Hi, my name is </h2>
                    <h1>Vitor Bigelli 👋 </h1>
                    <h5 className='centralize home-title'>
                        I'm a Web Developer/Software Engineer living in São Paulo, Brazil
                    </h5> 
            </Fade>                        
        </section>
    )
}

export default Hero