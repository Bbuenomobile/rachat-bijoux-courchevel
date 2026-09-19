import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { StickyCta } from '@/components/sticky-cta';
import { site } from '@/lib/site';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Cabinet d'Expertise Gemmologique & Rachat Haute Joaillerie Courchevel 1850`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    'rachat bijoux courchevel',
    'rachat diamant courchevel 1850',
    'vendre montre luxe courchevel',
    'expertise bijoux rolex courchevel',
    'rachat patek philippe richard mille courchevel',
    'vendre bijoux cartier van cleef courchevel',
    'achat or lingots courchevel',
    'expertise gemmologique courchevel',
    'rachat bijoux meribel 3 vallees',
    'rachat haute joaillerie megeve',
  ],
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  publisher: site.legalName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: site.url,
    title: `${site.name} — Expertise Gemmologique & Rachat Bijoux Courchevel 1850`,
    description: site.description,
    siteName: site.name,
    images: [
      {
        url: `${site.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${site.name} — Courchevel 1850 Savoie`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — Rachat Bijoux Courchevel 1850`,
    description: site.description,
    images: [`${site.url}/og-image.jpg`],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#08162b',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'JewelryStore',
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: `${site.url}/icon.png`,
    image: `${site.url}/og-image.jpg`,
    description: site.description,
    telephone: site.phone,
    email: site.email,
    priceRange: '€€€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Virement bancaire instantané',
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.address.geo.lat,
      longitude: site.address.geo.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:30',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '10:00',
        closes: '18:00',
      },
    ],
    areaServed: site.areasServed.map((a) => ({
      '@type': 'AdministrativeArea',
      name: a,
    })),
  };

  return (
    <html lang="fr" className={`${playfair.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white font-sans text-ink-900 antialiased selection:bg-[#d4af37]/20 selection:text-[#081a30]">
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCta />
      </body>
    </html>
  );
}
