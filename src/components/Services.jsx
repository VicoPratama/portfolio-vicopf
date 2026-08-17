import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { Monitor, PenTool, Layout, ArrowUpRight } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Monitor className="w-8 h-8" />,
            title: "Web Development",
            description: "Building fast, responsive, and scalable websites using modern technologies like React, Tailwind CSS, and Laravel.",
            highlight: true
        },
        {
            icon: <Layout className="w-8 h-8 text-zblack group-hover:text-zpurple transition-colors" />,
            title: "Web Design",
            description: "Crafting beautiful, pixel-perfect visual designs and aesthetics that capture your brand identity and engage visitors.",
            highlight: false
        },
        {
            icon: <PenTool className="w-8 h-8 text-zblack group-hover:text-zpurple transition-colors" />,
            title: "UI/UX Design",
            description: "Focusing on the user journey and experience. Creating logic-driven interfaces through research, wireframing, and usability testing.",
            highlight: false
        }
    ];

    return (
        <SectionWrapper id="services" className="bg-[#f4f4f5] py-24 relative overflow-hidden">
            {/* Removed ambient glows */}

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-display text-zblack text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight uppercase tracking-tight">
                            Here's What <br/> I Can Do To Help You <br/> Bring Your <span className="text-transparent" style={{ WebkitTextStroke: '2px var(--color-zlime)' }}>Vision To Life</span>
                        </h2>
                        <p className="text-zblack/70 font-light max-w-sm">
                            I help bring ideas to life with high-quality design and development solutions tailored to your needs.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className={`relative p-8 rounded-[2rem] transition-all duration-500 flex flex-col justify-between group overflow-hidden ${
                                    service.highlight 
                                        ? 'bg-zlime text-zblack shadow-xl' 
                                        : 'bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] text-zblack/70 border-[3px] border-zblack hover:shadow-[4px_4px_0px_0px_var(--color-zpurple)] shadow-xl'
                                }`}
                            >
                                {/* Removed abstract shape */}

                                <div>
                                    <h3 className={`text-2xl font-display font-black mb-4 tracking-tight uppercase ${service.highlight ? 'text-zblack' : 'text-zblack group-hover:text-zlime transition-colors'}`}>
                                        {service.title}
                                    </h3>
                                    <p className={`font-medium text-sm leading-relaxed mb-12 relative z-10 ${service.highlight ? 'text-zblack/70' : 'text-zblack/70 font-light'}`}>
                                        {service.description}
                                    </p>
                                </div>
                                <div className="flex justify-between items-end mt-auto relative z-10">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${service.highlight ? 'bg-[#f4f4f5]/10 text-zblack' : 'bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] group-hover:bg-zpurple/10'}`}>
                                        {service.icon}
                                    </div>
                                    <a href="#contact" className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 ${service.highlight ? 'bg-[#f4f4f5] text-zlime' : 'bg-zgray text-zpurple group-hover:bg-zlime group-hover:text-zblack'}`}>
                                        <ArrowUpRight size={20} />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Services;
