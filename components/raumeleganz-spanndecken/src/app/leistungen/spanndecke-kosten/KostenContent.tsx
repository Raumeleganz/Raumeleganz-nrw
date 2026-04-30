'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function KostenContent() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      src: '/images/lack-03.webp',
      alt: 'Spiegelnde Lackspanndecke mit LED-Integration und hochglänzender Oberfläche',
      title: 'Transparenz & Ehrlichkeit',
      subtitle: 'Wir rechnen dir genau vor, was deine Decke kostet',
      location: 'Referenzprojekt NRW',
      details: 'Festpreis-Garantie',
    },
    {
      src: '/images/lack-04.webp',
      alt: 'Premium Hochglanz-Spanndecke mit Lichtkonzept und Spiegeleffekt',
      title: 'Kostenlos & Unverbindlich',
      subtitle: 'Vor-Ort-Termin zum Ausmessen – völlig gratis',
      location: 'Referenzprojekt NRW',
      details: 'Keine versteckten Kosten',
    },
    {
      src: '/images/lack-05.webp',
      alt: 'Moderne Lackspanndecke mit eleganter Spiegelung im Wohnbereich',
      title: 'Alles Inklusive',
      subtitle: 'Material, Montage, Anfahrt – ein Preis, keine Extras',
      location: 'Referenzprojekt NRW',
      details: 'All-In-One Paket',
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
                <circle cx="12" cy="12" r="10"/>
                <path d="M16 8h-6a2 2 0 100 4h4a2 2 0 110 4H8"/>
                <path d="M12 18V6"/>
              </svg>
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">Spanndecke Kosten</h1>
              <p className="text-cyan-700 font-bold text-lg">Transparente Preise – ehrlich kalkuliert</p>
            </div>
          </div>

          <div className="max-w-3xl">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              <strong className="text-slate-900">Die Frage aller Fragen:</strong> Was kostet deine neue Spanndecke? Wir wissen, du möchtest keine 
              <strong className="text-cyan-700"> drei Angebote einholen</strong>, nur um eine Hausnummer zu bekommen. Deshalb reden wir Klartext – 
              <strong>ehrlich, transparent, ohne Kleingedrucktes.</strong>
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full text-cyan-700 font-bold border-2 border-cyan-200">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                Festpreis-Garantie
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-slate-900 font-bold border-2 border-slate-200 shadow-md">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Kostenlos ausmessen
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-slate-900 font-bold border-2 border-slate-200 shadow-md">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
                Ehrliche Beratung
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Slider */}
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
                  width="1200"
                  height="600"
                  loading="lazy"
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

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Was beeinflusst den Preis */}
              <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-slate-200 shadow-xl">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Was macht deine Spanndecke teurer oder günstiger?</h2>
                <p className="text-slate-700 leading-relaxed text-lg mb-6">
                  Stell dir vor, du gehst in eine Bäckerei und fragst: <strong>„Was kostet ein Brot?"</strong> Die Antwort hängt davon ab, welches Brot du möchtest – 
                  ein einfaches Weißbrot oder ein handwerklich gebackenes Sauerteigbrot mit Sesam und Leinsamen? <strong className="text-cyan-700">Genauso ist es bei Spanndecken.</strong>
                </p>
                <p className="text-slate-700 leading-relaxed text-lg mb-8">
                  Der Preis setzt sich aus mehreren Faktoren zusammen – und genau die erklären wir dir jetzt. Damit du weißt, worauf es ankommt
                  und wo du vielleicht <strong>Geld sparen kannst</strong> (oder bewusst mehr investierst, weil es sich lohnt).
                </p>

                <div className="space-y-4">
                  {[
                    { 
                      title: 'Die Größe deines Raums', 
                      desc: 'Klingt logisch: Je größer die Fläche, desto mehr Material. Aber ab einer gewissen Größe sinkt der Preis pro m² – wir arbeiten effizienter, weniger Verschnitt. Ein großes Wohnzimmer wird im Verhältnis günstiger als ein kleines Bad.',
                      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
                    },
                    { 
                      title: 'Die Oberfläche: Matt, Satin oder Hochglanz', 
                      desc: 'Matt ist der Klassiker – schlicht, zeitlos, günstiger. Satin bringt sanften Schimmer. Hochglanz reflektiert wie ein Spiegel und lässt Räume größer wirken. Investierst du in Hochglanz, investierst du auch in optische Raumhöhe.',
                      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/></svg>
                    },
                    { 
                      title: 'Form und Ecken – je komplexer, desto aufwändiger', 
                      desc: 'Ein rechteckiger Raum ist schnell gemacht. Aber Schrägen, Erker oder verwinkelte Bereiche brauchen mehr Zeit, Präzision und Material. Jeder Zuschnitt muss millimetergenau passen – Handwerkskunst, keine Massenware.',
                      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                    },
                    { 
                      title: 'Aussparungen und Einbauten', 
                      desc: 'Spots, Rauchmelder, Rohre? Jede Aussparung bedeutet: präzise ausschneiden, verstärken, sauber einfassen. Detailarbeit kostet extra – aber am Ende sieht alles perfekt aus.',
                      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m6.36 0l4.24-4.24M1 12h6m6 0h6m-13.36 7.36l4.24-4.24m6.36 0l4.24 4.24"/></svg>
                    },
                    { 
                      title: 'Beleuchtung – das i-Tüpfelchen', 
                      desc: 'LED-Spots? Indirekte LED-Profile? Vollflächige Lichtdecke? Beleuchtung ist kein Muss, aber ein „Wow". Kostet extra, aber viele sagen: „Das war die beste Entscheidung."',
                      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                    },
                    { 
                      title: 'Sonderwünsche: Farben, Motive, besondere Formen', 
                      desc: 'Knallrot? Sternenhimmel? Zweistufige Decke mit Lichtlinien? Kein Problem – kostet mehr als Standard-Weiß. Das Gute: Du bekommst genau das, was du dir vorstellst.',
                      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 bg-gradient-to-br from-slate-50 to-white rounded-xl border-2 border-slate-200 hover:border-cyan-400 transition-all duration-200 shadow-sm hover:shadow-lg">
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1 text-lg">{item.title}</h4>
                        <p className="text-slate-700 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Warum transparente Preise wichtig sind */}
              <div className="bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                {/* Background Decorations */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full opacity-10 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-300 rounded-full opacity-10 blur-3xl" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 6v6l4 2"/>
                    </svg>
                    <span className="text-sm font-bold text-white">Transparenz & Ehrlichkeit</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Warum wir keine Preise auf der Website nennen</h3>
                  <p className="text-white/95 text-lg leading-relaxed mb-4">
                    Du hast es gemerkt: Keine konkreten Preise hier. <strong>Warum?</strong> Weil jede Spanndecke ein Unikat ist. 
                    Dein Raum ist anders. Deine Wünsche sind anders. Es wäre <strong>unfair</strong>, dir einen Preis zu nennen, der am Ende nicht passt.
                  </p>
                  <p className="text-white/95 text-lg leading-relaxed mb-8">
                    <strong>Stattdessen machen wir das:</strong>
                  </p>
                  <ul className="space-y-4 mb-8">
                    {[
                      'Du rufst uns an oder schreibst – erzählst von deinem Projekt',
                      'Wir kommen kostenlos zu dir, messen aus (ca. 30 Min.)',
                      'Du bekommst ein Festpreis-Angebot – ohne Überraschungen',
                      'Du entscheidest in Ruhe. Kein Druck, kein Verkaufsgespräch'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 mt-1">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <span className="text-white/95 text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20">
                    <p className="text-white/95 text-lg leading-relaxed">
                      <strong>So weißt du genau,</strong> was du bekommst und was es kostet. Und wenn du „Ja" sagst, bleibt es dabei. <strong>Garantiert.</strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* Was ist im Preis enthalten */}
              <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-slate-200 shadow-xl">
                <h3 className="text-3xl font-bold text-slate-900 mb-6">Was ist eigentlich alles im Preis enthalten?</h3>
                <p className="text-slate-700 leading-relaxed text-lg mb-8">
                  Wenn wir dir ein Angebot machen, ist da <strong className="text-cyan-700">alles drin</strong>. Wirklich alles. Keine versteckten Kosten, keine Nachträge,
                  keine bösen Überraschungen. Hier ist, was du bekommst:
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Material', desc: 'Die Spanndecke selbst – in deiner gewählten Farbe und Oberfläche.', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="18" height="18" rx="2"/></svg> },
                    { title: 'Profile', desc: 'Hochwertige Befestigungsprofile, unsichtbar an den Wänden montiert.', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2v20M2 12h20"/></svg> },
                    { title: 'Montage', desc: 'Komplette Installation durch unser Profi-Team – an einem Tag.', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg> },
                    { title: 'Anfahrt', desc: 'Kostenlos im Umkreis von 50 km.', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M10 2h4"/><path d="M12 14v8"/><path d="M4 13h16"/><path d="M18 13v6a2 2 0 01-2 2H8a2 2 0 01-2-2v-6"/><path d="M12 2v4"/><circle cx="12" cy="8" r="4"/></svg> },
                    { title: 'Aufmaß', desc: 'Kostenlose Vermessung vor Ort – millimetergenau.', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M16 8v5h5"/><path d="M20 4h0"/><path d="M4 20h0"/><path d="M20 20v-7l-6-6-4 4"/><path d="M4 4v7l6 6"/></svg> },
                    { title: 'Reinigung', desc: 'Wir räumen auf und hinterlassen deinen Raum sauber.', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><polyline points="8 12 11 15 16 9"/></svg> },
                  ].map((item, i) => (
                    <div key={i} className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border-2 border-slate-200 hover:border-cyan-400 transition-all duration-200 hover:shadow-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                          {item.icon}
                        </div>
                        <h4 className="font-bold text-slate-900 text-lg">{item.title}</h4>
                      </div>
                      <p className="text-slate-700 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border-2 border-cyan-200 mt-8">
                  <p className="text-slate-700 leading-relaxed text-lg">
                    <strong className="text-slate-900">Was kostet extra?</strong> Nur das, was du extra wünschst: LED-Beleuchtung, besondere Farben oder Motive, zusätzliche Aussparungen.
                    Aber auch das besprechen wir vorher – <strong className="text-cyan-700">transparent und ehrlich</strong>.
                  </p>
                </div>
              </div>

              {/* Finanzierung */}
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 md:p-12 border-2 border-slate-200 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="5" width="20" height="14" rx="2"/>
                      <line x1="2" y1="10" x2="22" y2="10"/>
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Finanzierung: In kleinen Raten zur Traumdecke</h3>
                </div>
                <p className="text-slate-700 leading-relaxed text-lg mb-4">
                  Wir wissen: Eine Spanndecke ist eine Investition. Nicht jeder hat das Budget, um alles auf einmal zu zahlen. Deshalb bieten wir
                  <strong className="text-cyan-700"> flexible Finanzierungslösungen</strong> an – oft sogar mit <strong>0% Zinsen</strong>.
                </p>
                <p className="text-slate-700 leading-relaxed text-lg mb-8">
                  Das bedeutet: Du kannst deine neue Decke <strong className="text-cyan-700">schon nächste Woche</strong> haben – und zahlst in kleinen, monatlichen Raten. 
                  Ganz entspannt. Ohne Stress. Sprich uns einfach darauf an.
                </p>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                >
                  Finanzierung anfragen
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>

              {/* FAQ */}
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-8">Die wichtigsten Fragen zu Kosten und Preisen</h3>
                <div className="space-y-4">
                  {[
                    {
                      q: 'Warum kann ich nicht einfach online einen Preis sehen?',
                      a: 'Weil dein Raum einzigartig ist. Größe, Form, Wünsche – alles spielt eine Rolle. Ein Online-Rechner würde dir nur ungefähre Werte liefern, die am Ende nicht stimmen. Wir möchten dir einen fairen, exakten Preis nennen – und das geht nur nach einem persönlichen Aufmaß.'
                    },
                    {
                      q: 'Kostet das Aufmaß etwas?',
                      a: 'Nein. Wir kommen kostenlos zu dir, messen aus, beraten dich und erstellen ein Angebot. Völlig unverbindlich. Selbst wenn du am Ende „Nein" sagst – kein Problem.'
                    },
                    {
                      q: 'Kann ich den Preis verhandeln?',
                      a: 'Unsere Preise sind fair kalkuliert – wir arbeiten nicht mit überhöhten Startpreisen, um dann „Rabatte" zu geben. Was wir dir anbieten, ist unser bestes Angebot. Ehrlich und transparent.'
                    },
                    {
                      q: 'Gibt es versteckte Kosten?',
                      a: 'Nein. Was im Angebot steht, das zahlst du auch. Keine Überraschungen, keine Nachträge. Wenn sich während der Montage etwas ändert (z. B. zusätzliche Aussparungen), sprechen wir das vorher ab.'
                    },
                    {
                      q: 'Kann ich in Raten zahlen?',
                      a: 'Ja! Wir bieten flexible Finanzierungsmodelle an – oft mit 0% Zinsen. Sprich uns einfach darauf an, wir finden eine Lösung.'
                    },
                    {
                      q: 'Lohnt sich eine Spanndecke im Vergleich zu anderen Lösungen?',
                      a: 'Absolut. Eine Spanndecke ist staubfrei in einem Tag fertig, hält 20+ Jahre ohne Nacharbeiten und sieht immer perfekt aus. Im Vergleich zu Rigips, Verputzen oder Streichen sparst du langfristig Zeit, Nerven und oft auch Geld.'
                    },
                  ].map((faq, i) => (
                    <div key={i} className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border-2 border-slate-200 hover:border-cyan-400 transition-all duration-200 shadow-lg hover:shadow-xl">
                      <h4 className="font-bold text-slate-900 mb-3 text-lg">{faq.q}</h4>
                      <p className="text-slate-700 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-8">
              {/* Premium CTA */}
              <div className="bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 rounded-2xl p-8 text-white sticky top-24 z-10 shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">Kostenlos beraten lassen</h3>
                <p className="mb-6 text-white/90">Wir kommen vorbei, schauen uns alles an und rechnen dir ein faires Angebot – <strong>ohne Druck.</strong></p>
                <Link href="/kontakt" className="block w-full bg-white text-slate-900 text-center font-bold py-3 rounded-xl hover:bg-slate-50 transition-all duration-200 mb-4 shadow-lg">
                  Termin vereinbaren
                </Link>
                <a href="tel:+4920189083052" className="block w-full bg-white/10 backdrop-blur-sm text-white text-center font-bold py-3 rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-200 mb-6">
                  +49 (0) 20189083052
                </a>
                <div className="pt-6 border-t-2 border-white/30 text-sm text-white/90 space-y-2">
                  <p className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Vor-Ort-Termin kostenlos
                  </p>
                  <p className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Festpreis-Angebot
                  </p>
                  <p className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Keine versteckten Kosten
                  </p>
                </div>
              </div>

              {/* Trust Signals */}
              <div className="bg-slate-50 rounded-2xl p-8 border-2 border-slate-200 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Das sagen unsere Kunden:</h3>
                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex gap-1 mb-3">
                      {[1,2,3,4,5].map(i => (
                        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-slate-700 italic mb-3 leading-relaxed">
                      "Endlich ein Handwerker, der hält, was er verspricht! Festpreis ohne Überraschungen."
                    </p>
                    <p className="text-xs text-slate-600 font-semibold">– Familie Hoffmann, Düsseldorf</p>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex gap-1 mb-3">
                      {[1,2,3,4,5].map(i => (
                        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-slate-700 italic mb-3 leading-relaxed">
                      "Das kostenlose Aufmaß war super professionell. Wir wussten sofort, was uns erwartet."
                    </p>
                    <p className="text-xs text-slate-600 font-semibold">– Michael S., Köln</p>
                  </div>
                </div>
              </div>

              {/* Related */}
              <div className="bg-slate-50 rounded-2xl p-8 shadow-sm border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-4">Interessiert dich auch:</h4>
                <div className="space-y-3">
                  <Link href="/leistungen/spanndecken" className="block p-3 bg-white rounded-lg hover:bg-cyan-50 transition-colors duration-200 border border-slate-200">
                    <span className="font-semibold text-slate-900">Spanndecken</span>
                    <p className="text-xs text-slate-600 mt-1">Alle Infos zur Spanndecke</p>
                  </Link>
                  <Link href="/leistungen/beleuchtung-spanndecke" className="block p-3 bg-white rounded-lg hover:bg-cyan-50 transition-colors duration-200 border border-slate-200">
                    <span className="font-semibold text-slate-900">Beleuchtung</span>
                    <p className="text-xs text-slate-600 mt-1">LED-Integration direkt in der Decke</p>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* PREMIUM CTA VOR DEM FOOTER */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 overflow-hidden">
        {/* Premium Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Icon */}
            <div className="inline-flex p-5 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-3xl mb-8 shadow-2xl">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M16 8h-6a2 2 0 100 4h4a2 2 0 110 4H8"/>
                <path d="M12 18V6"/>
              </svg>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Bereit für dein{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                persönliches Angebot?
              </span>
            </h2>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-white/90 leading-relaxed mb-10 max-w-3xl mx-auto">
              Kein Rätselraten mehr. Wir kommen <strong className="text-cyan-300">kostenlos zu dir</strong>, messen aus und erstellen 
              dir ein <strong className="text-cyan-300">transparentes Festpreis-Angebot</strong> – ohne versteckte Kosten.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/kontakt"
                  className="group w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-cyan-500/50 transition-all duration-200 text-lg inline-flex items-center justify-center gap-3"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-12 transition-transform duration-200">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                  Jetzt Angebot anfordern
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="tel:+4921234567890"
                  className="group w-full sm:w-auto px-10 py-5 bg-white text-slate-900 font-bold rounded-2xl hover:bg-slate-50 transition-all duration-200 shadow-xl text-lg inline-flex items-center justify-center gap-3"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-600 group-hover:scale-110 transition-transform duration-200">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  Jetzt anrufen: 0212 / 34 567 890
                </a>
              </motion.div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { icon: '✓', text: 'Kostenlose Beratung', color: 'from-cyan-500 to-blue-500' },
                { icon: '✓', text: 'Festpreis-Garantie', color: 'from-blue-500 to-purple-500' },
                { icon: '✓', text: 'Keine versteckten Kosten', color: 'from-purple-500 to-pink-500' },
                { icon: '✓', text: 'Antwort in 24h', color: 'from-pink-500 to-cyan-500' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                >
                  <div className={`inline-flex w-10 h-10 bg-gradient-to-r ${item.color} rounded-full items-center justify-center text-white font-bold text-xl mb-2`}>
                    {item.icon}
                  </div>
                  <p className="text-white text-sm font-semibold">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Services */}
      <section className="py-12 bg-slate-100 text-center">
        <Link
          href="/leistungen"
          className="inline-flex items-center gap-2 text-slate-800 hover:text-cyan-600 font-semibold transition-colors duration-200 text-lg"
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
