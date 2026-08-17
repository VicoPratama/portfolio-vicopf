import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import Button from './Button';
import { ExternalLink, Github, ArrowRight, CheckCircle2 } from 'lucide-react';

const FeaturedProject = () => {
    return (
        <SectionWrapper id="featured-project" className="bg-[#f4f4f5] py-24 relative overflow-hidden">
            {/* Ambient Glows */}
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-zlime/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-zpurple/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto relative z-10">

                {/* Image Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative group "
                >
                    <div className="absolute -inset-4 bg-gradient-to-r from-zlime/20 to-zpurple/20 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-500 pointer-events-none" />
                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-[3px] border-zblack bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] backdrop-blur-xl">
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
                        <span className="w-12 h-[2px] bg-zlime" />
                        <span className="text-zlime uppercase tracking-widest text-sm font-bold">Featured Project</span>
                    </div>

                    <h2 className="font-display text-4xl md:text-5xl font-black text-zblack mb-6 leading-tight tracking-tight uppercase">
                        ADAS <br />
                        <span className="text-transparent" style={{ WebkitTextStroke: '2px var(--color-zpurple)' }}>Helpdesk System</span>
                    </h2>

                    <p className="text-zblack/70 text-lg leading-relaxed mb-8 font-light">
                        <span className="text-zpurple font-bold block mb-2 text-sm tracking-wide">🤝 IN COLLABORATION WITH BYD HAKA AUTO</span>
                        The official helpdesk system for HAKA Auto, providing a centralized platform for employees to report technical issues, request services, and track resolution progress in real-time.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        {[
                            "Ticket Management System",
                            "Real-time Status Tracking",
                            "Admin Dashboard & Analytics",
                            "SLA Performance Monitoring"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 text-zblack/70">
                                <CheckCircle2 className="w-5 h-5 text-zlime flex-shrink-0" />
                                <span className="text-sm font-medium">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-3 mb-10">
                        {["React", "Tailwind CSS", "Supabase", "Vite"].map(tag => (
                            <span key={tag} className="px-4 py-1.5 rounded-full bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] border-[3px] border-zblack text-zblack/80 text-sm font-semibold hover:shadow-[4px_4px_0px_0px_var(--color-zlime)] hover:text-zlime transition-colors cursor-default">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <Button
                            href="https://adas-helpdesk-hakaauto.vercel.app/"
                            target="_blank"
                            variant="primary"
                            className="group bg-zlime text-black hover:bg-zlime hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] transition-all font-bold rounded-full py-3.5 px-6 border-none"
                        >
                            Live Demo
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            href="https://github.com/ict-bumiauto/hakaauto-ruang"
                            target="_blank"
                            variant="secondary"
                            className="bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] backdrop-blur-md text-zblack border-[3px] border-zblack hover:shadow-[4px_4px_0px_0px_var(--color-zpurple)]/50 hover:bg-zpurple/10 hover:text-zpurple transition-all font-bold rounded-full py-3.5 px-6"
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
