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
import Clients from '../components/Clients';

const Home = () => {
    return (
        <div className="space-y-6">
            <Hero />
            
            <div className="border-t border-neutral-200 dark:border-neutral-800" />
            <TechMarquee />

            <div className="border-t border-neutral-200 dark:border-neutral-800" />
            <About />

            <div className="border-t border-neutral-200 dark:border-neutral-800" />
            <Timeline />

            <div className="border-t border-neutral-200 dark:border-neutral-800" />
            <BentoGrid />

            <div className="border-t border-neutral-200 dark:border-neutral-800" />
            <Clients />

            <div className="border-t border-neutral-200 dark:border-neutral-800" />
            <Services />

            <div className="border-t border-neutral-200 dark:border-neutral-800" />
            <FeaturedProject />

            <div className="border-t border-neutral-200 dark:border-neutral-800" />
            <CurrentLearning />

            <div className="border-t border-neutral-200 dark:border-neutral-800" />
            <Projects />

            <div className="border-t border-neutral-200 dark:border-neutral-800" />
            <FAQ />

            <div className="border-t border-neutral-200 dark:border-neutral-800" />
            <Contact />
        </div>
    );
};

export default Home;
