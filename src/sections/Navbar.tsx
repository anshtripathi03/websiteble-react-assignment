import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '../utils/constants';
import { X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md py-6 border-b border-black/5"
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-8">
          <a href="#home" className="text-[24px] font-display font-medium tracking-tight text-primary">
            Elementum
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs uppercase tracking-widest font-bold text-primary/70 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="flex lg:hidden items-center">
            <button 
              onClick={() => setIsOpen(true)}
              className="p-2 text-primary"
            >
               <div className="space-y-1.5">
                  <div className="w-6 h-0.5 bg-primary" />
                  <div className="w-6 h-0.5 bg-primary" />
               </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar (NOW OUTSIDE NAV FOR STACKING CONTEXT) */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <div className="fixed inset-0 z-[1000]">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            
            {/* Sidebar Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-[85%] max-w-[320px] bg-white shadow-[0_0_50px_rgba(0,0,0,0.1)] p-10 flex flex-col border-l border-black/5"
              style={{ backgroundColor: '#ffffff' }}
            >
              <div className="flex justify-between items-center mb-16">
                 <span className="text-xl font-display font-medium text-primary">Menu</span>
                 <button onClick={() => setIsOpen(false)} className="p-2 text-primary">
                    <X size={24} />
                 </button>
              </div>

              <div className="flex flex-col gap-8">
                {NAV_ITEMS.map((item, idx) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-display font-light hover:translate-x-4 transition-transform text-primary"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto">
                 <p className="text-[10px] uppercase tracking-widest text-secondary font-bold">
                    © 2026 Elementum
                 </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
