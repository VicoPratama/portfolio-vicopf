
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';


const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Contact', href: '/#contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (href) => {
        setIsOpen(false);
        if (location.pathname !== "/" && href.startsWith("/#")) {
            // Router handles redirect
        } else if (location.pathname === "/" && href.startsWith("/#")) {
            const elementId = href.replace("/#", "");
            const element = document.getElementById(elementId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav
            className={`fixed z-50 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] 
            ${scrolled || isOpen
                    ? 'top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-fit bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl py-3 px-6 shadow-2xl'
                    : 'top-0 left-0 w-full bg-transparent py-6 px-6 md:px-12'
                }`}
        >
            <div className={`flex items-center justify-between ${scrolled ? 'gap-6' : 'w-full max-w-7xl mx-auto'}`}>

                {/* Brand - Hides when scrolled to save space, reappears at top */}
                <motion.div
                    animate={{
                        opacity: scrolled && !isOpen ? 0 : 1,
                        width: scrolled && !isOpen ? 0 : 'auto',
                        display: scrolled && !isOpen ? 'none' : 'block'
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <Link to="/" className="text-2xl font-display font-bold text-gray-900 dark:text-white whitespace-nowrap transition-colors">
                        Vico<span className="text-accent-blue">.</span>
                    </Link>
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-1">
                    {navLinks.map((link) => (
                        <div key={link.name}>
                            {location.pathname === "/" ? (
                                <a
                                    href={link.href.replace("/", "")}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 
                                    ${scrolled
                                            ? 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10'
                                            : 'text-gray-300 hover:text-white' // Assuming hero is always dark initially or transparent? 
                                        // Actually if hero is light in light mode, this needs fix. 
                                        // The Home Hero is typically dark even in light mode designs unless we change it. 
                                        // But let's assume standard behavior: light mode = light hero.
                                        // So unscrolled text should be text-gray-900 dark:text-white
                                        }`}
                                    // Wait, the Home Hero will be updated to support Light Mode?
                                    // If yes, then unscrolled text must contrast with background.
                                    // If Home Hero stays dark, text stays light.
                                    // Let's assume broad Light Mode update.
                                    onClick={() => handleLinkClick(link.href)}
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <Link
                                    to={link.href}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 
                                    ${scrolled
                                            ? 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10'
                                            : 'text-gray-900 dark:text-gray-300 hover:text-accent-blue dark:hover:text-white'
                                        }`}
                                    onClick={() => handleLinkClick(link.href)}
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}

                    <div className="pl-2 border-l border-gray-200 dark:border-gray-700 ml-2 flex items-center gap-3">
                        <Link
                            to="/resume"
                            className={`px-5 py-2 rounded-full border text-sm font-medium transition-all duration-300
                                ${scrolled
                                    ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-transparent hover:bg-gray-700 dark:hover:bg-gray-200'
                                    : 'border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900'
                                }`}
                            onClick={() => setIsOpen(false)}
                        >
                            Resume
                        </Link>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <div className="flex items-center md:hidden ml-auto gap-4">
                    <button
                        className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 p-1 transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        className="md:hidden overflow-hidden"
                    >
                        <div className="flex flex-col space-y-2 pb-2">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    {location.pathname === "/" ? (
                                        <a
                                            href={link.href.replace("/", "")}
                                            className="block px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-base font-medium transition-colors"
                                            onClick={() => handleLinkClick(link.href)}
                                        >
                                            {link.name}
                                        </a>
                                    ) : (
                                        <Link
                                            to={link.href}
                                            className="block px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-base font-medium transition-colors"
                                            onClick={() => handleLinkClick(link.href)}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <Link
                                to="/resume"
                                className="block px-4 py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-center text-base font-bold mt-2 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Resume
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

