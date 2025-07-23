'use client';

import Image from 'next/image';
import { RestaurantInfo } from '@/types/restaurant';

interface AboutProps {
  restaurantInfo: RestaurantInfo;
}

export default function About({ restaurantInfo }: AboutProps) {
  return (
    <section id="about" className="py-16 md:py-24 bg-amber-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About{' '}
            <span className="text-yellow-600">
              {restaurantInfo.name}
            </span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 rounded-full mx-auto mb-8"></div>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            {restaurantInfo.description}
          </p>

          {/* Restaurant Information Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
              <p className="text-gray-600">{restaurantInfo.phone}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold text-gray-900 mb-2">Hours</h4>
              <div className="text-sm text-gray-600 space-y-1">
                {restaurantInfo.hours && Object.entries(restaurantInfo.hours).map(([day, hours]) => (
                  <div key={day} className="flex justify-between">
                    <span className="font-medium">{day}:</span>
                    <span>{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}