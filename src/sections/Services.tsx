import { motion } from 'framer-motion';
import { FEATURES } from '../utils/constants';

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white relative overflow-visible">
      {/* Figma Red Wavy Curve at top right of this section */}
      <svg className="absolute top-0 right-10 w-[450px] h-[250px] text-accent-pink pointer-events-none select-none opacity-80" viewBox="0 0 450 250">
         <path 
           d="M0,100 Q150,0 300,150 T450,100" 
           fill="none" 
           stroke="currentColor" 
           strokeWidth="3" 
         />
      </svg>

      <div className="max-w-base mt-20">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="mb-24"
        >
          <h2 className="text-[64px] md:text-[88px] font-display font-light leading-[1] mb-8">
             What we <span className="relative inline-block px-4">
                can
                <span className="marker-pill" />
             </span> <br /> 
             <span className="relative inline-block">
                offer
                <span className="marker-handdrawn" />
             </span> you!
          </h2>
        </motion.div>

        <div className="space-y-0 border-t border-border">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={feature.id}
              className="group grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-b border-border hover:bg-bg-soft transition-colors px-4 cursor-pointer relative"
            >
              {/* Left Column Description (Tiny uppercase text) */}
              <div className="md:col-span-3">
                 <p className="text-[10px] text-primary/50 uppercase tracking-[0.2em] leading-relaxed max-w-[150px] font-bold">
                    {feature.description.split('. ')[0]}
                 </p>
              </div>
              
              {/* Middle Column Title (Large Display font) */}
              <div className="md:col-span-8">
                <h3 className="text-3xl md:text-[56px] font-display font-light tracking-tight group-hover:translate-x-4 transition-transform duration-500">
                  {feature.title}
                </h3>
              </div>

              {/* Right Column Arrow (Minimal line arrow) */}
              <div className="md:col-span-1 flex items-center justify-end">
                 <div className="w-12 h-[1px] bg-primary relative opacity-20 group-hover:opacity-100 transition-all duration-500 group-hover:w-16">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-primary rotate-45" />
                 </div>
              </div>

              {/* FLOATING GRAPHIC ON LAST ITEM (As in Figma) */}
              {idx === 2 && (
                <div className="absolute right-[10%] top-[-20%] w-28 h-28 rounded-full bg-accent-yellow border border-black/5 z-20 shadow-2xl overflow-hidden pointer-events-none rotate-12 flex items-center justify-center">
                   <div className="absolute inset-0 bg-accent-yellow mix-blend-multiply opacity-40 z-10" />
                   <img src="https://i.pravatar.cc/150?u=9" className="w-full h-full object-cover grayscale" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
