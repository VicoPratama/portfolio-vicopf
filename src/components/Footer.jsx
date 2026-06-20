import { Github, Linkedin, Mail, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0a0a0a] pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 lg:col-span-2">
                        <a href="#" className="font-display text-2xl font-bold text-white mb-6 inline-block tracking-tight">
                            Vico Pratama Fajareno
                        </a>
                        <p className="text-gray-400 leading-relaxed font-light max-w-sm">
                            Crafting digital experiences with a focus on aesthetics, performance, and user-centric design. Open to freelance opportunities and collaborations.
                        </p>
                    </div>

                    {/* Quick Link */}
                    <div>
                        <h4 className="text-white font-bold mb-6 font-display">Navigation</h4>
                        <ul className="space-y-4">
                            <li><a href="#about" className="text-gray-400 hover:text-teal-400 transition-colors text-sm font-medium">About</a></li>
                            <li><a href="#projects" className="text-gray-400 hover:text-teal-400 transition-colors text-sm font-medium">Projects</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-teal-400 transition-colors text-sm font-medium">Services</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-teal-400 transition-colors text-sm font-medium">Contact</a></li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="text-white font-bold mb-6 font-display">Connect</h4>
                        <div className="flex space-x-4">
                            <a
                                href="https://github.com/vicopratama"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all duration-300"
                            >
                                <Github size={18} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/vico-pratama-fajareno-424a401a4/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all duration-300"
                            >
                                <Linkedin size={18} />
                            </a>
                            <a
                                href="mailto:vico.fajareno@gmail.com"
                                className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all duration-300"
                            >
                                <Mail size={18} />
                            </a>
                            <a
                                href="https://www.instagram.com/vico_prtma27/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all duration-300"
                            >
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm font-light">
                        © {currentYear} Vico Pratama Fajareno. All rights reserved.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group px-4 py-2 rounded-full hover:bg-white/5"
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
