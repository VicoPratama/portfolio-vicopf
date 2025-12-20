import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { MapPin, Music, Github, Linkedin, Mail, Gamepad2, Moon, Sun } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const BentoGrid = () => {
    // --- GENRE SWITCHER STATE ---
    const [genreIndex, setGenreIndex] = useState(0);

    const genres = [
        { name: "Coding Focus", sub: "Lo-fi Beats & Deep House", color: "#1DB954", class: "bg-[#1DB954]", gradient: "from-[#1cd760]/20" },
        { name: "Cyberpunk Radio", sub: "Synthwave & Phonk", color: "#d946ef", class: "bg-fuchsia-500", gradient: "from-fuchsia-500/20" },
        { name: "Deep Flow", sub: "Ambient & White Noise", color: "#3b82f6", class: "bg-blue-500", gradient: "from-blue-500/20" },
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

                    {/* Location Card - Live Time (No Tilt) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="col-span-1 md:col-span-2 row-span-2"
                    >
                        <div
                            className={`w-full h-full relative overflow-hidden rounded-[2rem] border border-white/10 p-8 shadow-2xl transition-colors duration-1000 ease-in-out ${isDay ? 'bg-gradient-to-br from-sky-400/20 to-blue-600/20' : 'bg-gradient-to-br from-indigo-900/40 to-purple-900/40'}`}
                        >
                            {/* Background Elements */}
                            <div className={`absolute inset-0 transition-opacity duration-1000 ${isDay ? 'opacity-30' : 'opacity-10'} bg-[url("https://www.transparenttextures.com/patterns/cubes.png")]`} />

                            {/* Sun/Moon Animation */}
                            <motion.div
                                animate={{ y: isDay ? 0 : 100, opacity: isDay ? 1 : 0 }}
                                className="absolute top-8 right-8 text-yellow-300"
                            >
                                <Sun size={32} className="drop-shadow-[0_0_15px_rgba(253,224,71,0.5)]" />
                            </motion.div>
                            <motion.div
                                animate={{ y: isDay ? -100 : 0, opacity: isDay ? 0 : 1 }}
                                className="absolute top-8 right-8 text-blue-200"
                            >
                                <Moon size={32} className="drop-shadow-[0_0_15px_rgba(191,219,254,0.5)]" />
                            </motion.div>

                            <div className="absolute right-0 bottom-0 opacity-20 pointer-events-none">
                                <MapPin size={240} className={`translate-x-16 translate-y-16 transition-colors duration-1000 ${isDay ? 'text-sky-500' : 'text-indigo-500'}`} />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10 shadow-lg">
                                        <MapPin className="text-white w-6 h-6" />
                                    </div>
                                    <div className="bg-black/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/5 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-xs font-mono text-white/90 tabular-nums">
                                            {formatTime(time)}
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-2">Based in</h3>
                                    <p className="text-4xl font-display font-bold text-white tracking-tight">South Jakarta</p>
                                    <p className="text-white/80 text-lg font-light mt-1 flex items-center gap-2">
                                        Indonesia
                                        <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 border border-white/5">
                                            {greeting}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>


                    {/* Spotify / Vibe Card - Interactive Equalizer */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        onClick={handleGenreSwitch}
                        className={`col-span-1 md:col-span-1 row-span-2 bg-gradient-to-br ${currentGenre.gradient} to-gray-900/40 backdrop-blur-xl rounded-[2rem] border border-white/10 p-6 flex flex-col justify-between group overflow-hidden shadow-2xl cursor-pointer transition-colors duration-500`}
                    >
                        <div className={`${currentGenre.class} w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-all duration-500`}>
                            <Music className="text-white w-7 h-7 fill-current" />
                        </div>
                        <div className="space-y-4 relative z-10">
                            <div className="flex gap-1.5 items-end h-8">
                                {[1, 2, 3, 4, 3, 2, 5, 3, 2].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className={`w-1.5 rounded-full ${currentGenre.class}`}
                                        animate={{
                                            height: ["20%", "80%", "40%", "100%", "30%"],
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
                                <h3 className="text-white text-xl font-bold leading-tight tracking-tight transition-all duration-300">{currentGenre.name}</h3>
                                <p className="text-gray-400 text-xs mt-1 font-medium transition-all duration-300">{currentGenre.sub}</p>
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
                            {['VS Code', 'Figma', 'Windows', 'Coffee', 'Spotify'].map(item => (
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
        </SectionWrapper >
    );
};

export default BentoGrid;
