import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, ArrowLeft, Award, Code, Globe, Users, Cpu, Download, MapPin, Linkedin, Monitor, Mouse, Keyboard, Laptop, Music, HardDrive, Zap, Palette, Terminal, Brain, FileDown } from 'lucide-react';
import { Link } from 'react-router-dom';

import { education, experience, organizationalExperience, certificates, skills, gear } from '../constants/resumeData';

const Resume = () => {
    const handleExportPDF = () => {
        window.print();
    };

    return (
        <div className="pt-32 pb-24 min-h-screen bg-[#f4f4f5] text-zblack relative overflow-hidden">
            {/* Ambient Glows */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-zlime/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-zpurple/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <div id="resume-export-container" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative">

                    {/* Sidebar / Header Area */}
                    <div className="lg:col-span-4">
                        <div className="lg:sticky lg:top-32 lg:h-[calc(100vh-8rem)] print:h-auto print:static flex flex-col">
                            <div className="mb-12 print:hidden">
                                <Link to="/">
                                    <button className="flex items-center text-gray-500 hover:text-zblack transition-colors mb-8 group font-medium">
                                        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                                        Back to Home
                                    </button>
                                </Link>

                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="font-display text-5xl md:text-6xl font-black mb-6 text-zblack leading-tight tracking-tight uppercase"
                                >
                                    My <br /><span className="text-transparent" style={{ WebkitTextStroke: '2px var(--color-zlime)' }}>Journey</span>
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-zblack/70 text-lg mb-8 leading-relaxed font-light"
                                >
                                    A comprehensive timeline of my professional experience, education, and technical expertise.
                                </motion.p>

                                <div className="flex flex-col gap-3 print:hidden">
                                    <button
                                        onClick={handleExportPDF}
                                        className="w-full flex items-center justify-center py-3.5 rounded-full font-bold bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] hover:bg-white/10 backdrop-blur-md border-[3px] border-zblack text-zblack transition-colors shadow-xl"
                                    >
                                        <FileDown className="w-5 h-5 mr-2 text-zpurple" />
                                        Export as PDF
                                    </button>
                                    
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <a
                                            href="https://drive.google.com/file/d/1y62sPKHQpeD9qRmlaDFXRlqHegDl07uv/view?usp=drive_link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full md:w-auto flex flex-1 items-center justify-center py-3.5 rounded-full bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] text-zblack hover:bg-white/10 border-[3px] border-zblack transition-colors font-bold text-sm"
                                        >
                                            <Download className="w-4 h-4 mr-2 text-zlime" />
                                            Download CV
                                        </a>

                                        <a
                                            href="https://www.linkedin.com/in/vico-pratama-fajareno-424a401a4/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full md:w-auto flex flex-1 items-center justify-center py-3.5 rounded-full bg-[#0077b5]/10 text-[#0077b5] border border-[#0077b5]/20 hover:bg-[#0077b5]/20 transition-colors font-bold text-sm"
                                        >
                                            <Linkedin className="w-4 h-4 mr-2" />
                                            LinkedIn
                                        </a>
                                    </div>
                                </div>

                                {/* Availability Status */}
                                <div className="mt-8 bg-zlime/5 border border-zlime/20 backdrop-blur-md rounded-[2rem] p-6 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-10">
                                        <Briefcase className="w-16 h-16 text-zlime -rotate-12 translate-x-4 -translate-y-4" />
                                    </div>
                                    <h3 className="text-zblack font-bold text-lg mb-1 flex items-center gap-2">
                                        <span className="relative flex h-3 w-3">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zlime opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-zlime"></span>
                                        </span>
                                        Open for Work
                                    </h3>
                                    <p className="text-zblack/70 text-sm font-light leading-relaxed">
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
                            <div className="flex items-center gap-4 mb-12 border-b border-zblack pb-4 sticky top-24 bg-[#f4f4f5]/80 backdrop-blur-xl z-20 py-4 -mx-4 px-4 md:static md:bg-transparent md:p-0 md:border-b md:pb-4 transition-colors">
                                <Briefcase className="text-zpurple w-8 h-8 transition-colors" />
                                <h2 className="text-3xl font-black uppercase tracking-tight text-zblack transition-colors">Experience</h2>
                            </div>

                            <div className="relative ml-3 md:ml-6 space-y-12">
                                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-zlime via-white/10 to-transparent" />

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
                                        <div className={`absolute -left-[7px] top-8 w-3.5 h-3.5 rounded-full bg-[#f4f4f5] border-[3px] border-zlime z-10 ${index === 0 ? 'animate-pulse' : ''}`} />

                                        <div className="bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] backdrop-blur-xl border-[3px] border-zblack hover:shadow-[4px_4px_0px_0px_var(--color-zlime)]/50 rounded-[2rem] overflow-hidden transition-all duration-300 group shadow-xl">
                                            <div className="p-8">
                                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                                                    <div>
                                                        <h3 className="text-2xl font-bold text-zblack group-hover:text-zlime transition-colors duration-300 tracking-tight">{job.role}</h3>
                                                        <h4 className="text-lg font-medium text-zblack/70 mt-1">{job.company}</h4>
                                                        <div className="flex items-center text-sm text-gray-500 mt-2 font-medium">
                                                            <MapPin className="w-4 h-4 mr-1.5 text-zpurple" />
                                                            {job.location}
                                                        </div>
                                                    </div>
                                                    <span className="text-sm font-bold text-zblack bg-zlime/10 px-4 py-1.5 rounded-full border border-zlime/20 w-fit whitespace-nowrap">
                                                        {job.year}
                                                    </span>
                                                </div>

                                                <p className="text-zblack/70 leading-relaxed whitespace-pre-line mb-8 font-light text-sm md:text-base">
                                                    {job.description}
                                                </p>

                                                {/* Tech Stack Pills */}
                                                {job.tech && (
                                                    <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-zblack">
                                                        {job.tech.map((tech, i) => (
                                                            <span
                                                                key={i}
                                                                className="px-3 py-1.5 bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] hover:bg-white/10 border-[3px] border-zblack hover:shadow-[4px_4px_0px_0px_var(--color-zlime)]/30 rounded-lg text-xs font-semibold text-zblack/70 hover:text-zlime transition-colors cursor-default"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        {/* Organizational Experience Section (Timeline) */}
                        <section>
                            <div className="flex items-center gap-4 mb-12 border-b border-zblack pb-4 sticky top-24 bg-[#f4f4f5]/80 backdrop-blur-xl z-20 py-4 -mx-4 px-4 md:static md:bg-transparent md:p-0 md:border-b md:pb-4 transition-colors">
                                <Users className="text-zlime w-8 h-8 transition-colors" />
                                <h2 className="text-3xl font-black uppercase tracking-tight text-zblack transition-colors">Organizational Experience</h2>
                            </div>

                            <div className="relative ml-3 md:ml-6 space-y-12">
                                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-zlime via-white/10 to-transparent" />

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
                                        <div className="absolute -left-[7px] top-8 w-3.5 h-3.5 rounded-full bg-[#f4f4f5] border-[3px] border-zlime z-10" />

                                        <div className="bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] backdrop-blur-xl border-[3px] border-zblack hover:shadow-[4px_4px_0px_0px_var(--color-zlime)]/50 rounded-[2rem] overflow-hidden transition-all duration-300 group shadow-xl">
                                            <div className="p-8">
                                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                                                    <div>
                                                        <h3 className="text-2xl font-bold text-zblack group-hover:text-zlime transition-colors duration-300 tracking-tight">{org.role}</h3>
                                                        <h4 className="text-lg font-medium text-zblack/70 mt-1">{org.organization}</h4>
                                                    </div>
                                                    <span className="text-sm font-bold text-zblack bg-zlime/10 px-4 py-1.5 rounded-full border border-zlime/20 w-fit whitespace-nowrap">
                                                        {org.year}
                                                    </span>
                                                </div>

                                                <p className="text-zblack/70 leading-relaxed whitespace-pre-line font-light text-sm md:text-base">
                                                    {org.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        {/* Education Section (Timeline) */}
                        <section>
                            <div className="flex items-center gap-4 mb-12 border-b border-zblack pb-4 sticky top-24 bg-[#f4f4f5]/80 backdrop-blur-xl z-20 py-4 -mx-4 px-4 md:static md:bg-transparent md:p-0 md:border-b md:pb-4 transition-colors">
                                <GraduationCap className="text-zpurple w-8 h-8 transition-colors" />
                                <h2 className="text-3xl font-black uppercase tracking-tight text-zblack transition-colors">Education</h2>
                            </div>

                            <div className="relative ml-3 md:ml-6 space-y-12">
                                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-zlime via-white/10 to-transparent" />

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
                                        <div className="absolute -left-[7px] top-8 w-3.5 h-3.5 rounded-full bg-[#f4f4f5] border-[3px] border-zlime z-10" />

                                        <div className="bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] backdrop-blur-xl border-[3px] border-zblack hover:shadow-[4px_4px_0px_0px_var(--color-zlime)]/50 rounded-[2rem] overflow-hidden transition-all duration-300 group shadow-xl">
                                            <div className="p-8">
                                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                                                    <div>
                                                        <h3 className="text-2xl font-bold text-zblack group-hover:text-zlime transition-colors duration-300 tracking-tight">{edu.degree}</h3>
                                                        <h4 className="text-lg font-medium text-zblack/70 mt-1">{edu.school}</h4>
                                                    </div>
                                                    <span className="text-sm font-bold text-zblack bg-zlime/10 px-4 py-1.5 rounded-full border border-zlime/20 w-fit whitespace-nowrap">
                                                        {edu.year}
                                                    </span>
                                                </div>

                                                <p className="text-zblack/70 leading-relaxed whitespace-pre-line font-light text-sm md:text-base">
                                                    {edu.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        {/* Certificates (Grid) */}
                        <section>
                            <div className="flex items-center gap-4 mb-12 border-b border-zblack pb-4 transition-colors">
                                <Award className="text-zlime w-8 h-8 transition-colors" />
                                <h2 className="text-3xl font-black uppercase tracking-tight text-zblack transition-colors">Certificates</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {certificates.map((cert, index) => (
                                    <div
                                        key={index}
                                        className="bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] backdrop-blur-xl border-[3px] border-zblack rounded-[2rem] hover:shadow-[4px_4px_0px_0px_var(--color-zlime)]/50 transition-all duration-300 group h-full shadow-xl"
                                    >
                                        <div className="p-8 h-full flex flex-col">
                                            <div className="flex justify-between items-start mb-4">
                                                <span className="text-xs font-bold text-zblack bg-zlime/10 px-3 py-1.5 rounded-full border border-zlime/20 transition-colors">{cert.year || "N/A"}</span>
                                                <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-zlime transition-colors" />
                                            </div>
                                            <h3 className="text-xl font-bold text-zblack mb-2 leading-tight group-hover:text-zlime transition-colors tracking-tight">{cert.title}</h3>
                                            <h4 className="text-sm font-medium text-zblack/70 mb-4 transition-colors">{cert.issuer}</h4>
                                            {cert.description && <p className="text-sm text-gray-500 font-light border-t border-zblack pt-4 mt-auto transition-colors">{cert.description}</p>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Skills Section (Bento Grid) */}
                        <section>
                            <div className="flex items-center gap-4 mb-12 border-b border-zblack pb-4 transition-colors">
                                <Cpu className="text-zpurple w-8 h-8 transition-colors" />
                                <h2 className="text-3xl font-black uppercase tracking-tight text-zblack transition-colors">Hard Skills</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Frontend */}
                                <div className="bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] backdrop-blur-xl border-[3px] border-zblack hover:shadow-[4px_4px_0px_0px_var(--color-zlime)]/50 rounded-[2rem] transition-all h-full shadow-xl">
                                    <div className="p-8 h-full">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-3 bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] rounded-xl border-[3px] border-zblack text-zlime">
                                                <Code className="w-6 h-6" />
                                            </div>
                                            <h3 className="text-xl font-bold text-zblack font-display tracking-tight">Frontend Development</h3>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {skills.programming.frontend.map(skill => (
                                                <span key={skill} className="px-3 py-1.5 bg-[#f4f4f5] border-[3px] border-zblack rounded-lg text-sm text-zblack/70 hover:shadow-[4px_4px_0px_0px_var(--color-zlime)] hover:text-zlime transition-colors cursor-default">{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Backend & Other */}
                                <div className="bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] backdrop-blur-xl border-[3px] border-zblack hover:shadow-[4px_4px_0px_0px_var(--color-zpurple)]/50 rounded-[2rem] transition-all h-full shadow-xl">
                                    <div className="p-8 h-full">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-3 bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] rounded-xl border-[3px] border-zblack text-zpurple">
                                                <Terminal className="w-6 h-6" />
                                            </div>
                                            <h3 className="text-xl font-bold text-zblack font-display tracking-tight">Backend & Languages</h3>
                                        </div>
                                        <div className="flex flex-col gap-6">
                                            <div>
                                                <h4 className="text-xs font-bold text-gray-500 mb-3 uppercase tracking-wider">Backend</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {skills.programming.backend.map(skill => (
                                                        <span key={skill} className="px-3 py-1.5 bg-[#f4f4f5] border-[3px] border-zblack rounded-lg text-sm text-zblack/70 hover:shadow-[4px_4px_0px_0px_var(--color-zpurple)] hover:text-zpurple transition-colors cursor-default">{skill}</span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="text-xs font-bold text-gray-500 mb-3 uppercase tracking-wider">Other</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {skills.programming.other.map(skill => (
                                                        <span key={skill} className="px-3 py-1.5 bg-[#f4f4f5] border-[3px] border-zblack rounded-lg text-sm text-zblack/70 hover:shadow-[4px_4px_0px_0px_var(--color-zpurple)] hover:text-zpurple transition-colors cursor-default">{skill}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Design */}
                                <div className="bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] backdrop-blur-xl border-[3px] border-zblack hover:shadow-[4px_4px_0px_0px_var(--color-zlime)]/50 rounded-[2rem] transition-all h-full shadow-xl">
                                    <div className="p-8 h-full">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-3 bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] rounded-xl border-[3px] border-zblack text-zlime">
                                                <Palette className="w-6 h-6" />
                                            </div>
                                            <h3 className="text-xl font-bold text-zblack font-display tracking-tight">Design</h3>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {skills.design.map(skill => (
                                                <span key={skill} className="px-3 py-1.5 bg-[#f4f4f5] border-[3px] border-zblack rounded-lg text-sm text-zblack/70 hover:shadow-[4px_4px_0px_0px_var(--color-zlime)] hover:text-zlime transition-colors cursor-default">{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Tools */}
                                <div className="bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] backdrop-blur-xl border-[3px] border-zblack hover:shadow-[4px_4px_0px_0px_var(--color-zpurple)]/50 rounded-[2rem] transition-all h-full shadow-xl">
                                    <div className="p-8 h-full">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-3 bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] rounded-xl border-[3px] border-zblack text-zpurple">
                                                <HardDrive className="w-6 h-6" />
                                            </div>
                                            <h3 className="text-xl font-bold text-zblack font-display tracking-tight">Tools</h3>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {skills.tools.map(skill => (
                                                <span key={skill} className="px-3 py-1.5 bg-[#f4f4f5] border-[3px] border-zblack rounded-lg text-sm text-zblack/70 hover:shadow-[4px_4px_0px_0px_var(--color-zpurple)] hover:text-zpurple transition-colors cursor-default">{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Concepts */}
                                <div className="bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] backdrop-blur-xl border-[3px] border-zblack hover:shadow-[4px_4px_0px_0px_var(--color-zlime)]/50 rounded-[2rem] transition-all h-full shadow-xl">
                                    <div className="p-8 h-full">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-3 bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] rounded-xl border-[3px] border-zblack text-zlime">
                                                <Cpu className="w-6 h-6" />
                                            </div>
                                            <h3 className="text-xl font-bold text-zblack font-display tracking-tight">Concepts</h3>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {skills.programming.concepts.map(skill => (
                                                <span key={skill} className="px-3 py-1.5 bg-[#f4f4f5] border-[3px] border-zblack rounded-lg text-sm text-zblack/70 hover:shadow-[4px_4px_0px_0px_var(--color-zlime)] hover:text-zlime transition-colors cursor-default">{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Soft Skills */}
                                <div className="bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] backdrop-blur-xl border-[3px] border-zblack hover:shadow-[4px_4px_0px_0px_var(--color-zpurple)]/50 rounded-[2rem] transition-all h-full shadow-xl">
                                    <div className="p-8 h-full">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-3 bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] rounded-xl border-[3px] border-zblack text-zpurple">
                                                <Users className="w-6 h-6" />
                                            </div>
                                            <h3 className="text-xl font-bold text-zblack font-display tracking-tight">Soft Skills</h3>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {skills.softSkills.map(skill => (
                                                <span key={skill} className="px-3 py-1.5 bg-[#f4f4f5] border-[3px] border-zblack rounded-lg text-sm text-zblack/70 hover:shadow-[4px_4px_0px_0px_var(--color-zpurple)] hover:text-zpurple transition-colors cursor-default">{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Languages Section */}
                        <section>
                            <div className="flex items-center gap-4 mb-12 border-b border-zblack pb-4 sticky top-24 bg-[#f4f4f5]/80 backdrop-blur-xl z-20 md:static md:bg-transparent md:p-0 md:border-b md:pb-4 transition-colors">
                                <Globe className="text-zlime w-8 h-8 transition-colors" />
                                <h2 className="text-3xl font-black uppercase tracking-tight text-zblack transition-colors">Languages</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {skills.languages.map((lang, index) => (
                                    <div key={index} className="bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] backdrop-blur-xl border-[3px] border-zblack hover:shadow-[4px_4px_0px_0px_var(--color-zlime)]/50 rounded-[2rem] transition-all shadow-xl">
                                        <div className="p-8 flex items-start justify-between">
                                            <div>
                                                <h3 className="text-xl font-bold text-zblack mb-2 tracking-tight">{lang.name}</h3>
                                                <p className="text-zblack/70 text-sm font-light">{lang.level}</p>
                                                {lang.score && <p className="text-zlime text-xs font-bold mt-2 bg-zlime/10 px-3 py-1 rounded-full border border-zlime/20 w-fit">{lang.score}</p>}
                                            </div>
                                            <div className="w-12 h-12 rounded-full bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] flex items-center justify-center border-[3px] border-zblack text-2xl">
                                                {lang.name === "English" ? "🇬🇧" : "🇮🇩"}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* The Setup Section */}
                        <section>
                            <div className="flex items-center gap-4 mb-12 border-b border-zblack pb-4 sticky top-24 bg-[#f4f4f5]/80 backdrop-blur-xl z-20 md:static md:bg-transparent md:p-0 md:border-b md:pb-4 transition-colors">
                                <Monitor className="text-zpurple w-8 h-8 transition-colors" />
                                <h2 className="text-3xl font-black uppercase tracking-tight text-zblack transition-colors">The Setup</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {gear.map((category, index) => (
                                    <div key={index} className="space-y-6">
                                        <h3 className="text-sm font-bold text-zblack/50 uppercase tracking-widest pl-3 border-l-2 border-zlime">{category.category}</h3>
                                        <div className="space-y-4">
                                            {category.items.map((item, i) => (
                                                <div key={i} className="bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] backdrop-blur-xl border-[3px] border-zblack hover:shadow-[4px_4px_0px_0px_var(--color-zlime)]/50 rounded-2xl group transition-all shadow-lg">
                                                    <div className="p-4 flex items-center gap-4">
                                                        <div className="p-2.5 bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] rounded-xl border-[3px] border-zblack text-zlime group-hover:text-zpurple transition-colors">
                                                            {item.icon === "Laptop" && <Laptop size={20} />}
                                                            {item.icon === "Monitor" && <Monitor size={20} />}
                                                            {item.icon === "Keyboard" && <Keyboard size={20} />}
                                                            {item.icon === "Mouse" && <Mouse size={20} />}
                                                            {item.icon === "Code" && <Code size={20} />}
                                                            {item.icon === "Terminal" && <Terminal size={20} />}
                                                            {item.icon === "Figma" && <Palette size={20} />}
                                                            {item.icon === "Music" && <Music size={20} />}
                                                            {item.icon === "Cpu" && <Cpu size={20} />}
                                                            {item.icon === "Gpu" && <Zap size={20} />}
                                                            {item.icon === "Storage" && <HardDrive size={20} />}
                                                            {item.icon === "Memory" && <Cpu size={20} className="rotate-90" />}
                                                            {item.icon === "Brain" && <Brain size={20} />}
                                                        </div>
                                                        <div>
                                                            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-0.5">{item.name}</p>
                                                            <p className="text-zblack font-medium text-sm md:text-base">{item.value}</p>
                                                        </div>
                                                    </div>
                                                </div>
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
