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
                <p>Full-Stack Web App Development of the DeepWild, a tool that helps biologists in the conservation and monotoring of wild species. It applies artificial intelligence to detect and classify animals in camera trap videos.</p>
            </div>
            <div className='project-container'>
                <h2> Raras - Rare Diseases Q&A </h2>
                <Flip left>
                <img src={project_1}  alt='Vitor Bigelli | vitorbigelli | DeepWild'/>
                </Flip>
                <p>Full-Stack Web Appp Development from the biggest rare diseases graph. Raras.org it's an open source project created with the purpouse of bringing advances in  in artificial ingellience and find answers for rare diseases.</p>
            </div>
            <div className='project-container'>
                <h2> SanarFlix - Caption Editor</h2>
                <Flip left>
                <img src={project_3}  alt='Vitor Bigelli | vitorbigelli | DeepWild'/>
                </Flip>
                <p>Full-Stack Web App development for editing subtitles for the SanarFlix medical video platform.</p>
            </div>
        </section>
    )
}

export default Projects