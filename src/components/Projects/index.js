import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import project_1 from '../../assets/project_1.png'
import project_3 from '../../assets/project_3.png'
import project_2 from '../../assets/project_2.png'

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 2
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
}

function Projects () {
    return (
        <section id='projects' >
            <h1> Projects </h1>
            <Carousel responsive={responsive}>
                <div className='project-container'>
                    <h2> DeepWild - Species Classifier</h2>
                    <p>Desenvolvimento Full-Stack do Web App do maior grafo relacionado a doenças raras. Raras.org é uma iniciativa de ciência aberta para trazer avanços na inteligência artificial e encontrar respostas para doenças raras.</p>
                    <img src={project_2} /> 
                </div>
                <div>
                    <h2> Raras - Rare Diseases Q&A </h2>
                    <p>Desenvolvimento Full-Stack do Web App DeepWild, uma ferramenta que auxilia na conservação e monitoramento de espécies selvagens. Ela utiliza uma inteligência artificial que identifica e classifica os animais por meio de fotos e vídeos.</p>
                    <img src={project_1} />
                </div>
                <div>
                    <h2> SanarFlix - Caption Editor</h2>
                    <p> Desenvolvimento Full-Stack do Web App de edição de legendas da plataforma de stream de medicina SanarFlix.</p>
                    <img src={project_3} />
                </div>
            </Carousel>
        </section>
    )
}

export default Projects