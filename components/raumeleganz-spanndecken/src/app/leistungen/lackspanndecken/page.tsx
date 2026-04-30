'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function LackspanndeckenPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    {
      src: '/images/lack-01.webp',
      alt: 'Hochglanz Lackspanndecke mit Spiegeleffekt und LED-Spots im modernen Wohnraum',
      title: 'Hochglanz-Perfektion',
      subtitle: 'Spiegeleffekt verdoppelt die Raumwirkung',
      location: 'Referenzprojekt NRW',
      details: 'Hochglanz weiß mit LED-Spots',
      result: 'Lichtreflexion schafft luxuriöse Atmosphäre',
    },
    {
      src: '/images/lack-02.webp',
      alt: 'Weiße Lackspanndecke mit perfekter Lichtreflexion im Wohnzimmer',
      title: 'Raumvergrößerung durch Reflexion',
      subtitle: 'Optisch doppelte Raumhöhe',
      location: 'Referenzprojekt NRW',
      details: 'Hochglanz mit optimaler Lichtverteilung',
      result: 'Raum wirkt größer und heller',
    },
    {
      src: '/images/lack-03.webp',
      alt: 'Spiegelnde Lackspanndecke mit LED-Integration und hochglänzender Oberfläche',
      title: 'Premium-Oberfläche',
      subtitle: 'Spiegelglatt und pflegeleicht',
      location: 'Referenzprojekt NRW',
      details: 'Hochglanz mit LED-Integration',
      result: 'Modernes Design trifft Funktionalität',
    },
    {
      src: '/images/lack-04.webp',
      alt: 'Premium Hochglanz-Spanndecke mit Lichtkonzept und Spiegeleffekt',
      title: 'Licht & Raum',
      subtitle: 'Jeder Lichtstrahl wird verdoppelt',
      location: 'Referenzprojekt NRW',
      details: 'Hochglanz mit Lichtkonzept',
      result: 'Perfekte Raumausleuchtung',
    },
    {
      src: '/images/lack-05.webp',
      alt: 'Moderne Lackspanndecke mit eleganter Spiegelung im Wohnbereich',
      title: 'Eleganz in Hochglanz',
      subtitle: 'Luxuriöse Atmosphäre garantiert',
      location: 'Referenzprojekt NRW',
      details: 'Hochglanz mit Designer-Spots',
      result: 'Hotel-Feeling für Zuhause',
    },
    {
      src: '/images/lack-06.webp',
      alt: 'Spiegelglatte Lackspanndecke mit makelloser Premium-Oberfläche',
      title: 'Spiegelglatte Perfektion',
      subtitle: 'Keine Unebenheiten, nur Glanz',
      location: 'Referenzprojekt NRW',
      details: 'Hochglanz Premium-Qualität',
      result: 'Makellose Oberfläche',
    },
    {
      src: '/images/lack-07.webp',
      alt: 'Hochglanz Lackspanndecke im Badezimmer mit Marmor und LED-Beleuchtung',
      title: 'Badezimmer-Luxus',
      subtitle: 'Spa-Feeling durch Spiegeldecke',
      location: 'Referenzprojekt NRW',
      details: 'Hochglanz weiß feuchtraumgeeignet',
      result: '5-Sterne-Hotel-Atmosphäre',
    },
    {
      src: '/images/lack-08.webp',
      alt: 'Lackspanndecke mit LED-Spots und brillantem Spiegeleffekt',
      title: 'Lichtspiel der Extraklasse',
      subtitle: 'LEDs schaffen magische Reflexionen',
      location: 'Referenzprojekt NRW',
      details: 'Hochglanz mit LED-Technik',
      result: 'Atemberaubende Lichteffekte',
    },
    {
      src: '/images/lack-09.webp',
      alt: 'Premium Hochglanz-Spanndecke mit perfekter Reflexion und modernem Design',
      title: 'Moderne Raumgestaltung',
      subtitle: 'Design trifft Funktionalität',
      location: 'Referenzprojekt NRW',
      details: 'Hochglanz mit Stil',
      result: 'Zeitlos schön',
    },
    {
      src: '/images/lack-10.webp',
      alt: 'Brillante Lackspanndecke mit Hochglanz-Finish und Lichtspiel',
      title: 'Brillanz in Perfektion',
      subtitle: 'Hochglanz, der begeistert',
      location: 'Referenzprojekt NRW',
      details: 'Premium Hochglanz-Finish',
      result: 'Wow-Effekt garantiert',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/leistungen" className="inline-flex items-center gap-2 text-warm-700 hover:text-craft-600 mb-6 transition-colors duration-200">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Zurück zu Leistungen
          </Link>

          <div className="flex items-center gap-6 mb-8">
            <div className="relative">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="drop-shadow-xl">
                <defs>
                  <linearGradient id="grad-gloss-hero" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#A78BFA" />
                    <stop offset="50%" stopColor="#818CF8" />
                    <stop offset="100%" stopColor="#6366F1" />
                  </linearGradient>
                  <radialGradient id="glow-gloss" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFF" opacity="0.8" />
                    <stop offset="100%" stopColor="#A78BFA" opacity="0" />
                  </radialGradient>
                </defs>
                <rect x="10" y="20" width="60" height="40" rx="4" fill="url(#grad-gloss-hero)" />
                <circle cx="40" cy="40" r="25" fill="url(#glow-gloss)" className="animate-pulse" />
                <ellipse cx="30" cy="32" rx="12" ry="6" fill="white" opacity="0.5" />
                <ellipse cx="50" cy="36" rx="10" ry="5" fill="white" opacity="0.4" />
                <path d="M15 20L15 15M40 20L40 15M65 20L65 15" stroke="#6366F1" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M15 60L15 65M40 60L40 65M65 60L65 65" stroke="#6366F1" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-warm-900 mb-2">Lackspanndecken</h1>
              <p className="text-craft-700 font-semibold text-xl sm:text-2xl">Spiegeleffekt – Räume wirken doppelt so groß</p>
            </div>
          </div>

          <div className="max-w-3xl">
            <p className="text-lg sm:text-xl text-warm-700 leading-relaxed mb-6">
              Stell dir vor: Dein Raum wirkt plötzlich einen halben Meter höher. Das Licht tanzt an der Decke. Dunkle Ecken verschwinden. 
              <strong> Das ist die Magie von Hochglanz-Spanndecken.</strong> Keine Baumaßnahmen, kein Umbau – nur pure optische Raumvergrößerung.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-bold shadow-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 3l14 9-14 9V3z" fill="currentColor"/>
                </svg>
                Bis 90% Lichtreflektion
              </div>
              <div className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-full text-warm-800 font-semibold border-2 border-indigo-300 shadow-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"/>
                </svg>
                +30% optische Höhe
              </div>
              <div className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-full text-warm-800 font-semibold border-2 border-indigo-300 shadow-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor"/>
                </svg>
                Wow-Effekt garantiert
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optimierter Image Slider */}
      <section className="relative bg-white py-12">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative h-[400px] md:h-[550px] rounded-2xl overflow-hidden shadow-2xl">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  width="1400"
                  height="700"
                  loading={index === 0 ? "eager" : "lazy"}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                  {/* Top Info */}
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-craft-700 text-xs font-bold">
                      {index + 1}/{images.length}
                    </span>
                    <span className="px-3 py-1.5 bg-indigo-500/95 backdrop-blur-sm rounded-full text-white text-xs font-semibold flex items-center gap-1.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                      {image.location}
                    </span>
                  </div>

                  {/* Bottom Info */}
                  <div>
                    <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                      {image.title}
                    </h3>
                    <p className="text-white/90 text-base md:text-lg mb-3">
                      {image.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-lg text-white text-sm border border-white/30">
                        {image.details}
                      </span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 max-w-2xl">
                      <p className="text-white/90 text-sm italic">
                        {image.result}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-indigo-500 w-8'
                      : 'bg-white/60 hover:bg-white w-2'
                  }`}
                  aria-label={`Bild ${index + 1} anzeigen`}
                />
              ))}
            </div>

            {/* Arrow Navigation */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg z-20"
              aria-label="Vorheriges Bild"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % images.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg z-20"
              aria-label="Nächstes Bild"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Emotionale Story */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-warm-900 mb-6">Warum Hochglanz Räume verwandelt</h2>
                <p className="text-warm-700 text-lg leading-relaxed mb-6">
                  Erinnerst du dich an das Gefühl, wenn du in einem Design-Hotel check-in machst? Die Decke wirkt hoch, der Raum fühlt sich luftig an, 
                  das Licht scheint von überall zu kommen. <strong>Kein Zufall</strong> – das ist der Hochglanz-Effekt.
                </p>
                <p className="text-warm-700 text-lg leading-relaxed mb-6">
                  Lackspanndecken reflektieren bis zu 90% des Lichts. Jeder Lichtstrahl wird eingefangen und zurückgeworfen. Schatten verschwinden. 
                  Dunkle Ecken werden hell. Und dein Gehirn denkt: "Wow, hier ist viel mehr Platz als gedacht."
                </p>
                <p className="text-warm-700 text-lg leading-relaxed mb-6">
                  Der Trick funktioniert besonders gut in <strong>kleinen, niedrigen oder dunklen Räumen</strong>. Kellerräume werden zu Lofts. 
                  2,30m Deckenhöhe fühlt sich an wie 3 Meter. Und Räume ohne Fenster? Wirken plötzlich hell und freundlich.
                </p>

                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 border-l-4 border-indigo-500 my-8">
                  <div className="flex items-start gap-4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-indigo-600 flex-shrink-0">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/>
                      <line x1="12" y1="17" x2="12.01" y2="17"/>
                    </svg>
                    <div>
                      <h4 className="font-bold text-warm-900 mb-3 text-xl">Das sagen unsere Kunden:</h4>
                      <p className="text-warm-700 leading-relaxed italic mb-2">
                        "Ich hab das Gefühl, wir haben angebaut – dabei ist es nur die Decke!"
                      </p>
                      <p className="text-warm-700 leading-relaxed italic mb-2">
                        "Unser Keller ist jetzt unser Lieblingsraum. Keiner glaubt, dass das ein Keller ist."
                      </p>
                      <p className="text-warm-700 leading-relaxed italic">
                        "Die Hochglanz-Decke reflektiert unser indirektes Licht – sieht aus wie ein 5-Sterne-Hotel."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Optionen - Große Cards mit Gradients */}
              <div>
                <h3 className="text-3xl font-bold text-warm-900 mb-8">Hochglanz ist nicht gleich Hochglanz</h3>
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-warm-50 to-blue-50 rounded-2xl p-8 border-2 border-blue-200 hover:border-blue-400 transition-all duration-200 hover:shadow-xl">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"/>
                          <path d="M12 6v6l4 2"/>
                        </svg>
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-2xl font-bold text-warm-900 mb-3">Klassisch Weiß (am beliebtesten)</h4>
                        <p className="text-warm-700 leading-relaxed mb-4">
                          Die zeitlose Wahl. Reflektiert Licht perfekt, passt zu jedem Einrichtungsstil, wirkt nie kitschig. 
                          90% unserer Kunden entscheiden sich für Hochglanz Weiß – weil es einfach funktioniert.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-white rounded-lg text-sm font-semibold text-warm-800 border border-blue-200">Zeitlos</span>
                          <span className="px-3 py-1 bg-white rounded-lg text-sm font-semibold text-warm-800 border border-blue-200">Neutral</span>
                          <span className="px-3 py-1 bg-white rounded-lg text-sm font-semibold text-warm-800 border border-blue-200">Maximale Reflektion</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-warm-50 to-purple-50 rounded-2xl p-8 border-2 border-purple-200 hover:border-purple-400 transition-all duration-200 hover:shadow-xl">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-2xl font-bold text-warm-900 mb-3">Farbig (für Mutige)</h4>
                        <p className="text-warm-700 leading-relaxed mb-4">
                          Schwarz, Anthrazit, Dunkelblau – für alle, die Statement setzen wollen. Schwarze Hochglanz-Decken sind extrem edel, 
                          aber Achtung: Wirken nur in hohen, hellen Räumen. Wir beraten dich ehrlich, ob es bei dir passt.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-white rounded-lg text-sm font-semibold text-warm-800 border border-purple-200">Edel</span>
                          <span className="px-3 py-1 bg-white rounded-lg text-sm font-semibold text-warm-800 border border-purple-200">Modern</span>
                          <span className="px-3 py-1 bg-white rounded-lg text-sm font-semibold text-warm-800 border border-purple-200">Nur für hohe Räume</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-warm-50 to-amber-50 rounded-2xl p-8 border-2 border-amber-200 hover:border-amber-400 transition-all duration-200 hover:shadow-xl">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                          <path d="M12 2v20M2 12h20"/>
                        </svg>
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-2xl font-bold text-warm-900 mb-3">Mit LED-Beleuchtung kombiniert</h4>
                        <p className="text-warm-700 leading-relaxed mb-4">
                          Die Königsdisziplin: Hochglanz + indirekte LED-Profile. Das Licht reflektiert von der Decke, wird weich gestreut – 
                          und du hast dieses diffuse, luxuriöse Licht wie im Designhotel. Kostet 300-500€ extra, sieht aus wie 5.000€.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-white rounded-lg text-sm font-semibold text-warm-800 border border-amber-200">Luxus-Look</span>
                          <span className="px-3 py-1 bg-white rounded-lg text-sm font-semibold text-warm-800 border border-amber-200">Weiche Ausleuchtung</span>
                          <span className="px-3 py-1 bg-white rounded-lg text-sm font-semibold text-warm-800 border border-amber-200">Hotel-Feeling</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Raum-Guide */}
              <div>
                <h3 className="text-3xl font-bold text-warm-900 mb-8">Wo Hochglanz besonders gut funktioniert</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      room: 'Badezimmer',
                      icon: (
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 22H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v15a2 2 0 01-2 2h-4"/>
                          <rect x="6" y="6" width="12" height="8"/>
                        </svg>
                      ),
                      recommendation: 'Perfekt für Feuchträume',
                      desc: 'Abwaschbar, hygienisch, reflektiert Licht. Der Spiegeleffekt ist im Bad sogar praktisch.',
                      gradient: 'from-cyan-500 to-blue-500'
                    },
                    {
                      room: 'Keller & Souterrain',
                      icon: (
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                        </svg>
                      ),
                      recommendation: 'Aus dunkel wird hell',
                      desc: 'Lichtarme Räume profitieren am meisten. Jeder Lichtstrahl wird optimal genutzt.',
                      gradient: 'from-indigo-500 to-purple-500'
                    },
                    {
                      room: 'Kleine Zimmer',
                      icon: (
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="3" width="18" height="18" rx="2"/>
                          <path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>
                        </svg>
                      ),
                      recommendation: 'Optische Vergrößerung',
                      desc: 'Räume wirken bis zu 30% größer. Dein Gehirn fällt auf den Trick rein – in a good way.',
                      gradient: 'from-pink-500 to-rose-500'
                    },
                    {
                      room: 'Niedrige Decken',
                      icon: (
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"/>
                        </svg>
                      ),
                      recommendation: 'Mehr gefühlte Höhe',
                      desc: '2,30m Deckenhöhe? Mit Hochglanz wirkt es wie 2,80m. Plötzlich fühlt sich alles luftiger an.',
                      gradient: 'from-violet-500 to-purple-500'
                    },
                  ].map((item, i) => (
                    <div key={i} className="bg-warm-50 rounded-2xl p-6 border border-warm-200 hover:border-craft-400 transition-all duration-200 hover:shadow-lg">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.gradient} text-white mb-4 shadow-lg`}>
                        {item.icon}
                      </div>
                      <h4 className="text-xl font-bold text-warm-900 mb-2">{item.room}</h4>
                      <p className="text-craft-700 font-semibold mb-3">{item.recommendation}</p>
                      <p className="text-warm-700 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h3 className="text-3xl font-bold text-warm-900 mb-8">Häufig gestellte Fragen</h3>
                <div className="space-y-6">
                  {[
                    {
                      q: 'Sehe ich mich selbst in der Decke gespiegelt?',
                      a: 'Nein, nicht wie im Badezimmerspiegel. Du erkennst Lichtquellen, Schatten, vage Formen – aber keine Details. Der Effekt ist dezent genug, um den Raum größer wirken zu lassen, aber nicht so stark, dass du dich selbst siehst. Gut so, sonst wäre es ja creepy.'
                    },
                    {
                      q: 'Sind Lackspanndecken pflegeleichter oder aufwendiger?',
                      a: 'Das Material ist genauso robust wie matte Spanndecken. Aber: Fingerabdrücke sieht man schneller (einfach feucht abwischen und weg). Wenn dich sowas stresst, ist Satin oder Matt vielleicht besser für dich. Wir beraten dich ehrlich, was zu deinem Alltag passt.'
                    },
                    {
                      q: 'Funktioniert Hochglanz auch in großen, hohen Räumen?',
                      a: 'Klar, aber der Wow-Effekt ist in kleinen, niedrigen Räumen am größten. In einem 4-Meter-hohen Loft? Sieht nice aus, aber ist nicht game-changing. Der größte Nutzen liegt in der optischen Vergrößerung – und die braucht man bei großen Räumen weniger.'
                    },
                    {
                      q: 'Was kostet eine Lackspanndecke im Vergleich zu matt?',
                      a: 'Hochglanz kostet etwa 10-15% mehr als Matt, weil die Montage präziser sein muss. Jede kleine Welle würde sich zeigen. Für ein 20m² Wohnzimmer reden wir von ca. 150-200€ Aufpreis. Lohnt sich, wenn der optische Effekt zu deinem Raum passt.'
                    },
                    {
                      q: 'Kann ich Hochglanz mit LED-Beleuchtung kombinieren?',
                      a: 'Absolut – das ist sogar die Königsdisziplin! Indirekte LED-Profile + Hochglanz = das Licht wird weich reflektiert und gestreut. Ergebnis: Diffuse, luxuriöse Ausleuchtung wie im 5-Sterne-Hotel. Viele Kunden sagen: "Die beste Entscheidung ever."'
                    },
                  ].map((faq, i) => (
                    <div key={i} className="bg-warm-50 rounded-xl p-6 border border-warm-200 hover:border-craft-400 transition-all duration-200">
                      <h4 className="font-bold text-warm-900 text-lg mb-3">{faq.q}</h4>
                      <p className="text-warm-700 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Abschluss-CTA */}
              <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
                <div className="max-w-2xl mx-auto">
                  <div className="inline-flex p-4 bg-white/20 rounded-full mb-6">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                    Lass deinen Raum größer wirken
                  </h3>
                  <p className="text-white/95 text-lg md:text-xl leading-relaxed mb-8">
                    Wir kommen kostenlos vorbei, schauen uns deinen Raum an und sagen dir ehrlich, ob Hochglanz zu dir passt. 
                    Mit 3D-Visualisierung siehst du vorher, wie es aussehen wird. Versprochen: Keine Überraschungen.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                    <Link
                      href="/kontakt"
                      className="w-full sm:w-auto px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-warm-50 hover:scale-105 transition-all duration-200 shadow-xl text-lg"
                    >
                      Kostenlose 3D-Visualisierung
                    </Link>
                    <a
                      href="tel:+49123456789"
                      className="w-full sm:w-auto px-8 py-4 bg-purple-700 text-white font-bold rounded-xl hover:bg-purple-800 hover:scale-105 transition-all duration-200 shadow-xl flex items-center justify-center gap-2 text-lg"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                      Direkt anrufen
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-4 justify-center text-sm">
                    <span className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      3D-Vorschau vorher
                    </span>
                    <span className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      Festpreis-Garantie
                    </span>
                    <span className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      10 Jahre Garantie
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-8">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl p-8 shadow-2xl">
                <div className="text-center mb-6">
                  <div className="inline-flex p-4 bg-white/20 rounded-full mb-4">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">3D-Visualisierung inklusive</h3>
                  <p className="mb-6 text-white/90">
                    Sieh vorher, wie dein Raum mit Hochglanz-Decke aussehen wird – kostenlos!
                  </p>
                </div>
                <Link
                  href="/kontakt"
                  className="block w-full px-6 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-warm-50 transition-all duration-200 text-center shadow-lg hover:scale-105 mb-4"
                >
                  Jetzt Termin vereinbaren
                </Link>
                <a
                  href="tel:+49123456789"
                  className="block w-full px-6 py-4 bg-purple-700 text-white font-bold rounded-xl hover:bg-purple-800 transition-all duration-200 text-center shadow-lg hover:scale-105"
                >
                  +49 (0) 123 456789
                </a>
                <div className="mt-6 pt-6 border-t border-white/30 space-y-3 text-sm">
                  <p className="flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    3D-Vorschau vorher sehen
                  </p>
                  <p className="flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Ehrliche Beratung
                  </p>
                  <p className="flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Festpreis-Garantie
                  </p>
                </div>
              </div>

              {/* Vorteile Box */}
              <div className="bg-warm-50 rounded-2xl p-8 border-2 border-indigo-200 shadow-lg">
                <h3 className="text-xl font-bold text-warm-900 mb-6">Warum Hochglanz?</h3>
                <div className="space-y-4">
                  {[
                    { title: 'Optische Raumvergrößerung', desc: 'Bis zu 30% größer wirkende Räume' },
                    { title: 'Maximale Lichtreflektion', desc: 'Bis 90% – jede Lampe wirkt doppelt so hell' },
                    { title: 'Perfekt für dunkle Räume', desc: 'Keller, Souterrain, Nordzimmer' },
                    { title: 'Design-Hotel Feeling', desc: 'Luxuriöser Look für zuhause' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-indigo-600 flex-shrink-0">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <div>
                        <p className="font-bold text-warm-900">{item.title}</p>
                        <p className="text-sm text-warm-700">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related */}
              <div className="bg-warm-50 rounded-2xl p-8 shadow-sm border border-warm-200">
                <h3 className="text-xl font-bold text-warm-900 mb-4">Das passt auch:</h3>
                <div className="space-y-3">
                  <Link href="/leistungen/beleuchtung-spanndecke" className="block p-4 bg-white rounded-xl hover:bg-craft-50 transition-all duration-200 border border-warm-200 hover:border-craft-400 hover:shadow-md">
                    <span className="font-semibold text-warm-900 flex items-center gap-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3"/>
                        <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                      </svg>
                      LED-Beleuchtung
                    </span>
                    <p className="text-xs text-warm-600 mt-1">Perfekte Kombi mit Hochglanz</p>
                  </Link>
                  <Link href="/leistungen/satin-spanndecken" className="block p-4 bg-white rounded-xl hover:bg-craft-50 transition-all duration-200 border border-warm-200 hover:border-craft-400 hover:shadow-md">
                    <span className="font-semibold text-warm-900 flex items-center gap-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0a4 4 0 004-4v-1a2 2 0 012-2h2a2 2 0 012 2v1a4 4 0 01-4 4H7z"/>
                      </svg>
                      Satin-Spanndecken
                    </span>
                    <p className="text-xs text-warm-600 mt-1">Dezentere Alternative</p>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Back to Services */}
      <section className="py-12 bg-warm-100 text-center">
        <Link
          href="/leistungen"
          className="inline-flex items-center gap-2 text-warm-800 hover:text-craft-600 font-semibold transition-colors duration-200 text-lg"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Zurück zur Leistungsübersicht
        </Link>
      </section>
    </div>
  );
}
