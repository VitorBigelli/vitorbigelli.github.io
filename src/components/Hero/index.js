import React from 'react'
import Image from 'next/image'

function Hero () {

    return (
        <header id='home' >
            <Image src="/assets/hero.png" alt='Vitor Bigelli | vitorbigelli | Bitmoji' className='avatar-image' width={100} height={100}/> 
            <h5 className='centralize home-title'>
                Vitor Bigelli
            </h5> 
            <h4> Full Stack Web Developer</h4>                
        </header>
    )
}

export default Hero