import React from 'react'
import Fade from 'react-reveal/Fade'
import hero from '../../assets/hero.png'

function Hero () {
    return (
        <section id='home' >
            <Fade left duration={1000} delay={500} distance="30px" className='flex-row'>
                <div className='flex-row centralize'>
                    <img src={hero} alt='Vitor Bigelli | vitorbigelli | Bitmoji'/>
                    <h1>
                        Hi, my name is <span className="destak-text"> Vitor Bigelli </span>
                        <br />
                        I'm a Full Stack Web Developer
                    </h1> 
                </div>
            </Fade>                        
        </section>
    )
}

export default Hero