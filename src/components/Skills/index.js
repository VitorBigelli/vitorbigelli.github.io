import React from 'react'
import {
    DiNodejsSmall,
    DiReact, 
    DiBootstrap,
    DiJavascript, 
    DiPython,
    DiDocker,
    DiMongodb,
    DiHtml5,
    DiCss3,
    DiGoogleCloudPlatform,
    DiDigitalOcean,
    DiGit,
    DiNginx,
} from 'react-icons/di'
import {
    FaAws
} from 'react-icons/fa'
import { Icon } from '@iconify/react';
import neo4jIcon from '@iconify/icons-simple-icons/neo4j';
import rabbitmq from '@iconify/icons-simple-icons/rabbitmq';
import Fade from 'react-reveal/Fade'

const skills = {
    front: [
        { name: 'React', className: 'react', icon: () => <DiReact /> }, 
        { name: 'Javascript', className: 'javascript', icon: () => <DiJavascript /> }, 
        { name: 'HTML 5', className: 'html', icon: () => <DiHtml5 /> }, 
        { name: 'CSS 3', className: 'css', icon: () => <DiCss3 /> }, 
    ], 
    back: [
        { name: 'Python', className: 'python', icon: () => <DiPython /> }, 
        { name: 'NodeJS', className: 'nodejs', icon: () => <DiNodejsSmall /> }, 
    ]
}

function Skills () {
    return (
        <section id='skills' className='d-flex flex-row align-items-center' >
            <h1 className='mr-5'> My Skills </h1> 
            <div className='timeline'>
            <ul className='flex-row'> 
                {
                    skills.front.map( (s, i) => {
                        return (
                            <li className={s.className}> 
                                { s.icon() }
                                <span className='tooltip'> { s.name }</span>
                            </li>
                        )
                    })
                }
                {
                    skills.back.map( (s, i) => {
                        return (
                            <li className={s.className}> 
                                { s.icon() }
                                <span className='tooltip'> { s.name }</span>
                            </li>
                        )
                    })
                } 
            </ul>
            </div>            
        </section>
    )
}

export default Skills