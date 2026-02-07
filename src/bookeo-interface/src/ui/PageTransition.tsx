import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type PageTransitionProps = {
  children: ReactNode;
};

export const PageTransition = ({ children }: PageTransitionProps) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    {children}
  </motion.div>
);
