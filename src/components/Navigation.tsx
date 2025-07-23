'use client';

import { useState, useEffect } from 'react';
import { RestaurantInfo } from '@/types/restaurant';

interface NavigationProps {
  restaurantInfo: RestaurantInfo;
}

export default function Navigation({ restaurantInfo }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'menu', label: 'Menu' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => handleNavClick('home')}
              className="text-xl md:text-2xl font-serif font-bold text-primary-600 hover:text-primary-700 transition-colors duration-200"
            >
              {restaurantInfo.name}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-6 h-6 relative">
                <span className={`absolute left-0 top-1 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : 'rotate-0'
                }`}></span>
                <span className={`absolute left-0 top-3 w-6 h-0.5 bg-current transition-opacity duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute left-0 top-5 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : 'rotate-0'
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen 
          ? 'max-h-64 opacity-100' 
          : 'max-h-0 opacity-0 pointer-events-none'
      } overflow-hidden bg-white/95 backdrop-blur-md border-t border-gray-200`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}