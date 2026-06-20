import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Layers, Code, Zap, Sparkles } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const Hero = () => {
    return (
        <div id="home" className="relative min-h-screen pt-24 pb-12 overflow-hidden bg-[#0a0a0a] flex items-center">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px] pointer-events-none" />
            
            {/* Minimalist Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

            <SectionWrapper>
                <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-16 items-center">
                    
                    {/* Left Column: Glassmorphism Profile Card */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="xl:col-span-4 flex flex-col items-center xl:items-start relative"
                    >
                        {/* Decorative floating icon */}
                        <motion.div 
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl rotate-12 flex items-center justify-center text-white shadow-lg shadow-pink-500/20 z-20 hidden md:flex"
                        >
                            <Sparkles size={28} />
                        </motion.div>

                        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-6 pb-8 w-full max-w-[360px] shadow-2xl relative z-10">
                            
                            <div className="relative z-10 w-full aspect-[4/5] rounded-t-full rounded-b-[2rem] overflow-hidden mb-8 border-[6px] border-white/5">
                                <img 
                                    src="/foto_profile.JPG" 
                                    alt="Vico Pratama" 
                                    className="w-full h-full object-cover object-top"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent" />
                            </div>

                            <div className="text-center relative z-10">
                                <h2 className="text-white font-display text-3xl font-black tracking-tight mb-1">
                                    Vico Pratama
                                </h2>
                                <p className="text-teal-400 font-mono text-sm uppercase tracking-widest mb-6">
                                    Web Developer
                                </p>
                                
                                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />

                                <p className="text-gray-400 text-sm font-medium leading-relaxed max-w-[240px] mx-auto">
                                    Building pixel-perfect, engaging, and accessible digital experiences.
                                </p>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="mt-8 flex items-center justify-center w-full max-w-[360px]">
                            <button className="flex items-center justify-between w-full bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all rounded-full p-2 pl-8 group border border-white/10 shadow-xl">
                                <span className="text-white font-bold text-base tracking-wide">Start a Project</span>
                                <div className="w-12 h-12 rounded-full bg-teal-400 flex items-center justify-center text-black group-hover:scale-110 transition-transform duration-300">
                                    <ArrowRight size={20} strokeWidth={3} className="group-hover:-rotate-45 transition-transform duration-300" />
                                </div>
                            </button>
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
                            <span className="text-pink-500 font-mono text-lg mb-4 flex items-center gap-3 font-bold tracking-widest uppercase">
                                <Zap size={18} /> Creative Mind
                            </span>
                            <h1 className="font-display text-6xl md:text-7xl lg:text-[6.5rem] font-black uppercase leading-[0.9] tracking-tighter flex flex-col gap-2">
                                <span className="text-white">WEB</span>
                                {/* Outline text effect with teal stroke */}
                                <span 
                                    className="text-transparent" 
                                    style={{ WebkitTextStroke: '2px #2dd4bf' }}
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
                                className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-md border-l-2 border-teal-500/50 pl-6"
                            >
                                I specialize in transforming complex problems into elegant, highly functional, and visually striking web interfaces. My focus is on writing clean, scalable code.
                            </motion.p>
                        </div>

                        {/* Skill Cards (Horizontal Layout instead of Boxy) */}
                        <div className="flex flex-col md:flex-row gap-6 mb-12">
                            {/* Teal Card */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex-1 bg-gradient-to-br from-teal-400 to-teal-600 rounded-3xl p-8 flex flex-col justify-between group relative overflow-hidden"
                            >
                                {/* Abstract shape bg */}
                                <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                                
                                <div className="text-black mb-12 relative z-10">
                                    <Terminal size={32} />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-black font-black text-2xl uppercase tracking-tight leading-none mb-3">
                                        Advanced<br/>Logic
                                    </h3>
                                    <p className="text-teal-950 font-medium text-sm">React, Next.js, TypeScript</p>
                                </div>
                            </motion.div>

                            {/* Magenta/Pink Card */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="flex-1 bg-gradient-to-br from-pink-500 to-rose-500 rounded-3xl p-8 flex flex-col justify-between group relative overflow-hidden"
                            >
                                {/* Abstract shape bg */}
                                <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

                                <div className="text-white mb-12 relative z-10">
                                    <Layers size={32} />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-white font-black text-2xl uppercase tracking-tight leading-none mb-3">
                                        Visual<br/>Excellence
                                    </h3>
                                    <p className="text-pink-100 font-medium text-sm">Tailwind CSS, Framer Motion</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Bottom Value Section */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="bg-white/5 border border-white/5 rounded-3xl p-6 flex flex-col md:flex-row items-center gap-6"
                        >
                            <div className="flex items-center gap-4 shrink-0">
                                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-teal-400">
                                    <Code size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold uppercase tracking-wider text-sm">Tech Arsenal</h4>
                                    <p className="text-gray-500 text-xs">Tools I use daily</p>
                                </div>
                            </div>
                            
                            <div className="w-full h-[1px] md:w-[1px] md:h-12 bg-white/10" />

                            <div className="flex flex-wrap gap-2">
                                {["React", "Next.js", "Tailwind", "JavaScript", "Figma"].map((tech) => (
                                    <span key={tech} className="px-4 py-1.5 rounded-lg bg-[#0a0a0a] border border-white/10 text-gray-300 text-sm font-medium hover:border-pink-500 hover:text-pink-400 transition-colors cursor-default">
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
