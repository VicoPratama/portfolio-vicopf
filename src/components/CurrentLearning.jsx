import { motion } from 'framer-motion';
import { Database, TrendingUp, Cpu, Sparkles, BookOpen } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const CurrentLearning = () => {
    return (
        <SectionWrapper id="learning">
            <div className="space-y-6">
                
                {/* Section Header */}
                <div className="flex items-center gap-2 border-b border-neutral-200 dark:border-neutral-800 pb-3">
                    <BookOpen size={20} className="text-emerald-500" />
                    <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                        Current Focus & Growth
                    </h2>
                </div>

                <div className="satria-card p-6 sm:p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                        
                        <div className="lg:col-span-4 space-y-2">
                            <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100 font-display">
                                Expanding Knowledge Horizons
                            </h3>
                            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                                I believe in continuous growth. Here are the core fields and technologies I am currently exploring in depth.
                            </p>
                        </div>

                        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            
                            <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/60 flex items-start gap-3.5">
                                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-500 shrink-0">
                                    <TrendingUp size={18} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                                        Odoo ERP & Business Analysis
                                    </h4>
                                    <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                                        Mastering enterprise resource planning workflows, business process mapping, and optimization.
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/60 flex items-start gap-3.5">
                                <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-500 shrink-0">
                                    <Cpu size={18} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                                        Next.js & AI Agent Systems
                                    </h4>
                                    <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                                        Building scalable, full-stack web platforms integrated with intelligent AI agent systems.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </SectionWrapper>
    );
};

export default CurrentLearning;
