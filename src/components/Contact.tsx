'use client';

import { RestaurantInfo } from '@/types/restaurant';
import { openMaps } from '@/utils/device';

interface ContactProps {
  restaurantInfo: RestaurantInfo;
}

export default function Contact({ restaurantInfo }: ContactProps) {
  const handleAddressClick = () => {
    openMaps(restaurantInfo.address);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
            Contact <span className="text-primary-600">Us</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Get in touch with us for reservations, catering, or any questions about our authentic Arabic cuisine.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Get in Touch</h3>
              <p className="text-gray-600 mb-8">
                Whether you&apos;re planning a special celebration, need catering for an event, or simply want to experience our delicious Arabic cuisine, we&apos;re here to help.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Address */}
              <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                    <button
                      onClick={handleAddressClick}
                      className="text-gray-600 hover:text-primary-600 transition-colors duration-200 text-left block md:hidden"
                      title="Tap to open in maps"
                    >
                      {restaurantInfo.address}
                      <span className="text-primary-600 ml-1">📍</span>
                    </button>
                    <p className="text-gray-600 hidden md:block">
                      {restaurantInfo.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                    <a 
                      href={`tel:${restaurantInfo.phone}`}
                      className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                    >
                      {restaurantInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                    <a 
                      href={`mailto:${restaurantInfo.email}`}
                      className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                    >
                      {restaurantInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Website */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">Website</h4>
                    <a 
                      href={`https://${restaurantInfo.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                    >
                      {restaurantInfo.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hours and Additional Info */}
          <div className="space-y-8">
            {/* Operating Hours */}
            {restaurantInfo.hours && (
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  Opening Hours
                </h3>
                <div className="space-y-3">
                  {Object.entries(restaurantInfo.hours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                      <span className="font-medium text-gray-900">{day}</span>
                      <span className="text-gray-600">{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Actions */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <a
                  href={`tel:${restaurantInfo.phone}`}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call for Reservations
                </a>
                
                <button
                  onClick={handleAddressClick}
                  className="w-full bg-accent-600 hover:bg-accent-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 md:hidden"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Get Directions
                </button>

                <a
                  href={`mailto:${restaurantInfo.email}`}
                  className="w-full bg-gray-600 hover:bg-gray-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Email
                </a>
              </div>
            </div>

            {/* Special Notice */}
            <div className="bg-gradient-to-r from-primary-600 to-accent-600 p-6 rounded-xl text-white">
              <h4 className="font-semibold mb-2">Special Events & Catering</h4>
              <p className="text-sm opacity-90">
                Planning a special event? We offer catering services and can accommodate large groups. Contact us to discuss your needs and create a memorable dining experience.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Notice */}
        <div className="mt-12 text-center md:hidden">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-amber-800 text-sm">
              💡 <strong>Tip:</strong> Tap the address above to open it in your maps app for easy directions!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}