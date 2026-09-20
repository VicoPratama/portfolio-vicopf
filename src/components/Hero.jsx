import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Briefcase, FileText, Send, Sparkles, Terminal, Code2, Layers, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section id="home" className="pt-4 pb-8">
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
            >
                {/* Title & Greeting */}
                <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
                        <Sparkles size={13} />
                        <span>Web Developer & UI/UX Designer</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 font-display">
                        Hi, I'm Vico Pratama Fajareno
                    </h1>
                </div>

                {/* Location & Availability Chips */}
                <ul className="flex flex-wrap items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
                    <li className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                        <MapPin size={14} className="text-emerald-500" />
                        <span>Based in South Jakarta, Indonesia</span>
                    </li>
                    <li className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                        <Briefcase size={14} className="text-blue-500" />
                        <span>Open to Work & Relocation to Anywhere / Onsite & Remote</span>
                    </li>
                </ul>

                {/* Bio Paragraphs */}
                <div className="space-y-4 text-base md:text-lg leading-relaxed text-neutral-600 dark:text-neutral-300 font-normal">
                    <p>
                        Frontend-focused Full Stack Developer with professional experience designing, developing, and deploying scalable web applications from frontend to backend. Skilled in React-based development, API integration, and scalable system design, with a strong UI/UX background to deliver pixel-perfect and user-centered interfaces.
                    </p>
                    <p className="text-sm md:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed">
                        Proven ability to develop, deploy, and maintain web applications end-to-end, while also contributing to ERP system implementation and business process optimization, including exposure to Odoo ERP environments. Experienced in aligning technical solutions with operational workflows to improve system efficiency and usability. Passionate about modern frontend technologies such as React and Next.js, with a continuous focus on building production-ready, scalable applications that integrate seamlessly with enterprise systems.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 text-sm font-medium hover:bg-neutral-800 dark:hover:bg-white transition-all shadow-sm hover:scale-[1.02]"
                    >
                        <span>Start a Project</span>
                        <ArrowRight size={16} />
                    </a>

                    <Link
                        to="/resume"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all shadow-2xs hover:scale-[1.02]"
                    >
                        <FileText size={16} />
                        <span>View Resume</span>
                    </Link>
                </div>

                {/* Highlight Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    <div className="satria-card p-5 group flex flex-col justify-between">
                        <div className="flex items-center justify-between mb-3">
                            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                                <Terminal size={20} />
                            </div>
                            <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400">
                                Core Logic
                            </span>
                        </div>
                        <div>
                            <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                                Advanced Logic & Architecture
                            </h3>
                            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                                React, Next.js, TypeScript, State Management, and scalable backend workflows.
                            </p>
                        </div>
                    </div>

                    <div className="satria-card p-5 group flex flex-col justify-between">
                        <div className="flex items-center justify-between mb-3">
                            <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500 border border-blue-500/20">
                                <Layers size={20} />
                            </div>
                            <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400">
                                Interface
                            </span>
                        </div>
                        <div>
                            <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                                Visual Excellence & UX
                            </h3>
                            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                                Tailwind CSS, Framer Motion, Responsive Design, and intuitive UX wireframing.
                            </p>
                        </div>
                    </div>
                </div>

            </motion.div>
        </section>
    );
};

export default Hero;
