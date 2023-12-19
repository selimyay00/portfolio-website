import './skills.css'
import { FaMinus } from 'react-icons/fa';

function Skills() {
    return (
        <div className='container'>
            <h2 className='container__title'>Skills</h2>
            <div className='skills-content'>
                <p className='sub-heading'>
                    <span>
                        Frontend Technologies
                    </span>
                    <hr />
                </p>
                <p className='container__content'>
                   <FaMinus /> HTML
                </p>
                <p className='container__content'>
                   <FaMinus /> CSS
                </p>
                <p className='container__content'>
                   <FaMinus /> JavaScript
                </p>
                <p className='container__content'>
                   <FaMinus /> React
                </p>
                <br />
                <p className='sub-heading'>
                    <span>
                        Development Tools
                    </span>
                    <hr />
                </p>
                <p className='container__content'><FaMinus /> VS Code</p>
                <br />
                <p className='sub-heading'>
                    <span>
                        Design
                        <hr />
                    </span>
                </p>
                <p className='container__content'><FaMinus /> Figma</p>
                <br />
                <p className='sub-heading'>
                    <span>
                        Build Tools
                    </span>
                    <hr />
                </p>
                <p className='container__content'><FaMinus /> Vite</p>
            </div>
            
        </div>
    )
}

export default Skills