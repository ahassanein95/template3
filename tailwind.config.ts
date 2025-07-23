import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fefdf5',
          100: '#fef9e6',
          200: '#fcf1c2',
          300: '#f9e594',
          400: '#f5d354',
          500: '#c8860d',
          600: '#b8760b',
          700: '#9a5f09',
          800: '#7f4e0b',
          900: '#6b410d',
        },
        secondary: {
          50: '#f7f3f0',
          100: '#ede3db',
          200: '#dbc5b4',
          300: '#c4a187',
          400: '#a67c5a',
          500: '#8b4513',
          600: '#7a3d11',
          700: '#66320e',
          800: '#54290c',
          900: '#45220a',
        },
        accent: {
          50: '#fefcf0',
          100: '#fef7d6',
          200: '#fdeea8',
          300: '#fbe074',
          400: '#f7cc3e',
          500: '#d4af37',
          600: '#b8952f',
          700: '#967a26',
          800: '#7a6220',
          900: '#65511c',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Playfair Display', 'serif'],
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;