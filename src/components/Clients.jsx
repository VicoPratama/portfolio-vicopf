import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
const clients = [
    {
        name: "BYD HAKA Auto",
        sector: "Automotive Industry",
        icon: <img src="/haka-auto-logo.png" alt="BYD HAKA Auto" className="w-auto h-8 md:h-10 object-contain" />
    },
    {
        name: "Bosles Bimbel",
        sector: "Education",
        icon: <img src="/bosles-logo.jpg" alt="Bosles Bimbel" className="w-auto h-16 md:h-20 object-contain rounded-lg" />
    }
];

const Clients = () => {
    return (
        <SectionWrapper id="clients" className="bg-[#0a0a0a] py-24 relative overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-4xl md:text-5xl font-black mb-6 text-white uppercase tracking-tight"
                    >
                        Trusted By <br/>
                        <span className="text-transparent" style={{ WebkitTextStroke: '2px #2dd4bf' }}>Great Companies</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 font-light max-w-2xl mx-auto"
                    >
                        I've had the privilege of working with amazing organizations across various industries, delivering scalable solutions and exceptional digital experiences.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * index }}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] flex flex-col items-center justify-center text-center group hover:bg-white/10 hover:border-teal-400/50 transition-all shadow-lg hover:shadow-teal-400/10 cursor-default"
                        >
                            <div className="w-full h-24 bg-black/20 rounded-2xl flex items-center justify-center mb-6 p-4 group-hover:bg-black/40 transition-colors">
                                {client.icon}
                            </div>
                            <h3 className="text-white font-bold text-xl mb-2 tracking-tight group-hover:text-teal-400 transition-colors">{client.name}</h3>
                            <p className="text-pink-500 font-medium text-sm tracking-widest uppercase">{client.sector}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Clients;
