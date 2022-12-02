import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certifications from './components/Certifications'
import { Helmet } from 'react-helmet'

function App() {
  return (
    <div className="App">

      <Helmet>
        <title>Vitor Bigelli | Full-Stack Web Developer | vitorbigelli.com </title>
        <meta name="description" content="Enthusiast of Artificial Intelligence and passionated about learning and teaching, I believe in technology as the tool to build a better world." />
      </Helmet>
      <header>
        <Hero />
        <Sidebar />     
      </header>
      <About />
      {/* <Skills /> */}
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
