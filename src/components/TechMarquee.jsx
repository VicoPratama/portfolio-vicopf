import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Wrench, Database, Layout, Server, Sparkles } from 'lucide-react';
import { 
    SiReact, 
    SiNextdotjs, 
    SiVuedotjs, 
    SiTailwindcss, 
    SiJavascript, 
    SiTypescript, 
    SiHtml5, 
    SiCss3, 
    SiBootstrap, 
    SiFramer,
    SiNodedotjs, 
    SiExpress, 
    SiLaravel, 
    SiPhp, 
    SiPython, 
    SiSupabase, 
    SiPostgresql, 
    SiDocker, 
    SiGit, 
    SiGithub, 
    SiFigma, 
    SiPostman 
} from 'react-icons/si';

const categories = ["All", "Frontend", "Backend", "Database", "Tools & ERP"];

const allSkills = [
    // Frontend
    { name: "React", category: "Frontend", icon: SiReact, color: "#61DAFB", bg: "rgba(97, 218, 251, 0.1)" },
    { name: "Next.js", category: "Frontend", icon: SiNextdotjs, color: "#000000", bg: "rgba(100, 100, 100, 0.1)" },
    { name: "Vue.js", category: "Frontend", icon: SiVuedotjs, color: "#4FC08D", bg: "rgba(79, 192, 141, 0.1)" },
    { name: "Tailwind CSS", category: "Frontend", icon: SiTailwindcss, color: "#06B6D4", bg: "rgba(6, 182, 212, 0.1)" },
    { name: "TypeScript", category: "Frontend", icon: SiTypescript, color: "#3178C6", bg: "rgba(49, 120, 198, 0.1)" },
    { name: "JavaScript", category: "Frontend", icon: SiJavascript, color: "#F7DF1E", bg: "rgba(247, 223, 30, 0.1)" },
    { name: "HTML5", category: "Frontend", icon: SiHtml5, color: "#E34F26", bg: "rgba(227, 79, 38, 0.1)" },
    { name: "CSS3", category: "Frontend", icon: SiCss3, color: "#1572B6", bg: "rgba(21, 114, 182, 0.1)" },
    { name: "Bootstrap", category: "Frontend", icon: SiBootstrap, color: "#7952B3", bg: "rgba(121, 82, 179, 0.1)" },
    { name: "Framer Motion", category: "Frontend", icon: SiFramer, color: "#0055FF", bg: "rgba(0, 85, 255, 0.1)" },

    // Backend
    { name: "Node.js", category: "Backend", icon: SiNodedotjs, color: "#339933", bg: "rgba(51, 153, 51, 0.1)" },
    { name: "Express.js", category: "Backend", icon: SiExpress, color: "#808080", bg: "rgba(128, 128, 128, 0.1)" },
    { name: "Laravel", category: "Backend", icon: SiLaravel, color: "#FF2D20", bg: "rgba(255, 45, 32, 0.1)" },
    { name: "PHP", category: "Backend", icon: SiPhp, color: "#777BB4", bg: "rgba(119, 123, 180, 0.1)" },
    { name: "Python", category: "Backend", icon: SiPython, color: "#3776AB", bg: "rgba(55, 118, 171, 0.1)" },

    // Database
    { name: "PostgreSQL", category: "Database", icon: SiPostgresql, color: "#4169E1", bg: "rgba(65, 105, 225, 0.1)" },
    { name: "Supabase", category: "Database", icon: SiSupabase, color: "#3ECF8E", bg: "rgba(62, 207, 142, 0.1)" },

    // Tools
    { name: "Odoo ERP", category: "Tools & ERP", icon: Sparkles, color: "#714B67", bg: "rgba(113, 75, 103, 0.1)" },
    { name: "Figma", category: "Tools & ERP", icon: SiFigma, color: "#F24E1E", bg: "rgba(242, 78, 30, 0.1)" },
    { name: "Docker", category: "Tools & ERP", icon: SiDocker, color: "#2496ED", bg: "rgba(36, 150, 237, 0.1)" },
    { name: "Git & GitHub", category: "Tools & ERP", icon: SiGithub, color: "#181717", bg: "rgba(100, 100, 100, 0.1)" },
    { name: "Postman", category: "Tools & ERP", icon: SiPostman, color: "#FF6C37", bg: "rgba(255, 108, 55, 0.1)" },
];

const TechMarquee = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredSkills = selectedCategory === "All" 
        ? allSkills 
        : allSkills.filter(s => s.category === selectedCategory);

    return (
        <section className="py-8">
            <div className="space-y-6">
                
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                        <Code2 size={20} className="text-emerald-500" />
                        <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                            Skills & Tech Arsenal
                        </h2>
                    </div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        My professional tools & technologies.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => {
                        const count = cat === "All" ? allSkills.length : allSkills.filter(s => s.category === cat).length;
                        const isSelected = selectedCategory === cat;

                        return (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                                    isSelected
                                        ? 'bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 shadow-xs'
                                        : 'bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'
                                }`}
                            >
                                <span>{cat}</span>
                                <span className={`px-1.5 py-0.2 rounded-full text-[10px] tabular-nums ${
                                    isSelected 
                                        ? 'bg-neutral-700 dark:bg-neutral-300 text-white dark:text-neutral-900' 
                                        : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400'
                                }`}>
                                    {count}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Skill Badges Grid */}
                <div className="flex flex-wrap gap-2.5 pt-1">
                    {filteredSkills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.2, delay: index * 0.02 }}
                                className="group relative flex items-center gap-2 px-3.5 py-2 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 shadow-2xs hover:shadow-xs transition-all duration-200 cursor-default hover:scale-105"
                            >
                                <div 
                                    className="p-1 rounded-full flex items-center justify-center shrink-0"
                                    style={{ backgroundColor: skill.bg }}
                                >
                                    <Icon size={14} style={{ color: skill.color }} />
                                </div>
                                <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                                    {skill.name}
                                </span>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Infinite Marquee ticker */}
                <div className="pt-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: "-50%" }}
                        transition={{
                            duration: 25,
                            ease: "linear",
                            repeat: Infinity
                        }}
                        className="flex gap-8 whitespace-nowrap pr-8 text-neutral-400 dark:text-neutral-600 text-xs uppercase tracking-widest font-mono font-medium"
                    >
                        {[...allSkills, ...allSkills].map((s, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <span>{s.name}</span>
                                <span className="text-emerald-500 opacity-60">•</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default TechMarquee;
