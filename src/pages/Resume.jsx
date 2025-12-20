import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, ArrowLeft, Award, Code, Globe, Users, Cpu, Download, MapPin, Linkedin, Monitor, Mouse, Keyboard, Laptop, Music, HardDrive, Zap, Palette, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import SpotlightCard from '../components/SpotlightCard';

import { education, experience, organizationalExperience, certificates, skills, gear } from '../constants/resumeData';

const Resume = () => {
    // return <div>Resume Page Debug - All Imports Commented</div>; 


    return (
        <div className="pt-24 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative">

                    {/* Sidebar / Header Area */}
                    <div className="lg:col-span-4">
                        <div className="lg:sticky lg:top-32 lg:h-[calc(100vh-8rem)] flex flex-col">
                            <div className="mb-12">
                                <Link to="/">
                                    <button className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-8 group font-medium">
                                        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                                        Back to Home
                                    </button>
                                </Link>

                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white leading-tight"
                                >
                                    My <br /><span className="text-accent-blue">Journey</span>
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed"
                                >
                                    A comprehensive timeline of my professional experience, education, and technical expertise.
                                </motion.p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button
                                        href="https://drive.google.com/file/d/1y62sPKHQpeD9qRmlaDFXRlqHegDl07uv/view?usp=drive_link"
                                        target="_blank"
                                        variant="outline"
                                        className="w-full md:w-auto border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-all"
                                    >
                                        <Download className="w-4 h-4 mr-2" />
                                        Download Resume
                                    </Button>

                                    <Button
                                        href="https://www.linkedin.com/in/vico-pratama-fajareno-424a401a4/"
                                        target="_blank"
                                        variant="outline"
                                        className="w-full md:w-auto border-gray-900 dark:border-white text-gray-900 dark:text-white hover:border-gray-900 dark:hover:border-white hover:text-white dark:hover:text-gray-900 hover:bg-gray-900 dark:hover:bg-white transition-all"
                                    >
                                        <Linkedin className="w-4 h-4 mr-2" />
                                        LinkedIn
                                    </Button>
                                </div>

                                {/* Availability Status */}
                                <div className="mt-8 bg-green-500/10 border border-green-500/20 rounded-2xl p-6 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-20">
                                        <Briefcase className="w-16 h-16 text-green-500 -rotate-12 translate-x-4 -translate-y-4" />
                                    </div>
                                    <h3 className="text-green-600 dark:text-green-400 font-bold text-lg mb-1 flex items-center gap-2">
                                        <span className="relative flex h-3 w-3">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                        </span>
                                        Open for Work
                                    </h3>
                                    <p className="text-green-700/80 dark:text-green-300/80 text-sm font-light">
                                        Ready to collaborate on freelance projects or full-time opportunities.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:col-span-8 space-y-24 pb-24">

                        {/* Experience Section (Timeline) */}
                        <section>
                            <div className="flex items-center gap-4 mb-12 border-b border-gray-200 dark:border-gray-800 pb-4 sticky top-24 bg-white/80 dark:bg-gray-950/90 backdrop-blur-md z-20 py-4 -mx-4 px-4 md:static md:bg-transparent md:p-0 md:border-b md:pb-4 transition-colors">
                                <Briefcase className="text-gray-900 dark:text-white w-8 h-8 transition-colors" />
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors">Experience</h2>
                            </div>

                            <div className="relative ml-3 md:ml-6 space-y-12">
                                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue via-gray-200 dark:via-gray-800 to-transparent transition-colors" />

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
                                        <div className={`absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-white dark:bg-gray-950 border-2 border-accent-blue shadow-[0_0_0_4px_rgba(255,255,255,1)] dark:shadow-[0_0_0_4px_rgba(3,7,18,1)] z-10 ${index === 0 ? 'animate-pulse ring-4 ring-accent-blue/20' : ''} transition-all`} />

                                        <SpotlightCard className="bg-white/50 dark:bg-gray-900/40 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-[2rem] shadow-xl group overflow-hidden transition-all">
                                            <div className="p-8">
                                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                                                    <div>
                                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-accent-blue transition-colors duration-300">{job.role}</h3>
                                                        <h4 className="text-lg font-medium text-gray-600 dark:text-gray-300 mt-1 transition-colors">{job.company}</h4>
                                                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-2 font-medium transition-colors">
                                                            <MapPin className="w-4 h-4 mr-1.5 text-accent-blue" />
                                                            {job.location}
                                                        </div>
                                                    </div>
                                                    <span className="text-sm font-mono text-accent-blue bg-blue-50 dark:bg-accent-blue/10 px-4 py-1.5 rounded-full border border-blue-100 dark:border-accent-blue/20 w-fit whitespace-nowrap transition-colors">
                                                        {job.year}
                                                    </span>
                                                </div>

                                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line mb-8 font-light transition-colors">
                                                    {job.description}
                                                </p>

                                                {/* Tech Stack Pills */}
                                                {job.tech && (
                                                    <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-gray-100 dark:border-white/5 transition-colors">
                                                        {job.tech.map((tech, i) => (
                                                            <span
                                                                key={i}
                                                                className="px-3 py-1 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-200 dark:border-white/5 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300 transition-colors cursor-default"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </SpotlightCard>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        {/* Organizational Experience Section (Timeline) */}
                        <section>
                            <div className="flex items-center gap-4 mb-12 border-b border-gray-200 dark:border-gray-800 pb-4 sticky top-24 bg-white/80 dark:bg-gray-950/90 backdrop-blur-md z-20 py-4 -mx-4 px-4 md:static md:bg-transparent md:p-0 md:border-b md:pb-4 transition-colors">
                                <Users className="text-gray-900 dark:text-white w-8 h-8 transition-colors" />
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors">Organizational Experience</h2>
                            </div>

                            <div className="relative ml-3 md:ml-6 space-y-12">
                                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue via-gray-200 dark:via-gray-800 to-transparent transition-colors" />

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
                                        <div className={`absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-white dark:bg-gray-950 border-2 border-accent-blue shadow-[0_0_0_4px_rgba(255,255,255,1)] dark:shadow-[0_0_0_4px_rgba(3,7,18,1)] z-10 ${index === 0 ? 'animate-pulse ring-4 ring-accent-blue/20' : ''} transition-all`} />

                                        <SpotlightCard className="bg-white/50 dark:bg-gray-900/40 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-[2rem] shadow-xl group overflow-hidden transition-all">
                                            <div className="p-8">
                                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                                                    <div>
                                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-accent-blue transition-colors duration-300">{org.role}</h3>
                                                        <h4 className="text-lg font-medium text-gray-600 dark:text-gray-300 mt-1 transition-colors">{org.organization}</h4>
                                                    </div>
                                                    <span className="text-sm font-mono text-accent-blue bg-blue-50 dark:bg-accent-blue/10 px-4 py-1.5 rounded-full border border-blue-100 dark:border-accent-blue/20 w-fit whitespace-nowrap transition-colors">
                                                        {org.year}
                                                    </span>
                                                </div>

                                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line font-light transition-colors">
                                                    {org.description}
                                                </p>
                                            </div>
                                        </SpotlightCard>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        {/* Education Section (Timeline) */}
                        <section>
                            <div className="flex items-center gap-4 mb-12 border-b border-gray-200 dark:border-gray-800 pb-4 sticky top-24 bg-white/80 dark:bg-gray-950/90 backdrop-blur-md z-20 py-4 -mx-4 px-4 md:static md:bg-transparent md:p-0 md:border-b md:pb-4 transition-colors">
                                <GraduationCap className="text-gray-900 dark:text-white w-8 h-8 transition-colors" />
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors">Education</h2>
                            </div>

                            <div className="relative ml-3 md:ml-6 space-y-12">
                                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue via-gray-200 dark:via-gray-800 to-transparent transition-colors" />

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
                                        <div className={`absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-white dark:bg-gray-950 border-2 border-accent-blue shadow-[0_0_0_4px_rgba(255,255,255,1)] dark:shadow-[0_0_0_4px_rgba(3,7,18,1)] z-10 ${index === 0 ? 'animate-pulse ring-4 ring-accent-blue/20' : ''} transition-all`} />

                                        <SpotlightCard className="bg-white/50 dark:bg-gray-900/40 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-[2rem] shadow-xl group overflow-hidden transition-all">
                                            <div className="p-8">
                                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                                                    <div>
                                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-accent-blue transition-colors duration-300">{edu.degree}</h3>
                                                        <h4 className="text-lg font-medium text-gray-600 dark:text-gray-300 mt-1 transition-colors">{edu.school}</h4>
                                                    </div>
                                                    <span className="text-sm font-mono text-accent-blue bg-blue-50 dark:bg-accent-blue/10 px-4 py-1.5 rounded-full border border-blue-100 dark:border-accent-blue/20 w-fit whitespace-nowrap transition-colors">
                                                        {edu.year}
                                                    </span>
                                                </div>

                                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line font-light transition-colors">
                                                    {edu.description}
                                                </p>
                                            </div>
                                        </SpotlightCard>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        {/* Certificates (Spotlight Grid) */}
                        <section>
                            <div className="flex items-center gap-4 mb-12 border-b border-gray-200 dark:border-gray-800 pb-4 transition-colors">
                                <Award className="text-gray-900 dark:text-white w-8 h-8 transition-colors" />
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors">Certificates</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {certificates.map((cert, index) => (
                                    <SpotlightCard
                                        key={index}
                                        className="bg-white/50 dark:bg-gray-900/40 backdrop-blur-xl border border-gray-200 dark:border-white/5 rounded-[2rem] hover:border-accent-blue/50 dark:hover:border-white/20 transition-all duration-300 group h-full"
                                    >
                                        <div className="p-8 h-full flex flex-col">
                                            <div className="flex justify-between items-start mb-4">
                                                <span className="text-xs font-mono text-accent-blue bg-blue-50 dark:bg-accent-blue/10 px-3 py-1 rounded-full border border-blue-100 dark:border-transparent transition-colors">{cert.year || "N/A"}</span>
                                                <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700 group-hover:bg-accent-blue transition-colors" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight group-hover:text-accent-blue transition-colors">{cert.title}</h3>
                                            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4 transition-colors">{cert.issuer}</h4>
                                            {cert.description && <p className="text-sm text-gray-600 dark:text-gray-500 font-light border-t border-gray-200 dark:border-white/5 pt-4 mt-auto transition-colors">{cert.description}</p>}
                                        </div>
                                    </SpotlightCard>
                                ))}
                            </div>
                        </section>

                        {/* Skills Section (Spotlight Bento Grid) */}
                        <section>
                            <div className="flex items-center gap-4 mb-12 border-b border-gray-200 dark:border-gray-800 pb-4 transition-colors">
                                <Cpu className="text-gray-900 dark:text-white w-8 h-8 transition-colors" />
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors">Hard Skills</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Frontend */}
                                <SpotlightCard className="bg-white/50 dark:bg-gray-900/40 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-[2rem] shadow-xl transition-all h-full">
                                    <div className="p-8 h-full">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-3 bg-gray-100 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/5 transition-colors">
                                                <Code className="text-gray-900 dark:text-white w-6 h-6 transition-colors" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white font-display tracking-tight transition-colors">Frontend Development</h3>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {skills.programming.frontend.map(skill => (
                                                <span key={skill} className="px-3 py-1.5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors cursor-default">{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                </SpotlightCard>

                                {/* Backend & Other */}
                                <SpotlightCard className="bg-white/50 dark:bg-gray-900/40 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-[2rem] shadow-xl transition-all h-full">
                                    <div className="p-8 h-full">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-3 bg-gray-100 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/5 transition-colors">
                                                <Terminal className="text-gray-900 dark:text-white w-6 h-6 transition-colors" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white font-display tracking-tight transition-colors">Backend & Languages</h3>
                                        </div>
                                        <div className="flex flex-col gap-6">
                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider">Backend</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {skills.programming.backend.map(skill => (
                                                        <span key={skill} className="px-3 py-1.5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors cursor-default">{skill}</span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider">Other</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {skills.programming.other.map(skill => (
                                                        <span key={skill} className="px-3 py-1.5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors cursor-default">{skill}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SpotlightCard>

                                {/* Design */}
                                <SpotlightCard className="bg-white/50 dark:bg-gray-900/40 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-[2rem] shadow-xl transition-all h-full">
                                    <div className="p-8 h-full">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-3 bg-gray-100 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/5 transition-colors">
                                                <Palette className="text-gray-900 dark:text-white w-6 h-6 transition-colors" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white font-display tracking-tight transition-colors">Design</h3>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {skills.design.map(skill => (
                                                <span key={skill} className="px-3 py-1.5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors cursor-default">{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                </SpotlightCard>

                                {/* Tools */}
                                <SpotlightCard className="bg-white/50 dark:bg-gray-900/40 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-[2rem] shadow-xl transition-all h-full">
                                    <div className="p-8 h-full">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-3 bg-gray-100 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/5 transition-colors">
                                                <HardDrive className="text-gray-900 dark:text-white w-6 h-6 transition-colors" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white font-display tracking-tight transition-colors">Tools</h3>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {skills.tools.map(skill => (
                                                <span key={skill} className="px-3 py-1.5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors cursor-default">{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                </SpotlightCard>

                                {/* Concepts */}
                                <SpotlightCard className="bg-white/50 dark:bg-gray-900/40 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-[2rem] shadow-xl transition-all h-full">
                                    <div className="p-8 h-full">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-3 bg-gray-100 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/5 transition-colors">
                                                <Cpu className="text-gray-900 dark:text-white w-6 h-6 transition-colors" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white font-display tracking-tight transition-colors">Concepts</h3>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {skills.programming.concepts.map(skill => (
                                                <span key={skill} className="px-3 py-1.5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors cursor-default">{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                </SpotlightCard>

                                {/* Soft Skills */}
                                <SpotlightCard className="bg-white/50 dark:bg-gray-900/40 backdrop-blur-xl border border-gray-200 dark:border-white/5 rounded-[2rem] shadow-xl transition-all h-full">
                                    <div className="p-8 h-full">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-3 bg-gray-100 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/5 transition-colors">
                                                <Users className="text-gray-900 dark:text-white w-6 h-6 transition-colors" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white font-display tracking-tight transition-colors">Soft Skills</h3>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {skills.softSkills.map(skill => (
                                                <span key={skill} className="px-3 py-1.5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors cursor-default">{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                </SpotlightCard>
                            </div>
                        </section>

                        {/* Languages Section */}
                        <section>
                            <div className="flex items-center gap-4 mb-12 border-b border-gray-200 dark:border-gray-800 pb-4 sticky top-24 bg-white/80 dark:bg-gray-950/90 backdrop-blur-md z-20 md:static md:bg-transparent md:p-0 md:border-b md:pb-4 transition-colors">
                                <Globe className="text-gray-900 dark:text-white w-8 h-8 transition-colors" />
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors">Languages</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {skills.languages.map((lang, index) => (
                                    <SpotlightCard key={index} className="bg-white/50 dark:bg-gray-900/40 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-[2rem] shadow-xl transition-all">
                                        <div className="p-8 flex items-start justify-between">
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">{lang.name}</h3>
                                                <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors">{lang.level}</p>
                                                {lang.score && <p className="text-accent-blue text-xs font-mono mt-2 bg-blue-50 dark:bg-accent-blue/10 px-2 py-0.5 rounded-full border border-blue-100 dark:border-transparent w-fit transition-colors">{lang.score}</p>}
                                            </div>
                                            <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center border border-gray-200 dark:border-white/5 text-2xl transition-colors">
                                                {lang.name === "English" ? "🇬🇧" : "🇮🇩"}
                                            </div>
                                        </div>
                                    </SpotlightCard>
                                ))}
                            </div>
                        </section>

                        {/* The Setup Section */}
                        <section>
                            <div className="flex items-center gap-4 mb-12 border-b border-gray-200 dark:border-gray-800 pb-4 sticky top-24 bg-white/80 dark:bg-gray-950/90 backdrop-blur-md z-20 md:static md:bg-transparent md:p-0 md:border-b md:pb-4 transition-colors">
                                <Monitor className="text-gray-900 dark:text-white w-8 h-8 transition-colors" />
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors">The Setup</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {gear.map((category, index) => (
                                    <div key={index} className="space-y-6">
                                        <h3 className="text-xl font-bold text-gray-400 dark:text-white/50 uppercase tracking-widest pl-2 border-l-2 border-accent-blue transition-colors">{category.category}</h3>
                                        <div className="space-y-4">
                                            {category.items.map((item, i) => (
                                                <SpotlightCard key={i} className="bg-white/50 dark:bg-gray-900/40 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl group transition-all">
                                                    <div className="p-4 flex items-center gap-4">
                                                        <div className="p-2.5 bg-gray-100 dark:bg-white/5 rounded-xl text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                                                            {item.icon === "Laptop" && <Laptop size={20} />}
                                                            {item.icon === "Monitor" && <Monitor size={20} />}
                                                            {item.icon === "Keyboard" && <Keyboard size={20} />}
                                                            {item.icon === "Mouse" && <Mouse size={20} />}
                                                            {item.icon === "Code" && <Code size={20} />}
                                                            {item.icon === "Terminal" && <Terminal size={20} />}
                                                            {item.icon === "Figma" && <Palette size={20} />}
                                                            {item.icon === "Music" && <Music size={20} />}
                                                            {/* New Hardware Icons via user request */}
                                                            {item.icon === "Cpu" && <Cpu size={20} />}
                                                            {item.icon === "Gpu" && <Zap size={20} />}
                                                            {item.icon === "Storage" && <HardDrive size={20} />}
                                                            {item.icon === "Memory" && <Cpu size={20} className="rotate-90" />}
                                                        </div>
                                                        <div>
                                                            <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider font-semibold mb-0.5 transition-colors">{item.name}</p>
                                                            <p className="text-gray-900 dark:text-white font-medium transition-colors">{item.value}</p>
                                                        </div>
                                                    </div>
                                                </SpotlightCard>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
