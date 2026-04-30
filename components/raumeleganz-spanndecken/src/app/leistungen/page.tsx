import type { Metadata } from 'next';
import LeistungenDetail from '@/components/LeistungenDetail';

export const metadata: Metadata = {
  title: 'Spanndecken Leistungen: Matt, Satin, Lackspanndecken | Raumeleganz',
  description: 'Entdecke unsere Spanndecken: Matt, Satin, Lackspanndecken mit LED-Beleuchtung. Ab 79€/m². Staubfreie Montage in 6-8h. 10 Jahre Garantie. Jetzt beraten lassen!',
};

export default function LeistungenPage() {
  // JSON-LD Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Startseite',
        item: 'https://raumeleganz-spanndecken.de',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Leistungen',
        item: 'https://raumeleganz-spanndecken.de/leistungen',
      },
    ],
  };

  // JSON-LD Service Schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Spanndecken-Installation',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Raumeleganz Spanndecken',
      areaServed: 'Deutschland',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Spanndecken-Varianten',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Spanndecken allgemein',
            description: 'Hochwertige Spanndecken in matt, satin oder hochglänzend',
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            price: '79',
            priceCurrency: 'EUR',
            unitText: 'm²',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Lackspanndecken',
            description: 'Hochglänzende Spanndecken mit Spiegeleffekt',
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            price: '89',
            priceCurrency: 'EUR',
            unitText: 'm²',
          },
        },
      ],
    },
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '79',
      highPrice: '160',
      priceCurrency: 'EUR',
      unitText: 'm²',
    },
  };

  // JSON-LD FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Wie lange dauert die Montage einer Spanndecke?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ein durchschnittliches Wohnzimmer (ca. 18m²) ist in 6-8 Stunden fertig – komplett staubfrei und sofort nutzbar.',
        },
      },
      {
        '@type': 'Question',
        name: 'Kann ich Spanndecken im Badezimmer einsetzen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja! Unsere Spanndecken sind feuchtraumgeeignet, abwaschbar und perfekt fürs Bad – auch mit integrierter Beleuchtung.',
        },
      },
      {
        '@type': 'Question',
        name: 'Was kostet eine Spanndecke pro m²?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ab 79€/m² für matte Ausführungen, ab 89€/m² für Lackspanndecken. Finale Preise hängen von Raumgröße, Oberfläche und Extras ab.',
        },
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="relative min-h-screen">
        {/* Page Hero - Premium Design */}
        <section className="relative py-24 sm:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-300 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-300 rounded-full blur-3xl" />
          </div>
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-2xl mb-8 shadow-2xl border-2 border-slate-200">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                </span>
                <span className="text-sm font-bold text-cyan-700">8 Premium-Kategorien</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 mb-6 sm:mb-8 leading-tight">
                Entdecken Sie die Vielfalt
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600">
                  unserer Spanndecken
                </span>
              </h1>
              
              {/* Subheading */}
              <p className="text-lg sm:text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto leading-relaxed mb-12">
                Von klassisch-matt über elegant-satin bis hin zu hochglänzend – 
                mit integrierter LED-Beleuchtung und individuellen Motiven.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
                {[
                  { value: '6-8h', label: 'Montagezeit' },
                  { value: '10 Jahre', label: 'Garantie' },
                  { value: '100%', label: 'Staubfrei' },
                  { value: '200+', label: 'Farben & Designs' },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="p-4 sm:p-6 bg-white rounded-2xl border-2 border-slate-200 shadow-lg hover:shadow-2xl hover:border-cyan-400 transition-all duration-200 ease-out hover:scale-105"
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-700 font-bold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <LeistungenDetail />

      {/* Additional Info Section - Premium CTA */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div className="absolute top-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 lg:p-16 border-2 border-white/20 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Left Column */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  <span className="text-sm font-bold text-white">Kostenlose Beratung</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Bereit für Ihre
                  <br />
                  Traum-Decke?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
                  Wir beraten Sie persönlich und finden gemeinsam die perfekte Lösung für Ihre Räume. 
                  Vereinbaren Sie jetzt ein kostenloses Erstgespräch!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/kontakt"
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-900 font-bold rounded-xl shadow-2xl hover:shadow-white/50 transition-all duration-200 ease-out hover:scale-105"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    Jetzt Termin vereinbaren
                  </a>
                  <a
                    href="tel:+4920189083052"
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-200 ease-out hover:scale-105"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    Direkt anrufen
                  </a>
                </div>
              </div>

              {/* Right Column - Contact Cards */}
              <div className="space-y-4">
                {[
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    title: 'Telefonberatung',
                    desc: 'Mo-Fr: 8:00 - 18:00 Uhr',
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    title: 'Vor-Ort-Termin',
                    desc: 'Kostenlose Besichtigung & Aufmaß',
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    title: 'E-Mail-Anfrage',
                    desc: 'Antwort innerhalb von 24 Stunden',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group p-6 bg-white/10 backdrop-blur-xl rounded-2xl border-2 border-white/20 hover:bg-white/20 transition-all duration-200 ease-out hover:scale-[1.02]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 text-white group-hover:scale-110 transition-transform duration-200">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-lg mb-1">{item.title}</h3>
                        <p className="text-white/80 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}

