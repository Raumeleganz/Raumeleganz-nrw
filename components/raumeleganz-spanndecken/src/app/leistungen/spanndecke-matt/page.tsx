import { Metadata } from 'next';
import MattContent from './MattContent';
import { createBreadcrumbSchema } from '@/lib/schemas';

export const metadata: Metadata = {
  title: 'Matte Spanndecken – Zeitlos, Dezent & Reflexionsfrei | Raumeleganz',
  description: 'Matte Spanndecken in NRW ✓ Keine Reflexionen ✓ Zeitlose Optik ✓ Perfekt für Altbau & Homeoffice ✓ 10-15% günstiger als Satin ✓ Jetzt beraten lassen!',
  alternates: {
    canonical: 'https://raumeleganz-spanndecken.de/leistungen/spanndecke-matt',
  },
  openGraph: {
    title: 'Matte Spanndecken – Zeitlos & Reflexionsfrei',
    description: 'Matte Spanndecken in NRW ✓ Keine Reflexionen ✓ Zeitlose Optik ✓ Perfekt für Altbau & Homeoffice',
    type: 'website',
    url: 'https://raumeleganz-spanndecken.de/leistungen/spanndecke-matt',
    siteName: 'Raumeleganz Spanndecken',
    locale: 'de_DE',
  },
};

export default function SpanndeckeMattPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Startseite', url: 'https://raumeleganz-spanndecken.de/' },
    { name: 'Leistungen', url: 'https://raumeleganz-spanndecken.de/leistungen' },
    { name: 'Matte Spanndecken', url: 'https://raumeleganz-spanndecken.de/leistungen/spanndecke-matt' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <MattContent />
    </>
  );
}
