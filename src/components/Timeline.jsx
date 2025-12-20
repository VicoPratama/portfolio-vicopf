import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SectionWrapper from './SectionWrapper';
import { Briefcase, GraduationCap, Code2, Heart, Palette, TrendingUp, Layout } from 'lucide-react';

const TimelineData = [
    {
        year: "2020",
        title: "Started University",
        subtitle: "Computer Science",
        description: "Began my journey in the world of technology, exploring algorithms, data structures, and the basics of programming.",
        icon: GraduationCap,
        color: "bg-blue-500"
    },
    {
        year: "2022",
        title: "Discovered Web Development",
        subtitle: "Frontend Passion",
        description: "Fell in love with creating visual experiences. Started mastering HTML, CSS, and JavaScript, building my first responsive sites.",
        icon: Code2,
        color: "bg-purple-500"
    },
    {
        year: "2023",
        title: "Internship & Real World Projects",
        subtitle: "Full Stack Exploration",
        description: "Gained hands-on experience working with teams, learning backend technologies, and understanding the software development lifecycle.",
        icon: Briefcase,
        color: "bg-green-500"
    },
    {
        year: "2024",
        title: "Professional Specialization",
        subtitle: "Web, Design & ERP",
        description: "Expanding expertise across Web Development, Web Design, and Business Analysis. Specializing in Odoo ERP solutions to drive organizational efficiency.",
        icon: TrendingUp,
        color: "bg-pink-500"
    },
];

const TimelineItem = ({ item, index }) => {
    const isEven = index % 2 === 0;

    return (
        <div className={`relative flex items-center justify-between mb-8 w-full ${isEven ? 'flex-row-reverse' : ''}`}>
            <div className="hidden md:block w-5/12" />

            <div className="z-20 flex items-center justify-center w-8 h-8 rounded-full bg-gray-900 border-4 border-gray-800 shadow-xl">
                <div className={`w-3 h-3 rounded-full ${item.color}`} />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`w-full md:w-5/12 p-6 rounded-[2rem] bg-gray-900/40 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl group ${isEven ? 'text-right' : 'text-left'}`}
            >
                <div className={`flex items-center gap-4 mb-4 ${isEven ? 'flex-row-reverse' : ''}`}>
                    <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${item.color}/10`}>
                        <item.icon className={`w-6 h-6 ${item.color.replace('bg-', 'text-')}`} />
                    </div>
                    <div>
                        <span className="block text-sm font-mono text-accent-blue mb-1">{item.year}</span>
                        <h3 className="text-xl font-bold text-white leading-tight">{item.title}</h3>
                    </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-1 font-light">
                    {item.subtitle}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                    {item.description}
                </p>
            </motion.div>
        </div>
    );
};

const Timeline = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <SectionWrapper id="journey" className="relative py-20 bg-gray-950 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-4xl mx-auto relative" ref={containerRef}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 relative z-10"
                >
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">
                        My <span className="text-accent-blue">Journey</span>
                    </h2>
                    <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
                        From Hello World to building complex applications, here's how I got here.
                    </p>
                </motion.div>

                {/* Vertical Line */}
                <div className="absolute left-4 md:left-1/2 top-32 bottom-0 w-0.5 bg-gray-800 -translate-x-1/2 md:translate-x-0">
                    <motion.div
                        style={{ height }}
                        className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"
                    />
                </div>

                <div className="relative pl-8 md:pl-0">
                    {TimelineData.map((item, index) => (
                        <TimelineItem key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Timeline;
