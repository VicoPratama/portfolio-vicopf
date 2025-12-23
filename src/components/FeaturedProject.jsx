import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import Button from './Button';
import { ExternalLink, Github, ArrowRight, CheckCircle2 } from 'lucide-react';

const FeaturedProject = () => {
    return (
        <SectionWrapper id="featured-project" className="bg-gray-950 border-b border-gray-800/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Image Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative group "
                >
                    <div className="absolute -inset-4 bg-gradient-to-r from-accent-blue/30 to-purple-500/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition duration-500" />
                    <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-800">
                        <img
                            src="/Screenshot (829).png"
                            alt="Meeting Room Booking System"
                            className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-700"
                        />
                        <div className="absolute inset-0 bg-gray-950/20 group-hover:bg-transparent transition duration-300" />
                    </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="flex items-center gap-2 mb-4">
                        <span className="w-12 h-[1px] bg-accent-blue" />
                        <span className="text-accent-blue uppercase tracking-widest text-sm font-semibold">Featured Project</span>
                    </div>

                    <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        BYD HAKA AUTO <br />
                        <span className="text-gray-400">Booking System</span>
                    </h2>

                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                        A centralized digital solution for managing meeting room reservations across the organization.
                        Replaced manual scheduling with a real-time, conflict-free booking engine powered by Supabase and automated email notifications.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        {[
                            "Real-time Conflict Detection",
                            "Automated Email Notifications",
                            "Admin Dashboard & Analytics",
                            "Role-based Access Control"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-gray-400">
                                <CheckCircle2 className="w-4 h-4 text-accent-blue" />
                                <span className="text-sm">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-3 mb-10">
                        {["Javascript", "Supabase", "Resend API"].map(tag => (
                            <span key={tag} className="px-4 py-1.5 rounded-full bg-gray-900 border border-gray-800 text-gray-300 text-sm font-mono">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-4">
                        <Button
                            href="https://bumiauto-ruang.vercel.app/" // Replace if needed
                            target="_blank"
                            variant="primary"
                            className="group bg-white text-black hover:bg-gray-100"
                        >
                            Live Demo
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            href="https://github.com/ict-bumiauto/bumiauto-ruang.git" // Replace if needed
                            target="_blank"
                            variant="outline"
                            className="border-gray-700 text-white hover:border-white hover:bg-transparent"
                        >
                            <Github className="w-4 h-4 mr-2" />
                            Source Code
                        </Button>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default FeaturedProject;
