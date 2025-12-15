import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, className = "" }) => {
    return (
        <section id={id} className={`w-full py-20 px-6 md:px-12 lg:px-24 flex justify-center overflow-hidden ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full max-w-7xl relative z-10"
            >
                {children}
            </motion.div>
        </section>
    );
};

export default SectionWrapper;
