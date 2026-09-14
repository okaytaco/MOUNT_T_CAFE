'use client';

import Image from 'next/image';

const GALLERY_IMAGES = [
  '/images/slider1.jpg',
  '/images/slider2.jpg',
  '/images/slider3.jpg',
];

export default function ParallaxGallery() {
  return (
    <section className="relative bg-background pt-24 pb-48 px-6">
      <div className="max-w-5xl mx-auto w-full relative flex flex-col gap-[30vh] pb-[10vh]">
        
        {/* First Image - Base layer */}
        <div className="sticky top-[12vh] w-full h-[50vh] md:h-[70vh] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10 border border-border">
          <Image 
            src={GALLERY_IMAGES[0]} 
            alt="Cafe vibe 1" 
            fill 
            className="object-cover"
          />
        </div>

        {/* Second Image - Slides up and overlaps */}
        <div className="sticky top-[16vh] w-[95%] mx-auto h-[50vh] md:h-[70vh] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 border border-border">
          <Image 
            src={GALLERY_IMAGES[1]} 
            alt="Cafe vibe 2" 
            fill 
            className="object-cover"
          />
        </div>

        {/* Third Image - Slides up and overlaps */}
        <div className="sticky top-[20vh] w-[90%] mx-auto h-[50vh] md:h-[70vh] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-30 border border-border">
          <Image 
            src={GALLERY_IMAGES[2]} 
            alt="Cafe vibe 3" 
            fill 
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}
