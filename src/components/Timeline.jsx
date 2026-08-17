import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { Briefcase, GraduationCap, Code2, TrendingUp, Plus, Minus } from 'lucide-react';

const TimelineData = [
    {
        year: "2020",
        title: "Started University",
        subtitle: "Computer Science",
        description: "Began my journey in the world of technology, exploring algorithms, data structures, and the basics of programming.",
        icon: GraduationCap,
    },
    {
        year: "2022",
        title: "Discovered Web Development",
        subtitle: "Frontend Passion",
        description: "Fell in love with creating visual experiences. Started mastering HTML, CSS, and JavaScript, building my first responsive sites.",
        icon: Code2,
    },
    {
        year: "2023",
        title: "Internship & Real World Projects",
        subtitle: "Full Stack Exploration",
        description: "Gained hands-on experience working with teams, learning backend technologies, and understanding the software development lifecycle.",
        icon: Briefcase,
    },
    {
        year: "2024",
        title: "Professional Specialization",
        subtitle: "Web, Design & ERP",
        description: "Expanding expertise across Web Development, Web Design, and Business Analysis. Specializing in Odoo ERP solutions to drive organizational efficiency.",
        icon: TrendingUp,
    },
];

const TimelineItem = ({ item, index, isExpanded, onToggle }) => {
    const number = String(index + 1).padStart(2, '0');

    return (
        <div className="border-b border-zblack py-6 md:py-8 group">
            <div 
                className="flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer"
                onClick={onToggle}
            >
                <div className="flex items-start md:items-center gap-6 md:gap-12 md:w-1/3">
                    <span className="text-xl md:text-2xl font-display text-gray-500 font-bold">{number}</span>
                    <div>
                        <span className="text-xs text-zlime uppercase tracking-wider font-semibold mb-1 block">{item.year}</span>
                        <h3 className="text-xl md:text-2xl font-bold text-zblack group-hover:text-zlime transition-colors">{item.title}</h3>
                    </div>
                </div>

                <div className="md:w-1/3 text-left">
                    <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1 block">Role</span>
                    <p className="text-zblack/80 font-medium">{item.subtitle}</p>
                </div>

                <div className="flex justify-end md:w-auto">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-full border-[3px] border-zblack text-zblack hover:bg-white/10 transition-colors text-sm font-medium">
                        {isExpanded ? 'Hide' : 'Show'} 
                        {isExpanded ? <Minus size={16} /> : <Plus size={16} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="pt-6 md:pt-8 md:pl-[110px]">
                            <div className="bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] backdrop-blur-xl border-[3px] border-zblack p-6 rounded-2xl flex items-start gap-4">
                                <div className="bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] p-3 rounded-xl shrink-0">
                                    <item.icon className="w-6 h-6 text-zlime" />
                                </div>
                                <p className="text-zblack/70 leading-relaxed font-light mt-1">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Timeline = () => {
    const [expandedIndex, setExpandedIndex] = useState(0); // First item expanded by default

    return (
        <SectionWrapper id="journey" className="bg-[#f4f4f5] py-24">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-zblack max-w-lg leading-tight"
                    >
                        A Yearly Snapshot Of My <br/> Creative Growth
                    </motion.h2>
                </div>

                <div className="border-t border-zblack">
                    {TimelineData.map((item, index) => (
                        <TimelineItem 
                            key={index} 
                            item={item} 
                            index={index} 
                            isExpanded={expandedIndex === index}
                            onToggle={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
                        />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Timeline;
