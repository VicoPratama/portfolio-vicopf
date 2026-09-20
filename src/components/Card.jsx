import { motion } from 'framer-motion';

const Card = ({ children, className = "", delay = 0, onClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: delay }}
            onClick={onClick}
            className={`satria-card p-6 ${onClick ? 'cursor-pointer' : ''} ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default Card;
