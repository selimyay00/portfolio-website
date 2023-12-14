import './skills.css'

function Skills() {
    return (
        <div className='container'>
            <h2 className='container__title'>Skills</h2>
            <div className='skills-content'>
                <p className='sub-heading'>
                    <i>
                        Frontend Technologies
                    </i>
                </p>
                <p className='container__content'>
                    * HTML
                </p>
                <p className='container__content'>
                    * CSS
                </p>
                <p className='container__content'>
                    * JavaScript
                </p>
                <p className='container__content'>
                    * React
                </p>
                <br />
                <p className='sub-heading'>
                    <i>
                        Development Tools
                    </i>
                </p>
                <p className='container__content'>* VS Code</p>
                <br />
                <p className='sub-heading'>
                    <i>
                        Design
                    </i>
                </p>
                <p className='container__content'>* Figma</p>
                <br />
                <p className='sub-heading'>
                    <i>
                        Build Tools
                    </i>
                </p>
                <p className='container__content'>* Vite</p>
            </div>
            
        </div>
    )
}

export default Skills