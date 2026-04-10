import { motion } from 'framer-motion';
import { TESTIMONIALS, TEAM_AVATARS } from '../utils/constants';

export default function Testimonials() {
  const t = TESTIMONIALS[0];

  return (
    <section className="py-24 bg-white relative overflow-visible flex flex-col items-center">
      <div className="max-w-base mb-16 text-center">
        <motion.h2
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-[54px] md:text-[72px] font-display font-medium leading-[1] mb-8"
        >
          <span className="relative inline-block px-4">
             What
             <span className="marker-pill" />
          </span> our customer <br />
          says <span className="relative inline-block">
             About Us
             <span className="marker-handdrawn" />
          </span>
        </motion.h2>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative w-full">
        <motion.div
           initial={{ opacity: 0, scale: 0.98 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="bg-accent-mint/5 border border-black/5 rounded-[50px] p-16 md:p-24 relative z-10 text-center"
        >
          {/* Subtle Quote Background Icon */}
          <div className="absolute left-10 top-10 opacity-10 text-[120px] font-display select-none">“</div>
          
          <p className="text-xl md:text-3xl font-display font-light leading-relaxed mb-12 text-primary relative z-20">
            {t.content}
          </p>
          
          <div className="flex flex-col items-center relative z-20">
             <h3 className="text-xl font-bold mb-1">{t.name}</h3>
             <p className="text-[10px] uppercase tracking-[0.3em] text-secondary font-bold">Client Story</p>
          </div>

          <div className="absolute right-10 bottom-10 opacity-10 text-[120px] font-display select-none rotate-180">“</div>
        </motion.div>

        {/* DISTRIBUTED AVATARS (EXACT PLACEMENT) */}
        <div className="absolute inset-0 pointer-events-none z-20">
           <img src={TEAM_AVATARS[0]} className="hero-img-spread w-24 h-24 -top-12 -left-12 border-4 border-white" alt="" />
           <img src={TEAM_AVATARS[1]} className="hero-img-spread w-14 h-14 top-[40%] -left-16 border-4 border-white" alt="" />
           <img src={TEAM_AVATARS[2]} className="hero-img-spread w-14 h-14 -bottom-10 left-[10%] border-4 border-white" alt="" />
           
           <img src={TEAM_AVATARS[3]} className="hero-img-spread w-28 h-28 -top-16 -right-16 border-4 border-white" alt="" />
           <img src={TEAM_AVATARS[4]} className="hero-img-spread w-16 h-16 bottom-[10%] -right-12 border-4 border-white" alt="" />
           <img src={TEAM_AVATARS[0]} className="hero-img-spread w-12 h-12 bottom-0 right-[40%] border-4 border-white" alt="" />
        </div>
      </div>
    </section>
  );
}
