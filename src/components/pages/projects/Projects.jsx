import './projects.css'
import memeGenerator from '/src/images/meme-generator.jpeg';


function Projects() {
    return (
        <div className='container'>
            <h2 className='container__title'>Projects</h2>
            <hr style={{width: 240}} />
            <div className='container__content'>
                <h3 style={{ marginBottom: 30 }}>
                     <a href="https://selimyay00.github.io/meme-generator/" className='project-links' target='_blank'>
                     <i>
                        * Selim's Meme Generator
                     </i>
                     
                     </a>
                </h3>
                <img src={memeGenerator} alt="meme-generator-image" className='project-images' />
                <hr />
            </div>
        </div>
    )
}

export default Projects