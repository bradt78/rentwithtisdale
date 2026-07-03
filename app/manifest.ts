import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Tisdale Properties LLC',
    short_name: 'Tisdale Properties',
    description:
      'Quality single-family homes, duplexes, and apartments for rent in Jackson, Mississippi.',
    start_url: '/',
    display: 'standalone',
    background_color: '#1E2A3A',
    theme_color: '#1E2A3A',
    icons: [
      {
        src: '/images/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
