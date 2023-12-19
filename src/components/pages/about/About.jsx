import './about.css'

function About() {
    return (
        <div className='container'>
            <h2 className='container__title'>About Me</h2>
            <p className='container__content'>
                <i style={{ lineHeight: 1.5 }}>
            Self-taught React developer who believes in hard work over luck.  Passionate about building cool things with code.
                </i>
            </p>
            <h2 className='container__title'>Personal Info</h2>
            <p className='container__content'>
                <strong>
                    <span style={{ color: 'lightGray' }}>Adress</span>
                    <br />
                    <hr />
                </strong> Izmir, Turkey 
            </p>
            <p className='container__content'>
                <strong>
                <span style={{ color: 'lightGray' }}>Email</span>
                <br />
                <hr />
                </strong> selimxyay@gmail.com 
            </p>
            <p className='container__content'>
                <strong>
                <span style={{ color: 'lightGray' }}>Phone</span>
                <br />
                <hr />
                </strong> (+90) 535 018 1960
            </p>
        </div>
    ) 
}

export default About