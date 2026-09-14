'use client';

import { motion } from 'framer-motion';
import { menuItems } from '@/data/menu';
import { fadeUp } from '@/lib/utils';
import { formatPrice } from '@/lib/utils';

export default function ChalkboardMenu() {
  return (
    <section id="menu" className="py-24 md:py-32 px-6 relative bg-surface border-y border-border">
      {/* Texture Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
        >
          <h2 className="text-5xl md:text-6xl text-foreground tracking-wide uppercase" style={{ fontFamily: 'var(--font-bebas-neue)' }}>
            The Menu
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="flex items-end justify-between w-full mb-1">
                <h3 className="text-xl md:text-2xl font-bold text-foreground relative top-1">
                  {item.name}
                </h3>
                <div className="flex-1 mx-4 border-b-2 border-dotted border-muted/50 relative -top-1"></div>
                <span className="text-xl md:text-2xl font-bold text-accent">
                  {formatPrice(item.price)}
                </span>
              </div>
              <p className="text-muted text-sm md:text-base mt-1">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
