import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import Card from './Card';
import Button from './Button';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "Portfolio V2",
        description: "My personal digital playground featuring a modern dark interface, smooth animations, and a fully responsive layout.",
        tags: ["React", "Tailwind CSS", "Framer Motion"],
        image: "/logo.png",
        github: "https://github.com/VicoPratama/portfolio-vicopf",
        demo: "https://portfolio-vicopf.vercel.app/"
    },
    {
        title: "Bosles Bimbel (On Progress)",
        description: "A comprehensive tutoring platform in Semarang featuring a student registration system, class scheduling, and an integrated tutor dashboard.",
        tags: ["React", "Supabase", "Tailwind CSS", "Framer Motion"],
        image: "/bosles-bimbel.png",
        github: "https://github.com/VicoPratama/bosles-bimbel",
        demo: "https://bosles-bimbel.vercel.app/"
    },
    {
        title: "BYD HAKA AUTO Meeting Room Booking System",
        description: "Providing a digitized, transparent, and real-time meeting room booking system for all HAKA Auto employees.",
        tags: ["Javascript", "Supabase", "Resend API"],
        image: "/Screenshot (829).png",
        github: "https://github.com/ict-bumiauto/bumiauto-ruang.git",
        demo: "https://bumiauto-ruang.vercel.app/",
        subtitle: "In Collaboration with BYD HAKA Auto"
    },
    {
        title: "HAKA AUTO Rekrutmen",
        description: "Recruitment platform for HAKA Auto to streamline the hiring process.",
        tags: ["React", "Tailwind CSS"],
        image: "/haka-auto-rekrutmen.png",
        github: "https://github.com/ict-bumiauto/hakaauto-rekrutmen/tree/main",
        demo: "https://hakaauto-rekrutmen.vercel.app/",
        subtitle: "In Collaboration with BYD HAKA Auto"
    },
    {
        title: "ADAS Helpdesk System",
        description: "A comprehensive helpdesk system for HAKA Auto employees to report technical issues and track resolutions.",
        tags: ["React", "Supabase", "Tailwind CSS"],
        image: "/adas-helpdesk-dashboard.png",
        github: "https://github.com/ict-bumiauto/hakaauto-ruang",
        demo: "https://adas-helpdesk-hakaauto.vercel.app/",
        subtitle: "In Collaboration with BYD HAKA Auto"
    },
    {
        title: "BYD HAKA Auto Link Shortener",
        description: "A custom, secure link shortener and click-analytics dashboard system designed for HAKA Auto's internal and external marketing campaigns.",
        tags: ["React", "Node.js", "Express", "Supabase"],
        image: "/bumiauto-shortener.png",
        github: "https://github.com/hilmialbiruni48/bumiauto-shortener",
        demo: "https://github.com/hilmialbiruni48/bumiauto-shortener",
        subtitle: "In Collaboration with BYD HAKA Auto"
    },
    {
        title: "Tebet to BSD (Transit Planner)",
        description: "A specialized transit routing planner and travel guide that optimizes KRL Commuter Line routes between Tebet and Bumi Serpong Damai (BSD).",
        tags: ["React", "Leaflet", "Tailwind CSS"],
        image: "/tebet-to-bsd.png",
        github: "https://github.com/VicoPratama/tebet-to-bsd",
        demo: "https://github.com/VicoPratama/tebet-to-bsd"
    },
    {
        title: "PDF to Image Converter",
        description: "A clean, browser-based utility that allows users to quickly drop PDF documents and convert their pages into high-quality JPEG/PNG image formats.",
        tags: ["JavaScript", "HTML5", "Tailwind CSS", "PDF.js"],
        image: "/pdf-to-image.png",
        github: "https://github.com/VicoPratama/pdf-to-image",
        demo: "https://github.com/VicoPratama/pdf-to-image"
    },
    {
        title: "info UMKM",
        description: "An interactive directory and informational platform for Micro, Small and Medium Enterprises (UMKM), designed to promote and discover local businesses.",
        tags: ["React", "Vite", "Tailwind CSS", "Mapbox"],
        image: "/info-umkm.png",
        github: "https://github.com/AdheIndraWahyudhy/infoUMKM",
        demo: "https://github.com/AdheIndraWahyudhy/infoUMKM"
    }
];

const Projects = () => {
    return (
        <SectionWrapper id="projects">
            <div className="mb-16 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-display text-4xl md:text-5xl font-bold mb-4"
                >
                    Selected <span className="text-accent-blue">Works</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-300 max-w-2xl mx-auto"
                >
                    Here are some of my recent projects that showcase my skills in design and development.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <Card key={index} delay={index * 0.1} className="flex flex-col h-full group p-0 overflow-hidden bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500">
                        <div className="relative overflow-hidden h-56 w-full">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gray-950/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                <Button
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="primary"
                                    className="p-3 rounded-full !px-3 bg-white text-black hover:bg-gray-100 border-none shadow-lg"
                                >
                                    <ExternalLink size={20} />
                                </Button>
                                <Button
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="secondary"
                                    className="p-3 rounded-full !px-3 bg-white/20 text-white backdrop-blur-md hover:bg-white/30 border-none"
                                >
                                    <Github size={20} />
                                </Button>
                            </div>
                        </div>

                        <div className="p-8 flex-1 flex flex-col">
                            {project.subtitle && (
                                <span className="text-accent-blue text-xs font-semibold uppercase tracking-wider mb-2 block">
                                    🤝 {project.subtitle}
                                </span>
                            )}
                            <h3 className="text-2xl font-display font-bold mb-3 text-white tracking-tight leading-tight">{project.title}</h3>
                            <p className="text-gray-400 text-sm mb-6 flex-1 font-light leading-relaxed">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 border border-white/5">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Projects;
