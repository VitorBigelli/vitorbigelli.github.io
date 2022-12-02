import React from 'react';
import Sidebar from '../src/components/Sidebar';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Skills from '../src/components/Skills';
import Projects from '../src/components/Projects';
import Contact from '../src/components/Contact';
import Certifications from '../src/components/Certifications'
import Head from 'next/head'

function App() {
  return (
    <div className="App">

      <Head>
        <title>Vitor Bigelli</title>
        <meta name="description" content="Vitor Bigelli - Full-Stack Web Developer" />
        <meta property="og:title" content="Vitor Bigelli" />
        {/* <meta property="og:image" content="" /> */}
        <meta property="og:description" content="Vitor Bigelli - Full-Stack Web Developer" />
        <meta property="og:url" content="https://vitorbigelli.github.io/" />
        <meta property="og:type" content="website" />
      </Head>
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
