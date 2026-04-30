'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function LichtdeckenPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    {
      src: '/images/licht-01.webp',
      alt: 'Vollflächige Lichtdecke mit gleichmäßiger LED-Ausleuchtung ohne Schatten',
      title: 'Vollflächiges Licht',
      subtitle: 'Gleichmäßige Ausleuchtung ohne Schatten',
      location: 'Referenzprojekt NRW',
      details: 'Transluzente Folie mit LED-Panels',
    },
    {
      src: '/images/licht-02.webp',
      alt: 'Moderne LED-Lichtdecke mit indirekter Beleuchtung im Wohnraum',
      title: 'Indirekte Beleuchtung',
      subtitle: 'Diffuses Licht ohne sichtbare Quelle',
      location: 'Referenzprojekt NRW',
      details: 'Rahmen-Lichtdecke mit LED-Steuerung',
    },
    {
      src: '/images/licht-03.webp',
      alt: 'LED-Spanndecke mit perfekter Lichtverteilung und Smart-Home-Integration',
      title: 'Perfekte Lichtverteilung',
      subtitle: 'Keine dunklen Ecken mehr',
      location: 'Referenzprojekt NRW',
      details: 'LED-Panel-System',
    },
    {
      src: '/images/licht-04.webp',
      alt: 'Lichtdecke mit optimaler Arbeitsplatzbeleuchtung und LED-Panels',
      title: 'Optimale Ausleuchtung',
      subtitle: 'Perfektes Licht für jeden Raum',
      location: 'Referenzprojekt NRW',
      details: 'LED-Lichtdecken-System',
    },
    {
      src: '/images/licht-05.webp',
      alt: 'Helle LED-Lichtdecke mit Tageslicht-Feeling und energieeffizienter Technik',
      title: 'Helle Atmosphäre',
      subtitle: 'Tageslicht-Feeling rund um die Uhr',
      location: 'Referenzprojekt NRW',
      details: 'Tageslicht-LED-System',
    },
    {
      src: '/images/licht-06.webp',
      alt: 'Dimmbare LED-Lichtdecke mit stufenloser Helligkeitsregelung',
      title: 'Dimmbare Lichtlösung',
      subtitle: 'Von 0 bis 100% stufenlos',
      location: 'Referenzprojekt NRW',
      details: 'Dimmbare LED-Panels',
    },
    {
      src: '/images/licht-07.webp',
      alt: 'Energieeffiziente LED-Lichtdecke mit moderner Lichttechnologie',
      title: 'Energieeffizient',
      subtitle: '90% weniger Stromverbrauch',
      location: 'Referenzprojekt NRW',
      details: 'LED-Effizienz-System',
    },
    {
      src: '/images/licht-08.webp',
      alt: 'LED-Lichtdecke mit warmweißer Beleuchtung für gemütliche Atmosphäre',
      title: 'Warmweißes Licht',
      subtitle: 'Gemütliche Wohnatmosphäre',
      location: 'Referenzprojekt NRW',
      details: 'Warmweiß-LED 3000K',
    },
    {
      src: '/images/licht-09.webp',
      alt: 'Smart-Home LED-Lichtdecke mit App- und Sprachsteuerung',
      title: 'Smart-Home-Ready',
      subtitle: 'Steuerung per App & Sprache',
      location: 'Referenzprojekt NRW',
      details: 'Smart-LED-System',
    },
    {
      src: '/images/licht-10.webp',
      alt: 'LED-Lichtdecke mit perfekter Farbwiedergabe und High-CRI-Technik',
      title: 'Perfekte Farbwiedergabe',
      subtitle: 'Farben sehen wie bei Tageslicht',
      location: 'Referenzprojekt NRW',
      details: 'High-CRI LED-System',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-white">
      {/* Premium Hero */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        {/* Background Decorations */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-300 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 rounded-full opacity-20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
          <Link href="/leistungen" className="inline-flex items-center gap-2 text-slate-700 hover:text-cyan-600 mb-6 transition-colors duration-200 font-semibold">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Zurück zu Leistungen
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 flex items-center justify-center shadow-xl">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">Lichtdecken</h1>
              <p className="text-cyan-700 font-bold text-lg">Die Decke wird zur Lichtquelle – keine Lampen mehr nötig</p>
            </div>
          </div>

          <div className="max-w-3xl">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              <strong className="text-slate-900">Erinnern Sie sich an das letzte Mal, als Sie in einem wirklich schönen Hotel aufgewacht sind?</strong> Dieses sanfte, gleichmäßige Licht, das den ganzen Raum erfüllt – ohne dass Sie eine einzige Lampe sehen? <strong className="text-cyan-700">Genau dieses Gefühl holen wir Ihnen nach Hause.</strong> Mit einer Lichtdecke verschwindet Ihre alte Zimmerdecke nicht einfach nur – sie wird zur Lichtquelle. Keine sichtbaren Lampen mehr, keine Kabel, keine Spots, die Sie beim Fernsehen blenden. <strong className="text-slate-900">Nur weiches, natürliches Licht, das aus der Decke selbst zu kommen scheint.</strong> Ihre Gäste werden fragen: "Wo ist denn hier die Lampe?" Und Sie lächeln und sagen: <strong className="text-cyan-700">"Die Decke IST die Lampe."</strong>
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full text-cyan-700 font-bold border-2 border-cyan-200">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                </svg>
                Vollflächiges Licht
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-slate-900 font-bold border-2 border-slate-200 shadow-md">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Keine Schatten
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-slate-900 font-bold border-2 border-slate-200 shadow-md">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
                Dimmbar & Smart
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Image Slider */}
      <section className="relative bg-white py-12">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
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
                
                {/* Top Badge */}
                <div className="absolute top-6 left-6 flex items-center gap-2">
                  <span className="px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full text-slate-900 text-sm font-bold shadow-lg border-2 border-slate-200">
                    Projekt {index + 1}/{images.length}
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 backdrop-blur-sm rounded-full text-white text-sm font-bold shadow-lg flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    {image.location}
                  </span>
                </div>

                {/* Bottom Info */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                  <div className="max-w-7xl mx-auto">
                    <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-2xl mb-3">
                      {image.title}
                    </h3>
                    <p className="text-white/95 text-lg md:text-xl font-medium drop-shadow-lg mb-4">
                      {image.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg text-white text-sm font-semibold border border-white/30">
                        {image.details}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-white w-8' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Bild ${index + 1} anzeigen`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg z-10"
              aria-label="Vorheriges Bild"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % images.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg z-10"
              aria-label="Nächstes Bild"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Premium Content */}
      <section className="py-16 bg-gradient-to-br from-white via-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Emotionale Story */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Warum Lichtdecken die Zukunft sind</h2>
                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                  <strong>Erinnern Sie sich an alte Büros?</strong> Flackernde Neonröhren, harte Schatten, kaltes Licht. Jetzt stellen Sie sich das Gegenteil vor: 
                  <strong className="text-cyan-700"> Eine Decke, die gleichmäßig, diffus und angenehm leuchtet.</strong> Keine sichtbaren Lampen. Kein Blenden. Nur perfektes Licht.
                </p>
                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                  Lichtdecken nutzen transluzente (lichtdurchlässige) Folien mit LEDs dahinter. Das Licht wird durch die Folie gestreut – 
                  wie bei einem riesigen Softbox-Filter in der Fotografie. <strong className="text-slate-900">Resultat: Weiches, schattenloses Licht, das überall gleich ist.</strong>
                </p>
                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                  Besonders in <strong className="text-cyan-700">Badezimmern, Fluren und Küchen</strong> entfalten Lichtdecken ihre volle Kraft. 
                  Keine dunklen Ecken mehr, keine komplizierten Lichtkonzepte – <strong>die Decke ist das Licht.</strong>
                </p>

                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border-2 border-cyan-200 shadow-lg">
                  <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-600">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="12" y1="16" x2="12" y2="12"/>
                      <line x1="12" y1="8" x2="12.01" y2="8"/>
                    </svg>
                    Wussten Sie das?
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    <strong>Lichtdecken sparen bis zu 90% Energie</strong> gegenüber alten Glühbirnen und benötigen keine Wartung. 
                    Die LEDs halten über 50.000 Stunden – das sind <strong className="text-cyan-700">mehr als 20 Jahre bei täglicher Nutzung.</strong>
                  </p>
                </div>
              </div>

              {/* Arten von Lichtdecken */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">3 Arten von Lichtdecken</h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>,
                      title: '1. Vollflächige Lichtdecke (am beliebtesten)',
                      desc: 'Die komplette Decke leuchtet. Hinter der transluzenten Folie liegen LED-Panels – gleichmäßig verteilt. Perfekt für Badezimmer, Flure, Wartezimmer. Ergebnis: Schattenlos, hell, clean.',
                      tags: ['Schattenlos', 'Gleichmäßig', 'Spa-Feeling'],
                      gradient: 'from-cyan-500 to-blue-600'
                    },
                    {
                      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="2" y="7" width="20" height="10" rx="2"/></svg>,
                      title: '2. Rahmen-Lichtdecke (dezenter)',
                      desc: 'Nur ein Teil der Decke leuchtet – z.B. ein Streifen in der Mitte oder ein Rahmen am Rand. Kombiniert mit normaler Spanndecke. Perfekt für Wohnzimmer.',
                      tags: ['Teilfläche', 'Design-Element', 'Individuell'],
                      gradient: 'from-indigo-500 to-purple-600'
                    },
                    {
                      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>,
                      title: '3. RGBW-Lichtdecke (für Mutige)',
                      desc: 'Die Decke kann Farben wechseln – Rot, Blau, Grün, Warmweiß, Kaltweiß. Per App steuerbar. Perfekt für Heimkinos, Gaming-Zimmer oder individuelles Lichtdesign.',
                      tags: ['Farbwechsel', 'App-Steuerung', 'Wow-Effekt'],
                      gradient: 'from-purple-500 to-pink-600'
                    },
                  ].map((item, i) => (
                    <div key={i} className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-cyan-400 transition-all duration-200 shadow-lg hover:shadow-xl">
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                          {item.icon}
                        </div>
                        <div className="flex-grow">
                          <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                          <p className="text-slate-700 leading-relaxed mb-4">{item.desc}</p>
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag, j) => (
                              <span key={j} className="px-3 py-1 bg-slate-100 rounded-lg text-sm font-semibold text-slate-800 border border-slate-200">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Raum-Guide */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Wo Lichtdecken richtig Sinn machen</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      room: 'Badezimmer',
                      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 22H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v15a2 2 0 01-2 2h-4"/><rect x="6" y="6" width="12" height="8"/></svg>,
                      recommendation: 'Perfekt für Feuchträume',
                      desc: 'Gleichmäßiges Licht beim Schminken, Rasieren, Duschen. Kein Schatten, kein Blenden. Spa-Feeling garantiert.',
                      gradient: 'from-cyan-500 to-blue-600'
                    },
                    {
                      room: 'Flur & Gang',
                      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>,
                      recommendation: 'Keine dunklen Ecken mehr',
                      desc: 'Flure sind oft dunkel und schmal. Eine Lichtdecke macht aus Ihrem Gang einen hell erleuchteten Eingangsbereich.',
                      gradient: 'from-indigo-500 to-purple-600'
                    },
                    {
                      room: 'Küche',
                      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/></svg>,
                      recommendation: 'Arbeitsplatz-Beleuchtung',
                      desc: 'Schneiden, Kochen, Putzen – alles wird einfacher mit schattenlosen Licht. Keine dunklen Ecken auf der Arbeitsfläche.',
                      gradient: 'from-amber-500 to-orange-600'
                    },
                    {
                      room: 'Praxis & Büro',
                      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>,
                      recommendation: 'Professionell & blendfrei',
                      desc: 'Wartezimmer, Behandlungsräume, Großraumbüros – Lichtdecken sorgen für UGR < 19 (blendfrei nach Norm).',
                      gradient: 'from-blue-500 to-indigo-600'
                    },
                  ].map((item, i) => (
                    <div key={i} className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-cyan-400 transition-all duration-200 shadow-lg hover:shadow-xl">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.gradient} text-white mb-4 shadow-lg`}>
                        {item.icon}
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{item.room}</h4>
                      <p className="text-cyan-700 font-semibold mb-3">{item.recommendation}</p>
                      <p className="text-slate-700 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Häufig gestellte Fragen</h3>
                <div className="space-y-4">
                  {[
                    {
                      q: 'Wie hell ist eine Lichtdecke wirklich?',
                      a: 'Sehr hell! Je nach Anzahl der LED-Panels erreichen Sie 3000-6000 Lumen (wie 3-6 Standard-Deckenlampen). Und das Beste: Sie können es dimmen. Von 100% (Tageslicht-hell) bis 10% (gemütliches Abendlicht). Per Schalter, Fernbedienung oder App.'
                    },
                    {
                      q: 'Was kostet eine Lichtdecke im Vergleich zu normalen Spanndecken?',
                      a: 'Eine vollflächige Lichtdecke kostet etwa 50-80% mehr als eine normale Spanndecke. Für ein 10m² Bad (vollflächig): ca. 2.500-3.500€. Bedenken Sie: Sie brauchen keine zusätzlichen Lampen mehr, keine Elektroinstallation für Spots, und die LEDs halten 20+ Jahre.'
                    },
                    {
                      q: 'Kann ich die Lichtfarbe wechseln?',
                      a: 'Ja, mit RGBW-Modulen. Standard sind Warmweiß (3000K) oder Neutralweiß (4000K) – fest eingestellt. Wenn Sie Farbwechsel wollen (morgens kaltweiß, abends warmweiß, Party-Modus rot), brauchen Sie RGBW-LEDs. Kostet ca. 400-600€ extra.'
                    },
                    {
                      q: 'Was passiert, wenn ein LED-Panel kaputt geht?',
                      a: 'Die Panels sind modular aufgebaut. Wenn eins ausfällt (sehr selten, Lebensdauer 50.000h+), können wir die Folie teilweise öffnen und das Panel tauschen. Dauert 1-2 Stunden. Das ist der Vorteil von Spanndecken – alles ist zugänglich.'
                    },
                    {
                      q: 'Kann ich eine Lichtdecke mit Spots kombinieren?',
                      a: 'Klar! Viele Kunden wählen eine Rahmen-Lichtdecke (für Grundbeleuchtung) + zusätzliche Spots (für Akzente). Das Beste aus beiden Welten: Gleichmäßiges Licht + gezielte Highlights.'
                    },
                  ].map((faq, i) => (
                    <div key={i} className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border-2 border-slate-200 hover:border-cyan-400 transition-all duration-200 shadow-lg hover:shadow-xl">
                      <h4 className="font-bold text-slate-900 text-lg mb-3">{faq.q}</h4>
                      <p className="text-slate-700 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Premium Abschluss-CTA */}
              <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden shadow-2xl">
                {/* Background Decorations */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-300 rounded-full opacity-10 blur-3xl" />
                
                <div className="max-w-2xl mx-auto relative z-10">
                  <div className="inline-flex p-4 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="3"/>
                      <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                    Sehen Sie selbst, wie Licht verwandelt
                  </h3>
                  <p className="text-white/95 text-lg leading-relaxed mb-8">
                    Wir kommen mit Mustern vorbei und zeigen Ihnen, wie eine Lichtdecke in Ihrem Raum aussehen würde. 
                    Mit 3D-Visualisierung sehen Sie das Ergebnis vorher. <strong>Keine bösen Überraschungen – nur perfektes Licht.</strong>
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                    <Link
                      href="/kontakt"
                      className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-50 hover:scale-[1.02] transition-all duration-200 shadow-2xl"
                    >
                      Kostenlose Lichtplanung
                    </Link>
                    <a
                      href="tel:+4920189083052"
                      className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/20 hover:scale-[1.02] transition-all duration-200 shadow-xl flex items-center justify-center gap-2"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                      Direkt anrufen
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-4 justify-center text-sm">
                    {[
                      '3D-Visualisierung vorher',
                      'Festpreis-Garantie',
                      '10 Jahre Garantie'
                    ].map((item, i) => (
                      <span key={i} className="flex items-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Sidebar */}
            <aside className="lg:col-span-1 space-y-8">
              {/* Premium CTA Card */}
              <div className="bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 rounded-2xl p-8 text-white sticky top-24 z-10 shadow-2xl">
                <div className="text-center mb-6">
                  <div className="inline-flex p-4 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="3"/>
                      <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Kostenlose Lichtplanung</h3>
                  <p className="mb-6 text-white/90">
                    Wir planen Ihr individuelles Lichtkonzept – kostenlos!
                  </p>
                </div>
                <Link
                  href="/kontakt"
                  className="block w-full px-6 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-50 transition-all duration-200 text-center shadow-lg hover:scale-105 mb-4"
                >
                  Jetzt Termin vereinbaren
                </Link>
                <a
                  href="tel:+4920189083052"
                  className="block w-full px-6 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-200 text-center shadow-lg hover:scale-105"
                >
                  +49 (0) 20189083052
                </a>
                <div className="mt-6 pt-6 border-t-2 border-white/30 space-y-3 text-sm">
                  {[
                    '3D-Lichtplanung inklusive',
                    'Vor-Ort-Beratung kostenlos',
                    'Festpreis-Garantie'
                  ].map((item, i) => (
                    <p key={i} className="flex items-center gap-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              {/* Vorteile Box */}
              <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Warum Lichtdecken?</h3>
                <div className="space-y-4">
                  {[
                    { title: 'Schattenloses Licht', desc: 'Gleichmäßige Ausleuchtung überall' },
                    { title: 'Keine sichtbaren Lampen', desc: 'Clean & minimalistisch' },
                    { title: 'Dimmbar & Smart-Home-fähig', desc: 'Per App steuerbar' },
                    { title: '90% Energieeinsparung', desc: 'LED-Technik spart Strom' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-cyan-600 flex-shrink-0">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <div>
                        <p className="font-bold text-slate-900">{item.title}</p>
                        <p className="text-sm text-slate-700">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Das passt auch:</h3>
                <div className="space-y-3">
                  <Link href="/leistungen/beleuchtung-spanndecke" className="block p-4 bg-white rounded-xl hover:bg-cyan-50 transition-all duration-200 border border-slate-200 hover:border-cyan-400 hover:shadow-md">
                    <span className="font-semibold text-slate-900 flex items-center gap-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3"/>
                        <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                      </svg>
                      LED-Spots
                    </span>
                    <p className="text-xs text-slate-600 mt-1">Alternative zu Lichtdecken</p>
                  </Link>
                  <Link href="/leistungen/lackspanndecken" className="block p-4 bg-white rounded-xl hover:bg-cyan-50 transition-all duration-200 border border-slate-200 hover:border-cyan-400 hover:shadow-md">
                    <span className="font-semibold text-slate-900 flex items-center gap-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 3l14 9-14 9V3z" fill="currentColor"/>
                      </svg>
                      Hochglanz
                    </span>
                    <p className="text-xs text-slate-600 mt-1">Maximale Lichtreflektion</p>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
