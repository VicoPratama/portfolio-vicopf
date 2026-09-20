import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { User, Code2, TrendingUp, Sparkles, GraduationCap, CheckCircle } from 'lucide-react';

const About = () => {
    return (
        <SectionWrapper id="about">
            <div className="space-y-8">
                
                {/* Section Header with Icon */}
                <div className="flex items-center gap-2 border-b border-neutral-200 dark:border-neutral-800 pb-3">
                    <User size={20} className="text-emerald-500" />
                    <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                        About Me
                    </h2>
                </div>

                {/* Main Heading & Bio Grid */}
                <div className="space-y-6">
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-50 leading-tight">
                        From Idea To Execution, I Help You Realize The Dream With Code That Delivers Results.
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-neutral-600 dark:text-neutral-300 leading-relaxed text-sm md:text-base">
                        <p>
                            I am a dedicated developer with a keen eye for design and a passion for coding. My journey began with a curiosity for how the web works, which evolved into a career building sophisticated web applications and enterprise workflows.
                        </p>
                        <p>
                            Highly motivated and detail-oriented <span className="font-semibold text-neutral-900 dark:text-neutral-100">Bachelor of Computer Science</span> fresh graduate (<span className="font-semibold text-emerald-600 dark:text-emerald-400">GPA 3.69 / 4.00</span>) with a strong foundation in IT Governance, Web and Software Development, Project Management, and UI/UX Design. Skilled in system analysis, database management, and business process optimization.
                        </p>
                    </div>
                </div>

                {/* Core Competency Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                    
                    {/* Card 1 */}
                    <div className="satria-card p-6 flex flex-col justify-between group">
                        <div>
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4 border border-emerald-500/20">
                                <Code2 size={20} />
                            </div>
                            <h4 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                                Web Development & Design
                            </h4>
                            <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 font-normal">
                                Building fast, responsive, and reliable web applications using modern technologies like React, Tailwind, and Node.js while crafting pixel-perfect visual layouts that align with modern design trends.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-2 border-t border-neutral-100 dark:border-neutral-800">
                            <span className="px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-[11px] font-medium text-neutral-700 dark:text-neutral-300">
                                React & Next.js
                            </span>
                            <span className="px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-[11px] font-medium text-neutral-700 dark:text-neutral-300">
                                Tailwind CSS
                            </span>
                            <span className="px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-[11px] font-medium text-neutral-700 dark:text-neutral-300">
                                TypeScript
                            </span>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="satria-card p-6 flex flex-col justify-between group">
                        <div>
                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4 border border-blue-500/20">
                                <TrendingUp size={20} />
                            </div>
                            <h4 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                                UI/UX & Business Analysis
                            </h4>
                            <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 font-normal">
                                Creating intuitive user interfaces and analyzing business requirements. Implementing ERP solutions to optimize organizational workflows and ensuring a seamless user journey.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-2 border-t border-neutral-100 dark:border-neutral-800">
                            <span className="px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-[11px] font-medium text-neutral-700 dark:text-neutral-300">
                                Figma UI/UX
                            </span>
                            <span className="px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-[11px] font-medium text-neutral-700 dark:text-neutral-300">
                                Odoo ERP
                            </span>
                            <span className="px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-[11px] font-medium text-neutral-700 dark:text-neutral-300">
                                IT Governance
                            </span>
                        </div>
                    </div>

                </div>

            </div>
        </SectionWrapper>
    );
};

export default About;
