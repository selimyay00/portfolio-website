import Navbar from "../navbar/Navbar"
import About from './about/About';
import Intro from './Intro/Intro';

function Home() {
    return (
        <section>
            <Navbar />
            <Intro />
            <About />
        </section>
    )
}

export default Home