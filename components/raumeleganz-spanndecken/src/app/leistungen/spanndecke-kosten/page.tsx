import { Metadata } from 'next';
import KostenContent from './KostenContent';
import { createBreadcrumbSchema } from '@/lib/schemas';

export const metadata: Metadata = {
  title: 'Spanndecke Kosten 2025 – Preise & Beispiele | Raumeleganz',
  description: 'Was kostet eine Spanndecke? ✓ Preise ab 79€/m² ✓ Transparente Kalkulation ✓ Beispielrechnung 20m² ✓ Kostenlose Beratung ✓ Festpreisangebot',
  alternates: {
    canonical: 'https://raumeleganz-spanndecken.de/leistungen/spanndecke-kosten',
  },
  openGraph: {
    title: 'Spanndecke Kosten 2025 – Preise & Beispiele',
    description: 'Was kostet eine Spanndecke? ✓ Preise ab 79€/m² ✓ Transparente Kalkulation ✓ Beispielrechnung ✓ Kostenlose Beratung',
    type: 'website',
    url: 'https://raumeleganz-spanndecken.de/leistungen/spanndecke-kosten',
    siteName: 'Raumeleganz Spanndecken',
    locale: 'de_DE',
    images: [
      {
        url: 'https://raumeleganz-spanndecken.de/og-image-kosten.jpg',
        width: 1200,
        height: 630,
        alt: 'Spanndecke Kosten - Transparente Preise',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spanndecke Kosten 2025 – Transparente Preise',
    description: 'Was kostet eine Spanndecke? Ab 79€/m². Transparente Kalkulation mit Beispielen.',
    images: ['https://raumeleganz-spanndecken.de/twitter-image-kosten.jpg'],
  },
};

export default function SpanndeckeKostenPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Startseite', url: 'https://raumeleganz-spanndecken.de/' },
    { name: 'Leistungen', url: 'https://raumeleganz-spanndecken.de/leistungen' },
    { name: 'Spanndecke Kosten', url: 'https://raumeleganz-spanndecken.de/leistungen/spanndecke-kosten' },
  ]);

  return (
    <>
      {/* JSON-LD Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <KostenContent />
    </>
  );
}
