
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
        // If on a different page and clicking a hash link, the Router Link component normally handles the redirect 
        // but sometimes hash scrolling needs help if already on /
        if (location.pathname !== "/" && href.startsWith("/#")) {
            // Router behavior handles this naturally
        } else if (location.pathname === "/" && href.startsWith("/#")) {
            // already on home, just scroll
            const elementId = href.replace("/#", "");
            const element = document.getElementById(elementId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${(scrolled || isOpen) ? 'bg-gray-950/90 backdrop-blur-xl border-b border-white/5 py-4 shadow-xl' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                <Link to="/" className="text-2xl font-display font-bold text-white">
                    Vico<span className="text-accent-blue">.</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        location.pathname === "/" ? (
                            <a
                                key={link.name}
                                href={link.href.replace("/", "")}
                                className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide"
                                onClick={() => handleLinkClick(link.href)}
                            >
                                {link.name}
                            </a>
                        ) : (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide"
                                onClick={() => handleLinkClick(link.href)}
                            >
                                {link.name}
                            </Link>
                        )
                    ))}

                    <Link
                        to="/resume"
                        className="px-5 py-2 rounded-full border border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 text-sm font-medium"
                        onClick={() => setIsOpen(false)}
                    >
                        Resume
                    </Link>
                </div>

                <div className="flex items-center gap-4 md:hidden">
                    {/* Mobile Toggle */}
                    <button
                        className="text-white hover:text-gray-300"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-gray-950/95 backdrop-blur-xl border-t border-white/5"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                location.pathname === "/" ? (
                                    <a
                                        key={link.name}
                                        href={link.href.replace("/", "")}
                                        className="text-gray-300 hover:text-white text-lg font-medium"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                ) : (
                                    <Link
                                        key={link.name}
                                        to={link.href}
                                        className="text-gray-300 hover:text-white text-lg font-medium"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                )
                            ))}
                            <Link
                                to="/resume"
                                className="text-white hover:text-gray-300 text-lg font-medium pt-2 border-t border-gray-800"
                                onClick={() => setIsOpen(false)}
                            >
                                Resume & Experience
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

