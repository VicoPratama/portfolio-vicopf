import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { Monitor, PenTool, Layout, Smartphone, Video } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Monitor className="w-8 h-8 text-accent-blue" />,
            title: "Web Development",
            description: "Building fast, responsive, and scalable websites using modern technologies like React, Tailwind CSS, and Laravel. From landing pages to complex web applications.",
            features: ["Frontend Development", "Backend Systems", "CMS Customization", "Performance Optimization"]
        },
        {
            icon: <Layout className="w-8 h-8 text-accent-blue" />,
            title: "Web Design",
            description: "Crafting beautiful, pixel-perfect visual designs and aesthetics that capture your brand identity and engage visitors.",
            features: ["Visual Design", "Creative Direction", "Responsive Layouts", "Brand Consistency"]
        },
        {
            icon: <PenTool className="w-8 h-8 text-accent-blue" />,
            title: "UI/UX Design",
            description: "Focusing on the user journey and experience. Creating logic-driven interfaces through research, wireframing, and usability testing.",
            features: ["User Research", "Wireframing", "User Flows", "Prototyping"]
        }
    ];

    return (
        <SectionWrapper id="services" className="bg-gray-950">
            <div className="mb-16 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-display text-white text-4xl md:text-5xl font-bold mb-4"
                >
                    My <span className="text-accent-blue">Services</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-300 max-w-2xl mx-auto"
                >
                    I help bring ideas to life with high-quality design and development solutions.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="bg-gray-900/40 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] hover:bg-gray-800/40 hover:border-white/20 transition-all duration-500 group shadow-lg"
                    >
                        <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                            {service.icon}
                        </div>
                        <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-accent-blue transition-colors tracking-tight">{service.title}</h3>
                        <p className="text-gray-400 mb-6 leading-relaxed font-light">
                            {service.description}
                        </p>
                        <ul className="space-y-3">
                            {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center text-gray-400 text-sm font-medium">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent-blue mr-3 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Services;
