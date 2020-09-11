import React from 'react'
import 'react-multi-carousel/lib/styles.css';
import udacity_front from '../../assets/udacity_front.png'
import udacity_react from '../../assets/udacity_react.png'
import mit_python from '../../assets/mit_python.png'
import mit_data_science from '../../assets/mit_data_science.png'

import Flip from 'react-reveal/Flip'

function Certifications () {
    return (
        <section id='certifications' >
            <h1> Certifications </h1>
            <div className='project-container'>
                <h2> React Developer Nanodegree </h2>
                <Flip left>
                <img src={udacity_react}  alt='Vitor Bigelli | vitorbigelli | DeepWild'/>
                </Flip>
                <p> Udacity (2018) </p>
            </div>
            <div className='project-container'>
                <h2> Front-End Web Developer Nanodegree </h2>
                <Flip right>
                <img src={udacity_front} alt='Vitor Bigelli | vitorbigelli | DeepWild' /> 
                </Flip> 
                <p> Udacity (2019) </p>               
            </div>
            <div className='project-container'>
                <h2> Introduction to Computational Thinking and Data Science </h2>
                <Flip left>
                <img src={mit_python}  alt='Vitor Bigelli | vitorbigelli | MIT edx'/>
                </Flip>
                <p> edx/MIT (2017)</p>
            </div>
            <div className='project-container'>
                <h2> Introduction to Computer Science and Programming with Python </h2>
                <Flip left>
                <img src={mit_data_science}  alt='Vitor Bigelli | vitorbigelli | MIT edx'/>
                </Flip>
                <p> edx/MIT (2017)</p>
            </div>
        </section>
    )
}

export default Certifications