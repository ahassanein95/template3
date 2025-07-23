'use client';

import { useState } from 'react';
import Image from 'next/image';
import { GalleryItem } from '@/types/restaurant';

interface GalleryProps {
  galleryItems: GalleryItem[];
}

export default function Gallery({ galleryItems }: GalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!galleryItems || galleryItems.length === 0) {
    return null;
  }

  return (
    <section id="gallery" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-yellow-600">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 rounded-full mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a visual journey through our restaurant and authentic Arabic dining experience
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Main Image */}
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg shadow-lg">
            <Image
              src={galleryItems[currentIndex].image}
              alt={galleryItems[currentIndex].alt}
              fill
              className="object-cover"
              priority
            />
            
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} / {galleryItems.length}
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center mt-6 gap-2 overflow-x-auto pb-2">
            {galleryItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  index === currentIndex 
                    ? 'border-yellow-500 ring-2 ring-yellow-200' 
                    : 'border-gray-300 hover:border-yellow-300'
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}