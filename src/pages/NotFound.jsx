import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import Button from '../components/Button';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center px-4 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="font-display text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-500 mb-4 select-none">
                    404
                </h1>
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-display text-3xl md:text-4xl font-bold text-white mb-6"
            >
                Page Not Found
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-gray-400 text-lg mb-10 max-w-md"
            >
                Oops! The page you are looking for keeps drifting into the void. Let's get you back to familiar ground.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
                <Link to="/">
                    <Button variant="primary" className="bg-white hover:bg-gray-200 text-black font-bold border-none px-8 py-3 rounded-full flex items-center gap-2 transition-all">
                        <Home className="w-4 h-4" />
                        Return Home
                    </Button>
                </Link>
            </motion.div>

            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-blue/5 rounded-full blur-3xl opacity-20 animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
            </div>
        </div>
    );
};

export default NotFound;
