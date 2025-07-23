'use client';

import { useState, useMemo } from 'react';
import { MenuItem, MenuCategory } from '@/types/restaurant';

interface MenuProps {
  menuItems: MenuItem[];
}

export default function Menu({ menuItems }: MenuProps) {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(menuItems.map(item => item.category)));
    return ['all', ...uniqueCategories];
  }, [menuItems]);

  // Filter menu items based on active category
  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') {
      return menuItems;
    }
    return menuItems.filter(item => item.category === activeCategory);
  }, [menuItems, activeCategory]);

  return (
    <section id="menu" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-yellow-600">Menu</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 rounded-full mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted dishes made with the finest ingredients and traditional Arabic recipes
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-yellow-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-yellow-100'
              }`}
            >
              {category === 'all' ? 'All Items' : category}
            </button>
          ))}
        </div>

        {/* Menu Items List */}
        <div className="max-w-4xl mx-auto">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow border border-gray-100 p-6 mb-4 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-between items-center">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {item.name}
                    </h3>
                    {item.featured && (
                      <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-2">
                    {item.description}
                  </p>
                  <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
                
                <div className="ml-6">
                  <span className="text-2xl font-bold text-yellow-600">
                    ${item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No items found</h3>
            <p className="text-gray-500">Try selecting a different category</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
              Ready to Order?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Contact us to place your order or visit our restaurant for the full dining experience
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  const offsetTop = element.offsetTop - 80;
                  window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                }
              }}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}