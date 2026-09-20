import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Home, 
    User, 
    Briefcase, 
    FolderGit2, 
    Layers, 
    Mail, 
    FileText, 
    Sun, 
    Moon, 
    Menu, 
    X, 
    ChevronRight,
    Sparkles,
    Send,
    CheckCircle2
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const navItems = [
    { name: 'Home', href: '/#home', icon: Home },
    { name: 'About', href: '/#about', icon: User },
    { name: 'Experience', href: '/#journey', icon: Briefcase },
    { name: 'Services', href: '/#services', icon: Layers },
    { name: 'Projects', href: '/#projects', icon: FolderGit2 },
    { name: 'Contact', href: '/#contact', icon: Mail },
    { name: 'Resume', href: '/resume', icon: FileText, isRoute: true },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            if (location.pathname !== '/') return;
            const sections = ['home', 'about', 'journey', 'services', 'projects', 'contact'];
            const scrollPos = window.scrollY + 200;

            for (const section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;
                    if (scrollPos >= top && scrollPos < top + height) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    const handleNavClick = (item) => {
        setIsOpen(false);
        if (item.isRoute) return;

        if (location.pathname === '/') {
            const id = item.href.replace('/#', '');
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
                setActiveSection(id);
            }
        }
    };

    const isCurrentActive = (item) => {
        if (item.isRoute) {
            return location.pathname === item.href;
        }
        if (location.pathname === '/') {
            const id = item.href.replace('/#', '');
            return activeSection === id;
        }
        return false;
    };

    return (
        <>
            {/* ================= DESKTOP SIDEBAR (lg:block) ================= */}
            <header className="hidden lg:block lg:w-1/4 xl:w-[260px] shrink-0">
                <div className="sticky top-6 flex flex-col justify-between min-h-[calc(100vh-3rem)] py-4">
                    
                    {/* Top Section: Profile & Details */}
                    <div>
                        {/* Profile Header */}
                        <div className="flex flex-col items-center text-center">
                            <div className="relative group mb-3">
                                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 shadow-sm transition-transform duration-300 group-hover:scale-105">
                                    <img 
                                        src="/foto_profile_2.jpg" 
                                        alt="Vico Pratama Fajareno" 
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                            </div>

                            {/* Name & Verified Check */}
                            <div className="flex items-center justify-center gap-1.5 mt-1">
                                <Link to="/" className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                                    Vico Pratama Fajareno
                                </Link>
                                <svg 
                                    className="w-4 h-4 text-blue-500 fill-current shrink-0" 
                                    viewBox="0 0 24 24"
                                >
                                    <path d="m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z" />
                                </svg>
                            </div>

                            {/* Status Pill */}
                            <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                Open to Work
                            </div>

                            {/* Quick Theme Switcher */}
                            <div className="mt-4 flex items-center justify-center gap-2">
                                <div className="flex items-center rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 p-1">
                                    <button 
                                        onClick={toggleTheme}
                                        aria-label="Toggle Light Mode"
                                        className={`p-1.5 rounded-full transition-all duration-200 ${
                                            theme === 'light' 
                                                ? 'bg-white text-neutral-900 shadow-sm' 
                                                : 'text-neutral-400 hover:text-neutral-200'
                                        }`}
                                    >
                                        <Sun size={15} />
                                    </button>
                                    <button 
                                        onClick={toggleTheme}
                                        aria-label="Toggle Dark Mode"
                                        className={`p-1.5 rounded-full transition-all duration-200 ${
                                            theme === 'dark' 
                                                ? 'bg-neutral-800 text-neutral-100 shadow-sm' 
                                                : 'text-neutral-500 hover:text-neutral-800'
                                        }`}
                                    >
                                        <Moon size={15} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="my-5 border-t border-neutral-200 dark:border-neutral-800" />

                        {/* Navigation Links */}
                        <nav className="flex flex-col space-y-1">
                            {navItems.map((item) => {
                                const active = isCurrentActive(item);
                                const Icon = item.icon;

                                if (item.isRoute) {
                                    return (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            className={`group flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                                                active
                                                    ? 'bg-neutral-200/90 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 shadow-xs'
                                                    : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800/60 hover:text-neutral-900 dark:hover:text-neutral-200'
                                            }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <Icon size={18} className={`transition-transform duration-200 group-hover:scale-110 ${active ? 'text-emerald-600 dark:text-emerald-400' : ''}`} />
                                                <span>{item.name}</span>
                                            </div>
                                            {active && <ChevronRight size={16} className="text-neutral-400 dark:text-neutral-500 animate-pulse" />}
                                        </Link>
                                    );
                                }

                                return (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={(e) => {
                                            if (location.pathname === '/') {
                                                e.preventDefault();
                                                handleNavClick(item);
                                            }
                                        }}
                                        className={`group flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                                            active
                                                ? 'bg-neutral-200/90 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 shadow-xs'
                                                : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800/60 hover:text-neutral-900 dark:hover:text-neutral-200'
                                        }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <Icon size={18} className={`transition-transform duration-200 group-hover:scale-110 ${active ? 'text-emerald-600 dark:text-emerald-400' : ''}`} />
                                            <span>{item.name}</span>
                                        </div>
                                        {active && <ChevronRight size={16} className="text-neutral-400 dark:text-neutral-500 animate-pulse" />}
                                    </a>
                                );
                            })}
                        </nav>
                    </div>

                    {/* Bottom Section: Let's Talk CTA & Copyright */}
                    <div className="pt-6">
                        <div className="mb-4 border-t border-neutral-200 dark:border-neutral-800" />
                        
                        <a
                            href="/#contact"
                            onClick={(e) => {
                                if (location.pathname === '/') {
                                    e.preventDefault();
                                    handleNavClick({ href: '/#contact' });
                                }
                            }}
                            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 text-sm font-medium hover:bg-neutral-800 dark:hover:bg-white transition-all shadow-sm hover:scale-[1.02]"
                        >
                            <Send size={15} />
                            <span>Let's Talk</span>
                        </a>

                        <div className="mt-4 text-center text-xs text-neutral-500 dark:text-neutral-500">
                            <p>© {new Date().getFullYear()} Vico Pratama Fajareno</p>
                            <p className="mt-0.5">All rights reserved.</p>
                        </div>
                    </div>

                </div>
            </header>


            {/* ================= MOBILE HEADER (lg:hidden) ================= */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-50 border-b border-neutral-200 dark:border-neutral-800 backdrop-blur-md bg-neutral-50/90 dark:bg-neutral-950/90 px-4 py-3">
                <div className="flex items-center justify-between">
                    
                    {/* Profile & Name */}
                    <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-full overflow-hidden border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 shrink-0">
                            <img 
                                src="/foto_profile_2.jpg" 
                                alt="Vico Pratama Fajareno" 
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="font-semibold text-sm text-neutral-900 dark:text-neutral-100">
                                Vico Pratama Fajareno
                            </span>
                            <svg 
                                className="w-3.5 h-3.5 text-blue-500 fill-current shrink-0" 
                                viewBox="0 0 24 24"
                            >
                                <path d="m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z" />
                            </svg>
                        </div>
                    </div>

                    {/* Actions: Theme Toggle + Menu Button */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle Theme"
                            className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:scale-105 transition-transform"
                        >
                            {theme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}
                        </button>
                        
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Open Navigation Menu"
                            className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:scale-105 transition-transform"
                        >
                            {isOpen ? <X size={18} /> : <Menu size={18} />}
                        </button>
                    </div>

                </div>

                {/* Mobile Drawer */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pt-3 pb-2"
                        >
                            <div className="space-y-1 border-t border-neutral-200 dark:border-neutral-800 pt-3">
                                {navItems.map((item) => {
                                    const active = isCurrentActive(item);
                                    const Icon = item.icon;

                                    if (item.isRoute) {
                                        return (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                onClick={() => setIsOpen(false)}
                                                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium ${
                                                    active
                                                        ? 'bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100'
                                                        : 'text-neutral-600 dark:text-neutral-400'
                                                }`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <Icon size={18} className={active ? 'text-emerald-500' : ''} />
                                                    <span>{item.name}</span>
                                                </div>
                                                {active && <ChevronRight size={16} />}
                                            </Link>
                                        );
                                    }

                                    return (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            onClick={(e) => {
                                                if (location.pathname === '/') {
                                                    e.preventDefault();
                                                    handleNavClick(item);
                                                } else {
                                                    setIsOpen(false);
                                                }
                                            }}
                                            className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium ${
                                                active
                                                    ? 'bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100'
                                                    : 'text-neutral-600 dark:text-neutral-400'
                                            }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <Icon size={18} className={active ? 'text-emerald-500' : ''} />
                                                <span>{item.name}</span>
                                            </div>
                                            {active && <ChevronRight size={16} />}
                                        </a>
                                    );
                                })}

                                <div className="pt-2">
                                    <a
                                        href="/#contact"
                                        onClick={(e) => {
                                            if (location.pathname === '/') {
                                                e.preventDefault();
                                                handleNavClick({ href: '/#contact' });
                                            } else {
                                                setIsOpen(false);
                                            }
                                        }}
                                        className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 text-sm font-medium"
                                    >
                                        <Send size={15} />
                                        <span>Let's Talk</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default Navbar;
