import './projects.css'
import memeGenerator from '/src/images/meme-generator.jpeg';
import imageCarousel from '/src/images/carousel.jpeg';
import quoteMachine from '/src/images/quote.jpeg';
import eShop from '/src/images/eShop.jpeg';

function Projects() {
    return (
        <div className='container'>
            <h2 className='container__title'>Projects</h2>
            <h6 style={{ marginTop: -12 }}>
                <i>
                    * Click on the name to view the project.
                </i>
            </h6>

            <div className='container__content'>
                <h3 className='project__name'>     
                        - E-Commerce Website   
                </h3>
                <a href="https://selimyay00.github.io/e-shop/" className='project-links' target='_blank'><i>View the project</i></a>
                <img src={eShop} alt="e-commerce" className='project-images' />
                <h3 className='project__name'>
                        - Meme Generator                          
                </h3>
                <a href="https://selimyay00.github.io/meme-generator/" className='project-links' target='_blank'><i>View the project</i></a>
                <img src={memeGenerator} alt="meme-generator-image" className='project-images' style={{ marginTop: 20 }} />     
                <h3 className='project__name' >  
                        - Image Carousel                  
                </h3>
                <a href="https://selimyay00.github.io/image-carousel/" className='project-links' target='_blank'><i>View the project</i></a>
                <img src={imageCarousel} alt="image-carousel" className='project-images' style={{ marginTop: 20 }} />
                <h3 className='project__name'>
                        - Quote Machine                    
                </h3>
                <a href="https://selimyay00.github.io/random-quote-machine/" className='project-links' target='_blank'><i>View the project</i></a>
                <img src={quoteMachine} alt="quote-machine" className='project-images' />   
            </div>
        </div>
    )
}

export default Projects