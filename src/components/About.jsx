import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { Code2, Layout, Palette, TrendingUp } from 'lucide-react';

const About = () => {
    return (
        <SectionWrapper id="about" className="bg-[#0a0a0a]">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            From Idea To <br />
                            Execution, I Help You <br />
                            Realize The Dream <br />
                            With <span className="text-teal-400">Code</span> That's...
                        </h2>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="space-y-6 text-gray-400 text-lg leading-relaxed font-light"
                    >
                        <p>
                            I am a dedicated developer with a keen eye for design and a passion for coding. My journey began with a curiosity for how the web works, which evolved into a career building sophisticated web applications.
                        </p>
                        <p>
                            Highly motivated and detail-oriented Bachelor of Computer Science fresh graduate (GPA 3.69/4.00) with a strong foundation in IT Governance, Web and Software Development, Project Management, and UI/UX Design. Skilled in system analysis, database management, and business process optimization.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2rem] hover:border-teal-500/50 transition-colors duration-500 group flex flex-col justify-between"
                    >
                        <div>
                            <div className="bg-teal-400 text-black/10 w-12 h-12 rounded-full flex items-center justify-center mb-8">
                                <Code2 className="text-teal-400 w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-display font-bold text-white mb-4">Web Development & Design</h3>
                            <p className="text-gray-400 leading-relaxed font-light mb-8">
                                Building fast, responsive, and reliable web applications using modern technologies like React, Tailwind, and Node.js while crafting pixel-perfect visual layouts that align with modern design trends.
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <span className="px-4 py-2 rounded-full bg-white/5 text-xs text-white uppercase tracking-wider">React</span>
                            <span className="px-4 py-2 rounded-full bg-white/5 text-xs text-white uppercase tracking-wider">Tailwind</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2rem] hover:border-teal-500/50 transition-colors duration-500 group flex flex-col justify-between"
                    >
                        <div>
                            <div className="bg-teal-400 text-black/10 w-12 h-12 rounded-full flex items-center justify-center mb-8">
                                <TrendingUp className="text-teal-400 w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-display font-bold text-white mb-4">UI/UX & Business Analysis</h3>
                            <p className="text-gray-400 leading-relaxed font-light mb-8">
                                Creating intuitive user interfaces and analyzing business requirements. Implementing ERP solutions to optimize organizational workflows and ensuring a seamless user journey.
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <span className="px-4 py-2 rounded-full bg-white/5 text-xs text-white uppercase tracking-wider">Figma</span>
                            <span className="px-4 py-2 rounded-full bg-white/5 text-xs text-white uppercase tracking-wider">Analysis</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;
