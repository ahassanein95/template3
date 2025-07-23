'use client';

import { RestaurantInfo } from '@/types/restaurant';

interface FooterProps {
  restaurantInfo: RestaurantInfo;
}

export default function Footer({ restaurantInfo }: FooterProps) {
  const currentYear = new Date().getFullYear();

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
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-serif font-bold text-accent-400 mb-4">
              {restaurantInfo.name}
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {restaurantInfo.description}
            </p>
            
            {/* Social Media Links */}
            {restaurantInfo.socialMedia && (
              <div className="flex gap-4">
                {restaurantInfo.socialMedia.facebook && (
                  <a
                    href={restaurantInfo.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                )}
                {restaurantInfo.socialMedia.instagram && (
                  <a
                    href={restaurantInfo.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zm5.524 7.747H9.451c-.896 0-1.627.731-1.627 1.627v8.012c0 .896.731 1.627 1.627 1.627h8.09c.896 0 1.627-.731 1.627-1.627V9.374c0-.896-.731-1.627-1.627-1.627z"/>
                    </svg>
                  </a>
                )}
                {restaurantInfo.socialMedia.twitter && (
                  <a
                    href={restaurantInfo.socialMedia.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                    aria-label="Twitter"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleScroll('home')}
                  className="text-gray-300 hover:text-accent-400 transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('about')}
                  className="text-gray-300 hover:text-accent-400 transition-colors duration-200"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('menu')}
                  className="text-gray-300 hover:text-accent-400 transition-colors duration-200"
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('gallery')}
                  className="text-gray-300 hover:text-accent-400 transition-colors duration-200"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('contact')}
                  className="text-gray-300 hover:text-accent-400 transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300 text-sm leading-relaxed">
                  {restaurantInfo.address}
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-accent-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a 
                  href={`tel:${restaurantInfo.phone}`}
                  className="text-gray-300 hover:text-accent-400 transition-colors duration-200 text-sm"
                >
                  {restaurantInfo.phone}
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-accent-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a 
                  href={`mailto:${restaurantInfo.email}`}
                  className="text-gray-300 hover:text-accent-400 transition-colors duration-200 text-sm"
                >
                  {restaurantInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} {restaurantInfo.name}. All rights reserved.
            </p>
            
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>Made with</span>
              <span className="text-red-500 text-base">♥</span>
              <span>for authentic Arabic cuisine</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}