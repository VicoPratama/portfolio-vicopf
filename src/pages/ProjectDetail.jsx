import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../constants/projectsData';
import { ArrowLeft, ExternalLink, Github, ArrowUpRight, FolderGit2, Calendar, Layers } from 'lucide-react';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="py-20 text-center space-y-4">
                <div className="satria-card p-10 max-w-md mx-auto">
                    <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                        Project Not Found
                    </h2>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-6">
                        The project you are looking for does not exist or has been moved.
                    </p>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 text-xs font-medium hover:bg-neutral-800 dark:hover:bg-white transition-all"
                    >
                        <ArrowLeft size={14} />
                        <span>Return to Home</span>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6 pb-12">
            
            {/* Top Back Navigation */}
            <div>
                <Link
                    to="/#projects"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors group"
                >
                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Projects</span>
                </Link>
            </div>

            {/* Project Header Info */}
            <div className="space-y-3">
                {project.subtitle && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
                        <span>{project.subtitle}</span>
                    </div>
                )}

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 font-display">
                    {project.title}
                </h1>

                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
                    {project.description}
                </p>
            </div>

            {/* Metadata & Links Bar */}
            <div className="py-3 border-y border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-4 text-xs">
                <div className="flex flex-wrap items-center gap-2">
                    <span className="font-semibold text-neutral-800 dark:text-neutral-200 flex items-center gap-1.5">
                        <Layers size={14} className="text-emerald-500" />
                        Tech Stack :
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* External Action Links */}
                <div className="flex items-center gap-3">
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 font-medium hover:bg-neutral-800 dark:hover:bg-white transition-all shadow-xs hover:scale-105"
                        >
                            <span>Live Demo</span>
                            <ExternalLink size={12} />
                        </a>
                    )}
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all shadow-2xs hover:scale-105"
                        >
                            <Github size={13} />
                            <span>Source Code</span>
                        </a>
                    )}
                </div>
            </div>

            {/* Hero Image Mockup */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="satria-card overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
            >
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover object-top max-h-[500px]"
                />
            </motion.div>

            <div className="border-t border-neutral-200 dark:border-neutral-800 my-6" />

            {/* Render Markdown-like Content Sections */}
            <div className="space-y-8">
                {project.content.split('\n## ').map((section, idx) => {
                    if (!section.trim()) return null;

                    const lines = section.split('\n');
                    // If first section started without '## ', treat lines[0] as title if it was split
                    const sectionTitle = lines[0].replace('## ', '').trim();
                    const sectionBody = lines.slice(1);

                    return (
                        <div key={idx} className="space-y-4">
                            <h2 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 font-display">
                                {sectionTitle}
                            </h2>

                            <div className="space-y-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
                                {sectionBody.map((line, lineIdx) => {
                                    const trimmed = line.trim();
                                    if (!trimmed) return null;

                                    if (trimmed.startsWith('- ')) {
                                        const content = trimmed.replace('- ', '');
                                        const parts = content.split('**');

                                        if (parts.length >= 3) {
                                            return (
                                                <div key={lineIdx} className="flex items-start gap-2 pl-1">
                                                    <span className="text-emerald-500 mt-0.5">•</span>
                                                    <div>
                                                        <strong className="text-neutral-900 dark:text-neutral-100 font-semibold">
                                                            {parts[1]}:
                                                        </strong>
                                                        <span className="ml-1 text-neutral-600 dark:text-neutral-300">
                                                            {parts.slice(2).join('').replace(/^:\s*/, '')}
                                                        </span>
                                                    </div>
                                                </div>
                                            );
                                        }

                                        return (
                                            <div key={lineIdx} className="flex items-start gap-2 pl-1">
                                                <span className="text-emerald-500 mt-0.5">•</span>
                                                <span className="text-neutral-600 dark:text-neutral-300">
                                                    {content}
                                                </span>
                                            </div>
                                        );
                                    }

                                    return (
                                        <p key={lineIdx}>
                                            {trimmed}
                                        </p>
                                    );
                                })}
                            </div>

                            <div className="border-t border-neutral-100 dark:border-neutral-800/60 pt-2" />
                        </div>
                    );
                })}
            </div>

            {/* Bottom Footer Action */}
            <div className="pt-6 flex items-center justify-between">
                <Link
                    to="/#projects"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                    <ArrowLeft size={14} />
                    <span>Back to all projects</span>
                </Link>

                {project.demo && (
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                        <span>Visit Live Site</span>
                        <ArrowUpRight size={14} />
                    </a>
                )}
            </div>

        </div>
    );
};

export default ProjectDetail;
