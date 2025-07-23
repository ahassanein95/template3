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
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Food Texture */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&auto=format&fit=crop&q=60"
          alt="Middle Eastern spices and ingredients"
          fill
          className="object-cover opacity-30"
          priority
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/80 via-orange-900/70 to-yellow-900/60"></div>
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='m0 40 40-40v40z'/%3E%3Cpath d='m40 40v-40l-40 40z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}></div>
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