import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';
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

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <SectionWrapper id="faq">
            <div className="space-y-6">
                
                {/* Section Header */}
                <div className="flex items-center gap-2 border-b border-neutral-200 dark:border-neutral-800 pb-3">
                    <HelpCircle size={20} className="text-emerald-500" />
                    <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                        Frequently Asked Questions
                    </h2>
                </div>

                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Find answers to common questions about my technical background, workflow, and availability.
                </p>

                {/* FAQ Accordion List */}
                <div className="space-y-3 pt-2">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div 
                                key={index} 
                                className={`satria-card overflow-hidden transition-all duration-200 ${
                                    isOpen ? 'border-neutral-300 dark:border-neutral-700 bg-neutral-50/50 dark:bg-neutral-900/80' : ''
                                }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left focus:outline-none gap-4"
                                >
                                    <span className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-100">
                                        {faq.question}
                                    </span>
                                    <div className={`p-1.5 rounded-full transition-transform duration-200 shrink-0 ${
                                        isOpen ? 'rotate-180 text-emerald-500' : 'text-neutral-400'
                                    }`}>
                                        <ChevronDown size={18} />
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-5 pb-5 pt-1 border-t border-neutral-100 dark:border-neutral-800/80">
                                                <p className="text-xs sm:text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

            </div>
        </SectionWrapper>
    );
};

export default FAQ;
