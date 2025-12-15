import { motion } from 'framer-motion';

const skills = [
    "React", "Node.js", "Vue.js", "Tailwind CSS", "Next.js",
    "Supabase", "PostgreSQL", "Figma", "Python", "Laravel", "PHP",
    "JavaScript", "GitHub", "Docker", "Resend API"
];

const TechMarquee = () => {
    return (
        <section className="py-10 bg-gray-950 overflow-hidden border-y border-gray-800/50">
            <div className="max-w-7xl mx-auto px-4 relative">

                <div
                    className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
                >
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: "-50%" }}
                        transition={{
                            duration: 20,
                            ease: "linear",
                            repeat: Infinity
                        }}
                        className="flex gap-12 whitespace-nowrap pr-12"
                    >
                        {/* Double the list to create seamless loop */}
                        {[...skills, ...skills].map((skill, index) => (
                            <div key={index} className="flex items-center gap-2 group">
                                <span className="text-2xl md:text-3xl font-bold text-gray-700 group-hover:text-gray-400 transition-colors cursor-default">
                                    {skill}
                                </span>
                                <span className="text-accent-blue text-xl opacity-40">•</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TechMarquee;
