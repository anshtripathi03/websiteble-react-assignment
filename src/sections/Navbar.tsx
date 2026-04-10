import { motion } from 'framer-motion';
import { NAV_ITEMS } from '../utils/constants';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md py-8"
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-12">
        <a href="#home" className="text-[28px] font-display font-medium tracking-tight text-primary">
          Elementum
        </a>

        <div className="hidden lg:flex items-center gap-12">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-primary hover:text-secondary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center">
          <button className="flex flex-col gap-1.5 p-2">
            <div className="w-8 h-0.5 bg-primary" />
            <div className="w-8 h-0.5 bg-primary" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
