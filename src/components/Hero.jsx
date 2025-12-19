import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import SectionWrapper from './SectionWrapper';

const Hero = () => {
    const [count, setCount] = useState(0);
    const text1 = "Vico Pratama";
    const text2 = "Fajareno";

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prev => {
                if (prev < text1.length + text2.length) {
                    return prev + 1;
                }
                clearInterval(interval);
                return prev;
            });
        }, 150);

        return () => clearInterval(interval);
    }, []);

    return (
        <div id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Minimalist Background Grid (Optional) */}
            {/* Minimalist Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none transition-colors" />

            {/* Animated Background Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/10 dark:bg-accent-blue/20 rounded-full blur-3xl transition-colors"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        x: [0, -60, 0],
                        y: [0, 100, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl transition-colors"
                />
            </div>

            <SectionWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="text-center lg:text-left order-2 lg:order-1">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-600 dark:text-gray-400 font-medium tracking-widest uppercase mb-4 transition-colors"
                        >
                            Hello, I am
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white leading-tight transition-colors"
                        >
                            {text1.slice(0, Math.min(count, text1.length))}
                            {count >= text1.length && <br />}
                            <span className="text-accent-blue">
                                {text2.slice(0, Math.max(0, count - text1.length))}
                            </span>
                            <motion.span
                                animate={{ opacity: [1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.8 }}
                                className="inline-block w-1 h-12 md:h-16 lg:h-20 bg-accent-blue ml-1 align-middle -mb-2"
                            />
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-gray-600 dark:text-gray-300 text-lg md:text-xl mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0 transition-colors"
                        >
                            A passionate developer crafting beautiful, responsive, and user-centric web experiences with a touch of elegance.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4"
                        >
                            <Button href="#projects" variant="primary">View My Work</Button>
                            <Button href="#contact" variant="secondary">Contact Me</Button>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, filter: "grayscale(100%)" }}
                        animate={{ opacity: 1, scale: 1, filter: "grayscale(0%)" }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="order-1 lg:order-2 flex justify-center"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 grayscale hover:grayscale-0 transition-all duration-700">
                            <img
                                src="/IMG_6335.JPEG"
                                alt="Vico Pratama Fajareno"
                                className="w-full h-full object-cover rounded-2xl shadow-[20px_20px_0px_0px_rgba(0,0,0,0.05)]"
                            />
                        </div>
                    </motion.div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Hero;
