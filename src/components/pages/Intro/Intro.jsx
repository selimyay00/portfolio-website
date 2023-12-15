import './intro.css'
import myPhoto from '/src/images/my-photo.jpeg';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

function Intro() {
    return (
        <div className="container"> 
                <img src={myPhoto} alt="my-image" />
                <div className='container-info'>
                    <h2 className='container__title' style={{textAlign: 'center'}}>Selim Yay</h2>
                    <p className='container__content'>
                        <i>
                            React / Frontend Developer
                        </i>
                    </p>
                    <div className='intro-icons-section'>
                        <a href="https://github.com/selimyay00" target='_blank'>
                            <FaGithub className='intro-icons' />
                        </a>
                        <a href="https://twitter.com/selimyay9700" target='_blank'>
                            <FaTwitter className='intro-icons' />
                        </a>
                    </div>
                    
                </div>
        </div>
    )
}

export default Intro