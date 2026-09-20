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
        <footer className="pt-12 pb-8 border-t border-neutral-200 dark:border-neutral-800 mt-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400">
                <div className="flex items-center gap-1.5 text-center sm:text-left">
                    <span>© {currentYear}</span>
                    <span className="font-semibold text-neutral-700 dark:text-neutral-300">Vico Pratama Fajareno</span>
                    <span>• All rights reserved.</span>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3">
                        <a
                            href="https://github.com/VicoPratama"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Profile"
                            className="text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                        >
                            <Github size={16} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/vico-pratama-fajareno-424a401a4/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn Profile"
                            className="text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                        >
                            <Linkedin size={16} />
                        </a>
                        <a
                            href="mailto:vico.fajareno@gmail.com"
                            aria-label="Email"
                            className="text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                        >
                            <Mail size={16} />
                        </a>
                        <a
                            href="https://www.instagram.com/vico_prtma27/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram Profile"
                            className="text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                        >
                            <Instagram size={16} />
                        </a>
                    </div>

                    <span className="text-neutral-300 dark:text-neutral-700">•</span>

                    <button
                        onClick={scrollToTop}
                        className="inline-flex items-center gap-1 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors cursor-pointer"
                    >
                        <span>Top</span>
                        <ArrowUp size={14} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
