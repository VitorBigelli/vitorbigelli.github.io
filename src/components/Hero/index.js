import React from 'react'
import Fade from 'react-reveal/Fade'

function Hero () {
    return (
        <section id='home' >
            <Fade left duration={1000} delay={500} distance="30px">
                <h1 className="hero-title">
                    Hi, my name is
                    <span className="destak-text"> Vitor Bigelli </span>
                    <br />
                    I'm a Full Stack Web Developer
                </h1>
            </Fade>                        
        </section>
    )
}

export default Hero