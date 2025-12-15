import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
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
            className={`border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-gray-900 border-accent-blue/30' : 'bg-gray-900/30 hover:bg-gray-900/50'}`}
        >
            <button
                onClick={onClick}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
            >
                <span className={`font-medium text-lg transition-colors ${isOpen ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                    {question}
                </span>
                <span className={`ml-4 flex-shrink-0 p-1 rounded-full border transition-all ${isOpen ? 'bg-accent-blue border-accent-blue text-white' : 'border-gray-700 text-gray-500 group-hover:border-gray-500'}`}>
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
                        <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-gray-800/50 pt-4">
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
        <SectionWrapper id="faq" className="bg-gray-950">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                {/* Header */}
                <div className="lg:col-span-4">
                    <div className="sticky top-32">
                        <div className="w-12 h-12 bg-accent-blue/10 rounded-xl flex items-center justify-center mb-6 text-accent-blue">
                            <HelpCircle size={24} />
                        </div>
                        <h2 className="font-display text-4xl font-bold text-white mb-4">
                            Frequently Asked <br /><span className="text-accent-blue">Questions</span>
                        </h2>
                        <p className="text-gray-400 mb-8 max-w-sm">
                            Got questions? I've got answers. Here are some of the most common inquiries I receive.
                        </p>
                        <div className="hidden lg:block p-6 bg-gray-900 rounded-2xl border border-gray-800">
                            <p className="text-gray-300 text-sm mb-4">
                                Can't find what you're looking for?
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex items-center text-accent-blue font-medium hover:underline"
                            >
                                Contact me directly
                            </a>
                        </div>
                    </div>
                </div>

                {/* Accordion List */}
                <div className="lg:col-span-8 space-y-4">
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

                    <div className="lg:hidden mt-8 p-6 bg-gray-900 rounded-2xl border border-gray-800 text-center">
                        <p className="text-gray-300 text-sm mb-3">
                            Can't find what you're looking for?
                        </p>
                        <a
                            href="#contact"
                            className="text-accent-blue font-medium hover:underline"
                        >
                            Contact me directly
                        </a>
                    </div>
                </div>

            </div>
        </SectionWrapper>
    );
};

export default FAQ;
