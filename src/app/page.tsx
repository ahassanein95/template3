import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Menu from '@/components/Menu';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { restaurantData } from '@/data/restaurant';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation restaurantInfo={restaurantData.info} />
      <Hero restaurantInfo={restaurantData.info} />
      <About restaurantInfo={restaurantData.info} />
      <Menu menuItems={restaurantData.menu} />
      <Gallery galleryItems={restaurantData.gallery} />
      <Contact restaurantInfo={restaurantData.info} />
      <Footer restaurantInfo={restaurantData.info} />
    </main>
  );
}