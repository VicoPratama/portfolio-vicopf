import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const faqs = [
    {
        question: "Are you available for freelance projects?",
        answer: "Yes, I am currently open to freelance opportunities. I specialize in building custom web applications, landing pages, and dashboard interfaces. Feel free to reach out to discuss your project needs."
    },
    {
        question: "What is your preferred tech stack?",
        answer: "My core stack involves React, Next.js, and Tailwind CSS for the frontend, coupled with Node.js, Supabase, or Laravel for the backend. However, I am adaptable and can work with various other technologies depending on the project requirements."
    },
    {
        question: "Do you offer web design services?",
        answer: "Absolutely. I provide end-to-end web design and development services. This includes UI/UX design in Figma, prototyping, and converting those designs into fully functional, responsive websites."
    },
    {
        question: "Can you help with existing projects?",
        answer: "Yes, I can assist with maintaining, updating, or refactoring existing codebases. whether it's fixing bugs, improving performance, or adding new features to your current application."
    }
];

const FAQItem = ({ question, answer, isOpen, onClick, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="border-b border-zblack last:border-0"
        >
            <button
                onClick={onClick}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
            >
                <span className={`font-medium text-lg transition-colors ${isOpen ? 'text-zblack' : 'text-zblack/70 group-hover:text-zblack'}`}>
                    {question}
                </span>
                <span className={`ml-4 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-zlime text-black text-zblack' : 'bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] text-zblack/70 group-hover:bg-white/10'}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="pb-6 text-zblack/70 leading-relaxed pr-12">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <SectionWrapper id="faq" className="bg-[#f4f4f5] py-24">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24">
                    
                    {/* Header */}
                    <div>
                        <motion.h2 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-zblack mb-6 leading-tight"
                        >
                            Got Questions? We've <br/> Got Answers.
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-zblack/70 mb-8 font-light"
                        >
                            Find answers to common questions about my services, process, and technical capabilities.
                        </motion.p>
                    </div>

                    {/* Accordion List */}
                    <div>
                        <div className="bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] backdrop-blur-xl rounded-3xl p-6 md:p-8 border-[3px] border-zblack">
                            {faqs.map((faq, index) => (
                                <FAQItem
                                    key={index}
                                    index={index}
                                    question={faq.question}
                                    answer={faq.answer}
                                    isOpen={openIndex === index}
                                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </SectionWrapper>
    );
};

export default FAQ;
