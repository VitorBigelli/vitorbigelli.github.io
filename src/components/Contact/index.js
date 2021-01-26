import React from 'react'
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import './index.css'

const contact_list = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/vitor-bigelli-559380150/', icon: () => <FaLinkedin /> }, 
    { name: 'GitHub', url: 'https://github.com/VitorBigelli', icon: () => <FaGithub /> }, 
    { name: 'Twitter', url: 'https://twitter.com/bigellivitor', icon: () => <FaTwitter /> }, 
    // { name: 'Instagram', url: 'https://www.instagram.com/vitorbigelli/?hl=en', icon: () => <FaInstagram /> }, 
    { name: 'WhatsApp', url: 'https://api.whatsapp.com/send?phone=5511930954455', icon: () => <FaWhatsapp /> }
]

export default class Contact extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { feedback: '', name: '', email: '', message: '', sent: false, error: false };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      render() {   
        const { email, name, error, sent, message } = this.state    
        
        return (
            <section id='contact' className='d-flex flex-row align-items-center' > 
                <h1 className='mr-5'> Contact </h1>
                <div className='d-flex flex-column'>
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
                    <div className='timeline w-100' />
                    <form className="mailing">
                        <input type='text' value={name} required placeholder='Nome' onChange={ (e) => this.setState({ name: e.target.value })} />
                        <input type='text' value={email} required placeholder='E-mail' onChange={ (e) => this.setState({ email: e.target.value })}  />
                        <textarea
                            id="test-mailing"
                            name="test-mailing"
                            onChange={this.handleChange}
                            placeholder="Mensagem"
                            required
                            value={this.state.feedback}
                            style={{width: '100%', height: '150px'}}
                        />
                        <div className='flex-row reverse'>
                            <input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
                            { error && 
                                <div className='message flex-row'>
                                    <span> { message }</span>
                                </div> 
                            }
                            { sent && 
                                <div className='message flex-row'>
                                    <span> { message }</span>
                                </div> 
                            }
                        </div>
                    </form>
                </div>
                
               
            </section>
        )
    }

    handleChange(event) {
        this.setState({feedback: event.target.value})
    }
    
    handleSubmit (event) {
        const templateId = 'template_XSleonHD'; 

        if (!this.state.name && !this.state.email && !this.state.feedback) {
            this.setState({
                message: 'All fields are required',
                error: true
            })
        } else {
            this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
        }
    
    }
    
    sendFeedback (templateId, variables) {
    window.emailjs.send(
        'bigellivitor-gmail', templateId,
        variables
        ).then(res => {
            this.setState({ message: 'Email successfully sent!', sent: true })
        })
        // Handle errors here however you like, or use a React error boundary
        .catch(err => this.setState({ message: 'Sorry, something went wrong. Please, try again later.', error: true, }))
    }

}


