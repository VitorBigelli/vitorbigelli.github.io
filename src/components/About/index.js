import React from 'react'
import profile from '../../assets/profile.jpg'
import Fade from 'react-reveal/Fade'
import Flip from 'react-reveal/Fade'

function About () {
    return (
        <section id='about' >
            <Fade left  duration={1000} delay={500} distance="30px">
            <h1> About Me </h1>
            </Fade>
            <div className='flex-row about-inner'>
                <Flip left duration={500} delay={500} >
                    <img src={profile} alt='Vitor Bigelli - vitorbigelli - Profile'  width={300} />
                </Flip>
                <Fade bottom>     
                    <p className='about-me'>
                        Programador desde os 16 anos, possuo graduação técnica em Informática para Internet pela ETEC de Itanhaém e Nanodegrees pela Udacity em Desenvolvimento Front-End e React. Atualmente sou Desenvolvedor Full-Stack e Pesquisador Cientista na Nindoo AI.
                        <br /><br />
                        Entusiasta da Inteligência Artificial e apaixonado por aprender e ensinar, acredito na tecnologia como ferramenta para construir um mundo melhor.
                    </p>
                </Fade>
            </div>
        </section>
    )
}

export default About