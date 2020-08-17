import React from 'react'
import { 
    IoIosHome,
    IoIosPerson, 
    IoIosApps,
    IoIosRocket,
    IoIosChatbubbles
} from 'react-icons/io'
import { Link } from 'react-scroll'

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
            <Link to='home' smooth={true} spy={true} duration={500} > <IoIosHome /> </Link>
            <Link to='about' smooth={true} spy={true} duration={500} > <IoIosPerson /> </Link>
            <Link to='skills' smooth={true} spy={true} duration={500} > <IoIosApps /> </Link>
            <Link to='projects' smooth={true} spy={true} duration={500} > <IoIosRocket /> </Link>
            <Link to='contact' smooth={true} spy={true} duration={500} > <IoIosChatbubbles /> </Link>
        </nav>
    )
}

export default Sidebar