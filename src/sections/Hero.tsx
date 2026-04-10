import { motion } from 'framer-motion';
import { TEAM_AVATARS } from '../utils/constants';

export default function Hero() {
  const avatars = [
    ...TEAM_AVATARS,
    'https://i.pravatar.cc/100?u=5',
    'https://i.pravatar.cc/100?u=6',
    'https://i.pravatar.cc/100?u=7',
    'https://i.pravatar.cc/100?u=8',
  ];

  return (
    <section id="home" className="relative min-h-[700px] flex flex-col items-center justify-center pt-24 overflow-hidden bg-white">
      {/* Decorative Wavy Lines and Shapes from Figma */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Figma Red Wavy Curve on Left */}
        <motion.svg 
          viewBox="0 0 100 800"
          className="absolute left-8 top-[15%] w-[100px] h-[700px] text-accent-pink"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        >
          <path d="M80,0 C20,100 120,200 80,300 C40,400 120,500 80,600 C40,700 80,800 80,800" fill="none" stroke="currentColor" strokeWidth="3" />
        </motion.svg>

        {/* Purple Semicircle on right */}
        <div className="absolute right-0 top-[40%] w-24 h-48 bg-accent-purple rounded-l-full" />
      </div>

      <div className="max-w-[1200px] w-full text-center relative z-20 px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[44px] md:text-[94px] font-display font-light leading-[1] tracking-tight text-primary mb-8"
        >
          The <span className="relative inline-block">
            thinkers
            <span className="marker-handdrawn" />
          </span> and <br />
          doers were <span className="relative inline-block px-1">
            changing
            <span className="marker-pill marker-pill-pink" />
          </span> <br />
          the <span className="relative inline-block px-1">
            status
            <span className="marker-pill" />
          </span> Quo with
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="max-w-2xl mx-auto mb-10"
        >
          <p className="text-sm md:text-base text-secondary/70 leading-relaxed font-light">
             We are a team of strategists, designers, communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe. 
          </p>
        </motion.div>

        {/* PROPERLY DISTRIBUTED AVATARS */}
        <div className="relative w-full max-w-5xl mx-auto h-[300px] mt-10">
          <img src={avatars[0]} className="hero-img-spread w-24 h-24 top-0 left-[5%]" alt="" />
          <img src={avatars[1]} className="hero-img-spread w-28 h-28 top-[20%] left-[15%]" alt="" />
          <img src={avatars[2]} className="hero-img-spread w-32 h-32 bottom-[10%] left-[30%]" alt="" />
          <img src={avatars[3]} className="hero-img-spread w-44 h-44 bottom-0 left-[45%] -translate-x-1/2 z-30" alt="" />
          <img src={avatars[4]} className="hero-img-spread w-32 h-32 bottom-[15%] right-[30%]" alt="" />
          <img src={avatars[5]} className="hero-img-spread w-28 h-28 top-[10%] right-[15%]" alt="" />
          <img src={avatars[6]} className="hero-img-spread w-24 h-24 top-0 right-[5%]" alt="" />
        </div>
      </div>
    </section>
  );
}
