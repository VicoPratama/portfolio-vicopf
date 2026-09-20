import { motion } from 'framer-motion';

const Button = ({ children, onClick, href, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200";

    const variants = {
        primary: "bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-white shadow-sm hover:scale-[1.02]",
        secondary: "bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700/80 shadow-xs",
        outline: "bg-transparent border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800",
        accent: "bg-emerald-500 hover:bg-emerald-600 text-white shadow-sm hover:scale-[1.02]"
    };

    const chosenVariant = variants[variant] || variants.primary;

    if (href) {
        return (
            <motion.a
                href={href}
                className={`${baseStyles} ${chosenVariant} ${className}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                {...props}
            >
                {children}
            </motion.a>
        );
    }

    return (
        <motion.button
            onClick={onClick}
            className={`${baseStyles} ${chosenVariant} ${className}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
