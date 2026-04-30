import { Metadata } from 'next';
import SpanndeckenContent from './SpanndeckenContent';
import { createBreadcrumbSchema } from '@/lib/schemas';

export const metadata: Metadata = {
  title: 'Spanndecken Montage – Schnell, Sauber, Professionell | Raumeleganz',
  description: 'Professionelle Spanndecken in NRW ✓ Matt, Satin, Hochglanz ✓ 200+ Farben ✓ LED-Integration ✓ Staubfreie Montage in 6-8h ✓ 10 Jahre Garantie',
  alternates: {
    canonical: 'https://raumeleganz-spanndecken.de/leistungen/spanndecken',
  },
  openGraph: {
    title: 'Spanndecken Montage – Schnell, Sauber, Professionell',
    description: 'Professionelle Spanndecken in NRW ✓ Matt, Satin, Hochglanz ✓ 200+ Farben ✓ LED-Integration ✓ Staubfreie Montage in 6-8h',
    type: 'website',
    url: 'https://raumeleganz-spanndecken.de/leistungen/spanndecken',
    siteName: 'Raumeleganz Spanndecken',
    locale: 'de_DE',
    images: [
      {
        url: 'https://raumeleganz-spanndecken.de/og-image-spanndecken.jpg',
        width: 1200,
        height: 630,
        alt: 'Moderne Spanndecken - Matt, Satin, Hochglanz',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spanndecken Montage – Schnell & Professionell',
    description: 'Matt, Satin oder Hochglanz. Mit LED-Integration. Staubfreie Montage in 6-8h.',
    images: ['https://raumeleganz-spanndecken.de/twitter-image-spanndecken.jpg'],
  },
};

export default function SpanndeckenPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Startseite', url: 'https://raumeleganz-spanndecken.de/' },
    { name: 'Leistungen', url: 'https://raumeleganz-spanndecken.de/leistungen' },
    { name: 'Spanndecken', url: 'https://raumeleganz-spanndecken.de/leistungen/spanndecken' },
  ]);

  return (
    <>
      {/* JSON-LD Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SpanndeckenContent />
    </>
  );
}
