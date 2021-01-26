import React, { useState } from 'react'
import profile from '../../assets/profile.jpg'
import Fade from 'react-reveal/Fade'
import Flip from 'react-reveal/Flip' 
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
// import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { Container, Row, Col } from 'react-bootstrap' 

function About () { 

    const [ index, updateIndex ] = useState(0)

    return (
        <section id='about'  className='d-flex flex-row align-items-center justify-content-center'>
            <h1 className='mr-5'> My Journey </h1> 
            <div className='timeline'>
                <span> 2012 <p className='timeline-item-text timeline-top'> Acquired a technical degree in Internet Informatics at ETEC de Itanhaém. </p> </span>
                <span> 2013 <p className='timeline-item-text timeline-bottom'> I started the Materials Engineer graduation at UTFPR, where I developed two projects directed to teaching basic informatics and programming logic using Java.</p> </span>
                <span> 2017 <p className='timeline-item-text timeline-top'> I took Online programming courses obtaining certifications from Udacity and MIT. </p> </span>
                <span> 2018 <p className='timeline-item-text timeline-bottom'> First job: Full-Stack Developer at a Real Estate company from Curitiba-PR.  </p></span>
                <span> 2019 <p className='timeline-item-text timeline-top'> Current job: Full-Stack Developer and R&D Scientist with focus on state-of-the-art technologies at Nindoo AI. </p></span>
            </div>
        </section>
    )
}

export default About