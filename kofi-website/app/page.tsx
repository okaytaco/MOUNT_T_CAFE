import Navbar from '@/components/Navbar';
import RusticHero from '@/components/RusticHero';
import ChalkboardMenu from '@/components/ChalkboardMenu';
import LocationCard from '@/components/LocationCard';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <main>
      <Navbar />
      <RusticHero />
      <ChalkboardMenu />
      <LocationCard />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
