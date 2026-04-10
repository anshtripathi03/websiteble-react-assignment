import { motion } from 'framer-motion';

export default function Progress() {
  return (
    <section className="section-padding bg-white relative overflow-visible">
      {/* CONTINUATION OF CONNECTING LINE */}
      <svg className="absolute top-[-250px] left-0 w-full h-[600px] text-accent-pink pointer-events-none select-none z-0" viewBox="0 0 1440 600">
         <path 
           d="M200,0 Q-100,200 600,450 T1440,600" 
           fill="none" 
           stroke="currentColor" 
           strokeWidth="2" 
           strokeDasharray="8 8" 
         />
      </svg>

      <div className="max-w-base grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="order-2 lg:order-1"
        >
          {/* Circular image with RED TRIANGLE backdrops */}
          <div className="relative w-full max-w-[480px] aspect-square">
            <div className="absolute -top-10 -left-10 w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[80px] border-b-red-400 rotate-[-15deg]" />
            <div className="absolute bottom-[-20px] left-[40%] w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[70px] border-b-red-400 rotate-[5deg]" />
            
            <div className="rounded-full overflow-hidden border border-black/5 w-full h-full shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200" 
                alt="" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2"
        >
          <h2 className="text-[54px] md:text-[72px] font-display font-light leading-[1.05] mb-12">
            <span className="relative inline-block px-1">
               See
               <span className="marker-pill" />
            </span> how we can <br />
            help you <span className="relative inline-block">
               progress
               <span className="marker-handdrawn" />
            </span>
          </h2>
          <p className="text-sm text-secondary/70 mb-12 max-w-sm leading-relaxed">
            We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design digital, comms and social research.
          </p>
          <div className="flex items-center gap-6 group cursor-pointer w-fit transition-transform hover:translate-x-2">
            <span className="text-xs font-bold uppercase tracking-widest">Read more</span>
            <div className="w-24 h-[1px] bg-primary relative">
               <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-primary rotate-45" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
