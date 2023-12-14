import './home.css'
import Navbar from "../navbar/Navbar"
import About from './about/About';
import myPhoto from '../../images/my-photo.jpeg';


function Home() {
    return (
        <section>
            <Navbar />
            <div className="container"> 
                <img src={myPhoto} alt="my-image" />
                <div className='container-info'>
                    <h2 style={{textAlign: 'center'}}>Selim Yay</h2>
                    <p style={{color: 'gray'}}>
                        <i>
                            React / Frontend Developer
                        </i>
                    
                    </p>
                </div>
            </div>
            <About />
        </section>
    )
}

export default Home