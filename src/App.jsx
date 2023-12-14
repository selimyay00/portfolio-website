import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Navbar from './components/navbar/Navbar'
import Skills from './components/pages/skills/Skills'
import Educations from './components/pages/educations/Educations'
import Projects from './components/pages/projects/Projects'

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/skills' element={<><Navbar /><Skills /></>} />
          <Route path='/educations' element={<><Navbar /><Educations /></>} />
          <Route path='/projects' element={<><Navbar /><Projects /></>} />
        </Routes>
    </Router>
  )
}

export default App
