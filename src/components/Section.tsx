import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
  editorial?: boolean;
}

export default function Section({ children, className, id, fullWidth = false, editorial = false }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-24 md:py-32 overflow-hidden",
        !fullWidth && "px-6 md:px-12",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "mx-auto",
          !fullWidth && !editorial && "max-w-7xl",
          editorial && "md:grid md:grid-cols-[80px_1.2fr_1fr]"
        )}
      >
        {editorial && <div className="hidden md:block border-r border-brand-black/5 mr-12" />}
        <div className={cn(editorial ? "md:col-span-2" : "w-full")}>
          {children}
        </div>
      </motion.div>
    </section>
  );
}
