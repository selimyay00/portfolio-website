import './projects.css'
import memeGenerator from '/src/images/meme-generator.jpeg';
import imageCarousel from '/src/images/carousel.jpeg';
import quoteMachine from '/src/images/quote.jpeg';
import eShop from '/src/images/eShop.jpeg';

function Projects() {
    return (
        <div className='container'>
            <h2 className='container__title'>Projects</h2>
            <h6>
                <i>
                    * Click on the name to view the project.
                </i>
            </h6>

            <hr style={{width: 240}} />
            <div className='container__content'>
            <h3 className='project__name' >
                     <a href="https://selimyay00.github.io/e-shop/" className='project-links' target='_blank'>
                        - Selim's E-Commerce Website
                     </a>
                </h3>
                <img src={eShop} alt="e-commerce" className='project-images' />

                <h3 className='project__name'>
                     <a href="https://selimyay00.github.io/meme-generator/" className='project-links' target='_blank'>
                        - Selim's Meme Generator       
                     </a>
                </h3>
                <img src={memeGenerator} alt="meme-generator-image" className='project-images' />
                <hr />
                <h3 className='project__name' >
                     <a href=" https://selimyay00.github.io/image-carousel/" className='project-links' target='_blank'>
                        - Selim's Image Carousel
                     </a>
                </h3>
                <img src={imageCarousel} alt="image-carousel" className='project-images' />
                <hr />
                <h3 className='project__name'>
                     <a href="https://selimyay00.github.io/random-quote-machine/" className='project-links' target='_blank'>
                        - Selim's Quote Machine
                     </a>
                </h3>
                <img src={quoteMachine} alt="quote-machine" className='project-images' />
                <hr />
                
            </div>
        </div>
    )
}

export default Projects