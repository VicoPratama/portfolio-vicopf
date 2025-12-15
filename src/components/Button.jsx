import { motion } from 'framer-motion';

const Button = ({ children, onClick, href, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 relative overflow-hidden group";

    const variants = {
        primary: "bg-white text-gray-900 hover:bg-gray-100 shadow-lg hover:shadow-xl border border-transparent",
        secondary: "bg-gray-800 border border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white hover:border-gray-600",
        outline: "bg-transparent border border-gray-600 text-gray-300 hover:border-white hover:text-white hover:bg-white/5"
    };

    const content = (
        <>
            <span className="relative z-10">{children}</span>
            {variant === 'primary' && (
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            )}
        </>
    );

    if (href) {
        return (
            <motion.a
                href={href}
                className={`${baseStyles} ${variants[variant]} ${className}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                {...props}
            >
                {content}
            </motion.a>
        );
    }

    return (
        <motion.button
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            {...props}
        >
            {content}
        </motion.button>
    );
};

export default Button;
