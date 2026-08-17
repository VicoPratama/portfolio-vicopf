import { motion } from 'framer-motion';
import { Database, TrendingUp, Cpu, ArrowRight } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const CurrentLearning = () => {
    return (
        <section className="py-24 bg-[#f4f4f5] relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-zpurple/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-zlime/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] backdrop-blur-xl border-[3px] border-zblack p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden group">

                    <div className="md:w-1/3 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-display font-black text-zblack mb-4 uppercase tracking-tight">
                                Current <br/><span className="text-transparent" style={{ WebkitTextStroke: '2px var(--color-zlime)' }}>Focus</span>
                            </h2>
                            <p className="text-zblack/70 text-sm leading-relaxed font-light">
                                I believe in continuous growth. Here are the technologies and fields I am currently exploring in depth.
                            </p>
                        </motion.div>
                    </div>

                    <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-black/20 border-[3px] border-zblack p-6 rounded-[1.5rem] flex items-start gap-4 hover:shadow-[4px_4px_0px_0px_var(--color-zlime)]/50 hover:bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] transition-all shadow-lg group/item"
                        >
                            <div className="p-3 bg-zlime/10 rounded-xl text-zlime border border-zlime/20 group-hover/item:bg-zlime group-hover/item:text-black transition-colors">
                                <TrendingUp size={24} />
                            </div>
                            <div>
                                <h3 className="text-zblack font-bold mb-2 tracking-tight group-hover/item:text-zlime transition-colors">Odoo ERP & Business Analyst</h3>
                                <p className="text-zblack/70 text-xs font-light leading-relaxed">Mastering enterprise resource planning workflows and business process optimization.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-black/20 border-[3px] border-zblack p-6 rounded-[1.5rem] flex items-start gap-4 hover:shadow-[4px_4px_0px_0px_var(--color-zpurple)]/50 hover:bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] transition-all shadow-lg group/item"
                        >
                            <div className="p-3 bg-zpurple/10 rounded-xl text-zpurple border border-zpurple/20 group-hover/item:bg-zpurple group-hover/item:text-zblack transition-colors">
                                <Cpu size={24} />
                            </div>
                            <div>
                                <h3 className="text-zblack font-bold mb-2 tracking-tight group-hover/item:text-zpurple transition-colors">Next.js & AI Agents</h3>
                                <p className="text-zblack/70 text-xs font-light leading-relaxed">Building intelligent, full-stack web applications with advanced AI integration.</p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CurrentLearning;
