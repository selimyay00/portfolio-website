import './intro.css'
import myPhoto from '/src/images/my-photo.jpeg';

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
                </div>
        </div>
    )
}

export default Intro