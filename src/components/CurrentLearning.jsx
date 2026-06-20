import { motion } from 'framer-motion';
import { Database, TrendingUp, Cpu, ArrowRight } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const CurrentLearning = () => {
    return (
        <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden group">

                    <div className="md:w-1/3 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-display font-black text-white mb-4 uppercase tracking-tight">
                                Current <br/><span className="text-transparent" style={{ WebkitTextStroke: '2px #2dd4bf' }}>Focus</span>
                            </h2>
                            <p className="text-gray-400 text-sm leading-relaxed font-light">
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
                            className="bg-black/20 border border-white/5 p-6 rounded-[1.5rem] flex items-start gap-4 hover:border-teal-400/50 hover:bg-white/5 transition-all shadow-lg group/item"
                        >
                            <div className="p-3 bg-teal-400/10 rounded-xl text-teal-400 border border-teal-400/20 group-hover/item:bg-teal-400 group-hover/item:text-black transition-colors">
                                <TrendingUp size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-bold mb-2 tracking-tight group-hover/item:text-teal-400 transition-colors">Odoo ERP & Business Analyst</h3>
                                <p className="text-gray-400 text-xs font-light leading-relaxed">Mastering enterprise resource planning workflows and business process optimization.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-black/20 border border-white/5 p-6 rounded-[1.5rem] flex items-start gap-4 hover:border-pink-500/50 hover:bg-white/5 transition-all shadow-lg group/item"
                        >
                            <div className="p-3 bg-pink-500/10 rounded-xl text-pink-500 border border-pink-500/20 group-hover/item:bg-pink-500 group-hover/item:text-white transition-colors">
                                <Cpu size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-bold mb-2 tracking-tight group-hover/item:text-pink-400 transition-colors">Next.js & AI Agents</h3>
                                <p className="text-gray-400 text-xs font-light leading-relaxed">Building intelligent, full-stack web applications with advanced AI integration.</p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CurrentLearning;
