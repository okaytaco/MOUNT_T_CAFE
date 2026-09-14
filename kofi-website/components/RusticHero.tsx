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

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring",
        stiffness: 70,
        damping: 15
      } 
    }
  };

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
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-6 inline-block px-4 py-1.5 border-2 border-foreground rounded-full transform -rotate-2 bg-surface">
          <span className="font-bold tracking-widest text-sm uppercase text-foreground">{businessInfo.tagline}</span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-bebas leading-[0.85] text-foreground tracking-normal uppercase drop-shadow-sm mb-6 flex flex-wrap justify-center items-center gap-x-4 gap-y-2" style={{ fontFamily: 'var(--font-bebas-neue)' }}>
          <span className="w-full text-center">PASCHIM VIHAR'S</span>
          <span className="relative inline-flex items-center justify-center mx-3 px-6 py-1 mt-2">
            <span className="absolute inset-0 bg-foreground transform -skew-x-12 skew-y-2 rounded-tl-3xl rounded-br-3xl rounded-tr-sm rounded-bl-sm shadow-sm z-[-1] scale-105"></span>
            <span className="absolute inset-0 bg-foreground/60 transform skew-x-6 -skew-y-2 rounded-tr-3xl rounded-bl-3xl rounded-tl-sm rounded-br-sm z-[-2] scale-110 translate-y-1"></span>
            <span className="relative z-10 text-background font-sans font-black tracking-wide lowercase text-5xl sm:text-6xl md:text-7xl pt-1">झकास</span>
          </span>
          <span>CAFE</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg sm:text-xl text-foreground font-semibold max-w-2xl mb-10 leading-relaxed shadow-sm drop-shadow-md">
          {businessInfo.subheadline}
        </motion.p>

        <motion.button 
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('menu')}
          className="px-8 py-4 bg-accent text-background font-bold tracking-widest uppercase rounded-sm border-2 border-transparent hover:border-foreground hover:bg-surface hover:text-foreground transition-all duration-300 shadow-[4px_4px_0px_rgba(0,0,0,0.2)] dark:shadow-[4px_4px_0px_rgba(255,255,255,0.1)] active:translate-y-1 active:shadow-[0px_0px_0px_rgba(0,0,0,0)]"
        >
          Check the Menu
        </motion.button>
      </motion.div>
    </section>
  );
}
