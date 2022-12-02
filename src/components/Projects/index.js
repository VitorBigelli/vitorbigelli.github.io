import React from 'react'

function Projects () {
    return (
        <section id='projects' >
            <h1> Projects </h1>
            <div className='project-container'>
                <h4> DeepWild - Species Classifier</h4>
                <img src="/assets/project_2.png" alt='Vitor Bigelli | vitorbigelli | DeepWild' className='shadow' /> 
                <p>Full-Stack Web App Development of the DeepWild, a tool that helps biologists in the conservation and monotoring of wild species. It applies artificial intelligence to detect and classify animals in camera trap videos.</p>
            </div>
            <div className='project-container'>
                <h4> Raras - Rare Diseases Q&A </h4>
                <img src="/assets/project_1.png"  alt='Vitor Bigelli | vitorbigelli | DeepWild' className='shadow' />
                <p>Full-Stack Web Appp Development from the biggest rare diseases graph. Raras.org it's an open source project created with the purpouse of bringing advances in  in artificial ingellience and find answers for rare diseases.</p>
            </div>
            <div className='project-container'>
                <h4> My Reads</h4>
                <img src="/assets/project_4.png"  alt='Vitor Bigelli | vitorbigelli | My Reads' className='shadow' />
                <p>React Static App to manage "read", "currently reading" and "want to read" books. Add books by just passing its Amazon Store URL.</p>
            </div>
            <div className='project-container'>
                <h4> GuessMTG Wordle</h4>
                <img src="/assets/project_5.png"  alt='Vitor Bigelli | vitorbigelli | My Reads' className='shadow' />
                <p>Application inspired in the NY Times Wordle daily challenge build in partnership with GuessMTG.</p>
            </div>
        </section>
    )
}

export default Projects