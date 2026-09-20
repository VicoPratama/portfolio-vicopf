import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { Layers, Monitor, PenTool, Layout, ArrowUpRight } from 'lucide-react';

const services = [
    {
        icon: Monitor,
        title: "Web Development",
        description: "Building fast, responsive, and scalable web applications using modern technologies like React, Next.js, Tailwind CSS, and Laravel.",
        tags: ["React", "Next.js", "Node.js", "REST APIs"]
    },
    {
        icon: Layout,
        title: "Web Design",
        description: "Crafting modern, pixel-perfect visual designs and aesthetics that capture brand identity and engage visitors with intuitive user flows.",
        tags: ["Figma", "Responsive", "Modern UI", "Design Systems"]
    },
    {
        icon: PenTool,
        title: "UI/UX & Business Process",
        description: "Focusing on user journeys and business workflow optimization. Wireframing, usability testing, and ERP implementation with Odoo.",
        tags: ["User Research", "Wireframing", "Odoo ERP", "Prototyping"]
    }
];

const Services = () => {
    return (
        <SectionWrapper id="services">
            <div className="space-y-6">
                
                {/* Section Header */}
                <div className="flex items-center gap-2 border-b border-neutral-200 dark:border-neutral-800 pb-3">
                    <Layers size={20} className="text-emerald-500" />
                    <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                        Services & Offerings
                    </h2>
                </div>

                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    High-quality design and development solutions tailored to real-world business needs.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index}
                                className="satria-card p-6 flex flex-col justify-between group hover:scale-[1.02] transition-all"
                            >
                                <div>
                                    <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                                        <Icon size={20} />
                                    </div>
                                    <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal mb-6">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                                    <div className="flex flex-wrap gap-1">
                                        {service.tags.slice(0, 2).map((t) => (
                                            <span key={t} className="text-[10px] px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <a 
                                        href="#contact" 
                                        className="p-1.5 rounded-lg text-neutral-400 group-hover:text-emerald-500 transition-colors"
                                        aria-label={`Inquire about ${service.title}`}
                                    >
                                        <ArrowUpRight size={16} />
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </SectionWrapper>
    );
};

export default Services;
