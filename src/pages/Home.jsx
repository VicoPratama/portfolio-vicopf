import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import TechMarquee from '../components/TechMarquee';
import FeaturedProject from '../components/FeaturedProject';
import CurrentLearning from '../components/CurrentLearning';
import FAQ from '../components/FAQ';
import BentoGrid from '../components/BentoGrid';
import Timeline from '../components/Timeline';
const Home = () => {
    return (
        <>
            <Hero />
            <TechMarquee />
            <About />
            <Timeline />
            <BentoGrid />
            <Services />
            <FeaturedProject />
            <CurrentLearning />
            <Projects />
            <FAQ />
            <Contact />
        </>
    );
};

export default Home;
