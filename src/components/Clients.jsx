import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { Building2 } from 'lucide-react';

const clients = [
    {
        name: "BYD HAKA Auto",
        sector: "Automotive Industry",
        icon: <img src="/haka-auto-logo.png" alt="BYD HAKA Auto" className="w-auto h-8 md:h-10 object-contain" />
    },
    {
        name: "Bosles Bimbel",
        sector: "Education",
        icon: <img src="/bosles-logo.jpg" alt="Bosles Bimbel" className="w-auto h-14 md:h-16 object-contain rounded-lg" />
    }
];

const Clients = () => {
    return (
        <SectionWrapper id="clients">
            <div className="space-y-6">
                
                {/* Section Header */}
                <div className="flex items-center gap-2 border-b border-neutral-200 dark:border-neutral-800 pb-3">
                    <Building2 size={20} className="text-emerald-500" />
                    <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                        Clients & Collaborations
                    </h2>
                </div>

                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Trusted by organizations across industries to deliver impactful digital solutions.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {clients.map((client, index) => (
                        <div
                            key={index}
                            className="satria-card p-6 flex flex-col items-center justify-center text-center group hover:scale-[1.01] transition-all"
                        >
                            <div className="w-full h-20 bg-neutral-100 dark:bg-neutral-800/60 rounded-xl flex items-center justify-center mb-4 p-3 group-hover:bg-neutral-200/60 dark:group-hover:bg-neutral-800 transition-colors">
                                {client.icon}
                            </div>
                            <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                                {client.name}
                            </h3>
                            <p className="text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                                {client.sector}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </SectionWrapper>
    );
};

export default Clients;
