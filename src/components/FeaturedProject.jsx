import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { Star, ExternalLink, Github, CheckCircle2, ArrowRight } from 'lucide-react';

const FeaturedProject = () => {
    return (
        <SectionWrapper id="featured-project">
            <div className="space-y-6">
                
                {/* Section Header */}
                <div className="flex items-center gap-2 border-b border-neutral-200 dark:border-neutral-800 pb-3">
                    <Star size={20} className="text-emerald-500" />
                    <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                        Featured Case Study
                    </h2>
                </div>

                <div className="satria-card p-6 md:p-8 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        
                        {/* Image Showcase */}
                        <div className="lg:col-span-6">
                            <div className="relative rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800 shadow-sm group">
                                <img
                                    src="/adas-helpdesk-dashboard.png"
                                    alt="ADAS Helpdesk System"
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-500"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="lg:col-span-6 space-y-4">
                            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                                <span>🤝 BYD HAKA AUTO COLLABORATION</span>
                            </div>

                            <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 tracking-tight font-display">
                                ADAS Helpdesk System
                            </h3>

                            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                                The official helpdesk system for HAKA Auto, providing a centralized platform for employees to report technical issues, request IT services, and track resolution progress in real-time.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                                {[
                                    "Ticket Management System",
                                    "Real-time Status Tracking",
                                    "Admin Dashboard & Analytics",
                                    "SLA Performance Monitoring"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-300">
                                        <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-1.5 pt-2">
                                {["React", "Tailwind CSS", "Supabase", "Vite"].map(tag => (
                                    <span 
                                        key={tag} 
                                        className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-[11px] font-medium text-neutral-700 dark:text-neutral-300"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-wrap items-center gap-3 pt-3">
                                <a
                                    href="https://adas-helpdesk-hakaauto.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 text-xs font-medium hover:bg-neutral-800 dark:hover:bg-white transition-all shadow-xs"
                                >
                                    <span>Live Demo</span>
                                    <ExternalLink size={13} />
                                </a>

                                <a
                                    href="https://github.com/ict-bumiauto/hakaauto-ruang"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 text-xs font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all shadow-2xs"
                                >
                                    <Github size={13} />
                                    <span>Source Code</span>
                                </a>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </SectionWrapper>
    );
};

export default FeaturedProject;
