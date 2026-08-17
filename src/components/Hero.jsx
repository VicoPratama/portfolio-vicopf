import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Layers, Code, Zap, Sparkles } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const Hero = () => {
    return (
        <div id="home" className="relative min-h-screen pt-24 pb-12 overflow-hidden bg-[#f4f4f5] flex items-center">
            {/* Removed ambient glows and grid per anti-slop rules */}

            <SectionWrapper>
                <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-16 items-center">
                    
                    {/* Left Column: Glassmorphism Profile Card */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="xl:col-span-4 flex flex-col items-center xl:items-start relative"
                    >
                        {/* Profile Card */}
                        <div className="bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] border-[3px] border-zblack rounded-[2.5rem] p-6 pb-8 w-full max-w-[360px] relative z-10">
                            
                            <div className="relative z-10 w-full aspect-[4/5] rounded-t-full rounded-b-[2rem] overflow-hidden mb-8 border-[6px] border-zblack">
                                <img 
                                    src="/foto_profile.JPG" 
                                    alt="Vico Pratama" 
                                    className="w-full h-full object-cover object-top"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zcard/80 via-transparent to-transparent" />
                            </div>

                            <div className="text-center relative z-10">
                                <h2 className="text-zblack font-display text-3xl font-black tracking-tight mb-1">
                                    Vico Pratama
                                </h2>
                                <p className="text-zlime font-mono text-sm uppercase tracking-widest mb-6 font-bold">
                                    Web Developer
                                </p>
                                
                                <div className="w-full h-[1px] bg-zgray mb-6" />

                                <p className="text-zblack/70 text-sm font-medium leading-relaxed max-w-[240px] mx-auto">
                                    Building pixel-perfect, engaging, and accessible digital experiences.
                                </p>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="mt-8 flex items-center justify-center w-full max-w-[360px]">
                            <a href="#contact" className="flex items-center justify-between w-full bg-zlime hover:bg-zlime/90 active:scale-95 transition-all rounded-full p-2 pl-8 group">
                                <span className="text-zblack font-black text-base tracking-wide uppercase">Start a Project</span>
                                <div className="w-12 h-12 rounded-full bg-[#f4f4f5] flex items-center justify-center text-zlime transition-transform duration-300">
                                    <ArrowRight size={20} strokeWidth={3} className="group-hover:translate-x-1 transition-transform duration-300" />
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: Content */}
                    <div className="xl:col-span-8 flex flex-col">
                        
                        {/* Typography Section */}
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="mb-10 flex flex-col"
                        >
                            <span className="text-zpurple font-mono text-lg mb-4 flex items-center gap-3 font-bold tracking-widest uppercase">
                                <Zap size={18} /> Creative Mind
                            </span>
                            <h1 className="font-display text-6xl md:text-7xl lg:text-[6.5rem] font-black uppercase leading-[0.9] tracking-tighter flex flex-col gap-2">
                                <span className="text-zblack">WEB</span>
                                {/* Outline text effect with zlime stroke */}
                                <span 
                                    className="text-transparent" 
                                    style={{ WebkitTextStroke: '2px var(--color-zlime)' }}
                                >
                                    DEVELOPER
                                </span>
                            </h1>
                        </motion.div>

                        <div className="flex flex-col md:flex-row gap-8 mb-12 items-start">
                            {/* Bio */}
                            <motion.p 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-zblack/70 text-base md:text-lg font-light leading-relaxed max-w-md border-l-4 border-zlime pl-6"
                            >
                                I specialize in transforming complex problems into elegant, highly functional, and visually striking web interfaces. My focus is on writing clean, scalable code.
                            </motion.p>
                        </div>

                        {/* Skill Cards (Horizontal Layout instead of Boxy) */}
                        <div className="flex flex-col md:flex-row gap-6 mb-12">
                            {/* Lime Card */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex-1 bg-zlime rounded-3xl p-8 flex flex-col justify-between group relative overflow-hidden"
                            >
                                {/* Removed abstract shape bg */}
                                
                                <div className="text-zblack mb-12 relative z-10">
                                    <Terminal size={32} />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-zblack font-black text-2xl uppercase tracking-tight leading-none mb-3">
                                        Advanced<br/>Logic
                                    </h3>
                                    <p className="text-zblack/70 font-medium text-sm">React, Next.js, TypeScript</p>
                                </div>
                            </motion.div>

                            {/* Purple Card */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="flex-1 bg-zpurple rounded-3xl p-8 flex flex-col justify-between group relative overflow-hidden"
                            >
                                {/* Removed abstract shape bg */}

                                <div className="text-zblack mb-12 relative z-10">
                                    <Layers size={32} />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-zblack font-black text-2xl uppercase tracking-tight leading-none mb-3">
                                        Visual<br/>Excellence
                                    </h3>
                                    <p className="text-zblack/70 font-medium text-sm">Tailwind CSS, Framer Motion</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Bottom Value Section */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] border-[3px] border-zblack rounded-3xl p-6 flex flex-col md:flex-row items-center gap-6"
                        >
                            <div className="flex items-center gap-4 shrink-0">
                                <div className="w-12 h-12 rounded-xl bg-zgray flex items-center justify-center text-zlime">
                                    <Code size={24} />
                                </div>
                                <div>
                                    <h4 className="text-zblack font-bold uppercase tracking-wider text-sm">Tech Arsenal</h4>
                                    <p className="text-gray-500 text-xs">Tools I use daily</p>
                                </div>
                            </div>
                            
                            <div className="w-full h-[1px] md:w-[1px] md:h-12 bg-zgray" />

                            <div className="flex flex-wrap gap-2">
                                {["React", "Next.js", "Tailwind", "JavaScript", "Figma"].map((tech) => (
                                    <span key={tech} className="px-4 py-1.5 rounded-lg bg-[#f4f4f5] border-[3px] border-zblack text-zblack/80 text-sm font-medium hover:shadow-[4px_4px_0px_0px_var(--color-zpurple)] hover:text-zpurple transition-colors cursor-default">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Hero;
