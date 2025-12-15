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
        { icon: <Mail className="text-white w-5 h-5" />, value: "vico.fajareno@gmail.com", label: "Email", link: "mailto:vico.fajareno@gmail.com" },
        { icon: <Phone className="text-white w-5 h-5" />, value: "+62 819 0721 1950", label: "Phone", link: "https://wa.me/6281907211950" },
        { icon: <MapPin className="text-white w-5 h-5" />, value: "Jakarta, Indonesia", label: "Location", link: null },
        { icon: <Linkedin className="text-white w-5 h-5" />, value: "Vico Pratama Fajareno", label: "LinkedIn", link: "https://www.linkedin.com/in/vico-pratama-fajareno-424a401a4/" }
    ];

    return (
        <SectionWrapper id="contact" className="bg-gray-950/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* Contact Info */}
                <div className="space-y-8">
                    <div className="bg-gray-900/40 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] shadow-xl">
                        <h3 className="text-2xl font-display font-bold text-white mb-6">Get in Touch</h3>
                        <p className="text-gray-400 mb-8 leading-relaxed font-light">
                            Have a project in mind or want to discuss a potential collaboration? I'm always open to new opportunities.
                        </p>

                        <div className="space-y-6">
                            {contactInfo.map((item, index) => (
                                <div key={index} className="flex items-start gap-4 group">
                                    <div className="bg-white/5 p-3 rounded-2xl border border-white/5 group-hover:scale-110 transition-transform duration-300">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">{item.label}</p>
                                        {item.link ? (
                                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-accent-blue transition-colors">
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="text-white font-medium">{item.value}</p>
                                        )}
                                    </div>
                                </div>
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
                    className="bg-gray-900/40 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2rem] shadow-2xl relative overflow-hidden"
                >
                    {/* Decorative gradient */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    <div className="space-y-6 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="user_name" className="text-sm font-medium text-gray-300 ml-1">Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    placeholder="John Doe"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue/50 focus:bg-white/10 transition-all duration-300"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="user_email" className="text-sm font-medium text-gray-300 ml-1">Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    placeholder="john@example.com"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue/50 focus:bg-white/10 transition-all duration-300"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium text-gray-300 ml-1">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Project Inquiry"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue/50 focus:bg-white/10 transition-all duration-300"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">Message</label>
                            <textarea
                                name="message"
                                rows="4"
                                placeholder="Tell me about your project..."
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue/50 focus:bg-white/10 transition-all duration-300 resize-none"
                            ></textarea>
                        </div>

                        {status.message && (
                            <div className={`p-4 rounded-lg text-sm ${status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                                {status.message}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2 shadow-lg hover:shadow-xl transform active:scale-[0.99]"
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
        </SectionWrapper>
    );
};

export default Contact;
