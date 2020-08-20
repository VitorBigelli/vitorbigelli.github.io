import React from 'react'
import profile from '../../assets/profile.jpg'
import Fade from 'react-reveal/Fade'
import Flip from 'react-reveal/Flip' 



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
                    Enthusiast of Artificial Intelligence and passionate about learning and teaching, I believe in technology as the tool to build a better world.
                    <br/><br/>
                    I started my professional development at ETEC de Itanhaém, where I obtained a technical degree in Internet Informatics at the age of 17, learning programming logic and the basic concepts behind web applications.
                    <br/><br/>
                    My focus changed when I started a graduation in Materials Engineer at UTFPR, guided for my mathematical passion and ease in the field. Inside the university, I developed two projects directed to teaching basic informatics and programming logic using Java.
                    <br/><br/>
                    4 years ago I started to study programming again, this time focusing on front-end development.
                    <br/><br/>
                    Today, I work at Nindoo AI, as Full-Stack Developer and R&D Scientist with focus on delivering technologies to solve real world problems.     
                    </p>
                </Fade>
            </div>
        </section>
    )
}

export default About