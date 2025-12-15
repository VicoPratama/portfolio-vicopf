import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, ArrowLeft, Award, Code, Palette, Terminal, Globe, Users, Cpu, Download, MapPin, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import SpotlightCard from '../components/SpotlightCard';

import { education, experience, organizationalExperience, certificates, skills } from '../constants/resumeData';

const Resume = () => {

    return (
        <div className="pt-24 min-h-screen bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative">

                    {/* Sidebar / Header Area */}
                    <div className="lg:col-span-4">
                        <div className="lg:sticky lg:top-32 lg:h-[calc(100vh-8rem)] flex flex-col">
                            <div className="mb-12">
                                <Link to="/">
                                    <button className="flex items-center text-gray-400 hover:text-white transition-colors mb-8 group font-medium">
                                        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                                        Back to Home
                                    </button>
                                </Link>

                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
                                >
                                    My <br /><span className="text-accent-blue">Journey</span>
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-gray-400 text-lg mb-8 leading-relaxed"
                                >
                                    A comprehensive timeline of my professional experience, education, and technical expertise.
                                </motion.p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button
                                        href="https://drive.google.com/file/d/1y62sPKHQpeD9qRmlaDFXRlqHegDl07uv/view?usp=drive_link"
                                        target="_blank"
                                        variant="outline"
                                        className="w-full md:w-auto border-white text-white hover:bg-white hover:text-gray-900 transition-all"
                                    >
                                        <Download className="w-4 h-4 mr-2" />
                                        Download Resume
                                    </Button>

                                    <Button
                                        href="https://www.linkedin.com/in/vico-pratama-fajareno-424a401a4/"
                                        target="_blank"
                                        variant="outline"
                                        className="w-full md:w-auto border-white text-white hover:border-white hover:text-black hover:bg-white transition-all"
                                    >
                                        <Linkedin className="w-4 h-4 mr-2" />
                                        LinkedIn
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:col-span-8 space-y-24 pb-24">

                        {/* Experience Section (Timeline) */}
                        <section>
                            <div className="flex items-center gap-4 mb-12 border-b border-gray-800 pb-4 sticky top-24 bg-gray-950/90 backdrop-blur-md z-20 py-4 -mx-4 px-4 md:static md:bg-transparent md:p-0 md:border-b md:pb-4">
                                <Briefcase className="text-white w-8 h-8" />
                                <h2 className="text-3xl font-bold text-white">Experience</h2>
                            </div>

                            <div className="relative border-l-2 border-gray-800 ml-3 md:ml-6 space-y-16">
                                {experience.map((job, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="relative pl-8 md:pl-12"
                                    >
                                        {/* Timeline Dot */}
                                        <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-gray-950 border-2 border-accent-blue shadow-[0_0_0_4px_rgba(3,7,18,1)]" />

                                        <div className="group">
                                            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                                                <h3 className="text-2xl font-bold text-white group-hover:text-accent-blue transition-colors">{job.role}</h3>
                                                <span className="text-sm font-mono text-gray-400 bg-gray-800 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit whitespace-nowrap">{job.year}</span>
                                            </div>
                                            <div className="mb-6">
                                                <h4 className="text-lg font-bold text-gray-300">{job.company}</h4>
                                                <div className="flex items-center text-sm text-gray-400 mt-1 font-medium">
                                                    <MapPin className="w-4 h-4 mr-1.5 text-accent-blue" />
                                                    {job.location}
                                                </div>
                                            </div>
                                            <p className="text-gray-300 leading-relaxed whitespace-pre-line bg-gray-900/30 p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                                                {job.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        {/* Organizational Experience Section (Timeline) */}
                        <section>
                            <div className="flex items-center gap-4 mb-12 border-b border-gray-800 pb-4 sticky top-24 bg-gray-950/90 backdrop-blur-md z-20 py-4 -mx-4 px-4 md:static md:bg-transparent md:p-0 md:border-b md:pb-4">
                                <Users className="text-white w-8 h-8" />
                                <h2 className="text-3xl font-bold text-white">Organizational Experience</h2>
                            </div>

                            <div className="relative border-l-2 border-gray-800 ml-3 md:ml-6 space-y-16">
                                {organizationalExperience.map((org, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="relative pl-8 md:pl-12"
                                    >
                                        {/* Timeline Dot */}
                                        <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-gray-950 border-2 border-accent-blue shadow-[0_0_0_4px_rgba(3,7,18,1)]" />

                                        <div className="group">
                                            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
                                                <h3 className="text-2xl font-bold text-white group-hover:text-accent-blue transition-colors">{org.role}</h3>
                                                <span className="text-sm font-mono text-gray-400 bg-gray-800 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">{org.year}</span>
                                            </div>
                                            <h4 className="text-lg font-medium text-gray-300 mb-6">{org.organization}</h4>
                                            <p className="text-gray-300 leading-relaxed whitespace-pre-line bg-gray-900/30 p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                                                {org.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        {/* Education Section (Timeline) */}
                        <section>
                            <div className="flex items-center gap-4 mb-12 border-b border-gray-800 pb-4 sticky top-24 bg-gray-950/90 backdrop-blur-md z-20 py-4 -mx-4 px-4 md:static md:bg-transparent md:p-0 md:border-b md:pb-4">
                                <GraduationCap className="text-white w-8 h-8" />
                                <h2 className="text-3xl font-bold text-white">Education</h2>
                            </div>

                            <div className="relative border-l-2 border-gray-800 ml-3 md:ml-6 space-y-16">
                                {education.map((edu, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="relative pl-8 md:pl-12"
                                    >
                                        {/* Timeline Dot */}
                                        <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-gray-950 border-2 border-accent-blue shadow-[0_0_0_4px_rgba(3,7,18,1)]" />

                                        <div className="group">
                                            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
                                                <h3 className="text-2xl font-bold text-white group-hover:text-accent-blue transition-colors">{edu.degree}</h3>
                                                <span className="text-sm font-mono text-gray-400 bg-gray-800 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">{edu.year}</span>
                                            </div>
                                            <h4 className="text-lg font-medium text-gray-300 mb-6">{edu.school}</h4>
                                            <p className="text-gray-300 leading-relaxed whitespace-pre-line bg-gray-900/30 p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                                                {edu.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        {/* Certificates (Spotlight Grid) */}
                        <section>
                            <div className="flex items-center gap-4 mb-12 border-b border-gray-800 pb-4">
                                <Award className="text-white w-8 h-8" />
                                <h2 className="text-3xl font-bold text-white">Certificates</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {certificates.map((cert, index) => (
                                    <SpotlightCard
                                        key={index}
                                        className="bg-gray-900/40 backdrop-blur-xl border border-white/5 rounded-[2rem] hover:border-white/20 transition-all duration-300 group h-full"
                                    >
                                        <div className="p-8 h-full flex flex-col">
                                            <div className="flex justify-between items-start mb-4">
                                                <span className="text-xs font-mono text-accent-blue bg-accent-blue/10 px-3 py-1 rounded-full">{cert.year || "N/A"}</span>
                                                <div className="w-2 h-2 rounded-full bg-gray-700 group-hover:bg-accent-blue transition-colors" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-accent-blue transition-colors">{cert.title}</h3>
                                            <h4 className="text-sm font-medium text-gray-400 mb-4">{cert.issuer}</h4>
                                            {cert.description && <p className="text-sm text-gray-500 font-light border-t border-white/5 pt-4 mt-auto">{cert.description}</p>}
                                        </div>
                                    </SpotlightCard>
                                ))}
                            </div>
                        </section>

                        {/* Skills Section (Spotlight Bento Grid) */}
                        <section>
                            <div className="flex items-center gap-4 mb-12 border-b border-gray-800 pb-4">
                                <Cpu className="text-white w-8 h-8" />
                                <h2 className="text-3xl font-bold text-white">Expertise</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Programming (Spans 2 columns) */}
                                <SpotlightCard className="md:col-span-2 bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-xl">
                                    <div className="p-8">
                                        <div className="flex items-center gap-3 mb-8">
                                            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                                                <Code className="text-white w-6 h-6" />
                                            </div>
                                            <h3 className="text-xl font-bold font-display tracking-tight text-white">Programming</h3>
                                        </div>
                                        <div className="space-y-8">
                                            <div>
                                                <h4 className="text-gray-400 text-xs uppercase tracking-widest mb-3 font-semibold">Frontend</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {skills.programming.frontend.map(skill => (
                                                        <span key={skill} className="px-3 py-1.5 bg-white/5 rounded-lg text-sm text-gray-200 hover:bg-white/10 border border-white/5 transition-colors cursor-default">{skill}</span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="text-gray-400 text-xs uppercase tracking-widest mb-3 font-semibold">Backend</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {skills.programming.backend.map(skill => (
                                                        <span key={skill} className="px-3 py-1.5 bg-white/5 rounded-lg text-sm text-gray-200 hover:bg-white/10 border border-white/5 transition-colors cursor-default">{skill}</span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="text-gray-400 text-xs uppercase tracking-widest mb-3 font-semibold">Concepts & Tools</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {skills.programming.concepts.concat(skills.programming.other).map(skill => (
                                                        <span key={skill} className="px-3 py-1.5 bg-white/5 rounded-lg text-sm text-gray-200 hover:bg-white/10 border border-white/5 transition-colors cursor-default">{skill}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SpotlightCard>

                                {/* Design */}
                                <SpotlightCard className="bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-xl">
                                    <div className="p-8 h-full">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                                                <Palette className="text-white w-6 h-6" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white font-display tracking-tight">Design</h3>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {skills.design.map(skill => (
                                                <span key={skill} className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg text-sm text-gray-300 hover:bg-white/10 transition-colors cursor-default">{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                </SpotlightCard>

                                {/* Soft Skills */}
                                <SpotlightCard className="bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-xl">
                                    <div className="p-8 h-full">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                                                <Users className="text-white w-6 h-6" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white font-display tracking-tight">Soft Skills</h3>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {skills.softSkills.map(skill => (
                                                <span key={skill} className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg text-sm text-gray-300 hover:bg-white/10 transition-colors cursor-default">{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                </SpotlightCard>

                                {/* Languages & Tools (Spans 2 columns) */}
                                <SpotlightCard className="md:col-span-2 bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-xl">
                                    <div className="p-8">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div>
                                                <div className="flex items-center gap-3 mb-6">
                                                    <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                                                        <Terminal className="text-white w-6 h-6" />
                                                    </div>
                                                    <h3 className="text-xl font-bold text-white font-display tracking-tight">Tools</h3>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {skills.tools.map(skill => (
                                                        <span key={skill} className="px-3 py-1.5 bg-white/5 rounded-lg text-sm text-gray-300 hover:bg-white/10 border border-white/5 transition-colors cursor-default">{skill}</span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-3 mb-6">
                                                    <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                                                        <Globe className="text-white w-6 h-6" />
                                                    </div>
                                                    <h3 className="text-xl font-bold text-white font-display tracking-tight">Languages</h3>
                                                </div>
                                                <div className="space-y-3">
                                                    {skills.languages.map(lang => (
                                                        <div key={lang.name} className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/5">
                                                            <span className="font-medium text-white">{lang.name}</span>
                                                            <span className="text-sm text-gray-400 font-light">{lang.level}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SpotlightCard>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
