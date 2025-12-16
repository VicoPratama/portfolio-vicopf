import { Github, Linkedin, Mail, Instagram, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white dark:bg-gray-950 pt-20 pb-10 border-t border-gray-200 dark:border-white/5 relative overflow-hidden transition-colors">
            {/* Background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent transition-colors" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none translate-x-1/3 translate-y-1/3" />

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 lg:col-span-2">
                        <a href="#" className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-6 inline-block tracking-tight transition-colors">
                            Vico Pratama Fajareno
                        </a>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light max-w-sm transition-colors">
                            Crafting digital experiences with a focus on aesthetics, performance, and user-centric design. Open to freelance opportunities and collaborations.
                        </p>
                    </div>

                    {/* Quick Link */}
                    <div>
                        <h4 className="text-gray-900 dark:text-white font-bold mb-6 font-display transition-colors">Navigation</h4>
                        <ul className="space-y-4">
                            <li><a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-accent-blue dark:hover:text-accent-blue transition-colors text-sm">About</a></li>
                            <li><a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-accent-blue dark:hover:text-accent-blue transition-colors text-sm">Projects</a></li>
                            <li><a href="#services" className="text-gray-600 dark:text-gray-400 hover:text-accent-blue dark:hover:text-accent-blue transition-colors text-sm">Services</a></li>
                            <li><a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-accent-blue dark:hover:text-accent-blue transition-colors text-sm">Contact</a></li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="text-gray-900 dark:text-white font-bold mb-6 font-display transition-colors">Connect</h4>
                        <div className="flex space-x-4">
                            <a
                                href="https://github.com/vicopratama"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/10 hover:scale-110 transition-all duration-300"
                            >
                                <Github size={18} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/vico-pratama-fajareno-424a401a4/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/10 hover:scale-110 transition-all duration-300"
                            >
                                <Linkedin size={18} />
                            </a>
                            <a
                                href="mailto:vico.fajareno@gmail.com"
                                className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/10 hover:scale-110 transition-all duration-300"
                            >
                                <Mail size={18} />
                            </a>
                            <a
                                href="https://www.instagram.com/vico_prtma27/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/10 hover:scale-110 transition-all duration-300"
                            >
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 transition-colors">
                    <p className="text-gray-500 text-sm font-light">
                        © {currentYear} Vico Pratama Fajareno. All rights reserved.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-accent-blue dark:hover:text-accent-blue transition-colors group px-4 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5"
                    >
                        Back to Top
                        <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
