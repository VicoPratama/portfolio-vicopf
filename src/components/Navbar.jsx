import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Services', href: '/#services' },
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
                    ? 'top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-fit bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] backdrop-blur-xl/80 backdrop-blur-xl border-[3px] border-zblack rounded-[2rem] py-3 px-6 shadow-2xl'
                    : 'top-0 left-0 w-full bg-transparent py-6 px-6 md:px-12'
                }`}
        >
            <div className={`flex items-center justify-between ${scrolled ? 'gap-6' : 'w-full max-w-7xl mx-auto'}`}>

                {/* Brand */}
                <motion.div
                    animate={{
                        opacity: scrolled && !isOpen ? 0 : 1,
                        width: scrolled && !isOpen ? 0 : 'auto',
                        display: scrolled && !isOpen ? 'none' : 'block'
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <Link to="/" className="text-2xl font-display font-bold text-zblack whitespace-nowrap">
                        Vico<span className="text-zlime">.</span>
                    </Link>
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-1">
                    {navLinks.map((link) => (
                        <div key={link.name}>
                            {location.pathname === "/" ? (
                                <a
                                    href={link.href.replace("/", "")}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                        scrolled ? 'text-zblack/70 hover:text-zblack hover:bg-white/10' : 'text-zblack/80 hover:text-zblack'
                                    }`}
                                    onClick={() => handleLinkClick(link.href)}
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <Link
                                    to={link.href}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                        scrolled ? 'text-zblack/70 hover:text-zblack hover:bg-white/10' : 'text-zblack/80 hover:text-zblack'
                                    }`}
                                    onClick={() => handleLinkClick(link.href)}
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}

                    <div className="pl-2 border-l border-zblack ml-2 flex items-center gap-3">
                        <Link
                            to="/resume"
                            className="px-5 py-2 rounded-full border-[3px] border-zblack text-zblack text-sm font-medium transition-all duration-300 hover:bg-white/10"
                            onClick={() => setIsOpen(false)}
                        >
                            Resume
                        </Link>
                        <a
                            href="/#contact"
                            className="flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black text-sm font-bold transition-all duration-300 hover:bg-gray-200"
                            onClick={() => handleLinkClick('/#contact')}
                        >
                            Let's Talk
                            <ArrowUpRight size={16} />
                        </a>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <div className="flex items-center md:hidden ml-auto gap-4">
                    <button
                        className="text-zblack hover:text-zblack/80 p-1 transition-colors"
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
                                            className="block px-4 py-3 rounded-xl hover:bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] text-zblack/80 hover:text-zblack text-base font-medium transition-colors"
                                            onClick={() => handleLinkClick(link.href)}
                                        >
                                            {link.name}
                                        </a>
                                    ) : (
                                        <Link
                                            to={link.href}
                                            className="block px-4 py-3 rounded-xl hover:bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] text-zblack/80 hover:text-zblack text-base font-medium transition-colors"
                                            onClick={() => handleLinkClick(link.href)}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <Link
                                to="/resume"
                                className="block px-4 py-3 rounded-xl border-[3px] border-zblack text-zblack text-center text-base font-medium mt-2 hover:bg-white/10 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Resume
                            </Link>
                            <a
                                href="/#contact"
                                className="block px-4 py-3 rounded-xl bg-white text-black text-center text-base font-bold mt-2 hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                                onClick={() => handleLinkClick('/#contact')}
                            >
                                Let's Talk
                                <ArrowUpRight size={16} />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

