import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <section id="tomorrow" className="section-padding bg-white relative overflow-visible">
      {/* CONNECTING RED LINE (From Figma) */}
      <svg className="absolute top-[30%] right-0 w-[50%] h-[500px] text-accent-pink pointer-events-none select-none z-0" viewBox="0 0 700 500">
         <path 
           d="M700,50 Q400,0 200,250 T-400,500" 
           fill="none" 
           stroke="currentColor" 
           strokeWidth="2" 
           strokeDasharray="8 8" 
         />
      </svg>

      <div className="max-w-base grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[54px] md:text-[72px] font-display font-light leading-[1.05] mb-12">
            <span className="relative inline-block px-1">
              Tomorrow
              <span className="marker-pill marker-pill-yellow" />
            </span> should <br />
            be better than <span className="relative inline-block px-1">
              today
              <span className="marker-pill" />
            </span>
          </h2>
          <p className="text-sm text-secondary/70 mb-12 max-w-sm leading-relaxed">
            We are a team of strategists, designers, communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe. 
          </p>
          <div className="flex items-center gap-6 group cursor-pointer w-fit transition-transform hover:translate-x-2">
            <span className="text-xs font-bold uppercase tracking-widest">Read more</span>
            <div className="w-24 h-[1px] bg-primary relative">
               <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-primary rotate-45" />
            </div>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative"
        >
          {/* Circular image with RED BOX backdrop */}
          <div className="relative w-full max-w-[480px] aspect-square ml-auto">
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-red-400 rounded-xl" />
            <div className="rounded-full overflow-hidden border border-black/5 w-full h-full shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" 
                alt="" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-[20%] left-[-10%] w-16 h-16 bg-accent-yellow rounded-full z-20 blur-xl opacity-30" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
