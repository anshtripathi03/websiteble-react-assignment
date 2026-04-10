import { motion } from 'framer-motion';

export default function Newsletter() {
  return (
    <section className="pt-16 pb-8 relative overflow-hidden flex flex-col items-center justify-center">
      {/* Figma 3x Wavy Lines at top */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 flex gap-4 opacity-40">
        {[1, 2, 3].map((i) => (
           <motion.svg 
             key={i} 
             viewBox="0 0 100 40" 
             className="w-24 h-12 text-accent-orange"
             animate={{ x: [0, 10, 0] }}
             transition={{ duration: 4, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
           >
             <path d="M0,20 Q25,0 50,20 T100,20" fill="none" stroke="currentColor" strokeWidth="3" />
           </motion.svg>
        ))}
      </div>

      <div className="max-w-base text-center relative z-10 px-6">
        <motion.h2 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-[64px] md:text-[88px] font-display font-medium leading-[0.95] tracking-tight text-primary mb-8"
        >
          Subscribe to <br />
          our newsletter
        </motion.h2>

        <p className="text-[12px] text-primary/60 uppercase tracking-[0.4em] font-bold mb-16">
          To receive our daily news and much more about us!
        </p>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
        >
          <button className="bg-primary text-white text-[12px] font-bold uppercase tracking-[0.3em] px-16 py-6 rounded-full hover:scale-105 transition-transform shadow-2xl">
             Subscribe Now
          </button>
        </motion.div>
      </div>

      {/* Purple semicircle peeking at the bottom right */}
      <div className="absolute right-0 bottom-[-40px] w-32 h-64 bg-accent-purple rounded-l-full rotate-[15deg] opacity-80" />
    </section>
  );
}
