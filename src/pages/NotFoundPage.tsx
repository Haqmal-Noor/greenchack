import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HardHat, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center bg-gray-50 py-20 px-4"
    >
      <div className="text-center max-w-lg">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <HardHat size={80} className="text-primary-600 mx-auto" />
        </motion.div>
        
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-6xl font-bold font-heading mb-4"
        >
          404
        </motion.h1>
        
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-2xl font-bold mb-6"
        >
          Page Not Found
        </motion.h2>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-600 mb-8"
        >
          Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
        </motion.p>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link 
            to="/" 
            className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-md transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Homepage
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NotFoundPage;