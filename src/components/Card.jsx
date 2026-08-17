import { motion } from 'framer-motion';

const Card = ({ children, className = "", delay = 0, onClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay }}
            onClick={onClick}
            className={`bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212] p-6 rounded-2xl hover:shadow-[4px_4px_0px_0px_var(--color-zlime)] transition-colors duration-300 ${onClick ? 'cursor-pointer' : ''} ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default Card;
