import { motion } from 'framer-motion';
import { 
    Briefcase, 
    GraduationCap, 
    ArrowLeft, 
    Award, 
    Code, 
    Globe, 
    Users, 
    Cpu, 
    Download, 
    MapPin, 
    Linkedin, 
    Monitor, 
    Mouse, 
    Keyboard, 
    Laptop, 
    Music, 
    HardDrive, 
    Zap, 
    Palette, 
    Terminal, 
    Brain, 
    FileDown,
    Calendar,
    ExternalLink,
    CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

import { 
    education, 
    experience, 
    organizationalExperience, 
    certificates, 
    skills, 
    gear 
} from '../constants/resumeData';

const Resume = () => {
    const handleExportPDF = () => {
        window.print();
    };

    return (
        <div className="space-y-8 pb-12">
            
            {/* Header / Top Bar */}
            <div className="space-y-4">
                <div className="print:hidden">
                    <Link 
                        to="/" 
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors group"
                    >
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                        <span>Back to Home</span>
                    </Link>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 font-display">
                            Resume & Credentials
                        </h1>
                        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                            A comprehensive record of my professional experience, education, and technical expertise.
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-2.5 print:hidden">
                        <button
                            onClick={handleExportPDF}
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs font-medium hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all shadow-2xs cursor-pointer"
                        >
                            <FileDown size={14} className="text-purple-500" />
                            <span>Export PDF</span>
                        </button>

                        <a
                            href="https://drive.google.com/file/d/1y62sPKHQpeD9qRmlaDFXRlqHegDl07uv/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 text-xs font-medium hover:bg-neutral-800 dark:hover:bg-white transition-all shadow-xs"
                        >
                            <Download size={14} className="text-emerald-400 dark:text-emerald-600" />
                            <span>Download CV</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/vico-pratama-fajareno-424a401a4/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0077b5]/10 text-[#0077b5] border border-[#0077b5]/20 text-xs font-medium hover:bg-[#0077b5]/20 transition-all"
                        >
                            <Linkedin size={14} />
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>

                {/* Status Bar */}
                <div className="satria-card p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                        </span>
                        <div>
                            <h2 className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">
                                Open for Work & Collaborations
                            </h2>
                            <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                                Available for full-time software engineering roles and freelance projects.
                            </p>
                        </div>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium">
                        Immediate
                    </span>
                </div>
            </div>

            <div className="border-t border-neutral-200 dark:border-neutral-800" />

            {/* Work Experience Section */}
            <section className="space-y-4">
                <div className="flex items-center gap-2 pb-2">
                    <Briefcase size={18} className="text-emerald-500" />
                    <h2 className="text-lg font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                        Professional Work Experience
                    </h2>
                </div>

                <div className="space-y-4">
                    {experience.map((job, index) => (
                        <div key={index} className="satria-card p-5 sm:p-6 space-y-3.5">
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                                <div>
                                    <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                                        {job.role}
                                    </h3>
                                    <h4 className="text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">
                                        {job.company}
                                    </h4>
                                    <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                                        <MapPin size={13} />
                                        <span>{job.location}</span>
                                    </div>
                                </div>

                                <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 w-fit">
                                    <Calendar size={11} />
                                    {job.year}
                                </span>
                            </div>

                            <p className="text-xs sm:text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 font-normal whitespace-pre-line">
                                {job.description}
                            </p>

                            {job.tech && (
                                <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800/80 flex flex-wrap gap-1.5">
                                    {job.tech.map((t, i) => (
                                        <span 
                                            key={i}
                                            className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <div className="border-t border-neutral-200 dark:border-neutral-800" />

            {/* Education Section */}
            <section className="space-y-4">
                <div className="flex items-center gap-2 pb-2">
                    <GraduationCap size={18} className="text-blue-500" />
                    <h2 className="text-lg font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                        Education
                    </h2>
                </div>

                <div className="space-y-4">
                    {education.map((edu, index) => (
                        <div key={index} className="satria-card p-5 sm:p-6 space-y-3">
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                                <div>
                                    <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                                        {edu.degree}
                                    </h3>
                                    <h4 className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                                        {edu.school}
                                    </h4>
                                </div>

                                <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 w-fit">
                                    <Calendar size={11} />
                                    {edu.year}
                                </span>
                            </div>

                            <p className="text-xs sm:text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 font-normal whitespace-pre-line">
                                {edu.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <div className="border-t border-neutral-200 dark:border-neutral-800" />

            {/* Organizational Experience */}
            <section className="space-y-4">
                <div className="flex items-center gap-2 pb-2">
                    <Users size={18} className="text-purple-500" />
                    <h2 className="text-lg font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                        Organizational Leadership
                    </h2>
                </div>

                <div className="space-y-4">
                    {organizationalExperience.map((org, index) => (
                        <div key={index} className="satria-card p-5 sm:p-6 space-y-3">
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                                <div>
                                    <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                                        {org.role}
                                    </h3>
                                    <h4 className="text-xs sm:text-sm font-semibold text-purple-600 dark:text-purple-400 mt-0.5">
                                        {org.organization}
                                    </h4>
                                </div>

                                <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 w-fit">
                                    <Calendar size={11} />
                                    {org.year}
                                </span>
                            </div>

                            <p className="text-xs sm:text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 font-normal whitespace-pre-line">
                                {org.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <div className="border-t border-neutral-200 dark:border-neutral-800" />

            {/* Certifications Section */}
            <section className="space-y-4">
                <div className="flex items-center gap-2 pb-2">
                    <Award size={18} className="text-amber-500" />
                    <h2 className="text-lg font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                        Certifications & Licenses
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {certificates.map((cert, index) => (
                        <div key={index} className="satria-card p-5 flex flex-col justify-between group">
                            <div>
                                <div className="flex items-start justify-between gap-2 mb-2">
                                    <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                                        {cert.title}
                                    </h3>
                                    {cert.year && (
                                        <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-500 shrink-0">
                                            {cert.year}
                                        </span>
                                    )}
                                </div>

                                <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                                    {cert.issuer}
                                </p>

                                {cert.description && (
                                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 font-normal leading-relaxed">
                                        {cert.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className="border-t border-neutral-200 dark:border-neutral-800" />

            {/* Technical & Soft Skills Overview */}
            <section className="space-y-4">
                <div className="flex items-center gap-2 pb-2">
                    <Code size={18} className="text-emerald-500" />
                    <h2 className="text-lg font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                        Skills Matrix
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Frontend */}
                    <div className="satria-card p-5 space-y-3">
                        <div className="flex items-center gap-2 text-neutral-900 dark:text-neutral-100 font-bold text-sm">
                            <Code size={16} className="text-emerald-500" />
                            <span>Frontend Development</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                            {skills.programming.frontend.map((s) => (
                                <span key={s} className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-xs text-neutral-700 dark:text-neutral-300 font-medium">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Backend */}
                    <div className="satria-card p-5 space-y-3">
                        <div className="flex items-center gap-2 text-neutral-900 dark:text-neutral-100 font-bold text-sm">
                            <Terminal size={16} className="text-blue-500" />
                            <span>Backend & APIs</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                            {skills.programming.backend.map((s) => (
                                <span key={s} className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-xs text-neutral-700 dark:text-neutral-300 font-medium">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Design */}
                    <div className="satria-card p-5 space-y-3">
                        <div className="flex items-center gap-2 text-neutral-900 dark:text-neutral-100 font-bold text-sm">
                            <Palette size={16} className="text-purple-500" />
                            <span>UI/UX & Product Design</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                            {skills.design.map((s) => (
                                <span key={s} className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-xs text-neutral-700 dark:text-neutral-300 font-medium">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Soft Skills & Tools */}
                    <div className="satria-card p-5 space-y-3">
                        <div className="flex items-center gap-2 text-neutral-900 dark:text-neutral-100 font-bold text-sm">
                            <Users size={16} className="text-amber-500" />
                            <span>Soft Skills & Collaboration</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                            {skills.softSkills.map((s) => (
                                <span key={s} className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-xs text-neutral-700 dark:text-neutral-300 font-medium">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            <div className="border-t border-neutral-200 dark:border-neutral-800" />

            {/* Languages & Gear Setup */}
            <section className="space-y-4">
                <div className="flex items-center gap-2 pb-2">
                    <Globe size={18} className="text-emerald-500" />
                    <h2 className="text-lg font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                        Languages & Work Setup
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Languages */}
                    <div className="satria-card p-5 space-y-3">
                        <h3 className="text-xs uppercase font-mono font-semibold text-neutral-400">
                            Language Proficiency
                        </h3>
                        <div className="space-y-2">
                            {skills.languages.map((lang, i) => (
                                <div key={i} className="flex items-center justify-between p-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-100 dark:border-neutral-800">
                                    <div>
                                        <p className="text-xs font-bold text-neutral-800 dark:text-neutral-200">{lang.name}</p>
                                        <p className="text-[11px] text-neutral-500">{lang.level}</p>
                                    </div>
                                    {lang.score && (
                                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium">
                                            {lang.score}
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Setup Highlights */}
                    <div className="satria-card p-5 space-y-3">
                        <h3 className="text-xs uppercase font-mono font-semibold text-neutral-400">
                            Workstation Hardware & Environment
                        </h3>
                        <div className="space-y-1.5 text-xs text-neutral-600 dark:text-neutral-300">
                            {gear[0].items.slice(0, 4).map((item, idx) => (
                                <div key={idx} className="flex items-center justify-between py-1 border-b border-neutral-100 dark:border-neutral-800/60 last:border-0">
                                    <span className="text-neutral-400 text-[11px]">{item.name}</span>
                                    <span className="font-medium text-neutral-800 dark:text-neutral-200">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Resume;
