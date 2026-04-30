import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCityBySlug } from '@/data/cities.generated';
import StadtContent from './StadtContent';

interface PageProps {
  params: Promise<{ stadt: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { stadt } = await params;
  const city = getCityBySlug(stadt);

  if (!city) {
    return {
      title: 'Stadt nicht gefunden',
    };
  }

  return {
    title: `Spanndecken in ${city.name} – Professionell & Schnell | Raumeleganz`,
    description: `Professionelle Spanndecken-Montage in ${city.name} ✓ Staubfrei in 6-8h ✓ 10 Jahre Garantie ✓ Regionales Team ✓ Jetzt kostenlos beraten lassen!`,
    alternates: {
      canonical: `https://raumeleganz-spanndecken.de/einsatzgebiete/${city.slug}`,
    },
    openGraph: {
      title: `Spanndecken in ${city.name} – Ihre neue Decke in 1 Tag`,
      description: `Professionelle Spanndecken-Montage in ${city.name}. Staubfrei, schnell, professionell.`,
      type: 'website',
      url: `https://raumeleganz-spanndecken.de/einsatzgebiete/${city.slug}`,
      siteName: 'Raumeleganz Spanndecken',
      locale: 'de_DE',
    },
  };
}

export default async function StadtPage({ params }: PageProps) {
  const { stadt } = await params;
  const city = getCityBySlug(stadt);

  if (!city) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Raumeleganz Spanndecken ${city.name}`,
    description: `Professionelle Spanndecken-Montage in ${city.name} und Umgebung`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: city.street,
      addressLocality: city.name,
      postalCode: city.postalCode,
      addressCountry: 'DE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: city.lat,
      longitude: city.lng,
    },
    areaServed: {
      '@type': 'City',
      name: city.name,
    },
    priceRange: '€€',
    telephone: '+4920189083052',
    openingHours: 'Mo-Fr 08:00-18:00',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StadtContent city={city} />
    </>
  );
}
