import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Rachat Bijoux Courchevel — Cabinet Gemmologique',
    short_name: 'RachatBijouxCVL',
    description: 'Expertise gemmologique et rachat immédiat de diamants, haute joaillerie et montres de prestige à Courchevel 1850.',
    start_url: '/',
    display: 'standalone',
    background_color: '#08162b',
    theme_color: '#08162b',
    icons: [
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
