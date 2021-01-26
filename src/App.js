import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certifications from './components/Certifications'
import { Helmet } from 'react-helmet'
import HorizontalScroll from 'react-scroll-horizontal'; 

import './assets/css/background.css'

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Vitor Bigelli | Full-Stack Web Developer | vitorbigelli.com </title>
        <meta name="description" content="Enthusiast of Artificial Intelligence and passionated about learning and teaching, I believe in technology as the tool to build a better world." />
      </Helmet>
      <Navbar />
      <HorizontalScroll reverseScroll={true} animValues={3}>
        <Hero key={0} />
        <About key={1} />
        {/* <Skills key={2} /> */}
        <Certifications key={4} />
        <Projects key={3} />
        <Contact key={5} />
      </HorizontalScroll>
    </div>
  );
}

export default App;
