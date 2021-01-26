import React, { useState } from 'react'
import { 
    IoIosHome,
    IoIosPerson, 
    IoIosApps,
    IoIosRocket,
    IoIosChatbubbles,
    IoIosDocument
} from 'react-icons/io'
import { Link } from 'react-scroll'

// const sections = [
//     { 'label': 'Home', to: '/home' }, 
//     { 'label': 'About', to: '/about' }, 
//     { 'label': 'Skills', to: '/skills' }, 
//     { 'label': 'Projects', to: '/projects' }, 
//     { 'label': 'Contact', to: '/contact' }, 
//     { 'label': 'Home', to: '/home' }, 
// ]

function Sidebar () {

    const [ isOpen, toggleMenu ] = useState(false)

    return (
        <nav>
            <Link to='home' smooth={true} spy={true} duration={500} > <p> Home </p> </Link>
            <Link to='about' smooth={true} spy={true} duration={500} > <p> About me </p>  </Link>
            <Link to='skills' smooth={true} spy={true} duration={500} > <p> Skills </p>  </Link>
            <Link to='projects' smooth={true} spy={true} duration={500} > <p> Projects </p>  </Link>
            <Link to='certifications' smooth={true} spy={true} duration={500} > <p> Certifications </p>  </Link>
            <Link to='contact' smooth={true} spy={true} duration={500} > <p> Contact </p> </Link>
            <div onClick={() => toggleMenu(!isOpen)} className={ isOpen ? 'toggle-menu' : 'toggle-menu hidden'}>
                <div/>
                <div/>
                <div/>
            </div>
        </nav>
    )
}

export default Sidebar