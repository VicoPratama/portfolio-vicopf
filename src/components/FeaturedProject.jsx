import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import Button from './Button';
import { ExternalLink, Github, ArrowRight, CheckCircle2 } from 'lucide-react';

const FeaturedProject = () => {
    return (
        <SectionWrapper id="featured-project" className="bg-[#0a0a0a] py-24 relative overflow-hidden">
            {/* Ambient Glows */}
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto relative z-10">

                {/* Image Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative group "
                >
                    <div className="absolute -inset-4 bg-gradient-to-r from-teal-400/20 to-pink-500/20 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-500 pointer-events-none" />
                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
                        <img
                            src="/adas-helpdesk-dashboard.png"
                            alt="ADAS Helpdesk System"
                            className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-700 opacity-90 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition duration-300 pointer-events-none" />
                    </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="flex items-center gap-2 mb-4">
                        <span className="w-12 h-[2px] bg-teal-400" />
                        <span className="text-teal-400 uppercase tracking-widest text-sm font-bold">Featured Project</span>
                    </div>

                    <h2 className="font-display text-4xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight uppercase">
                        ADAS <br />
                        <span className="text-transparent" style={{ WebkitTextStroke: '2px #f43f5e' }}>Helpdesk System</span>
                    </h2>

                    <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
                        <span className="text-pink-500 font-bold block mb-2 text-sm tracking-wide">🤝 IN COLLABORATION WITH BYD HAKA AUTO</span>
                        The official helpdesk system for HAKA Auto, providing a centralized platform for employees to report technical issues, request services, and track resolution progress in real-time.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        {[
                            "Ticket Management System",
                            "Real-time Status Tracking",
                            "Admin Dashboard & Analytics",
                            "SLA Performance Monitoring"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 text-gray-400">
                                <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0" />
                                <span className="text-sm font-medium">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-3 mb-10">
                        {["React", "Tailwind CSS", "Supabase", "Vite"].map(tag => (
                            <span key={tag} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-semibold hover:border-teal-400 hover:text-teal-400 transition-colors cursor-default">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <Button
                            href="https://adas-helpdesk-hakaauto.vercel.app/"
                            target="_blank"
                            variant="primary"
                            className="group bg-teal-400 text-black hover:bg-teal-300 hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] transition-all font-bold rounded-full py-3.5 px-6 border-none"
                        >
                            Live Demo
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            href="https://github.com/ict-bumiauto/hakaauto-ruang"
                            target="_blank"
                            variant="secondary"
                            className="bg-white/5 backdrop-blur-md text-white border border-white/10 hover:border-pink-500/50 hover:bg-pink-500/10 hover:text-pink-400 transition-all font-bold rounded-full py-3.5 px-6"
                        >
                            <Github className="w-4 h-4 mr-2" />
                            Source Code
                        </Button>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default FeaturedProject;
