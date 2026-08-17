import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import SectionWrapper from './SectionWrapper';
import { Mail, Phone, MapPin, Send, Loader2, Linkedin } from 'lucide-react';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
        const SERVICE_ID = 'service_gh8t8fm';
        const TEMPLATE_ID = 'template_drogv5d';
        const PUBLIC_KEY = 'YLQYhLzt7FcRdrqee';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then((result) => {
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
        { icon: <Mail className="text-zlime w-5 h-5" />, value: "vico.fajareno@gmail.com", label: "Email", link: "mailto:vico.fajareno@gmail.com" },
        { icon: <Phone className="text-zlime w-5 h-5" />, value: "+62 819 0721 1950", label: "Phone", link: "https://wa.me/6281907211950" },
        { icon: <MapPin className="text-zlime w-5 h-5" />, value: "Jakarta, Indonesia", label: "Location", link: null },
        { icon: <Linkedin className="text-zlime w-5 h-5" />, value: "Vico Pratama Fajareno", label: "LinkedIn", link: "https://www.linkedin.com/in/vico-pratama-fajareno-424a401a4/" }
    ];

    return (
        <SectionWrapper id="contact" className="bg-[#f4f4f5] py-24">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <motion.h2 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-zblack mb-6 leading-tight"
                            >
                                Let's Build <br/> Something <br/> <span className="text-zlime">Together</span>
                            </motion.h2>
                            <motion.p 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-zblack/70 leading-relaxed font-light mb-12 max-w-md"
                            >
                                Have a project in mind or want to discuss a potential collaboration? I'm always open to new opportunities.
                            </motion.p>

                            <div className="space-y-6">
                                {contactInfo.map((item, index) => (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + (index * 0.1) }}
                                        key={index} 
                                        className="flex items-start gap-4 group"
                                    >
                                        <div className="bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] backdrop-blur-xl p-3 rounded-2xl border-[3px] border-zblack group-hover:border-zblack transition-all duration-300">
                                            {item.icon}
                                        </div>
                                        <div className="flex flex-col justify-center h-full">
                                            <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">{item.label}</p>
                                            {item.link ? (
                                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-zblack font-medium hover:text-zlime transition-colors">
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p className="text-zblack font-medium">{item.value}</p>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <motion.form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] backdrop-blur-xl border-[3px] border-zblack p-8 md:p-10 rounded-[2rem] shadow-2xl relative overflow-hidden"
                    >
                        <div className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="user_name" className="text-sm font-medium text-zblack/70 ml-1">Name</label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        placeholder="John Doe"
                                        required
                                        className="w-full bg-[#f4f4f5] border-[3px] border-zblack rounded-xl px-4 py-3 text-zblack placeholder-gray-600 focus:outline-none focus:border-zlime/50 transition-all duration-300"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="user_email" className="text-sm font-medium text-zblack/70 ml-1">Email</label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        placeholder="john@example.com"
                                        required
                                        className="w-full bg-[#f4f4f5] border-[3px] border-zblack rounded-xl px-4 py-3 text-zblack placeholder-gray-600 focus:outline-none focus:border-zlime/50 transition-all duration-300"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-zblack/70 ml-1">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Project Inquiry"
                                    required
                                    className="w-full bg-[#f4f4f5] border-[3px] border-zblack rounded-xl px-4 py-3 text-zblack placeholder-gray-600 focus:outline-none focus:border-zlime/50 transition-all duration-300"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-zblack/70 ml-1">Message</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    placeholder="Tell me about your project..."
                                    required
                                    className="w-full bg-[#f4f4f5] border-[3px] border-zblack rounded-xl px-4 py-3 text-zblack placeholder-gray-600 focus:outline-none focus:border-zlime/50 transition-all duration-300 resize-none"
                                ></textarea>
                            </div>

                            {status.message && (
                                <div className={`p-4 rounded-lg text-sm ${status.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                                    {status.message}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-zlime border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] active:translate-x-1 active:translate-y-1 active:shadow-none text-black font-bold py-4 rounded-xl hover:bg-zlime/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="animate-spin" size={20} />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
