import Navbar from '@/components/Navbar';
import RusticHero from '@/components/RusticHero';
import CategorizedMenu from '@/components/CategorizedMenu';
import LocationCard from '@/components/LocationCard';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ParallaxGallery from '@/components/ParallaxGallery';

export default function Home() {
  return (
    <main>
      <Navbar />
      <RusticHero />
      <ParallaxGallery />
      <CategorizedMenu />
      <LocationCard />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
