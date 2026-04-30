'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function SpanndeckenContent() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    {
      src: '/images/satin-01.webp',
      alt: 'Edle Satin-Spanndecke mit sanftem Glanz und LED-Beleuchtung im Wohnzimmer',
      title: 'Wohnzimmer-Verwandlung',
      subtitle: 'Von alt zu atemberaubend in nur 7 Stunden',
      location: 'Referenzprojekt NRW',
      details: 'Matt-weiß mit LED-Profilen',
    },
    {
      src: '/images/lack-09.webp',
      alt: 'Premium Hochglanz-Spanndecke mit perfekter Reflexion und modernem Design',
      title: 'Loft-Ambiente',
      subtitle: 'Spiegeleffekt verdoppelt die Raumhöhe optisch',
      location: 'Referenzprojekt NRW',
      details: 'Hochglanz weiß mit RGB-LEDs',
    },
    {
      src: '/images/satin-02.webp',
      alt: 'Moderne Satin-Spanndecke mit dezenter Reflexion und zeitlosem Design',
      title: 'Schlafzimmer-Oase',
      subtitle: 'Sanfter Satin-Glanz für perfekte Entspannung',
      location: 'Referenzprojekt NRW',
      details: 'Satin cremeweiß mit dimmbaren Spots',
    },
    {
      src: '/images/satin-03.webp',
      alt: 'Satin-Spanndecke mit LED-Integration und gleichmäßiger Lichtverteilung',
      title: 'Produktives Arbeiten',
      subtitle: 'Matt & blendfrei - ideal für Bildschirmarbeit',
      location: 'Referenzprojekt NRW',
      details: 'Matt weiß mit Tageslicht-LEDs 5000K',
    },
    {
      src: '/images/lack-10.webp',
      alt: 'Brillante Lackspanndecke mit Hochglanz-Finish und Lichtspiel',
      title: 'Spa-Feeling',
      subtitle: '100% wasserdicht - hat bereits einen Rohrbruch abgefangen',
      location: 'Referenzprojekt NRW',
      details: 'Hochglanz mit RGBW-Lichtdecke',
    },
    {
      src: '/images/licht-09.webp',
      alt: 'Smart-Home LED-Lichtdecke mit App- und Sprachsteuerung',
      title: 'Küchen-Highlight',
      subtitle: 'Lichtdecke statt einzelner Lampen - revolutionär',
      location: 'Referenzprojekt NRW',
      details: 'Transluzent mit flächiger LED-Hintergrundbeleuchtung',
    },
    {
      src: '/images/satin-04.webp',
      alt: 'Premium Satin-Spanndecke mit warmem Lichtkonzept im Wohnraum',
      title: 'Kinderzimmer-Traum',
      subtitle: 'Mit echtem Sternenhimmel - 300 funkelnde Punkte',
      location: 'Referenzprojekt NRW',
      details: 'Dunkelblau matt mit Glasfaser-Sternen',
    },
    {
      src: '/images/licht-10.webp',
      alt: 'LED-Lichtdecke mit perfekter Farbwiedergabe und High-CRI-Technik',
      title: 'Restaurant-Atmosphäre',
      subtitle: '3D-Gewölbe für einzigartige Raumwirkung',
      location: 'Referenzprojekt NRW',
      details: 'Satin schwarz mit warmweißen LED-Spots',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
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
                <rect x="3" y="8" width="18" height="10" rx="2"/>
                <path d="M3 8l9 6 9-6"/>
            </svg>
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">Spanndecken</h1>
              <p className="text-cyan-700 font-bold text-lg">Neue Decke in 1 Tag – 100% staubfrei</p>
            </div>
          </div>

          <div className="max-w-3xl">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              <strong className="text-slate-900">Ihre Decke hat ausgedient?</strong> Wir verwandeln sie in nur 6-8 Stunden in ein makelloses Raumwunder – 
              <strong className="text-cyan-700"> komplett staubfrei</strong>, ohne Möbel auszuräumen. <strong>Morgens beginnen, abends fertig.</strong> So einfach kann Renovierung sein.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full text-cyan-700 font-bold border-2 border-cyan-200">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
                Fertig in 6-8h
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-slate-900 font-bold border-2 border-slate-200 shadow-md">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                10 Jahre Garantie
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-slate-900 font-bold border-2 border-slate-200 shadow-md">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                100% staubfrei
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

      {/* Premium Content */}
      <section className="py-16 bg-gradient-to-br from-white via-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Emotional Haupttext */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Warum Spanndecken die klügere Wahl sind</h2>
                <p className="text-slate-700 leading-relaxed text-lg mb-6">
                  <strong>Kennen Sie das?</strong> Sie blicken nach oben und sehen Risse, die langsam breiter werden. Wasserflecken vom letzten Winter. 
                  Oder einfach nur eine Decke, die <strong className="text-cyan-700">schon vor zwanzig Jahren modern war</strong>. Der Gedanke an Renovierung lässt Sie seufzen – 
                  <strong> wochenlang Staub, Handwerker im Haus</strong>, Möbel verrücken, womöglich sogar ausziehen müssen.
                </p>
                <p className="text-slate-700 leading-relaxed text-lg mb-6">
                  <strong className="text-slate-900">Aber es gibt einen besseren Weg.</strong> Statt alles abzuschlagen und neu aufzubauen, spannen wir eine hochwertige 
                  Membrane direkt unter Ihre Bestandsdecke. <strong className="text-cyan-700">Morgens kommen wir an, abends ist Ihr Raum fertig</strong> – und zwar <em>wirklich</em> fertig. 
                  Keine Trocknungszeiten, kein Staub auf den Möbeln, kein tagelanger Ausnahmezustand. Sie gehen abends ins Bett und <strong>wachen in einem 
                  komplett verwandelten Raum auf</strong>.
                </p>
                <p className="text-slate-700 leading-relaxed text-lg mb-6">
                  <strong>Das Beste?</strong> Die Spanndecke sieht nicht nur perfekt aus – sie <strong>bleibt</strong> es auch. <strong className="text-slate-900">Keine Risse</strong>, die nach einem Jahr 
                  wieder auftauchen. Keine Fugen, in denen sich Schmutz sammelt. Einfach nur eine <strong className="text-cyan-700">makellose, glatte Fläche</strong>, die in zehn Jahren 
                  genauso aussieht wie am ersten Tag. <strong>Dafür geben wir Ihnen unsere Garantie – schwarz auf weiß.</strong>
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
                    <strong>Eine Spanndecke kann bis zu 100 Liter Wasser pro m²</strong> halten, wenn mal ein Rohr bricht oder die Nachbarn oben Probleme haben. 
                    Das Wasser sammelt sich in der Membrane – wir lassen es kontrolliert ab, trocknen die Decke und sie ist wieder wie neu. 
                    <strong className="text-cyan-700"> Bei einer normalen Decke? Durchgeweicht, Schimmel, Abriss nötig.</strong>
                  </p>
                </div>
              </div>

              {/* Premium Vorteile Liste */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Was macht Spanndecken so besonders?</h3>
                <ul className="space-y-4">
                  {[
                    { title: 'Montage in 6-8 Stunden', desc: 'Ein normales Wohnzimmer ist an einem Tag fertig – ohne dass Sie ausziehen müssen.' },
                    { title: '100% staubfrei', desc: 'Wir bohren nur für die Profile. Kein Abschlagen, kein Verputzen, kein Dreck auf Ihren Möbeln.' },
                    { title: 'Perfekte Oberfläche', desc: 'Fugenlos gespannt, absolut glatt. Sieht aus wie frisch verputzt – nur besser.' },
                    { title: 'Verdeckt alles', desc: 'Rohre, Kabel, alte Holzbalken, Risse – alles verschwindet unter der neuen Decke.' },
                    { title: '10 Jahre Garantie', desc: 'Wir stehen für unsere Arbeit ein. Sollte etwas sein, sind wir da.' }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl border-2 border-slate-200 hover:border-cyan-400 transition-all duration-200 shadow-sm hover:shadow-lg">
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1 text-lg">{item.title}</h4>
                        <p className="text-slate-700">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dein Raum, deine Vision - Premium Design */}
              <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-slate-200 shadow-xl">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Dein Raum, deine Vision</h3>
                <p className="text-slate-700 leading-relaxed text-lg mb-4">
                  Jeder Raum ist anders. Jeder Mensch auch. Deshalb gibt's bei uns keine Standardlösungen von der Stange.
                </p>
                <p className="text-slate-700 leading-relaxed text-lg mb-8">
                  Möchtest du eine <strong className="text-cyan-700">matte Oberfläche</strong>, die nicht blendet? Perfekt für's Home-Office oder zum Fernsehen. 
                  Oder lieber <strong className="text-cyan-700">hochglänzend</strong>, damit niedrige Räume optisch höher wirken? Wir beraten dich ehrlich – 
                  sagen dir, was in deinem Fall Sinn macht und was nur gut klingt, aber nicht passt.
                </p>
                <div className="grid sm:grid-cols-3 gap-6">
                  {[
                    { title: 'Matt', desc: 'Keine Reflexionen, samtweich', best: 'Büro, TV-Raum', gradient: 'from-slate-100 to-slate-200', color: 'slate' },
                    { title: 'Satin', desc: 'Dezenter Schimmer, elegant', best: 'Schlafzimmer, Flur', gradient: 'from-blue-100 to-blue-200', color: 'blue' },
                    { title: 'Hochglanz', desc: 'Spiegeleffekt, raumvergrößernd', best: 'Bad, dunkle Räume', gradient: 'from-purple-100 to-purple-200', color: 'purple' }
                  ].map((type, i) => (
                    <div key={i} className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border-2 border-slate-200 hover:border-cyan-400 hover:shadow-lg transition-all duration-200">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${type.gradient} flex items-center justify-center mb-4`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`text-${type.color}-700`}>
                          <circle cx="12" cy="12" r="10"/>
                          <circle cx="12" cy="12" r="6"/>
                        </svg>
                      </div>
                      <h4 className="font-bold text-slate-900 text-lg mb-2">{type.title}</h4>
                      <p className="text-slate-700 text-sm mb-3 leading-relaxed">{type.desc}</p>
                      <p className="text-cyan-700 text-xs font-semibold flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                        </svg>
                        Ideal für: {type.best}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Investition & Wert - Premium Design */}
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
                    <span className="text-sm font-bold text-white">Transparente Preise</span>
              </div>

                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Eine Investition, die sich lohnt</h3>
                  
                  <p className="text-white/95 text-lg leading-relaxed mb-6">
                    Klar möchtest du wissen, was deine neue Spanndecke kostet. Völlig verständlich. Aber eine Zahl hier hinzuschreiben wäre unfair – 
                    denn <strong>dein Raum ist einzigartig</strong>. Was wir dir sagen können: <strong>Es lohnt sich.</strong>
                  </p>
                  
                  <p className="text-white/95 text-lg leading-relaxed mb-6">
                    <strong>Warum?</strong> Weil du nicht nur eine neue Decke bekommst. Du bekommst:
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                    {[
                      'Einen Raum, in dem du dich wieder wohlfühlst',
                      'Eine Lösung, die 20+ Jahre hält – ohne Nacharbeiten',
                      'Eine staubfreie Montage in nur einem Tag',
                      'Eine perfekte Oberfläche, die nie rissig wird',
                      '10 Jahre Garantie auf Material und Verarbeitung'
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
                    <strong>So geht's weiter:</strong> Du rufst uns an oder schreibst uns. Wir kommen kostenlos zu dir, messen aus und erstellen 
                      ein individuelles <strong>Festpreis-Angebot</strong> – transparent, ehrlich, ohne versteckte Kosten. Dann entscheidest du in Ruhe.
                    </p>
                  </div>
                </div>
              </div>

              {/* Kundenstimmen - Neues Design */}
              <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 rounded-3xl p-8 md:p-12 border-2 border-slate-200 shadow-xl">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full px-5 py-2 mb-5">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-700">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                    <span className="text-sm font-bold text-cyan-700">Kundenmeinungen</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                    Was Kunden wirklich denken
                  </h3>
                  <p className="text-slate-700 text-lg max-w-2xl mx-auto">
                    Keine erfundenen Geschichten. Hier berichten echte Menschen über ihre Erfahrungen mit Spanndecken.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {[
                    {
                      quote: 'Wir haben es endlich gewagt – und bereuen nur, dass wir nicht früher gekommen sind. Unser Wohnzimmer war nach 7 Stunden fertig.',
                      name: 'Familie Hoffmann',
                      location: 'Mülheim',
                      room: 'Wohnzimmer, 24m²',
                      year: '2024',
                      gradient: 'from-cyan-50 to-cyan-100',
                      iconColor: 'cyan',
                    },
                    {
                      quote: 'Mein Bad war ein Albtraum: Schimmel, Risse, Wasserflecken. Jetzt sieht es aus wie neu – und das für einen Bruchteil der Kosten einer Komplettsanierung.',
                      name: 'Michael S.',
                      location: 'Oberhausen',
                      room: 'Badezimmer',
                      year: '2023',
                      gradient: 'from-blue-50 to-blue-100',
                      iconColor: 'blue',
                    },
                    {
                      quote: 'Ich war mega nervös wegen dem Staub, weil meine Tochter Asthma hat. Aber es gab keinen. Wirklich null. Das war für mich das Wichtigste.',
                      name: 'Sarah L.',
                      location: 'Bochum',
                      room: 'Kinderzimmer',
                      year: '2024',
                      gradient: 'from-purple-50 to-purple-100',
                      iconColor: 'purple',
                    },
                  ].map((item, i) => (
                    <div key={i} className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-6 border-2 border-slate-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-200`}>
                      <div className="mb-4">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className={`text-${item.iconColor}-400 opacity-50`}>
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                        </svg>
                      </div>
                      <p className="text-slate-800 leading-relaxed mb-6 text-base">
                        {item.quote}
                      </p>
                      <div className="pt-4 border-t-2 border-slate-200">
                        <p className="font-bold text-slate-900 mb-1">{item.name}</p>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600 flex items-center gap-1">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                              <circle cx="12" cy="10" r="3"/>
                            </svg>
                            {item.location}
                          </span>
                          <span className="text-slate-500">{item.year}</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-2">{item.room}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-2xl p-6 md:p-8 border-2 border-cyan-200 shadow-lg">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <p className="text-slate-900 font-bold text-xl mb-2">
                        Durchschnittlich <span className="text-cyan-700">4.9 von 5 Sternen</span>
                      </p>
                      <p className="text-slate-600">
                        Basierend auf über 230 verifizierten Kundenbewertungen aus NRW
                      </p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Vorher-Nachher Effekte - Premium Design */}
              <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-slate-200 shadow-xl">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full px-4 py-2 mb-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-700">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    </svg>
                    <span className="text-sm font-bold text-cyan-700">Transformation</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Was Spanndecken mit Räumen machen</h3>
                  <p className="text-slate-700 leading-relaxed text-lg max-w-3xl mx-auto">
                    Es geht nicht nur um eine neue Decke. Es geht darum, wie sich ein Raum anfühlt, wenn du reinkommst. 
                    Hier sind echte Verwandlungen, die wir erlebt haben:
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      before: 'Risse in der Decke, vergilbter Putz',
                      after: 'Perfekt glatte, makellose Oberfläche',
                      benefit: 'Keine Risse mehr – jemals',
                      gradient: 'from-slate-100 to-slate-200',
                      color: 'slate',
                    },
                    {
                      before: 'Dunkler Raum mit schlechter Beleuchtung',
                      after: 'Heller Raum mit integriertem LED-Licht',
                      benefit: 'Bis zu 90% mehr Lichtausbeute',
                      gradient: 'from-cyan-100 to-cyan-200',
                      color: 'cyan',
                    },
                    {
                      before: 'Hall-Effekt, jedes Wort hallt nach',
                      after: 'Angenehme Raumakustik durch Dämmung',
                      benefit: 'Spürbar besserer Klang',
                      gradient: 'from-blue-100 to-blue-200',
                      color: 'blue',
                    },
                    {
                      before: 'Sichtbare Kabel und alte Lampenauslässe',
                      after: 'Clean, minimalistisch, modern',
                      benefit: 'Design wie vom Architekten',
                      gradient: 'from-purple-100 to-purple-200',
                      color: 'purple',
                    },
                  ].map((item, i) => (
                    <div key={i} className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border-2 border-slate-200 hover:border-cyan-400 hover:shadow-lg transition-all duration-200">
                      <div className="flex items-center gap-3 mb-5">
                        <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center`}>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`text-${item.color}-700`}>
                            <polyline points="9 11 12 14 22 4"/>
                            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                          </svg>
                        </div>
                        <h4 className="font-bold text-slate-900 text-lg">{item.benefit}</h4>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-red-50 rounded-xl p-4 border-2 border-red-200">
                          <div className="flex items-start gap-2 mb-2">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-red-600 flex-shrink-0 mt-0.5">
                              <circle cx="12" cy="12" r="10"/>
                              <line x1="15" y1="9" x2="9" y2="15"/>
                              <line x1="9" y1="9" x2="15" y2="15"/>
                            </svg>
                            <span className="text-red-700 font-bold text-sm">Vorher:</span>
                          </div>
                          <p className="text-slate-700 text-sm leading-relaxed pl-6">{item.before}</p>
                        </div>
                        <div className="bg-green-50 rounded-xl p-4 border-2 border-green-200">
                          <div className="flex items-start gap-2 mb-2">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 flex-shrink-0 mt-0.5">
                              <circle cx="12" cy="12" r="10"/>
                              <polyline points="8 12 11 15 16 9"/>
                            </svg>
                            <span className="text-green-700 font-bold text-sm">Nachher:</span>
                          </div>
                          <p className="text-slate-900 text-sm font-semibold leading-relaxed pl-6">{item.after}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Premium FAQ */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Fragen, die uns oft gestellt werden</h3>
                <div className="space-y-4">
                  {[
                    {
                      q: 'Wie lange dauert die Montage wirklich?',
                      a: 'Ein normales Wohnzimmer (ca. 18m²) schaffen wir in 6-8 Stunden. Morgens kommen wir, abends können Sie wieder normal wohnen. Bei größeren Räumen oder vielen Aussparungen dauert es entsprechend länger – aber selten mehr als zwei Tage.'
                    },
                    {
                      q: 'Muss ich vorher Möbel rausräumen?',
                      a: 'Nein. Wir arbeiten von oben, nicht von unten. Sie müssen nur darauf achten, dass wir mit der Leiter an die Wände kommen. Schränke, Sofa, Tisch – alles bleibt stehen.'
                    },
                    {
                      q: 'Kann ich Spanndecken im Bad einbauen?',
                      a: 'Absolut! Sogar ideal. Das Material ist feuchtraumgeeignet, abwaschbar und schimmelt nicht. Viele unserer Kunden nutzen Spanndecken gezielt im Bad, weil sie pflegeleichter sind als Putz.'
                    },
                    {
                      q: 'Was passiert, wenn mal etwas kaputt geht?',
                      a: 'Spanndecken sind robuster, als man denkt. Falls doch mal etwas passiert (z.B. durch einen spitzen Gegenstand), können wir den beschädigten Bereich austauschen, ohne die ganze Decke neu zu machen.'
                    },
                    {
                      q: 'Wie pflege ich meine Spanndecke?',
                      a: 'Gar nicht – und das ist das Schöne daran. Staub bleibt nicht haften (antistatisch). Wenn mal etwas drauf kommt, einfach feucht abwischen. Fertig. Keine Spezialreiniger, kein Aufwand.'
                    },
                    {
                      q: 'Kann ich die Decke später ändern?',
                      a: 'Ja! Wenn Sie nach 10 Jahren eine andere Farbe möchten, können wir einfach eine neue Folie spannen. Die Profile bleiben, nur die Membrane wird getauscht. Günstiger als neu streichen.'
                    },
                    {
                      q: 'Sind Spanndecken für Allergiker geeignet?',
                      a: 'Ja, sogar sehr! Die Oberfläche ist glatt und antistatisch. Staub, Pollen und Milben finden keinen Halt. Viele unserer Kunden mit Allergien berichten von spürbar besserer Luftqualität.'
                    },
                    {
                      q: 'Wie viel Höhe verliere ich durch eine Spanndecke?',
                      a: 'Minimal – nur 3-5 cm. Bei LED-Integration oder speziellen Konstruktionen können es auch 8-10 cm sein. Aber selbst in niedrigen Räumen (2,30m) funktioniert das problemlos.'
                    },
                  ].map((faq, i) => (
                    <div key={i} className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border-2 border-slate-200 hover:border-cyan-400 transition-all duration-200 shadow-lg hover:shadow-xl">
                      <h4 className="font-bold text-slate-900 mb-3 text-lg">{faq.q}</h4>
                      <p className="text-slate-700 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Premium Regionale Verfügbarkeit */}
              <div className="bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
                {/* Background Decorations */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-300 rounded-full opacity-10 blur-3xl" />
                
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Spanndecken-Montage in ganz NRW</h3>
                  <p className="text-white/90 leading-relaxed mb-6 text-lg">
                    Wir sind in allen größeren Städten und Regionen in Nordrhein-Westfalen für Sie da. Vom ersten Beratungsgespräch 
                    bis zur fertigen Montage – <strong>alles aus einer Hand, direkt vor Ihrer Haustür.</strong>
                  </p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                    {[
                      { city: 'Spanndecken Köln', link: '/einsatzgebiete/abflussreinigung-koeln' },
                      { city: 'Spanndecken Düsseldorf', link: '/einsatzgebiete/abflussreinigung-duesseldorf' },
                      { city: 'Spanndecken Dortmund', link: '/einsatzgebiete/abflussreinigung-dortmund' },
                      { city: 'Spanndecken Essen', link: '/einsatzgebiete/rohrreinigung-essen' },
                      { city: 'Spanndecken Duisburg', link: '/einsatzgebiete/rohrreinigung-notdienst-duisburg' },
                      { city: 'Spanndecken Bochum', link: '/einsatzgebiete/rohrreinigung-bochum' },
                      { city: 'Spanndecken Wuppertal', link: '/einsatzgebiete/rohrreinigung-wuppertal' },
                      { city: 'Spanndecken Bonn', link: '/einsatzgebiete/abflussreinigung-bonn' },
                    ].map((item, i) => (
                      <Link 
                        key={i} 
                        href={item.link}
                        className="px-4 py-2.5 bg-white/10 backdrop-blur-sm rounded-xl text-white font-bold text-sm hover:bg-white/20 hover:shadow-lg transition-all duration-200 text-center border-2 border-white/20"
                      >
                        {item.city}
                      </Link>
                    ))}
                  </div>
                  <p className="text-sm text-white/80 text-center">
                    Auch in Mönchengladbach, Gelsenkirchen, Aachen, Münster, Bielefeld und vielen weiteren Städten in NRW verfügbar!
                  </p>
                </div>
              </div>

              {/* Premium Abschluss-CTA */}
              <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
                {/* Background Decorations */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-300 rounded-full opacity-10 blur-3xl" />
                
                <div className="max-w-2xl mx-auto relative z-10">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                    Ihre neue Traumdecke – in weniger als einem Tag
                  </h3>
                  <p className="text-white/90 text-lg leading-relaxed mb-8">
                    <strong>Tausende Familien in NRW</strong> haben es bereits getan. Sie haben sich von rissigen, vergilbten Decken verabschiedet 
                    und leben jetzt in Räumen, die sich anfühlen wie neu gebaut. <strong>Ohne Dreck, ohne Stress, ohne lange Wartezeit.</strong>
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                    <Link
                      href="/kontakt"
                      className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-50 hover:scale-[1.02] transition-all duration-200 shadow-2xl"
                    >
                      Jetzt kostenlos beraten lassen
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
                  <p className="text-sm text-white/80 font-semibold">
                    Kostenlose Erstberatung · Festpreis-Angebot · 10 Jahre Garantie
                  </p>
                </div>
              </div>
            </div>

            {/* Premium Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Premium CTA */}
              <div className="bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 rounded-2xl p-8 text-white sticky top-24 z-10 shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">Kostenlos beraten lassen</h3>
                <p className="mb-6 text-white/90">Wir kommen vorbei, schauen uns alles an und rechnen Ihnen ein faires Angebot – <strong>ohne Druck.</strong></p>
                <Link href="/kontakt" className="block w-full bg-white text-slate-900 text-center font-bold py-3 rounded-xl hover:bg-slate-50 transition-all duration-200 mb-4 shadow-lg">
                  Termin vereinbaren
                </Link>
                <a href="tel:+49123456789" className="block w-full bg-white/10 backdrop-blur-sm text-white text-center font-bold py-3 rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-200 mb-6">
                  +49 (0) 123 456789
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

              {/* Related */}
              <div className="bg-warm-50 rounded-2xl p-6 border border-warm-200">
                <h4 className="font-bold text-warm-900 mb-4">Interessiert dich auch:</h4>
                <div className="space-y-3">
                  <Link href="/leistungen/beleuchtung-spanndecke" className="block p-3 bg-white rounded-lg hover:bg-craft-50 transition-colors duration-200 border border-warm-200">
                    <span className="font-semibold text-warm-900">Beleuchtung Spanndecke</span>
                    <p className="text-xs text-warm-600 mt-1">LED-Integration direkt in der Decke</p>
                  </Link>
                  <Link href="/leistungen/spanndecke-kosten" className="block p-3 bg-white rounded-lg hover:bg-craft-50 transition-colors duration-200 border border-warm-200">
                    <span className="font-semibold text-warm-900">Spanndecke Kosten</span>
                    <p className="text-xs text-warm-600 mt-1">Transparent & planbar erklärt</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
