'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function MotivSpanndeckenPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    {
      src: '/images/satin-06.webp',
      alt: 'Satin-Spanndecke mit indirekter LED-Beleuchtung und edler Oberfläche',
      title: 'Sternenhimmel-Traum',
      subtitle: 'Jede Nacht unter den Sternen einschlafen',
      location: 'Referenzprojekt NRW',
      details: '300 Glasfaser-Lichtpunkte',
    },
    {
      src: '/images/satin-07.webp',
      alt: 'Dezente Satin-Spanndecke mit minimalistischem Design und Lichtakzenten',
      title: 'Wolken über dem Bett',
      subtitle: 'Himmel-Feeling im Schlafzimmer',
      location: 'Referenzprojekt NRW',
      details: 'Fotorealistischer UV-Druck',
    },
    {
      src: '/images/satin-08.webp',
      alt: 'Moderne Satin-Spanndecke mit LED-Spots und sanfter Lichtreflexion',
      title: 'Wald-Atmosphäre',
      subtitle: 'Natur-Feeling indoor',
      location: 'Referenzprojekt NRW',
      details: 'Baumkronen-Perspektive',
    },
    {
      src: '/images/satin-09.webp',
      alt: 'Hochwertige Satin-Spanndecke mit eleganter Atmosphäre im Wohnbereich',
      title: 'Unterwasser-Welt',
      subtitle: 'Ozeangefühl beim Duschen',
      location: 'Referenzprojekt NRW',
      details: 'Korallen & Fische in HD',
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
                <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">Motiv-Spanndecken</h1>
              <p className="text-cyan-700 font-bold text-lg">Ihre Fantasie an der Decke – von Sternenhimmel bis Waldblick</p>
            </div>
          </div>

          <div className="max-w-3xl">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              <strong className="text-slate-900">Stellen Sie sich vor:</strong> Sie liegen im Bett und sehen Sterne funkeln. Oder Wolken ziehen vorbei. Oder Baumkronen im Wind. 
              <strong className="text-cyan-700"> Mit Motiv-Spanndecken wird Ihre Decke zur Leinwand für Ihre Träume.</strong>
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full text-cyan-700 font-bold border-2 border-cyan-200">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                Jedes Motiv möglich
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-slate-900 font-bold border-2 border-slate-200 shadow-md">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                Fotorealistisch
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-slate-900 font-bold border-2 border-slate-200 shadow-md">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
                Unbegrenzt haltbar
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
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Warum Motiv-Spanndecken mehr als "nur schön" sind</h2>
                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                  <strong>Kennen Sie das Gefühl</strong>, wenn Sie in einem Hotel mit Blick aufs Meer aufwachen? Diese Leichtigkeit, diese Freiheit. 
                  <strong className="text-cyan-700"> Mit Motiv-Spanndecken holen Sie sich dieses Gefühl nach Hause – jeden Tag.</strong>
                </p>
                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                  Ob Sternenhimmel fürs Kinderzimmer, Wolken im Schlafzimmer oder Waldblick im Yoga-Raum – 
                  <strong> Motive schaffen Atmosphäre.</strong> Sie verändern, wie sich ein Raum anfühlt. Nicht nur optisch, sondern emotional.
                </p>
                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                  Der Druck ist fotorealistisch. UV-beständig. Und hält Jahrzehnte. <strong className="text-slate-900">Anders als Poster oder Wandtattoos verblasst nichts.</strong> 
                  Sie entscheiden sich einmal – und haben <strong className="text-cyan-700">ein Leben lang Freude daran</strong>.
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
                    <strong>Motiv-Spanndecken wirken nicht nur optisch</strong> – Studien zeigen, dass Sternenhimmel-Decken nachweislich beim Einschlafen helfen 
                    und Naturmotive (wie Baumkronen) den Stresslevel senken können. <strong className="text-cyan-700">Ihre Decke beeinflusst Ihr Wohlbefinden.</strong>
                  </p>
                </div>
              </div>

              {/* Die beliebtesten Motive */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Die beliebtesten Motive</h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
                      title: 'Sternenhimmel (Der Klassiker)',
                      desc: 'Mit Glasfaser-Lichtpunkten. Sie dimmen das Licht, und plötzlich funkeln hunderte Sterne an Ihrer Decke. Perfekt fürs Kinderzimmer, Schlafzimmer oder Home-Cinema.',
                      tags: ['Romantisch', 'Beruhigend', 'Für Kinder & Erwachsene'],
                      gradient: 'from-indigo-500 to-purple-600'
                    },
                    {
                      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/></svg>,
                      title: 'Himmel & Wolken (Leichtigkeit)',
                      desc: 'Blauer Himmel mit weißen Wolken – wie wenn Sie auf einer Wiese liegen und nach oben schauen. Wirkt beruhigend, macht Räume optisch höher.',
                      tags: ['Luftig', 'Weite', 'Urlaubsfeeling'],
                      gradient: 'from-sky-400 to-cyan-500'
                    },
                    {
                      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M17 8l4-4M21 12V4h-8"/><path d="M3 12a9 9 0 019-9"/></svg>,
                      title: 'Natur & Baumkronen (Erdung)',
                      desc: 'Blick nach oben in einen Wald – Baumkronen, Blätter, Licht, das durchscheint. Perfekt für Yoga-Räume, Wellness-Bereiche oder Naturliebhaber.',
                      tags: ['Natürlich', 'Erdend', 'Beruhigend'],
                      gradient: 'from-emerald-400 to-green-500'
                    },
                    {
                      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>,
                      title: 'Individuelle Motive (Ihr Design)',
                      desc: 'Sie haben ein eigenes Foto? Ein spezielles Design? Wir können ALLES drucken – von Ihrem Hochzeitsfoto bis zu abstrakten Kunstwerken.',
                      tags: ['Einzigartig', 'Persönlich', 'Unbegrenzt'],
                      gradient: 'from-blue-400 to-cyan-500'
                    },
                  ].map((motiv, i) => (
                    <div key={i} className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-cyan-400 transition-all duration-200 shadow-lg hover:shadow-xl">
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${motiv.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                          {motiv.icon}
                        </div>
                        <div className="flex-grow">
                          <h4 className="text-xl font-bold text-slate-900 mb-2">{motiv.title}</h4>
                          <p className="text-slate-700 leading-relaxed mb-4">{motiv.desc}</p>
                          <div className="flex flex-wrap gap-2">
                            {motiv.tags.map((tag, j) => (
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

              {/* Technische Details */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Wie funktioniert der Druck?</h3>
                <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg">
                  <div className="space-y-6">
                    {[
                      { step: '1', title: 'Sie wählen ein Motiv', desc: 'Aus unserer Galerie (über 500 Motive) oder Sie schicken uns Ihr eigenes Bild/Design.' },
                      { step: '2', title: 'Wir prüfen die Qualität', desc: 'Ist die Auflösung hoch genug? Passt die Perspektive? Wir optimieren das Motiv für Ihre Deckengröße.' },
                      { step: '3', title: 'UV-Druck auf die Folie', desc: 'Fotorealistischer UV-Druck direkt auf die Spanndecken-Folie. Farbecht, UV-beständig, hält Jahrzehnte.' },
                      { step: '4', title: 'Montage wie gewohnt', desc: 'Die bedruckte Folie wird wie jede andere Spanndecke montiert. Dauert 6-8 Stunden, staubfrei, sauber.' },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 mb-2 text-lg">{item.title}</h4>
                          <p className="text-slate-700 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Häufig gestellte Fragen</h3>
                <div className="space-y-4">
                  {[
                    {
                      q: 'Kann ich wirklich JEDES Motiv drucken lassen?',
                      a: 'Ja – solange die Bildqualität passt. Für eine 20m² Decke brauchen Sie ein hochauflösendes Bild (mindestens 3000x3000 Pixel). Wir prüfen das vorher kostenlos und sagen Ihnen ehrlich, ob es funktioniert oder nicht.'
                    },
                    {
                      q: 'Wie viel kostet eine Motiv-Spanndecke mehr als eine normale?',
                      a: 'Der UV-Druck kostet etwa 40-60€ pro m², abhängig von Motiv-Komplexität. Für ein 20m² Schlafzimmer rechnen Sie mit ca. 800-1.200€ Aufpreis. Sternenhimmel mit Glasfasern: ca. 1.500-2.500€ extra (je nach Anzahl der Lichtpunkte).'
                    },
                    {
                      q: 'Verblasst das Motiv mit der Zeit?',
                      a: 'Nein. UV-Druck ist extrem haltbar und farbecht. Anders als Poster oder Tapeten verblasst nichts – auch nach 20+ Jahren nicht. Die Farben sind in die Folie eingebrannt, nicht aufgedruckt.'
                    },
                    {
                      q: 'Was, wenn mir das Motiv nach ein paar Jahren nicht mehr gefällt?',
                      a: 'Dann tauschen wir die Folie einfach aus. Die Schienen bleiben drin, nur die Folie wird gewechselt. Kostet weniger als die Erstmontage. Viele Kunden wechseln alle 10-15 Jahre – einfach weil sie Lust auf was Neues haben.'
                    },
                    {
                      q: 'Kann ich Beleuchtung mit Motiv-Spanndecken kombinieren?',
                      a: 'Absolut! LED-Spots funktionieren genauso wie bei normalen Spanndecken. Bei Sternenhimmel sogar besonders schön: Die Lichtpunkte sind die Beleuchtung. Indirekte LED-Profile passen auch perfekt zu Wolken- oder Naturmotiven.'
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
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                    Lassen Sie Ihre Träume wahr werden
                  </h3>
                  <p className="text-white/95 text-lg leading-relaxed mb-8">
                    Wir zeigen Ihnen unsere Motiv-Galerie, beraten Sie ehrlich (passt das Motiv zu Ihrem Raum?), 
                    und erstellen eine 3D-Visualisierung. <strong>So sehen Sie vorher, wie es aussehen wird – Wow-Effekt garantiert.</strong>
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                    <Link
                      href="/kontakt"
                      className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-50 hover:scale-[1.02] transition-all duration-200 shadow-2xl"
                    >
                      Motiv-Galerie ansehen
                    </Link>
                    <a
                      href="tel:+49123456789"
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
                      '500+ Motive verfügbar',
                      '3D-Visualisierung inklusive',
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
                      <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Motiv-Galerie durchstöbern</h3>
                  <p className="mb-6 text-white/90">
                    Über 500 Motive zur Auswahl – oder bringen Sie Ihr eigenes mit!
                  </p>
                </div>
                <Link
                  href="/kontakt"
                  className="block w-full px-6 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-50 transition-all duration-200 text-center shadow-lg hover:scale-105 mb-4"
                >
                  Jetzt Termin vereinbaren
                </Link>
                <a
                  href="tel:+49123456789"
                  className="block w-full px-6 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-200 text-center shadow-lg hover:scale-105"
                >
                  +49 (0) 123 456789
                </a>
                <div className="mt-6 pt-6 border-t-2 border-white/30 space-y-3 text-sm">
                  {[
                    '500+ Motive oder eigenes Design',
                    '3D-Visualisierung vorher',
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
                <h3 className="text-xl font-bold text-slate-900 mb-6">Warum Motiv-Spanndecken?</h3>
                <div className="space-y-4">
                  {[
                    { title: 'Jedes Motiv möglich', desc: 'Von Sternenhimmel bis eigenes Foto' },
                    { title: 'Fotorealistisch', desc: 'UV-Druck in HD-Qualität' },
                    { title: 'Verblasst nie', desc: 'Farbecht & UV-beständig' },
                    { title: 'Einzigartig', desc: 'Keiner hat Ihre Decke' },
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
                      LED-Beleuchtung
                    </span>
                    <p className="text-xs text-slate-600 mt-1">Perfekt mit Motiven kombiniert</p>
                  </Link>
                  <Link href="/leistungen/lichtdecken" className="block p-4 bg-white rounded-xl hover:bg-cyan-50 transition-all duration-200 border border-slate-200 hover:border-cyan-400 hover:shadow-md">
                    <span className="font-semibold text-slate-900 flex items-center gap-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="2"/>
                      </svg>
                      Lichtdecken
                    </span>
                    <p className="text-xs text-slate-600 mt-1">Vollflächiges Licht</p>
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
