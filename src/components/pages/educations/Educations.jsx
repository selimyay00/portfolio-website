import './educations.css'

function Educations() {
    return (
        <div className='container'>
            <h2 className='container__title'>Educations</h2>
            <div className='educations-info'>
                <p className='container__content'>
                    <i style={{color: 'white'}}>Associate Degree Program</i>
                    <br />
                    <hr />
                    Web Design and Coding - Anadolu University (2023-2025)
                </p>
                <p className='container__content'>
                    <a href="https://www.freecodecamp.org/certification/fcc82078224-bed1-48bc-85b8-abcca4172f35/responsive-web-design"target='_blank' className='educations-link'>
                    <i style={{color: 'white'}} className='educations__name'>Responsive Web Design</i>
                    </a>
                    <br />
                    <hr />
                    Free Code Camp - April 2023
                </p>
                <p className='container__content'>
                    <a href="https://www.freecodecamp.org/certification/fcc82078224-bed1-48bc-85b8-abcca4172f35/javascript-algorithms-and-data-structures" target='_blank' className='educations-link'>
                    <i style={{color: 'white'}} className='educations__name'>JavaScript Algorithms and Data Structures</i>
                    </a>
                    <br />
                    <hr />
                    Free Code Camp - May 2023
                </p>
            </div>
        </div>
    )
}

export default Educations