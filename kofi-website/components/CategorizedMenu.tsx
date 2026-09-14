'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems, menuCategories, MenuCategory } from '@/data/menu';
import { formatPrice } from '@/lib/utils';
import Image from 'next/image';

export default function CategorizedMenu() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>(menuCategories[0]);

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 md:py-32 px-6 relative bg-foreground text-background border-y border-border">
      {/* Texture Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <h2 className="text-5xl md:text-6xl tracking-wide uppercase text-background" style={{ fontFamily: 'var(--font-bebas-neue)' }}>
            Our Menu
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Floating Tab Bar */}
        <div className="flex justify-center mb-12 sticky top-24 z-20 px-4">
          <div className="flex overflow-x-auto gap-2 p-2 bg-background/95 backdrop-blur-md rounded-full shadow-lg border border-border hide-scrollbar max-w-full">
            {menuCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-6 py-3 rounded-full text-sm font-bold tracking-wider uppercase transition-colors whitespace-nowrap ${
                  activeCategory === category ? 'text-background' : 'text-foreground/70 hover:text-accent'
                }`}
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-foreground rounded-full shadow-md"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="flex items-center gap-4 bg-background text-foreground p-4 rounded-2xl border border-border shadow-[4px_4px_0px_rgba(0,0,0,0.3)] dark:shadow-[4px_4px_0px_rgba(255,255,255,0.1)] hover:translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_rgba(0,0,0,0.4)] transition-all duration-300"
              >
                <div className="relative w-28 h-28 shrink-0 overflow-hidden rounded-xl border border-border">
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0 py-2">
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h3 className="font-bold text-lg md:text-xl text-foreground truncate">
                      {item.name}
                    </h3>
                    <span className="font-bold text-accent text-lg whitespace-nowrap">
                      {formatPrice(item.price)}
                    </span>
                  </div>
                  <p className="text-foreground/80 text-sm line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
