import { motion } from 'framer-motion';
import { MapPin, Music, Coffee, Github, Linkedin, Mail, Twitter, Gamepad2, Headphones } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const BentoGrid = () => {
    return (
        <SectionWrapper id="bento" className="py-20 bg-gray-950">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="font-display text-4xl font-bold text-white mb-4 tracking-tight">
                        Beyond the <span className="text-accent-blue">Code</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl text-lg font-light">
                        A glimpse into my world, designing for the future.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[180px]">

                    {/* Location Card - Apple Maps Style */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="col-span-1 md:col-span-2 row-span-2 bg-gray-900/40 backdrop-blur-xl rounded-[2rem] border border-white/10 p-8 relative overflow-hidden group shadow-2xl"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_#3b82f610_0%,_transparent_60%)]" />
                        <div className="absolute right-0 bottom-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700 ease-out">
                            <MapPin size={240} className="text-accent-blue translate-x-16 translate-y-16" />
                        </div>
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl w-fit border border-white/10 shadow-lg">
                                <MapPin className="text-white w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-2">Based in</h3>
                                <p className="text-4xl font-display font-bold text-white tracking-tight">Jakarta</p>
                                <p className="text-gray-400/80 text-lg font-light mt-1">Indonesia</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Spotify / Vibe Card - Apple Music Style */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="col-span-1 md:col-span-1 row-span-2 bg-gradient-to-br from-[#1cd760]/20 to-gray-900/40 backdrop-blur-xl rounded-[2rem] border border-white/10 p-6 flex flex-col justify-between group overflow-hidden shadow-2xl"
                    >
                        <div className="bg-[#1DB954] w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-500">
                            <Music className="text-white w-7 h-7 fill-current" />
                        </div>
                        <div className="space-y-4 relative z-10">
                            <div className="flex gap-1.5 items-end h-8">
                                {[1, 2, 3, 4, 3, 2, 5, 3, 2].map((h, i) => (
                                    <div
                                        key={i}
                                        className="w-1.5 bg-[#1DB954] rounded-full animate-pulse"
                                        style={{ height: `${h * 15}%`, animationDelay: `${i * 0.15}s` }}
                                    />
                                ))}
                            </div>
                            <div>
                                <h3 className="text-white text-xl font-bold leading-tight tracking-tight">Coding Focus</h3>
                                <p className="text-gray-400 text-xs mt-1 font-medium">Lo-fi Beats & Deep House</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Tech Stack - Glass Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="col-span-1 md:col-span-1 row-span-1 bg-gray-900/40 backdrop-blur-xl rounded-[2rem] border border-white/10 p-6 relative overflow-hidden group hover:bg-gray-800/40 transition-colors duration-500 shadow-xl"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                        <h3 className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-4">My Arsenal</h3>
                        <div className="flex flex-wrap gap-2">
                            {['VS Code', 'Figma', 'Windows', 'Coffee'].map(item => (
                                <span key={item} className="px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-medium text-gray-200 border border-white/5 transition-colors">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Socials Grid - iOS Style Buttons */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.25 }}
                        className="col-span-1 md:col-span-1 row-span-1 grid grid-cols-2 gap-3 relative z-20"
                    >
                        <a href="https://github.com/VicoPratama" target="_blank" className="bg-gray-900/40 backdrop-blur-xl rounded-2xl border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group shadow-lg">
                            <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        </a>
                        <a href="https://www.linkedin.com/in/vico-pratama-fajareno-424a401a4/" target="_blank" className="bg-gray-900/40 backdrop-blur-xl rounded-2xl border border-white/10 flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all duration-300 group shadow-lg">
                            <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        </a>
                        <a href="mailto:vico.fajareno@gmail.com" className="bg-gray-900/40 backdrop-blur-xl rounded-2xl border border-white/10 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300 group shadow-lg">
                            <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        </a>
                        <div className="bg-gray-900/40 backdrop-blur-xl rounded-2xl border border-white/10 flex items-center justify-center group shadow-lg">
                            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                        </div>
                    </motion.div>

                    {/* Gamer / Hobby Card - Arcade Style */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="col-span-1 md:col-span-2 lg:col-span-4 row-span-1 bg-gradient-to-r from-indigo-900/20 to-purple-900/20 backdrop-blur-xl rounded-[2rem] border border-white/10 p-8 flex items-center justify-between group overflow-hidden shadow-2xl"
                    >
                        <div className="flex items-center gap-6">
                            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-indigo-300">
                                <Gamepad2 className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-white text-xl font-bold tracking-tight">Gaming & Strategy</h3>
                                <p className="text-gray-400 text-sm font-light mt-1">Fueling creativity in virtual worlds.</p>
                            </div>
                        </div>
                        <div className="hidden sm:flex opacity-30 group-hover:opacity-50 transition-opacity gap-2">
                            <div className="w-16 h-2 bg-white/20 rounded-full" />
                            <div className="w-2 h-2 bg-white/20 rounded-full" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </SectionWrapper>
    );
};

export default BentoGrid;
