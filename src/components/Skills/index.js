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
import Bounce from 'react-reveal/Bounce'

const skills = {
    front: [
        { name: 'React', className: 'react', icon: () => <DiReact /> }, 
        { name: 'Bootstrap', className: 'bootstrap', icon: () => <DiBootstrap /> }, 
        { name: 'Javascript', className: 'javascript', icon: () => <DiJavascript /> }, 
        { name: 'HTML 5', className: 'html', icon: () => <DiHtml5 /> }, 
        { name: 'CSS 3', className: 'css', icon: () => <DiCss3 /> }, 
    ], 
    back: [
        { name: 'Python', className: 'python', icon: () => <DiPython /> }, 
        { name: 'NodeJS', className: 'nodejs', icon: () => <DiNodejsSmall /> }, 
        { name: 'RabbitMQ', className: 'rabbitmq', icon: () => <Icon icon={rabbitmq} /> }, 
    ],
    databases: [
        { name: 'MongoDB', className: 'mongodb', icon: () => <DiMongodb /> }, 
        { name: 'Neo4J', className: 'neo4j', icon: () => <Icon icon={neo4jIcon} /> }, 
    ], 
    devops: [
        { name: 'Git', className: 'git', icon: () => <DiGit /> }, 
        { name: 'NGinx', className: 'nginx', icon: () => <DiNginx /> }, 
        { name: 'Docker', className: 'docker', icon: () => <DiDocker /> }, 
        { name: 'Google Cloud', className: 'google-cloud', icon: () => <DiGoogleCloudPlatform /> }, 
        { name: 'Digital Ocean', className: 'digital-ocean', icon: () => <DiDigitalOcean /> }, 
        { name: 'AWS', className: 'aws', icon: () => <FaAws /> }, 
    ]
}

function Skills () {
    return (
        <section id='skills' >
            <h1> My Skills </h1> 
            <h3> Front-end </h3>  
            <Bounce left> 
                <ul className='flex-row centralize'> 
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
                </ul>
            </Bounce>

            <h3> Back-end </h3>
            <Bounce right>
                <ul className='flex-row centralize'> 
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
            </Bounce>
            
            <h3> Databases </h3>
            <Bounce left>
            <ul className='flex-row  centralize'>
                
                {
                    skills.databases.map( (s, i) => {
                        return (
                            <li className={s.className}> 
                                { s.icon() }
                                <span className='tooltip'> { s.name }</span>
                            </li>
                        )
                    })
                }
            </ul>
            </Bounce>

            <h3> DevOps, Deployment & Cloud </h3>     
            <Bounce right>
                <ul className='flex-row centralize'> 
                    
                    {
                        skills.devops.map( (s, i) => {
                            return (
                                <li className={s.className}> 
                                    { s.icon() }
                                    <span className='tooltip'> { s.name }</span>
                                </li>
                            )
                        })
                    }
                
                </ul>
            </Bounce>
        </section>
    )
}

export default Skills