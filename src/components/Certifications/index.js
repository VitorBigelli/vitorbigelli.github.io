import React from 'react'
import 'react-multi-carousel/lib/styles.css';
import udacity_front from '../../assets/udacity_front.png'
import udacity_react from '../../assets/udacity_react.png'
import mit_python from '../../assets/mit_python.png'
import mit_data_science from '../../assets/mit_data_science.png'

import Flip from 'react-reveal/Flip'

function Certifications () {
    return (
        <section id='certifications' className='d-flex flex-row align-items-center'>
            <h1 className='mr-5'> Certifications </h1>
            <div className='w-70'>
                <div className='d-flex'>
                    <div className='project-container'>
                        <img src={mit_python}  alt='Vitor Bigelli | vitorbigelli | MIT edx'/>
                        <h5> Introduction to Computer Science and Programming with Python </h5>
                        <p> edX/MIT (2017)</p>
                    </div>
                    <div className='project-container'>
                        <img src={mit_data_science}  alt='Vitor Bigelli | vitorbigelli | MIT edx'/>
                        <h5> Introduction to Computational Thinking and Data Science </h5>
                        <p> edX/MIT (2017)</p>
                    </div>
                </div>
                <div className='timeline w-100' />     
                <div className='d-flex'>
                    <div className='project-container'>
                        <img src={udacity_front} alt='Vitor Bigelli | vitorbigelli | DeepWild' /> 
                        <h5> Front-End Web Developer Nanodegree </h5>
                        <p> Udacity (2017) </p>               
                    </div>
                    <div className='project-container'>
                        <img src={udacity_react}  alt='Vitor Bigelli | vitorbigelli | DeepWild'/>
                        <h5> React Developer Nanodegree </h5>
                        <p> Udacity (2018) </p>
                    </div>
                </div>
            </div>            
        </section>
    )
}

export default Certifications