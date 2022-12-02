import React from 'react'
import Image from 'next/image'

function Certifications () {
    return (
        <section id='certifications' >
            <h1> Certifications </h1>
            <div className='project-container'>
                <h4> React Developer Nanodegree </h4>
                <img src='/assets/udacity_react.png'  alt='Vitor Bigelli | vitorbigelli | DeepWild' className='shadow' />
                {/* <p> Udacity (2018) </p> */}
            </div>
            <div className='project-container'>
                <h4> Front-End Web Developer Nanodegree </h4>
                <img src='/assets/udacity_front.png' alt='Vitor Bigelli | vitorbigelli | DeepWild'  className='shadow' /> 
                {/* <p> Udacity (2019) </p>                */}
            </div>
            <div className='project-container'>
                <h4> Introduction to Computational Thinking and Data Science </h4>
                <img src='/assets/mit_python.png'  alt='Vitor Bigelli | vitorbigelli | MIT edx' className='shadow' />
                {/* <p> edx/MIT (2017)</p> */}
            </div>
            <div className='project-container'>
                <h4> Introduction to Computer Science and Programming with Python </h4>
                <img src='/assets/mit_python.png'  alt='Vitor Bigelli | vitorbigelli | MIT edx' className='shadow'/>
                {/* <p> edx/MIT (2017)</p> */}
            </div>
        </section>
    )
}

export default Certifications