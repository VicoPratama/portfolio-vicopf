import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Music, Github, Linkedin, Mail, Gamepad2, Moon, Sun, Sparkles, Compass } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const BentoGrid = () => {
    // --- GENRE SWITCHER STATE ---
    const [genreIndex, setGenreIndex] = useState(0);

    const genres = [
        { name: "Coding Focus", sub: "Lo-fi Beats & Deep House", color: "#10b981", bg: "rgba(16, 185, 129, 0.1)" },
        { name: "Cyberpunk Radio", sub: "Synthwave & Phonk", color: "#8b5cf6", bg: "rgba(139, 92, 246, 0.1)" },
        { name: "Deep Flow", sub: "Ambient & White Noise", color: "#3b82f6", bg: "rgba(59, 130, 246, 0.1)" },
    ];

    const currentGenre = genres[genreIndex];

    const handleGenreSwitch = () => {
        setGenreIndex((prev) => (prev + 1) % genres.length);
    };

    // --- LOCATION CARD STATE & LOGIC ---
    const [time, setTime] = useState(new Date());
    const [isDay, setIsDay] = useState(true);
    const [greeting, setGreeting] = useState("Good Morning");

    useEffect(() => {
        const updateTime = () => {
            const jakartaTime = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
            setTime(jakartaTime);
            const hour = jakartaTime.getHours();
            setIsDay(hour >= 6 && hour < 18);

            if (hour >= 5 && hour < 12) setGreeting("Good Morning");
            else if (hour >= 12 && hour < 18) setGreeting("Good Afternoon");
            else if (hour >= 18 && hour < 22) setGreeting("Good Evening");
            else setGreeting("Good Night");
        };

        updateTime();
        const timer = setInterval(updateTime, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
    };

    return (
        <SectionWrapper id="bento">
            <div className="space-y-6">
                
                {/* Section Header */}
                <div className="flex items-center gap-2 border-b border-neutral-200 dark:border-neutral-800 pb-3">
                    <Compass size={20} className="text-emerald-500" />
                    <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                        Beyond The Code
                    </h2>
                </div>

                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    A glimpse into my world, creative focus, and tools.
                </p>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">

                    {/* Location & Time Card */}
                    <div className="sm:col-span-2 satria-card p-6 flex flex-col justify-between relative overflow-hidden group">
                        <div className="flex items-center justify-between z-10">
                            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs font-medium text-neutral-700 dark:text-neutral-300">
                                <MapPin size={13} className="text-emerald-500" />
                                <span>South Jakarta, ID</span>
                            </div>

                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs font-mono text-neutral-800 dark:text-neutral-200">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span>{formatTime(time)} (WIB)</span>
                            </div>
                        </div>

                        <div className="my-6 z-10">
                            <h3 className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-medium mb-1">
                                Current Timezone
                            </h3>
                            <p className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-50 tracking-tight">
                                South Jakarta, Indonesia
                            </p>
                            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 flex items-center gap-2">
                                <span>{greeting}</span>
                                <span>•</span>
                                <span className="text-emerald-600 dark:text-emerald-400 font-medium">Available for Collaboration</span>
                            </p>
                        </div>

                        {/* Background Day/Night icon indicator */}
                        <div className="absolute right-4 bottom-4 opacity-15 dark:opacity-10 pointer-events-none">
                            {isDay ? <Sun size={90} className="text-amber-500" /> : <Moon size={90} className="text-blue-400" />}
                        </div>
                    </div>

                    {/* Spotify / Vibe Card */}
                    <div 
                        onClick={handleGenreSwitch}
                        className="satria-card p-6 flex flex-col justify-between cursor-pointer group hover:border-neutral-400 dark:hover:border-neutral-600 transition-all"
                    >
                        <div className="flex items-center justify-between">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center border border-emerald-500/20 group-hover:scale-110 transition-transform">
                                <Music size={18} />
                            </div>
                            <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-500">
                                Click to switch
                            </span>
                        </div>

                        <div className="mt-6 space-y-3">
                            <div className="flex gap-1.5 items-end h-6">
                                {[1, 2, 3, 4, 3, 2, 5, 3, 2].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="w-1 rounded-full bg-emerald-500"
                                        animate={{
                                            height: ["20%", "90%", "35%", "100%", "30%"],
                                        }}
                                        transition={{
                                            duration: 0.8,
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                            ease: "easeInOut",
                                            delay: i * 0.1,
                                            repeatDelay: Math.random() * 0.2
                                        }}
                                    />
                                ))}
                            </div>

                            <div>
                                <h4 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                                    {currentGenre.name}
                                </h4>
                                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                                    {currentGenre.sub}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Tech Arsenal Card */}
                    <div className="satria-card p-6 flex flex-col justify-between">
                        <div>
                            <h4 className="text-xs uppercase tracking-wider font-semibold text-neutral-500 dark:text-neutral-400 mb-3">
                                Daily Arsenal
                            </h4>
                            <div className="flex flex-wrap gap-1.5">
                                {['VS Code', 'Figma', 'Windows', 'Coffee', 'Spotify', 'Postman'].map(item => (
                                    <span 
                                        key={item} 
                                        className="px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-lg text-xs font-medium text-neutral-700 dark:text-neutral-300"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Socials Grid Card */}
                    <div className="satria-card p-6 flex flex-col justify-between">
                        <h4 className="text-xs uppercase tracking-wider font-semibold text-neutral-500 dark:text-neutral-400 mb-3">
                            Social Profiles
                        </h4>
                        <div className="grid grid-cols-3 gap-2">
                            <a 
                                href="https://github.com/VicoPratama" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 flex items-center justify-center hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                            >
                                <Github size={18} />
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/vico-pratama-fajareno-424a401a4/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                            >
                                <Linkedin size={18} />
                            </a>
                            <a 
                                href="mailto:vico.fajareno@gmail.com" 
                                className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors"
                            >
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Gaming & Strategy Card */}
                    <div className="satria-card p-6 flex items-center justify-between group">
                        <div className="flex items-center gap-3.5">
                            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-500 border border-purple-500/20 group-hover:scale-110 transition-transform">
                                <Gamepad2 size={20} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                                    Gaming & Strategy
                                </h4>
                                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                                    Fueling creativity in virtual worlds.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </SectionWrapper>
    );
};

export default BentoGrid;
