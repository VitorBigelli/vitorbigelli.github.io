import React from 'react'
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import './index.css'

const contact_list = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/vitor-bigelli-559380150/', icon: () => <FaLinkedin /> }, 
    { name: 'GitHub', url: 'https://github.com/VitorBigelli', icon: () => <FaGithub /> }, 
    { name: 'Twitter', url: 'https://twitter.com/bigellivitor', icon: () => <FaTwitter /> }, 
    { name: 'Instagram', url: 'https://www.instagram.com/vitorbigelli/?hl=en', icon: () => <FaInstagram /> }
]

export default class Contact extends React.Component {
    
      render() {   

        return (
            <section id='contact' > 
                <h1> Contact & Social Media</h1>
                <div className='contact-list'>
                { 
                    contact_list.map( (c, i) => {
                        return (
                            <a href={c.url} target='_blank' key={i} rel="noopener noreferrer"> 
                                { c.icon() }
                            </a>
                        )
                    })
                }
                </div>
                <p> Looking for a partnership? Let's chat on <a href="https://wa.me/5511930954455" className='whatsapp-link'> <FaWhatsapp /> WhatsApp </a> </p>
            </section>
        )
    }

}


