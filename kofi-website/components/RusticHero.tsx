'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { businessInfo } from '@/data/navigation';
import { scrollToSection } from '@/lib/utils';
import Image from 'next/image';

const SLIDER_IMAGES = [
  '/images/slider1.jpg',
  '/images/slider2.jpg',
  '/images/slider3.jpg',
  '/images/slider4.jpg',
];

export default function RusticHero() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % SLIDER_IMAGES.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden bg-background">
      
      {/* Image Slider Background */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIdx}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.15, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          >
            <Image 
              src={SLIDER_IMAGES[currentIdx]}
              alt="Cafe atmosphere"
              fill
              className="object-cover"
              priority={currentIdx === 0}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Texture Overlay (always on top of images) */}
      <div className="absolute inset-0 z-[1] opacity-[0.15] pointer-events-none mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-background via-transparent to-background/50"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto"
      >
        <div className="mb-6 inline-block px-4 py-1.5 border-2 border-foreground rounded-full transform -rotate-2 bg-surface">
          <span className="font-bold tracking-widest text-sm uppercase text-foreground">{businessInfo.tagline}</span>
        </div>

        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-bebas leading-[0.85] text-foreground tracking-normal uppercase drop-shadow-sm mb-6" style={{ fontFamily: 'var(--font-bebas-neue)' }}>
          PASCHIM VIHAR'S<br />FINEST TAPRI
        </h1>

        <p className="text-lg sm:text-xl text-foreground font-semibold max-w-2xl mb-10 leading-relaxed shadow-sm drop-shadow-md">
          {businessInfo.subheadline}
        </p>

        <button 
          onClick={() => scrollToSection('menu')}
          className="px-8 py-4 bg-accent text-background font-bold tracking-widest uppercase rounded-sm border-2 border-transparent hover:border-foreground hover:bg-surface hover:text-foreground transition-all duration-300 shadow-[4px_4px_0px_rgba(0,0,0,0.2)] dark:shadow-[4px_4px_0px_rgba(255,255,255,0.1)] active:translate-y-1 active:shadow-[0px_0px_0px_rgba(0,0,0,0)]"
        >
          Check the Menu
        </button>
      </motion.div>
    </section>
  );
}
