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
            {/* <Link to='home' smooth={true} spy={true} duration={500} > <IoIosHome /> <p className='tooltip'> Home </p> </Link> */}
            <Link to='about' smooth={true} spy={true} duration={500} > <IoIosPerson />  <p className='tooltip'> About me </p>  </Link>
            <Link to='skills' smooth={true} spy={true} duration={500} > <IoIosApps />  <p className='tooltip'> Skills </p>  </Link>
            <Link to='projects' smooth={true} spy={true} duration={500} > <IoIosRocket />  <p className='tooltip'> Projects </p>  </Link>
            <Link to='certifications' smooth={true} spy={true} duration={500} > <IoIosDocument />  <p className='tooltip'> Certifications </p>  </Link>
            <Link to='contact' smooth={true} spy={true} duration={500} > <IoIosChatbubbles />  <p className='tooltip'> Contact </p>  </Link>
            <div onClick={() => toggleMenu(!isOpen)} className={ isOpen ? 'toggle-menu' : 'toggle-menu hidden'}>
                <div/>
                <div/>
                <div/>
            </div>
        </nav>
    )
}

export default Sidebar