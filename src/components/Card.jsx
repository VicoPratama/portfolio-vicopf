import { motion } from 'framer-motion';

const Card = ({ children, className = "", delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay }}
            className={`glass-panel p-6 rounded-2xl hover:border-accent-blue/30 transition-colors duration-300 ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default Card;
