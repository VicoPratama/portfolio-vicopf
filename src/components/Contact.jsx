import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import SectionWrapper from './SectionWrapper';
import { Mail, Phone, MapPin, Send, Loader2, Linkedin, MessageSquare } from 'lucide-react';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        const SERVICE_ID = 'service_gh8t8fm';
        const TEMPLATE_ID = 'template_drogv5d';
        const PUBLIC_KEY = 'YLQYhLzt7FcRdrqee';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then(() => {
                setLoading(false);
                setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
                formRef.current.reset();
                setTimeout(() => setStatus({ type: '', message: '' }), 5000);
            }, (error) => {
                setLoading(false);
                console.error(error);
                setStatus({ type: 'error', message: 'Something went wrong. Please try again or email me directly.' });
            });
    };

    const contactInfo = [
        { icon: Mail, value: "vico.fajareno@gmail.com", label: "Email", link: "mailto:vico.fajareno@gmail.com" },
        { icon: Phone, value: "+62 819 0721 1950", label: "WhatsApp / Phone", link: "https://wa.me/6281907211950" },
        { icon: MapPin, value: "South Jakarta, Indonesia", label: "Location", link: null },
        { icon: Linkedin, value: "Vico Pratama Fajareno Fajareno", label: "LinkedIn", link: "https://www.linkedin.com/in/vico-pratama-fajareno-424a401a4/" }
    ];

    return (
        <SectionWrapper id="contact">
            <div className="space-y-6">
                
                {/* Section Header */}
                <div className="flex items-center gap-2 border-b border-neutral-200 dark:border-neutral-800 pb-3">
                    <MessageSquare size={20} className="text-emerald-500" />
                    <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                        Get In Touch
                    </h2>
                </div>

                <div className="satria-card p-6 sm:p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        
                        {/* Info Column */}
                        <div className="lg:col-span-5 space-y-6">
                            <div>
                                <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 font-display mb-2">
                                    Let's Build Something Together
                                </h3>
                                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                                    Have a project in mind, an inquiry, or looking for a software engineer to join your team? Feel free to reach out.
                                </p>
                            </div>

                            <div className="space-y-3 pt-2">
                                {contactInfo.map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={index} className="flex items-center gap-3 p-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                                            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                                                <Icon size={16} />
                                            </div>
                                            <div className="min-w-0">
                                                <p className="text-[10px] uppercase font-mono font-medium text-neutral-400 dark:text-neutral-500">
                                                    {item.label}
                                                </p>
                                                {item.link ? (
                                                    <a 
                                                        href={item.link} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer" 
                                                        className="text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors truncate block"
                                                    >
                                                        {item.value}
                                                    </a>
                                                ) : (
                                                    <p className="text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200 truncate">
                                                        {item.value}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="lg:col-span-7">
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label htmlFor="user_name" className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="user_name"
                                            placeholder="Your Name"
                                            required
                                            className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 text-xs sm:text-sm placeholder-neutral-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label htmlFor="user_email" className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="user_email"
                                            placeholder="name@domain.com"
                                            required
                                            className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 text-xs sm:text-sm placeholder-neutral-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label htmlFor="subject" className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Project Inquiry / Job Opportunity"
                                        required
                                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 text-xs sm:text-sm placeholder-neutral-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label htmlFor="message" className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        rows="4"
                                        placeholder="Tell me about your project or inquiry..."
                                        required
                                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 text-xs sm:text-sm placeholder-neutral-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none"
                                    ></textarea>
                                </div>

                                {status.message && (
                                    <div className={`p-3 rounded-xl text-xs font-medium ${
                                        status.type === 'success' 
                                            ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20' 
                                            : 'bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20'
                                    }`}>
                                        {status.message}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-2.5 px-4 rounded-xl bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 font-medium text-xs sm:text-sm hover:bg-neutral-800 dark:hover:bg-white transition-all shadow-sm hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 className="animate-spin" size={16} />
                                            <span>Sending Message...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send size={15} />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>

                    </div>
                </div>

            </div>
        </SectionWrapper>
    );
};

export default Contact;
