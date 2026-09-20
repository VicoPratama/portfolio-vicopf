import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { Briefcase, GraduationCap, Code2, TrendingUp, ChevronDown, Sparkles, Plus, Minus } from 'lucide-react';

const timelineData = [
    {
        year: "2024",
        title: "Professional Specialization",
        subtitle: "Web, Design & ERP",
        description: "Expanding expertise across Web Development, Web Design, and Business Analysis. Specializing in Odoo ERP solutions and scalable modern web platforms to drive organizational efficiency.",
        icon: TrendingUp,
    },
    {
        year: "2023",
        title: "Internship & Real World Projects",
        subtitle: "Full Stack Exploration",
        description: "Gained hands-on experience working with cross-functional teams, collaborating on real-world projects, integrating backend APIs, and mastering software development lifecycle workflows.",
        icon: Briefcase,
    },
    {
        year: "2022",
        title: "Discovered Web Development",
        subtitle: "Frontend Passion",
        description: "Fell in love with creating digital experiences. Mastered HTML, CSS, JavaScript, and React, building responsive applications and dynamic user interfaces.",
        icon: Code2,
    },
    {
        year: "2020",
        title: "Started University",
        subtitle: "Bachelor of Computer Science",
        description: "Began my formal journey in technology, exploring algorithms, computer architecture, data structures, and software engineering principles.",
        icon: GraduationCap,
    },
];

const Timeline = () => {
    const [expandedIndex, setExpandedIndex] = useState(0);

    return (
        <SectionWrapper id="journey">
            <div className="space-y-6">
                
                {/* Section Header */}
                <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-3">
                    <div className="flex items-center gap-2">
                        <Briefcase size={20} className="text-emerald-500" />
                        <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                            Experience & Journey
                        </h2>
                    </div>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                        2020 - 2024
                    </span>
                </div>

                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    A yearly snapshot of my creative and technical growth.
                </p>

                {/* Timeline Items */}
                <div className="space-y-3 pt-2">
                    {timelineData.map((item, index) => {
                        const Icon = item.icon;
                        const isExpanded = expandedIndex === index;

                        return (
                            <div 
                                key={index} 
                                className={`satria-card transition-all duration-200 overflow-hidden ${
                                    isExpanded ? 'border-neutral-300 dark:border-neutral-700 bg-neutral-50/50 dark:bg-neutral-900/80' : ''
                                }`}
                            >
                                <button
                                    onClick={() => setExpandedIndex(isExpanded ? -1 : index)}
                                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left focus:outline-none gap-4"
                                >
                                    <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                                            isExpanded 
                                                ? 'bg-emerald-500 text-white' 
                                                : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
                                        }`}>
                                            <Icon size={18} />
                                        </div>
                                        <div className="min-w-0">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-md bg-neutral-200/70 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                                                    {item.year}
                                                </span>
                                                <h3 className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-100 truncate">
                                                    {item.title}
                                                </h3>
                                            </div>
                                            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                                                {item.subtitle}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 shrink-0">
                                        <div className={`p-1.5 rounded-full transition-transform duration-200 ${
                                            isExpanded ? 'rotate-180 text-emerald-500' : 'text-neutral-400'
                                        }`}>
                                            <ChevronDown size={18} />
                                        </div>
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-5 pb-5 pt-1 border-t border-neutral-100 dark:border-neutral-800/80">
                                                <p className="text-xs sm:text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

            </div>
        </SectionWrapper>
    );
};

export default Timeline;
