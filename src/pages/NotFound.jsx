import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="py-24 flex flex-col items-center justify-center text-center space-y-4">
            <div className="satria-card p-10 max-w-md w-full space-y-4">
                <span className="text-6xl font-black font-display text-neutral-300 dark:text-neutral-700 select-none">
                    404
                </span>

                <h1 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 font-display">
                    Page Not Found
                </h1>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                    Oops! The page you are looking for does not exist or has been moved.
                </p>

                <div className="pt-2">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 text-xs font-medium hover:bg-neutral-800 dark:hover:bg-white transition-all shadow-xs"
                    >
                        <Home size={14} />
                        <span>Return to Home</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
