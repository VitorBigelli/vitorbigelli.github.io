import React from 'react'
import { 
    IoIosHome,
    IoIosPerson, 
    IoIosApps,
    IoIosRocket,
    IoIosChatbubbles
} from 'react-icons/io'

const sections = [
    { 'label': 'Home', to: '/home' }, 
    { 'label': 'About', to: '/about' }, 
    { 'label': 'Skills', to: '/skills' }, 
    { 'label': 'Projects', to: '/projects' }, 
    { 'label': 'Contact', to: '/contact' }, 
    { 'label': 'Home', to: '/home' }, 
]

function Sidebar () {
    return (
        <nav className='gradient-background'>
            <a> <IoIosHome /> </a>
            <a> <IoIosPerson /> </a>
            <a> <IoIosApps /> </a>
            <a> <IoIosRocket /> </a>
            <a> <IoIosChatbubbles /> </a>
        </nav>
    )
}

export default Sidebar