import './projects.css'
import memeGenerator from '/src/images/meme-generator.jpeg';
import imageCarousel from '/src/images/carousel.jpeg';
import quoteMachine from '/src/images/quote.jpeg';
import eShop from '/src/images/eShop.jpeg';

function Projects() {
    return (
        <div className='container'>
            <h2 className='container__title'>Projects</h2>
            <h6 style={{ marginTop: -12, color: 'gray' }}>
                <i>
                    * Click on the name to view the project.
                </i>
            </h6>

            {/* E-Commerce Website */}

            <div className='project-section'>
                <h3>
                    <a href="https://selimyay00.github.io/e-shop/" target='_blank' className='project__name'>
                        E-Commerce Website
                    </a>
                </h3>
                <i className='project-explanation'>
                    E-Commerce website built with React.
                </i>
                <img src={eShop} alt="e-commerce" className='project-images' style={{ marginTop: 25 }} />
                <br />
                <hr style={{width: 250}} />
                <br />          
            </div>

            {/* Meme Generator */}

            <div className='project-section'>
                <h3 style={{textAlign: 'center'}}>
                    <a href="https://selimyay00.github.io/meme-generator/" target='_blank' className='project__name'>
                        Meme Generator
                    </a>
                </h3>
                <i className='project-explanation'>
                    Simple React Meme Generator for creating and sharing memes
                </i>
                <img src={memeGenerator} alt="meme-generator" className='project-images' style={{ marginTop: 45 }} />  
                <br />
                <hr style={{width: 250}} />
                <br />                 
            </div>

            {/* Quote Machine */}

            <div className='project-section'>
                <h3 style={{textAlign: 'center'}}>
                    <a href="https://selimyay00.github.io/random-quote-machine/" target='_blank' className='project__name'>
                        Quote Machine
                    </a>
                </h3>
                <i className='project-explanation'>
                    React-based Random Quote Generator for quick and inspiring quotes
                </i>
                <img src={quoteMachine} alt="quote-machine" className='project-images' style={{ marginTop: 20 }} />
                <br />
                <hr style={{width: 250}} />
                <br />                    
            </div>

            {/* Image Carousel */}

            <div className='project-section'>
                <h3 style={{textAlign: 'center'}}>
                    <a href="https://selimyay00.github.io/image-carousel/" target='_blank' className='project__name'>
                        Image Carousel
                    </a>
                </h3>
                <i className='project-explanation'>
                    Responsive Image Carousel in React for seamless and easy-to-use image slideshows
                </i>
                <img src={imageCarousel} alt="image-carousel" className='project-images' style={{ marginTop: 30 }} />
                <br />          
            </div>
            
        </div>
    )
}

export default Projects