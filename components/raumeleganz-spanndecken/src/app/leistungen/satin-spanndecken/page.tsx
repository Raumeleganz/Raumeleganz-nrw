import { Metadata } from 'next';
import SatinContent from './SatinContent';
import { createBreadcrumbSchema } from '@/lib/schemas';

export const metadata: Metadata = {
  title: 'Satin-Spanndecken – Dezent Edel & Vielseitig | Raumeleganz',
  description: 'Satin-Spanndecken in NRW ✓ Der Liebling unserer Kunden ✓ Dezente Eleganz ✓ Perfekte Balance ✓ Für 90% aller Räume ✓ Jetzt beraten lassen!',
  alternates: {
    canonical: 'https://raumeleganz-spanndecken.de/leistungen/satin-spanndecken',
  },
  openGraph: {
    title: 'Satin-Spanndecken – Dezent Edel & Vielseitig',
    description: 'Satin-Spanndecken in NRW ✓ Der Liebling unserer Kunden ✓ Dezente Eleganz ✓ Perfekte Balance',
    type: 'website',
    url: 'https://raumeleganz-spanndecken.de/leistungen/satin-spanndecken',
    siteName: 'Raumeleganz Spanndecken',
    locale: 'de_DE',
  },
};

export default function SatinSpanndeckenPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Startseite', url: 'https://raumeleganz-spanndecken.de/' },
    { name: 'Leistungen', url: 'https://raumeleganz-spanndecken.de/leistungen' },
    { name: 'Satin-Spanndecken', url: 'https://raumeleganz-spanndecken.de/leistungen/satin-spanndecken' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SatinContent />
    </>
  );
}
