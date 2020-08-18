import React from 'react'
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa'
import './index.css'

const contact_list = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/vitor-bigelli-559380150/', icon: () => <FaLinkedin /> }, 
    { name: 'GitHub', url: 'https://github.com/VitorBigelli', icon: () => <FaGithub /> }, 
    { name: 'Twitter', url: 'https://twitter.com/bigellivitor', icon: () => <FaTwitter /> }, 
    { name: 'Instagram', url: 'https://www.instagram.com/vitorbigelli/?hl=en', icon: () => <FaInstagram /> }
]

export default class Contact extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { feedback: '', name: '', email: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      render() {   
        const { email, name } = this.state    
        
        return (
            <section id='contact' > 
                <div className='flex-row'>
                    <h1> Contact </h1>
                    <div className='contact-list'>
                    { 
                        contact_list.map( (c, i) => {
                            return (
                                <a href={c.url} target='_blank' key={i}> 
                                    { c.icon() }
                                </a>
                            )
                        })
                    }
                    </div>
                </div>
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
                <input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
            </form>
            </section>
        )
    }

    handleChange(event) {
        this.setState({feedback: event.target.value})
    }
    
    handleSubmit (event) {
        const templateId = 'template_XSleonHD';
    
        this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
    }
    
    sendFeedback (templateId, variables) {
    window.emailjs.send(
        'bigellivitor-gmail', templateId,
        variables
        ).then(res => {
        console.log('Email successfully sent!')
        })
        // Handle errors here however you like, or use a React error boundary
        .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }

}


