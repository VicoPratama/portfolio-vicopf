import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { Code2, Layout, Palette, TrendingUp } from 'lucide-react';

const About = () => {
    return (
        <SectionWrapper id="about" className="bg-gray-950">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-4xl md:text-5xl font-bold mb-6 text-white"
                    >
                        About <span className="text-accent-blue">Me</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-300 text-lg leading-relaxed mb-6 font-light"
                    >
                        I am a dedicated developer with a keen eye for design and a passion for coding. My journey began with a curiosity for how the web works, which evolved into a career building sophisticated web applications.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-300 text-lg leading-relaxed mb-8 font-light"
                    >
                        Highly motivated and detail-oriented Bachelor of Computer Science fresh graduate (GPA 3.69/4.00) with a strong foundation in IT Governance, Web and Software Development, Project Management, and UI/UX Design. Skilled in system analysis, database management, and business process optimization, with hands-on experience in HTML5, CSS, JavaScript, PHP, and Python. Demonstrates curiosity and adaptability in exploring ERP systems and SAP environments, with a growing interest in digital transformation and enterprise IT integration. Eager to contribute to innovative IT projects, while continuously learning and developing technical and analytical skills to support organizational growth.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-gray-900/40 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] hover:bg-gray-800/40 transition-colors duration-500 shadow-xl group"
                    >
                        <div className="bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                            <Code2 className="text-accent-blue w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-display font-bold text-white mb-4 tracking-tight">Web Development</h3>
                        <p className="text-gray-400 text-sm leading-relaxed font-light">
                            Building fast, responsive, and reliable web applications using modern technologies like React, Tailwind, and Node.js.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-gray-900/40 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] hover:bg-gray-800/40 transition-colors duration-500 shadow-xl group"
                    >
                        <div className="bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                            <Layout className="text-accent-blue w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-display font-bold text-white mb-4 tracking-tight">Web Design</h3>
                        <p className="text-gray-400 text-sm leading-relaxed font-light">
                            Crafting pixel-perfect visual layouts and aesthetics that align with modern design trends.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="bg-gray-900/40 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] hover:bg-gray-800/40 transition-colors duration-500 shadow-xl group"
                    >
                        <div className="bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                            <Palette className="text-accent-blue w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-display font-bold text-white mb-4 tracking-tight">UI/UX Design</h3>
                        <p className="text-gray-400 text-sm leading-relaxed font-light">
                            Creating intuitive and visually stunning user interfaces that prioritize user experience and accessibility.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="bg-gray-900/40 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] hover:bg-gray-800/40 transition-colors duration-500 shadow-xl group"
                    >
                        <div className="bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                            <TrendingUp className="text-accent-blue w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-display font-bold text-white mb-4 tracking-tight">Business Analyst</h3>
                        <p className="text-gray-400 text-sm leading-relaxed font-light">
                            Analyzing business requirements and implementing Odoo ERP solutions to optimize organizational workflows.
                        </p>
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;
