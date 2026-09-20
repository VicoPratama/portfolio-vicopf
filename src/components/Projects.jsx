import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { FolderGit2, ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { projectsData as projects } from '../constants/projectsData';
import { Link } from 'react-router-dom';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const categories = ['All', 'React', 'Tailwind CSS', 'Supabase', 'Javascript'];

    const filteredProjects = useMemo(() => {
        if (activeFilter === 'All') return projects;
        return projects.filter(project => 
            project.tags.some(tag => tag.toLowerCase() === activeFilter.toLowerCase())
        );
    }, [activeFilter]);

    return (
        <SectionWrapper id="projects">
            <div className="space-y-6">
                
                {/* Section Header */}
                <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-3">
                    <div className="flex items-center gap-2">
                        <FolderGit2 size={20} className="text-emerald-500" />
                        <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                            Projects & Portfolio
                        </h2>
                    </div>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                        {projects.length} Total Projects
                    </span>
                </div>

                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    A showcase of digital solutions, web applications, and case studies I have engineered.
                </p>

                {/* Filter Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                    {categories.map((cat) => {
                        const isSelected = activeFilter === cat;
                        const count = cat === 'All' 
                            ? projects.length 
                            : projects.filter(p => p.tags.some(t => t.toLowerCase() === cat.toLowerCase())).length;

                        return (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                                    isSelected
                                        ? 'bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 shadow-xs'
                                        : 'bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'
                                }`}
                            >
                                <span>{cat}</span>
                                <span className={`px-1.5 py-0.2 rounded-full text-[10px] tabular-nums ${
                                    isSelected 
                                        ? 'bg-neutral-700 dark:bg-neutral-300 text-white dark:text-neutral-900' 
                                        : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400'
                                }`}>
                                    {count}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3, delay: index * 0.04 }}
                                className="satria-card overflow-hidden flex flex-col justify-between group hover:scale-[1.01] transition-all"
                            >
                                <div>
                                    {/* Image Container */}
                                    <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-neutral-800 border-b border-neutral-100 dark:border-neutral-800">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                        {project.subtitle && (
                                            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-neutral-900/80 backdrop-blur-md text-neutral-100 text-[10px] font-medium">
                                                {project.subtitle}
                                            </div>
                                        )}
                                    </div>

                                    {/* Content Container */}
                                    <div className="p-5 space-y-3">
                                        <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                                            {project.title}
                                        </h3>
                                        
                                        <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal line-clamp-2">
                                            {project.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-1.5 pt-1">
                                            {project.tags.slice(0, 3).map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-[10px] font-medium text-neutral-600 dark:text-neutral-400"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Footer Links */}
                                <div className="p-5 pt-0 flex items-center justify-between border-t border-neutral-100 dark:border-neutral-800/80 mt-2">
                                    <Link
                                        to={`/project/${project.id}`}
                                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 dark:text-neutral-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                                    >
                                        <span>View Details</span>
                                        <ArrowUpRight size={14} />
                                    </Link>

                                    <div className="flex items-center gap-2">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`Source code for ${project.title}`}
                                                className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                                            >
                                                <Github size={15} />
                                            </a>
                                        )}
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`Live demo for ${project.title}`}
                                                className="p-1.5 rounded-lg text-neutral-500 hover:text-emerald-500 transition-colors"
                                            >
                                                <ExternalLink size={15} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

            </div>
        </SectionWrapper>
    );
};

export default Projects;
