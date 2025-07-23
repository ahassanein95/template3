import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from 'next/font/google';
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Al Salam Mediterranean - Authentic Arabic Restaurant",
  description: "Experience authentic Arabic cuisine in a warm, welcoming atmosphere. Our skilled chefs prepare traditional recipes passed down through generations, using the finest spices and fresh ingredients.",
  keywords: "arabic restaurant, mediterranean food, middle eastern cuisine, authentic recipes, halal food",
  authors: [{ name: "Al Salam Mediterranean" }],
  creator: "Al Salam Mediterranean",
  publisher: "Al Salam Mediterranean",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Al Salam Mediterranean - Authentic Arabic Restaurant",
    description: "Experience authentic Arabic cuisine in a warm, welcoming atmosphere. Traditional recipes with the finest spices and fresh ingredients.",
    url: "https://alsalammediterranean.com",
    siteName: "Al Salam Mediterranean",
    images: [
      {
        url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2081&q=80",
        width: 1200,
        height: 630,
        alt: "Al Salam Mediterranean Restaurant Interior",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Salam Mediterranean - Authentic Arabic Restaurant",
    description: "Experience authentic Arabic cuisine in a warm, welcoming atmosphere.",
    images: ["https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2081&q=80"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#c8860d" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Al Salam Mediterranean" />
      </head>
      <body className={`antialiased bg-white text-gray-900 ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}