import { motion } from 'framer-motion';
import { Database, TrendingUp, Cpu, ArrowRight } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const CurrentLearning = () => {
    return (
        <section className="py-12 bg-gray-950 border-b border-gray-800/50">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-gray-900/50 border border-gray-800 p-8 rounded-2xl relative overflow-hidden">

                    {/* Decorative background */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    <div className="md:w-1/3 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-display font-bold text-white mb-2">
                                Current <span className="text-accent-blue">Focus</span>
                            </h2>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                I believe in continuous growth. Here are the technologies and fields I am currently exploring in depth.
                            </p>
                        </motion.div>
                    </div>

                    <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-gray-900 border border-gray-700/50 p-4 rounded-xl flex items-start gap-4 hover:border-accent-blue/30 transition-colors"
                        >
                            <div className="p-2 bg-blue-500/10 rounded-lg text-accent-blue">
                                <TrendingUp size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-bold mb-1">Odoo ERP & Business Analyst</h3>
                                <p className="text-gray-400 text-xs">Mastering enterprise resource planning workflows and business process optimization.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-gray-900 border border-gray-700/50 p-4 rounded-xl flex items-start gap-4 hover:border-purple-500/30 transition-colors"
                        >
                            <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                                <Cpu size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-bold mb-1">Next.js & AI Agents</h3>
                                <p className="text-gray-400 text-xs">Building intelligent, full-stack web applications with advanced AI integration.</p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CurrentLearning;
