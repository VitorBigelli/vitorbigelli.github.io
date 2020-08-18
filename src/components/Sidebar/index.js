import React from 'react'
import { 
    IoIosHome,
    IoIosPerson, 
    IoIosApps,
    IoIosRocket,
    IoIosChatbubbles
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
    return (
        <nav className='gradient-background'>
            <Link to='home' smooth={true} spy={true} duration={500} > <IoIosHome /> <span className='tooltip'> Home </span> </Link>
            <Link to='about' smooth={true} spy={true} duration={500} > <IoIosPerson />  <span className='tooltip'> About me </span>  </Link>
            <Link to='skills' smooth={true} spy={true} duration={500} > <IoIosApps />  <span className='tooltip'> Skills </span>  </Link>
            <Link to='projects' smooth={true} spy={true} duration={500} > <IoIosRocket />  <span className='tooltip'> Projects </span>  </Link>
            <Link to='contact' smooth={true} spy={true} duration={500} > <IoIosChatbubbles />  <span className='tooltip'> Contact </span>  </Link>
        </nav>
    )
}

export default Sidebar