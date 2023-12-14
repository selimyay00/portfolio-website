import './navbar.css'
import { Link } from 'react-router-dom'
import { FaFileAlt } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';
import { FaGraduationCap } from 'react-icons/fa';
import { FaFolderOpen } from 'react-icons/fa';

function Navbar() {
    return (
        <div className="navbar">
            <Link
                to='/'
                className='navbar-text navbar-icons'
            >
                <FaFileAlt className='navbar-icons' />
                My Resume
            </Link>
            <Link
                to='/skills'
                className='navbar-text navbar-icons'
            >
                <FaCode className='navbar-icons' />
                Skills
            </Link>
            <Link
                to='/educations'
                className='navbar-text navbar-icons'
            >
                <FaGraduationCap className='navbar-icons' />
                Educations
            </Link>
            <Link
                to='/projects'
                className='navbar-text navbar-icons'
            >
                <FaFolderOpen className='navbar-icons' />
                Projects
            </Link>
        </div>
    )
}

export default Navbar