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
            icon: <Layout className="w-8 h-8 text-white group-hover:text-pink-500 transition-colors" />,
            title: "Web Design",
            description: "Crafting beautiful, pixel-perfect visual designs and aesthetics that capture your brand identity and engage visitors.",
            highlight: false
        },
        {
            icon: <PenTool className="w-8 h-8 text-white group-hover:text-pink-500 transition-colors" />,
            title: "UI/UX Design",
            description: "Focusing on the user journey and experience. Creating logic-driven interfaces through research, wireframing, and usability testing.",
            highlight: false
        }
    ];

    return (
        <SectionWrapper id="services" className="bg-[#0a0a0a] py-24 relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-pink-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-display text-white text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight uppercase tracking-tight">
                            Here's What <br/> I Can Do To Help You <br/> Bring Your <span className="text-transparent" style={{ WebkitTextStroke: '2px #2dd4bf' }}>Vision To Life</span>
                        </h2>
                        <p className="text-gray-400 font-light max-w-sm">
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
                                        ? 'bg-gradient-to-br from-teal-400 to-teal-600 text-black shadow-xl shadow-teal-500/20' 
                                        : 'bg-white/5 backdrop-blur-xl text-gray-400 border border-white/10 hover:border-pink-500/50 shadow-xl'
                                }`}
                            >
                                {/* Abstract shape bg for highlighted card */}
                                {service.highlight && (
                                    <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
                                )}

                                <div>
                                    <h3 className={`text-2xl font-display font-black mb-4 tracking-tight uppercase ${service.highlight ? 'text-black' : 'text-white group-hover:text-pink-400 transition-colors'}`}>
                                        {service.title}
                                    </h3>
                                    <p className={`font-medium text-sm leading-relaxed mb-12 relative z-10 ${service.highlight ? 'text-teal-950' : 'text-gray-400 font-light'}`}>
                                        {service.description}
                                    </p>
                                </div>
                                <div className="flex justify-between items-end mt-auto relative z-10">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${service.highlight ? 'bg-black/10 text-black' : 'bg-white/5 group-hover:bg-pink-500/10'}`}>
                                        {service.icon}
                                    </div>
                                    <button className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 ${service.highlight ? 'bg-black text-teal-400' : 'bg-white/5 text-white group-hover:bg-pink-500 group-hover:text-white'}`}>
                                        <ArrowUpRight size={20} />
                                    </button>
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
