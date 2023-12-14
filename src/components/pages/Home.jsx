import Navbar from "../navbar/Navbar"
import About from './about/About';
import Educations from "./educations/Educations";
import Intro from './Intro/Intro';
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";

function Home() {
    return (
        <section>
            <Navbar />
            <Intro />
            <About />
            <Skills />
            <Educations />
            <Projects />
        </section>
    )
}

export default Home