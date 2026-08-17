import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import Card from './Card';
import Button from './Button';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { projectsData as projects } from '../constants/projectsData';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
    const navigate = useNavigate();
    const [activeFilter, setActiveFilter] = useState('All');
    const [currentIndex, setCurrentIndex] = useState(0);

    const categories = useMemo(() => {
        const cats = new Set();
        projects.forEach(project => {
            project.tags.forEach(tag => cats.add(tag));
        });
        return ['All', 'React', 'Tailwind CSS', 'Supabase'];
    }, []);

    const filteredProjects = useMemo(() => {
        if (activeFilter === 'All') return projects;
        return projects.filter(project => project.tags.includes(activeFilter));
    }, [activeFilter]);

    // Reset index when filter changes
    useEffect(() => {
        setCurrentIndex(0);
    }, [activeFilter]);

    const nextSlide = () => {
        if (filteredProjects.length === 0) return;
        setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
    };

    const prevSlide = () => {
        if (filteredProjects.length === 0) return;
        setCurrentIndex((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
    };

    const tagColors = [
        "bg-zlime/10 text-zlime border-zlime/20",
        "bg-zpurple/10 text-zpurple border-zpurple/20",
        "bg-white/10 text-zblack/80 border-zblack"
    ];

    return (
        <SectionWrapper id="projects" className="bg-[#f4f4f5] py-24 overflow-hidden relative">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-zpurple/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-zlime/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="mb-12 text-center max-w-3xl mx-auto px-4 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-display text-4xl md:text-5xl font-black mb-6 text-zblack leading-tight uppercase tracking-tight"
                >
                    Explore My <span className="text-transparent" style={{ WebkitTextStroke: '2px var(--color-zpurple)' }}>Expert Portfolio</span> <br/> Of Creative Solutions
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-zblack/70 font-light"
                >
                    A collection of projects showcasing my capabilities in design and development.
                </motion.p>
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap justify-center gap-4 mb-16 px-4 relative z-10"
            >
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveFilter(category)}
                        className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                            activeFilter === category 
                                ? 'bg-zlime text-black shadow-[0_0_20px_rgba(45,212,191,0.3)]' 
                                : 'bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] backdrop-blur-md text-zblack/70 border-[3px] border-zblack hover:shadow-[4px_4px_0px_0px_var(--color-zlime)]/50 hover:text-zlime'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </motion.div>

            {/* Carousel Container */}
            <div className="relative w-full h-[650px] flex items-center justify-center max-w-[100vw] z-10">
                {filteredProjects.length > 0 && filteredProjects.map((project, index) => {
                    const isCenter = index === currentIndex;
                    const len = filteredProjects.length;

                    let isLeft = false;
                    let isRight = false;
                    let isFarLeft = false;
                    let isFarRight = false;
                    
                    if (len > 1) {
                        isLeft = index === (currentIndex - 1 + len) % len;
                        isRight = index === (currentIndex + 1) % len;
                    }
                    if (len > 3) {
                        isFarLeft = index === (currentIndex - 2 + len) % len;
                        isFarRight = index === (currentIndex + 2) % len;
                    }

                    // Resolve overlaps for smaller arrays
                    if (len === 2) isRight = false;
                    if (len === 3) { isFarLeft = false; isFarRight = false; }
                    if (len === 4) { isFarRight = false; }

                    let x = "0%";
                    let scale = 0.8;
                    let opacity = 0;
                    let zIndex = 0;
                    let pointerEvents = "none";

                    if (isCenter) {
                        x = "0%";
                        scale = 1;
                        opacity = 1;
                        zIndex = 50;
                        pointerEvents = "auto";
                    } else if (isLeft) {
                        x = "-75%"; 
                        scale = 0.85;
                        opacity = 0.6;
                        zIndex = 40;
                        pointerEvents = "auto";
                    } else if (isRight) {
                        x = "75%";
                        scale = 0.85;
                        opacity = 0.6;
                        zIndex = 40;
                        pointerEvents = "auto";
                    } else if (isFarLeft) {
                        x = "-150%"; 
                        scale = 0.7;
                        opacity = 0.2;
                        zIndex = 30;
                        pointerEvents = "auto";
                    } else if (isFarRight) {
                        x = "150%";
                        scale = 0.7;
                        opacity = 0.2;
                        zIndex = 30;
                        pointerEvents = "auto";
                    } else {
                        // Hidden cards
                        let diff = index - currentIndex;
                        if (diff < 0) diff += len; // normalized difference
                        x = diff > len / 2 ? "-200%" : "200%";
                        scale = 0.6;
                        opacity = 0;
                        zIndex = 10;
                    }

                    return (
                        <motion.div
                            key={project.id || index}
                            animate={{ x, scale, opacity, zIndex }}
                            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                            className="absolute w-[90%] max-w-sm md:max-w-md h-full flex flex-col justify-center"
                            style={{ pointerEvents }}
                            onClick={() => {
                                if (isLeft) prevSlide();
                                if (isRight) nextSlide();
                            }}
                        >
                            <Card 
                                className={`flex flex-col w-full h-[580px] group bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] backdrop-blur-xl border ${isCenter ? 'border-zblack shadow-2xl shadow-zlime/10' : 'border-zblack'} rounded-[2rem] p-4 transition-all duration-500 overflow-hidden ${!isCenter && 'cursor-pointer hover:shadow-[4px_4px_0px_0px_var(--color-zlime)]/50'}`}
                                onClick={isCenter ? null : undefined}
                            >
                                {/* Image Container */}
                                <div className={`relative rounded-2xl overflow-hidden bg-black shrink-0 transition-all duration-500 w-full ${isCenter ? 'h-52 mb-6' : 'h-64 mb-4 opacity-70 group-hover:opacity-100'}`}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    
                                    <div className="absolute bottom-3 right-3 bg-[#f4f4f5]/90 backdrop-blur-md text-zblack border-[3px] border-zblack px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg">
                                        <ExternalLink size={12} className="stroke-[3] text-zlime" />
                                        {project.subtitle || "Case Study"}
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="flex-1 flex flex-col px-2 w-full">
                                    <h3 className={`font-display font-bold text-zblack tracking-tight transition-all duration-500 ${isCenter ? 'text-xl mb-4' : 'text-lg text-center'}`}>
                                        {project.title}
                                    </h3>
                                    
                                    {/* Extended details only visible when centered */}
                                    <AnimatePresence>
                                        {isCenter && (
                                            <motion.div 
                                                initial={{ opacity: 0, height: 0 }} 
                                                animate={{ opacity: 1, height: 'auto' }} 
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="flex flex-col flex-1 w-full"
                                            >
                                                {/* Colored Tag Pills */}
                                                <div className="flex flex-wrap gap-2 mb-4 w-full">
                                                    {project.tags.slice(0, 3).map((tag, idx) => (
                                                        <span 
                                                            key={tag} 
                                                            className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${tagColors[idx % tagColors.length]}`}
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>

                                                {/* Detail Box */}
                                                <div className="bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] rounded-2xl p-4 mb-6 w-full border-[3px] border-zblack flex-1 max-h-[120px] overflow-hidden">
                                                    <span className="text-xs font-bold text-zpurple block mb-2 tracking-wider">Detail :</span>
                                                    <p className="text-sm text-zblack/70 leading-relaxed font-light line-clamp-2">
                                                        {project.description}
                                                    </p>
                                                </div>

                                                {/* Bottom Buttons */}
                                                <div className="flex justify-center mt-auto w-full" onClick={(e) => e.stopPropagation()}>
                                                    <Button
                                                        href={`/project/${project.id}`}
                                                        variant="primary"
                                                        className="w-full max-w-[200px] py-3.5 rounded-full bg-zlime text-black hover:bg-zlime font-bold text-sm shadow-lg hover:shadow-zlime/20 transition-all border-none flex items-center justify-center"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            navigate(`/project/${project.id}`);
                                                        }}
                                                    >
                                                        Learn more
                                                    </Button>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </Card>
                        </motion.div>
                    );
                })}

                {/* Navigation Arrows */}
                {filteredProjects.length > 1 && (
                    <div className="absolute top-1/2 -translate-y-1/2 w-full max-w-6xl flex justify-between px-4 md:px-8 pointer-events-none z-40">
                        <button 
                            onClick={prevSlide} 
                            className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] backdrop-blur-md hover:bg-zlime hover:text-black border-[3px] border-zblack hover:shadow-[4px_4px_0px_0px_var(--color-zlime)] rounded-full flex items-center justify-center text-zblack transition-all shadow-xl hover:scale-105"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button 
                            onClick={nextSlide} 
                            className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] backdrop-blur-md hover:bg-zlime hover:text-black border-[3px] border-zblack hover:shadow-[4px_4px_0px_0px_var(--color-zlime)] rounded-full flex items-center justify-center text-zblack transition-all shadow-xl hover:scale-105"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                )}
            </div>
        </SectionWrapper>
    );
};

export default Projects;
