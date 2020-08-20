import React from 'react'
import 'react-multi-carousel/lib/styles.css';
import project_1 from '../../assets/project_1.png'
import project_3 from '../../assets/project_3.png'
import project_2 from '../../assets/project_2.png'
import Flip from 'react-reveal/Flip'

function Projects () {
    return (
        <section id='projects' >
            <h1> Projects </h1>
            <div className='project-container'>
                <h2> DeepWild - Species Classifier</h2>
                <Flip right>
                <img src={project_2} alt='Vitor Bigelli | vitorbigelli | DeepWild' /> 
                </Flip>
                <p>Desenvolvimento Full-Stack do Web App DeepWild, uma ferramenta que auxilia na conservação e monitoramento de espécies selvagens. Ela utiliza uma inteligência artificial que identifica e classifica os animais por meio de fotos e vídeos.</p>
            </div>
            <div className='project-container'>
                <h2> Raras - Rare Diseases Q&A </h2>
                <Flip left>
                <img src={project_1}  alt='Vitor Bigelli | vitorbigelli | DeepWild'/>
                </Flip>
                <p>Desenvolvimento Full-Stack do Web App do maior grafo relacionado a doenças raras. Raras.org é uma iniciativa de ciência aberta para trazer avanços na inteligência artificial e encontrar respostas para doenças raras.</p>
            </div>
            <div className='project-container'>
                <h2> SanarFlix - Caption Editor</h2>
                <Flip left>
                <img src={project_3}  alt='Vitor Bigelli | vitorbigelli | DeepWild'/>
                </Flip>
                <p> Desenvolvimento Full-Stack do Web App de edição de legendas da plataforma de stream de medicina SanarFlix.</p>
            </div>
        </section>
    )
}

export default Projects