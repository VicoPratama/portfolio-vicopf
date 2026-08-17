import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { MapPin, Music, Github, Linkedin, Mail, Gamepad2, Moon, Sun } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const BentoGrid = () => {
    // --- GENRE SWITCHER STATE ---
    const [genreIndex, setGenreIndex] = useState(0);

    const genres = [
        { name: "Coding Focus", sub: "Lo-fi Beats & Deep House", color: "#ccff00", class: "bg-zlime", gradient: "from-zlime/20" },
        { name: "Cyberpunk Radio", sub: "Synthwave & Phonk", color: "#b388ff", class: "bg-zpurple", gradient: "from-zpurple/20" },
        { name: "Deep Flow", sub: "Ambient & White Noise", color: "#1e1e1e", class: "bg-zgray", gradient: "from-zgray/20" },
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
        <SectionWrapper id="bento" className="py-20 bg-[#f4f4f5]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="font-display text-4xl font-black text-zblack mb-4 tracking-tighter uppercase">
                        Beyond the <span className="text-zlime">Code</span>
                    </h2>
                    <p className="text-zblack/70 max-w-2xl text-lg font-light">
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
                            className={`w-full h-full relative overflow-hidden rounded-[2rem] border-[3px] border-zblack p-8 transition-colors duration-1000 ease-in-out bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] hover:bg-zgray`}
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
                                className="absolute top-8 right-8 text-zpurplelue-200"
                            >
                                <Moon size={32} className="drop-shadow-[0_0_15px_rgba(191,219,254,0.5)]" />
                            </motion.div>

                            <div className="absolute right-0 bottom-0 opacity-20 pointer-events-none">
                                <MapPin size={240} className={`translate-x-16 translate-y-16 transition-colors duration-1000 ${isDay ? 'text-zlime' : 'text-zpurple'}`} />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border-[3px] border-zblack shadow-lg">
                                        <MapPin className="text-zblack w-6 h-6" />
                                    </div>
                                    <div className="bg-black/20 backdrop-blur-md px-4 py-1.5 rounded-full border-[3px] border-zblack flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-xs font-mono text-zblack/90 tabular-nums">
                                            {formatTime(time)}
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-zblack/60 text-xs font-semibold uppercase tracking-widest mb-2">Based in</h3>
                                    <p className="text-4xl font-display font-bold text-zblack tracking-tight">South Jakarta</p>
                                    <p className="text-zblack/80 text-lg font-light mt-1 flex items-center gap-2">
                                        Indonesia
                                        <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 border-[3px] border-zblack">
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
                        className={`col-span-1 md:col-span-1 row-span-2 bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] rounded-[2rem] border-[3px] border-zblack hover:shadow-[4px_4px_0px_0px_var(--color-zlime)] p-6 flex flex-col justify-between group overflow-hidden cursor-pointer transition-colors duration-500`}
                    >
                        <div className={`${currentGenre.class} w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-all duration-500`}>
                            <Music className="text-zblack w-7 h-7 fill-current" />
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
                                <h3 className="text-zblack text-xl font-bold leading-tight tracking-tight transition-all duration-300">{currentGenre.name}</h3>
                                <p className="text-zblack/70 text-xs mt-1 font-medium transition-all duration-300">{currentGenre.sub}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Tech Stack - Glass Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="col-span-1 md:col-span-1 row-span-1 bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] rounded-[2rem] border-[3px] border-zblack p-6 relative overflow-hidden group hover:shadow-[4px_4px_0px_0px_var(--color-zpurple)] transition-colors duration-500"
                    >
                        {/* Removed blur shape */}
                        <h3 className="text-zblack/70 text-[10px] font-bold uppercase tracking-widest mb-4">My Arsenal</h3>
                        <div className="flex flex-wrap gap-2">
                            {['VS Code', 'Figma', 'Windows', 'Coffee', 'Spotify'].map(item => (
                                <span key={item} className="px-3 py-1.5 bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] hover:bg-white/10 rounded-lg text-xs font-medium text-zblack/90 border-[3px] border-zblack transition-colors">
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
                        <a href="https://github.com/VicoPratama" target="_blank" className="bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] rounded-2xl border-[3px] border-zblack flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group">
                            <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        </a>
                        <a href="https://www.linkedin.com/in/vico-pratama-fajareno-424a401a4/" target="_blank" className="bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] rounded-2xl border-[3px] border-zblack flex items-center justify-center hover:bg-[#0077b5] hover:text-zblack transition-all duration-300 group">
                            <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        </a>
                        <a href="mailto:vico.fajareno@gmail.com" className="bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] rounded-2xl border-[3px] border-zblack flex items-center justify-center hover:bg-zlime hover:text-zblack transition-all duration-300 group">
                            <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        </a>
                        <div className="bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] rounded-2xl border-[3px] border-zblack flex items-center justify-center group">
                            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                        </div>
                    </motion.div>

                    {/* Gamer / Hobby Card - Arcade Style */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="col-span-1 md:col-span-2 lg:col-span-4 row-span-1 bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] rounded-[2rem] border-[3px] border-zblack hover:shadow-[4px_4px_0px_0px_var(--color-zpurple)] p-8 flex items-center justify-between group overflow-hidden transition-colors"
                    >
                        <div className="flex items-center gap-6">
                            <div className="p-4 bg-[#f4f4f5] rounded-2xl border-[3px] border-zblack text-zpurple">
                                <Gamepad2 className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-zblack text-xl font-bold tracking-tight">Gaming & Strategy</h3>
                                <p className="text-zblack/70 text-sm font-light mt-1">Fueling creativity in virtual worlds.</p>
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
