import Hero from '@/components/Hero';
import HomePageClient from './HomePageClient';
import { localBusinessSchema, faqPageSchema } from '@/lib/schemas';

export const metadata = {
  title: 'Spanndecken Montage NRW – Modern, Schnell & Staubfrei | Raumeleganz',
  description: 'Professionelle Spanndecken in NRW ✓ Montage in 6-8h ✓ Staubfrei ✓ 10 Jahre Garantie ✓ Matt, Glanz, LED-Beleuchtung ✓ Jetzt kostenlos beraten lassen!',
  alternates: {
    canonical: 'https://raumeleganz-spanndecken.de/',
  },
  openGraph: {
    title: 'Spanndecken Montage NRW – Modern, Schnell & Staubfrei',
    description: 'Professionelle Spanndecken in NRW ✓ Montage in 6-8h ✓ Staubfrei ✓ 10 Jahre Garantie ✓ Matt, Glanz, LED-Beleuchtung',
    type: 'website',
    url: 'https://raumeleganz-spanndecken.de/',
    siteName: 'Raumeleganz Spanndecken',
    locale: 'de_DE',
    images: [
      {
        url: 'https://raumeleganz-spanndecken.de/og-image-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Raumeleganz Spanndecken - Moderne Deckengestaltung',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spanndecken Montage NRW – Modern & Schnell',
    description: 'Professionelle Spanndecken in NRW. Montage in 6-8h, staubfrei, 10 Jahre Garantie.',
    images: ['https://raumeleganz-spanndecken.de/twitter-image-home.jpg'],
  },
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      
      <div className="relative">
        <Hero />
        <HomePageClient />
        
        {/* SEO Content Section */}
        <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-cyan-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Main SEO Content */}
              <article className="prose prose-lg max-w-none">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Spanndecken in NRW – Ihre Experten für moderne Deckengestaltung
                </h2>
                
                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                  Sie suchen nach einer professionellen Lösung für Ihre Deckenrenovierung in Nordrhein-Westfalen? 
                  Raumeleganz Spanndecken ist Ihr erfahrener Partner für hochwertige Spanndecken-Montage in ganz NRW. 
                  Mit über 15 Jahren Erfahrung verwandeln wir alte, rissige Decken in makellose Raumwunder – 
                  und das in nur 6-8 Stunden, komplett staubfrei und ohne dass Sie Ihre Möbel ausräumen müssen.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
                  Was sind Spanndecken und warum sind sie die bessere Wahl?
                </h3>
                
                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                  Eine Spanndecke ist eine innovative Deckenlösung aus hochwertiger PVC- oder Polyester-Membran, 
                  die millimetergenau unter Ihrer Bestandsdecke montiert wird. Im Gegensatz zu klassischen Renovierungsmethoden 
                  wie Verputzen und Streichen bietet eine Spanndecke zahlreiche Vorteile: Sie ist komplett staubfrei installierbar, 
                  benötigt keine Trocknungszeiten und liefert eine absolut glatte, fugenlose Oberfläche, die über Jahrzehnte 
                  perfekt bleibt. Besonders in Altbauten mit unebenen oder beschädigten Decken ist eine Spanndecke die ideale Lösung, 
                  da sie alle Makel verdeckt und gleichzeitig moderne Beleuchtungskonzepte ermöglicht.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
                  Unsere Spanndecken-Leistungen für ganz Nordrhein-Westfalen
                </h3>
                
                <p className="text-slate-700 text-lg leading-relaxed mb-4">
                  Als führender Spanndecken-Anbieter in NRW bieten wir Ihnen ein umfassendes Leistungsspektrum:
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-white p-6 rounded-2xl border-2 border-cyan-200 shadow-lg hover:shadow-xl transition-all duration-200">
                    <h4 className="font-bold text-slate-900 mb-3 text-lg">Matte Spanndecken</h4>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Perfekt für Wohn- und Schlafbereiche. Keine störenden Reflexionen, elegante Optik. 
                      Besonders beliebt in Home-Offices und TV-Räumen in Städten wie Düsseldorf, Köln und Dortmund.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-200">
                    <h4 className="font-bold text-slate-900 mb-3 text-lg">Satin-Spanndecken</h4>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Der ideale Kompromiss mit dezentem Schimmer. Verleiht Räumen Eleganz ohne zu viel Glanz. 
                      Sehr gefragt in Essen, Duisburg und Bochum für moderne Wohnkonzepte.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border-2 border-purple-200 shadow-lg hover:shadow-xl transition-all duration-200">
                    <h4 className="font-bold text-slate-900 mb-3 text-lg">Hochglanz-Spanndecken</h4>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Spiegeleffekt für optische Raumvergrößerung. Ideal für Bäder und niedrige Räume. 
                      Besonders in Altbauwohnungen in Bonn, Münster und Aachen eine beliebte Wahl.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border-2 border-indigo-200 shadow-lg hover:shadow-xl transition-all duration-200">
                    <h4 className="font-bold text-slate-900 mb-3 text-lg">LED-Lichtdecken</h4>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Integrierte Beleuchtungskonzepte direkt in der Decke. Von einzelnen Spots bis zu vollflächigen 
                      Lichtdecken – wir realisieren Ihre Licht-Vision in Wuppertal, Bielefeld und darüber hinaus.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
                  Spanndecken-Montage in allen Städten und Regionen in NRW
                </h3>
                
                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                  Unser erfahrenes Montage-Team ist in ganz Nordrhein-Westfalen für Sie im Einsatz. Ob Sie in einer 
                  Großstadt wie Köln, Düsseldorf oder Dortmund wohnen, oder in kleineren Städten wie Mönchengladbach, 
                  Krefeld, Solingen, Leverkusen oder Hagen – wir sind schnell bei Ihnen vor Ort. Auch im Ruhrgebiet 
                  (Essen, Duisburg, Bochum, Gelsenkirchen, Oberhausen) sowie im Münsterland, Bergischen Land und 
                  im Rheinland bieten wir unsere professionellen Spanndecken-Services an. Kurze Anfahrtswege bedeuten 
                  für Sie: keine zusätzlichen Anfahrtskosten und flexible Terminvereinbarungen.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
                  Warum Raumeleganz Spanndecken Ihr Partner in NRW sein sollte
                </h3>
                
                <div className="bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 p-8 rounded-2xl border-2 border-cyan-200 mb-8 shadow-lg">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-600 flex-shrink-0 mt-1">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <div>
                        <strong className="text-slate-900">Über 15 Jahre Erfahrung:</strong>
                        <span className="text-slate-700"> Langjährige Kompetenz in Planung, Beratung und Montage.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-600 flex-shrink-0 mt-1">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <div>
                        <strong className="text-slate-900">Zertifizierter Meisterbetrieb:</strong>
                        <span className="text-slate-700"> Qualität und Handwerkskunst auf höchstem Niveau garantiert.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-600 flex-shrink-0 mt-1">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <div>
                        <strong className="text-slate-900">10 Jahre Herstellergarantie:</strong>
                        <span className="text-slate-700"> Langfristige Sicherheit für Ihre Investition.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-600 flex-shrink-0 mt-1">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <div>
                        <strong className="text-slate-900">Express-Montage in 6-8 Stunden:</strong>
                        <span className="text-slate-700"> Morgens beginnen, abends fertig – ohne Schmutz und Stress.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-600 flex-shrink-0 mt-1">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <div>
                        <strong className="text-slate-900">200+ Farben und Oberflächen:</strong>
                        <span className="text-slate-700"> Von klassischem Weiß bis zu ausgefallenen Designfarben.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-600 flex-shrink-0 mt-1">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <div>
                        <strong className="text-slate-900">Festpreis-Garantie:</strong>
                        <span className="text-slate-700"> Transparente Kosten ohne versteckte Gebühren oder Überraschungen.</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
                  Für welche Räume eignen sich Spanndecken?
                </h3>
                
                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                  Spanndecken sind universell einsetzbar und eignen sich für praktisch jeden Raum in Ihrem Zuhause oder Gewerbe:
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white p-5 rounded-2xl border-2 border-cyan-200 shadow-lg hover:shadow-xl transition-all duration-200">
                    <h5 className="font-bold text-slate-900 mb-2">Wohnräume</h5>
                    <p className="text-slate-700 text-sm">Wohnzimmer, Schlafzimmer, Kinderzimmer – überall einsetzbar</p>
                  </div>
                  <div className="bg-white p-5 rounded-2xl border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-200">
                    <h5 className="font-bold text-slate-900 mb-2">Feuchträume</h5>
                    <p className="text-slate-700 text-sm">Bad, Küche, Keller – 100% feuchtigkeitsbeständig</p>
                  </div>
                  <div className="bg-white p-5 rounded-2xl border-2 border-purple-200 shadow-lg hover:shadow-xl transition-all duration-200">
                    <h5 className="font-bold text-slate-900 mb-2">Gewerbe</h5>
                    <p className="text-slate-700 text-sm">Büros, Praxen, Ladenlokale, Restaurants, Hotels</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
                  Häufig gestellte Fragen zu Spanndecken in NRW
                </h3>

                <div className="space-y-6 mb-8">
                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-2xl border-2 border-cyan-200 shadow-lg">
                    <h4 className="font-bold text-slate-900 mb-2">Was kostet eine Spanndecke in NRW?</h4>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Die Kosten für eine Spanndecke liegen in der Regel zwischen 79€ und 160€ pro Quadratmeter, 
                      abhängig von Oberfläche, Farbe und zusätzlichen Features wie LED-Integration. Ein durchschnittliches 
                      Wohnzimmer (20m²) kostet somit zwischen 1.580€ und 3.200€ inklusive Material und Montage.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl border-2 border-blue-200 shadow-lg">
                    <h4 className="font-bold text-slate-900 mb-2">Wie lange dauert die Montage wirklich?</h4>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Ein normaler Wohnraum (15-25m²) ist in 6-8 Stunden fertig montiert. Größere Räume oder 
                      aufwendige LED-Konzepte können 1-2 Tage in Anspruch nehmen. Der große Vorteil: Sie können 
                      den Raum sofort nach der Montage wieder nutzen – keine Trocknungszeiten!
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-2xl border-2 border-purple-200 shadow-lg">
                    <h4 className="font-bold text-slate-900 mb-2">Kann man Spanndecken auch in Mietwohnungen einbauen?</h4>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Ja, absolut! Spanndecken werden mit speziellen Profilen montiert, die bei einem späteren Auszug 
                      rückstandsfrei entfernt werden können. Viele Vermieter schätzen Spanndecken sogar, da sie die 
                      Wohnung aufwerten. Sprechen Sie trotzdem vorab mit Ihrem Vermieter.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-indigo-50 to-cyan-50 p-6 rounded-2xl border-2 border-indigo-200 shadow-lg">
                    <h4 className="font-bold text-slate-900 mb-2">Sind Spanndecken umweltfreundlich?</h4>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Moderne Spanndecken aus PVC sind recycelbar und geben keine Schadstoffe ab. Sie sind 
                      nach europäischen Standards zertifiziert (B1 schwer entflammbar) und verbessern sogar 
                      die Energieeffizienz Ihres Raumes durch den isolierenden Luftraum zwischen Alt- und Neudecke.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white p-8 rounded-2xl text-center mt-12 shadow-2xl">
                  <h3 className="text-2xl font-bold mb-4">Kostenlose Beratung für Ihr Spanndecken-Projekt</h3>
                  <p className="mb-6 opacity-90">
                    Sie haben Fragen zu Spanndecken oder möchten ein unverbindliches Angebot? 
                    Unser Team berät Sie gerne kostenlos und kommt für eine Besichtigung zu Ihnen nach Hause.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="/kontakt" 
                      className="inline-block px-8 py-3 bg-white text-cyan-700 font-bold rounded-xl hover:bg-cyan-50 transition-all duration-200 hover:scale-105 shadow-xl"
                    >
                      Jetzt Termin vereinbaren
                    </a>
                    <a 
                      href="tel:+4921234567890" 
                      className="inline-block px-8 py-3 bg-cyan-700 text-white font-bold rounded-xl hover:bg-cyan-800 transition-all duration-200 hover:scale-105 shadow-xl"
                    >
                      Direkt anrufen
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
