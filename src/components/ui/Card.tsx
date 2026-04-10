import { motion } from 'framer-motion';
import type { CardProps } from '../../types';

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      className={`bg-white border border-border rounded-[40px] ${className}`}
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
