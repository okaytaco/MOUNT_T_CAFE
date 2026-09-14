'use client';

import { motion } from 'framer-motion';
import { businessInfo } from '@/data/navigation';
import { fadeUp } from '@/lib/utils';
import { MapPin, Clock, Phone } from 'lucide-react';

export default function LocationCard() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 relative bg-background">
      <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row gap-12 items-center bg-surface border-4 border-foreground p-8 md:p-12 shadow-[8px_8px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_rgba(255,255,255,0.2)]">
        
        <motion.div 
          className="flex-1 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUp}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 uppercase" style={{ fontFamily: 'var(--font-bebas-neue)' }}>
            Find Us
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg text-foreground uppercase tracking-wider mb-1">Location</h4>
                <p className="text-muted leading-relaxed whitespace-pre-line">{businessInfo.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg text-foreground uppercase tracking-wider mb-1">Hours</h4>
                {businessInfo.hours.map((h, i) => (
                  <p key={i} className="text-muted leading-relaxed">{h.days}: {h.time}</p>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg text-foreground uppercase tracking-wider mb-1">WhatsApp</h4>
                <p className="text-muted leading-relaxed">{businessInfo.phone}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-10">
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${businessInfo.mapQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full md:w-auto text-center px-8 py-4 bg-foreground text-background font-bold tracking-widest uppercase border-2 border-foreground hover:bg-background hover:text-foreground transition-all duration-300"
            >
              Get Directions
            </a>
          </div>
        </motion.div>

        {/* Map placeholder Graphic */}
        <motion.div 
          className="w-full md:w-1/2 aspect-square md:aspect-[4/5] bg-border flex flex-col items-center justify-center p-6 text-center border-2 border-dashed border-muted/40"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <MapPin className="w-16 h-16 text-muted mb-4" />
          <p className="text-muted font-bold tracking-widest uppercase">Map View<br/>(Coming Soon)</p>
        </motion.div>
      </div>
    </section>
  );
}
