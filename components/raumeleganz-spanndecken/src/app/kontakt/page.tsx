import { Metadata } from 'next';
import KontaktForm from './KontaktForm';
import { createBreadcrumbSchema } from '@/lib/schemas';

export const metadata: Metadata = {
  title: 'Kontakt – Kostenlose Beratung für Ihre Spanndecke | Raumeleganz',
  description: 'Jetzt kostenlos beraten lassen! ☎ Schnelle Antwort ✓ Unverbindliches Angebot ✓ 3D-Visualisierung ✓ Vor-Ort-Termin in NRW ✓ Festpreis-Garantie',
  alternates: {
    canonical: 'https://raumeleganz-spanndecken.de/kontakt',
  },
  openGraph: {
    title: 'Kontakt – Kostenlose Beratung für Ihre Spanndecke',
    description: 'Jetzt kostenlos beraten lassen! ☎ Schnelle Antwort ✓ Unverbindliches Angebot ✓ 3D-Visualisierung ✓ Vor-Ort-Termin',
    type: 'website',
    url: 'https://raumeleganz-spanndecken.de/kontakt',
    siteName: 'Raumeleganz Spanndecken',
    locale: 'de_DE',
    images: [
      {
        url: 'https://raumeleganz-spanndecken.de/og-image-kontakt.jpg',
        width: 1200,
        height: 630,
        alt: 'Kontakt - Raumeleganz Spanndecken',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Kontakt – Kostenlose Beratung für Ihre Spanndecke',
    description: 'Kostenlose Beratung und unverbindliches Angebot. Jetzt anfragen!',
    images: ['https://raumeleganz-spanndecken.de/twitter-image-kontakt.jpg'],
  },
};

export default function KontaktPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Startseite', url: 'https://raumeleganz-spanndecken.de/' },
    { name: 'Kontakt', url: 'https://raumeleganz-spanndecken.de/kontakt' },
  ]);

  return (
    <>
      {/* JSON-LD Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <KontaktForm />
    </>
  );
}
