'use client';

import Image from 'next/image';
import { RestaurantInfo } from '@/types/restaurant';

interface HeroProps {
  restaurantInfo: RestaurantInfo;
}

export default function Hero({ restaurantInfo }: HeroProps) {
  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={restaurantInfo.heroImage}
          alt={`${restaurantInfo.name} restaurant interior`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Welcome to{' '}
          <span className="text-yellow-400">
            {restaurantInfo.name}
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
          {restaurantInfo.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => handleScroll('menu')}
            className="px-8 py-4 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View Our Menu
          </button>
          
          <button
            onClick={() => handleScroll('contact')}
            className="px-8 py-4 bg-transparent hover:bg-white/10 text-white font-semibold rounded-lg transition-all duration-300 border-2 border-white hover:border-yellow-400"
          >
            Contact Us
          </button>
        </div>

      </div>
    </section>
  );
}