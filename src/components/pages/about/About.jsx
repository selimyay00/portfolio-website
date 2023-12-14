import './about.css'

function About() {
    return (
        <div className='container'>
            <h2 className='container__title'>About Me</h2>
            <p className='container__content'>
                <i>
            Self-taught React developer who believes in hard work over luck.  Passionate about building cool things with code. Constantly learning, forever coding.
                </i>
            </p>
            <h2 className='container__title'>Personal Info</h2>
            <p className='container__content'>
                <strong>
                    Adress:
                </strong> Izmir, Turkey 
            </p>
            <p className='container__content'>
                <strong>
                    Email:
                </strong> selimxyay@gmail.com 
            </p>
            <p className='container__content'>
                <strong>
                    Phone:
                </strong> (+90) 535 018 1960
            </p>
        </div>
    ) 
}

export default About