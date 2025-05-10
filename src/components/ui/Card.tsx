import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card = ({ children, className = '', hoverEffect = true }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      whileHover={hoverEffect ? { y: -10, transition: { duration: 0.3 } } : undefined}
      className={`bg-white rounded-lg shadow-soft overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;