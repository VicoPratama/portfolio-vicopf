import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../constants/projectsData';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-white">
                <div className="text-center bg-white/5 backdrop-blur-xl p-12 rounded-[2rem] border border-white/10 shadow-2xl">
                    <h2 className="text-4xl font-display font-black mb-6 uppercase tracking-tight">Project Not Found</h2>
                    <Link to="/" className="text-teal-400 hover:text-pink-500 font-bold transition-colors inline-flex items-center gap-2">
                        <ArrowLeft size={20} />
                        Return to Home
                    </Link>
                </div>
            </div>
        );
    }

    const clientName = project.subtitle ? project.subtitle.replace("In Collaboration with ", "") : "Personal Project";

    return (
        <div className="bg-[#0a0a0a] min-h-screen text-white relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto relative z-10">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <Link to="/" className="inline-flex items-center font-bold text-gray-500 hover:text-white transition-colors group mb-8">
                        <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
                        Back to Portfolio
                    </Link>

                    <p className="text-teal-400 font-bold mb-4 uppercase tracking-widest text-sm flex items-center gap-2">
                        <span className="w-8 h-[2px] bg-teal-400"></span>
                        {project.subtitle || "Case Study"}
                    </p>
                    <h1 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tight leading-none mb-6">
                        {project.title}
                    </h1>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="rounded-[2rem] overflow-hidden mb-16 border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl relative group w-full aspect-[16/9]"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none" />
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                </motion.div>

                {/* Metadata Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 pb-16 border-b border-white/10"
                >
                    <div>
                        <h3 className="text-white font-bold text-lg mb-3 tracking-wide">Client Name</h3>
                        <p className="text-gray-400 font-light text-sm">{clientName}</p>
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg mb-3 tracking-wide">Date</h3>
                        <p className="text-gray-400 font-light text-sm">2024</p>
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg mb-3 tracking-wide">Categories</h3>
                        <p className="text-gray-400 font-light text-sm">{project.tags.slice(0, 2).join(" & ")}</p>
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg mb-3 tracking-wide">Services</h3>
                        <div className="flex flex-col gap-3">
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-pink-400 font-bold text-sm flex items-center gap-1 transition-colors group">
                                Live Demo <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-pink-400 font-bold text-sm flex items-center gap-1 transition-colors group">
                                Source Code <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Content Section (2 Columns) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-12 lg:gap-24"
                >
                    {/* Left Column: Heading */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tight text-white sticky top-32">
                            About
                        </h2>
                    </div>

                    {/* Right Column: Paragraphs */}
                    <div className="prose prose-invert max-w-none prose-p:text-gray-400 prose-p:font-light prose-p:leading-relaxed prose-p:text-lg prose-headings:font-display prose-headings:font-black prose-headings:uppercase prose-headings:text-2xl prose-headings:text-white prose-li:text-gray-400 prose-li:font-light prose-a:text-teal-400 hover:prose-a:text-pink-400 prose-a:font-bold prose-a:transition-colors">
                        {project.content.split('\n').map((line, index) => {
                            if (line.startsWith('## ')) {
                                // Skip "## Overview" since we already have "About" as the main section header on the left
                                if (line.includes('Overview')) return null;
                                return <h3 key={index} className="mt-12 mb-6"><span className="text-transparent" style={{ WebkitTextStroke: '1px #2dd4bf' }}>#</span> {line.replace('## ', '')}</h3>;
                            } else if (line.startsWith('- ')) {
                                const parts = line.replace('- ', '').split('**');
                                if (parts.length > 2) {
                                    return (
                                        <li key={index} className="mb-4 flex items-start gap-3">
                                            <span className="text-teal-400 mt-1">▹</span>
                                            <span><span className="font-bold text-white">{parts[1]}</span>{parts[2]}</span>
                                        </li>
                                    );
                                }
                                return <li key={index} className="mb-4 flex items-start gap-3"><span className="text-teal-400 mt-1">▹</span><span>{line.replace('- ', '')}</span></li>;
                            } else if (line.trim() !== '') {
                                return <p key={index} className="mb-8">{line}</p>;
                            }
                            return null;
                        })}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectDetail;
