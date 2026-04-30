'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function BeleuchtungSpanndeckePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      src: '/images/licht-03.webp',
      alt: 'LED-Spanndecke mit perfekter Lichtverteilung und Smart-Home-Integration',
      title: 'Wohnzimmer-Revolution',
      subtitle: 'Von dunkel und trist zu hell und einladend',
      location: 'Referenzprojekt NRW',
      details: '32 warmweiße LED-Spots dimmbar',
    },
    {
      src: '/images/licht-04.webp',
      alt: 'Lichtdecke mit optimaler Arbeitsplatzbeleuchtung und LED-Panels',
      title: 'Badezimmer wie im Spa',
      subtitle: 'Vollflächige Lichtdecke statt einzelner Spots',
      location: 'Referenzprojekt NRW',
      details: 'Transluzente Folie mit 4000K LED-Panels',
    },
    {
      src: '/images/licht-05.webp',
      alt: 'Helle LED-Lichtdecke mit Tageslicht-Feeling und energieeffizienter Technik',
      title: 'Schwebende Decke',
      subtitle: 'Umlaufende LED-Profile für magischen Effekt',
      location: 'Referenzprojekt NRW',
      details: 'RGBW-Profile App-gesteuert + 16 Spots',
    },
    {
      src: '/images/licht-06.webp',
      alt: 'Dimmbare LED-Lichtdecke mit stufenloser Helligkeitsregelung',
      title: 'Smart Home Deluxe',
      subtitle: 'Alexa, mach das Licht auf 40 Prozent',
      location: 'Referenzprojekt NRW',
      details: 'Smart-Home-Ready mit Alexa & Google',
    },
    {
      src: '/images/licht-07.webp',
      alt: 'Energieeffiziente LED-Lichtdecke mit moderner Lichttechnologie',
      title: 'Küchen-Lichtkonzept',
      subtitle: 'Endlich sehen was man schneidet',
      location: 'Referenzprojekt NRW',
      details: '24 Spots kaltweiß + dimmbare Profile',
    },
    {
      src: '/images/licht-08.webp',
      alt: 'LED-Lichtdecke mit warmweißer Beleuchtung für gemütliche Atmosphäre',
      title: 'Schlafzimmer-Oase',
      subtitle: 'Sanftes Licht zum Einschlafen',
      location: 'Referenzprojekt NRW',
      details: 'Indirekte Profile warmweiß dimmbar',
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
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">Beleuchtung Spanndecke</h1>
              <p className="text-cyan-700 font-bold text-lg">Licht, das Räume verwandelt</p>
            </div>
          </div>

          <div className="max-w-3xl">
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              <strong className="text-slate-900">Stell dir vor:</strong> Du kommst nach Hause, drückst einen Knopf – und dein Wohnzimmer taucht in perfektes, 
              weiches Licht. <strong className="text-cyan-700">Keine sichtbaren Lampen, keine Kabel, keine Schatten.</strong> Nur pure Atmosphäre. 
              <strong className="text-slate-900">So fühlt sich moderne LED-Beleuchtung in Spanndecken an.</strong>
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Ob dezente LED-Spots, die punktgenau jeden Winkel ausleuchten, schwebende Lichtprofile, die deine Decke magisch wirken lassen, 
              oder vollflächige Lichtdecken wie im 5-Sterne-Hotel – wir integrieren deine <strong className="text-cyan-700">Beleuchtung unsichtbar 
              in die Spanndecke</strong>. Das Ergebnis? Räume, in denen du dich sofort wohlfühlst. Jeden Tag. Für die nächsten 20 Jahre.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full text-cyan-700 font-bold border-2 border-cyan-200">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
                LED-Spots & Lichtdecken
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-slate-900 font-bold border-2 border-slate-200 shadow-md">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                90% weniger Strom
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-slate-900 font-bold border-2 border-slate-200 shadow-md">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                20+ Jahre Lebensdauer
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
              {/* Emotionale Story */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Warum gutes Licht alles verändert</h2>
                <p className="text-slate-700 leading-relaxed text-lg mb-6">
                  <strong>Erinnerst du dich</strong> an das letzte Mal, als du in einem richtig schönen Hotel warst? Die Beleuchtung war perfekt. 
                  Nicht zu hell, nicht zu dunkel. Keine harten Schatten. Kein Blenden. Nur dieses <strong className="text-cyan-700">warme, weiche Gefühl</strong>, 
                  das dir sofort gesagt hat: Hier kannst du dich wohlfühlen.
                </p>
                <p className="text-slate-700 leading-relaxed text-lg mb-6">
                  <strong className="text-slate-900">Genau dieses Gefühl holen wir in dein Zuhause.</strong> Mit Beleuchtung, die nicht einfach nur hell macht – sondern 
                  <strong className="text-cyan-700"> Atmosphäre schafft</strong>. Die sich an deine Stimmung anpasst. Die morgens wach macht und abends entspannt. 
                  Die deinen Raum größer wirken lässt und jede Ecke perfekt ausleuchtet.
                </p>
                <p className="text-slate-700 leading-relaxed text-lg mb-6">
                  <strong>Das Beste?</strong> Du siehst keine einzige Lampe. Kein Kabel, keinen Spot, keine Leuchte. 
                  Nur das Licht selbst – <strong className="text-cyan-700">nahtlos in die Decke integriert</strong>, als wäre es schon immer da gewesen.
                </p>

                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border-2 border-cyan-200 shadow-lg">
                  <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-600">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="12" y1="16" x2="12" y2="12"/>
                      <line x1="12" y1="8" x2="12.01" y2="8"/>
                      </svg>
                    Das sagen unsere Kunden am häufigsten
                  </h3>
                  <div className="space-y-2 text-slate-700 leading-relaxed italic">
                    <p>"Warum haben wir das nicht schon vor 10 Jahren gemacht?"</p>
                    <p>"Unser Wohnzimmer fühlt sich jetzt dreimal so groß an."</p>
                    <p>"Ich hab das Gefühl, ich wohne plötzlich in einem 5-Sterne-Hotel."</p>
                  </div>
                </div>
              </div>

              {/* Beleuchtungsoptionen */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Deine Optionen: Von dezent bis spektakulär</h3>
                <ul className="space-y-4">
                  {[
                    { title: 'LED-Spots (Einbaustrahler)', desc: 'Die Klassiker – aber in richtig gut. Unsere LED-Spots verschwinden komplett in der Decke. Keine hervorstehenden Rahmen, kein Blenden. Nur punktgenaues Licht genau dort, wo du es brauchst. Perfekt für Wohnzimmer, Küchen, Flure.' },
                    { title: 'LED-Profile (indirekte Beleuchtung)', desc: 'Hier wird\'s magisch. LED-Streifen laufen hinter der Decke entlang – das Licht scheint nach oben und die Decke wirkt, als würde sie schweben. Dieser Effekt ist atemberaubend und schafft sofort eine luxuriöse Atmosphäre.' },
                    { title: 'Lichtdecken (vollflächig)', desc: 'Die Premium-Lösung. Deine gesamte Decke wird zur Lichtquelle – gleichmäßig, blendfrei, faszinierend. Perfekt für Bäder, Büros oder überall wo du perfekte Ausleuchtung ohne Schatten brauchst.' },
                    { title: 'RGBW Smart Home', desc: 'Für die Tech-Fans. Wechsle die Lichtfarbe per App, Sprachbefehl oder Zeitplan. Morgens kaltweiß zum Wachwerden, abends warmweiß zum Entspannen, Party-Modus mit bunten Farben – alles möglich.' }
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

              {/* Raum-Guide */}
              <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-slate-200 shadow-xl">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Welches Licht passt wo?</h3>
                <p className="text-slate-700 leading-relaxed text-lg mb-8">
                  Jeder Raum braucht sein eigenes Lichtkonzept. Hier sind unsere Empfehlungen:
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { room: 'Wohnzimmer', desc: 'Kombination aus Spots + indirekten Profilen – für gemütlich und hell', gradient: 'from-slate-100 to-slate-200' },
                    { room: 'Badezimmer', desc: 'Lichtdecke oder viele Spots – gleichmäßig und blendfrei', gradient: 'from-blue-100 to-blue-200' },
                    { room: 'Küche', desc: 'Viele LED-Spots in kaltweiß – Arbeitslicht zum Kochen', gradient: 'from-cyan-100 to-cyan-200' },
                    { room: 'Schlafzimmer', desc: 'Indirekte Profile warmweiß – sanft und dimmbar', gradient: 'from-purple-100 to-purple-200' },
                    { room: 'Home-Office', desc: 'Gleichmäßige Spots oder Lichtdecke – für konzentriertes Arbeiten', gradient: 'from-blue-100 to-blue-200' },
                    { room: 'Flur', desc: 'Profile an den Seiten – macht schmale Flure breiter', gradient: 'from-cyan-100 to-cyan-200' }
                  ].map((item, i) => (
                    <div key={i} className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border-2 border-slate-200 hover:border-cyan-400 hover:shadow-lg transition-all duration-200">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-700">
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                        </svg>
                      </div>
                      <h4 className="font-bold text-slate-900 text-lg mb-2">{item.room}</h4>
                      <p className="text-slate-700 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Investition & Wert */}
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
                    Klar möchtest du wissen, was deine LED-Beleuchtung kostet. Völlig verständlich. Aber eine Zahl hier hinzuschreiben wäre unfair – 
                    denn <strong>dein Raum ist einzigartig</strong>. Was wir dir sagen können: <strong>Es lohnt sich.</strong>
                  </p>
                  
                  <p className="text-white/95 text-lg leading-relaxed mb-6">
                    <strong>Warum?</strong> Weil du nicht nur Licht bekommst. Du bekommst:
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                    {[
                      'Perfekte Atmosphäre in jedem Raum – auf Knopfdruck',
                      '90% weniger Stromkosten – langfristig gespart',
                      'LEDs, die 20+ Jahre halten – wartungsfrei',
                      'Individuelles Lichtkonzept – maßgeschneidert',
                      '10 Jahre Garantie auf Material und Montage'
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
                    <strong>So geht's weiter:</strong> Du rufst uns an oder schreibst uns. Wir kommen kostenlos zu dir, schauen uns deine Räume an 
                      und erstellen ein individuelles <strong>Festpreis-Angebot</strong> – transparent, ehrlich, ohne versteckte Kosten. Dann entscheidest du in Ruhe.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Fragen, die uns oft gestellt werden</h3>
                <div className="space-y-4">
                  {[
                    {
                      q: 'Wie viel kostet eine LED-Beleuchtung in der Spanndecke wirklich?',
                      a: 'Das kommt auf dein Konzept an – aber als Richtwert: Ein durchschnittliches Wohnzimmer (20m²) mit 12-16 LED-Spots liegt bei ca. 800-1.200€ (inkl. Material, Montage, Verkabelung). Indirekte LED-Profile kosten etwa 80-120€ pro laufendem Meter. Eine vollflächige Lichtdecke startet bei ca. 2.500€. Bedenke: Du sparst 90% Stromkosten, die LEDs halten 20+ Jahre.'
                    },
                    {
                      q: 'Muss ich meine Möbel ausräumen oder die Wohnung komplett vorbereiten?',
                      a: 'Nein! Das ist das Schöne an Spanndecken mit LED-Beleuchtung: Du musst nichts vorbereiten. Deine Möbel bleiben stehen, deine Bilder hängen weiter an den Wänden. Wir arbeiten von oben und es entsteht kein Staub. Morgens kommen wir, abends hast du perfektes Licht.'
                    },
                    {
                      q: 'Kann ich die Lichtfarbe und Helligkeit später noch verändern?',
                      a: 'Absolut! Alle unsere LED-Systeme sind dimmbar. Vom gemütlichen 10% am Abend bis zu 100% Helligkeit – stufenlos einstellbar. Mit RGBW-LEDs kannst du sogar die Lichtfarbe ändern: Warmweiß zum Entspannen, Neutralweiß zum Arbeiten, oder bunte Stimmungsfarben. Steuern per Wandschalter, Fernbedienung oder App.'
                    },
                    {
                      q: 'Wie lange hält so eine LED-Beleuchtung?',
                      a: 'LEDs sind wahre Langstreckenläufer: 50.000+ Betriebsstunden sind Standard. Bei 8 Stunden täglicher Nutzung sind das über 17 Jahre! Sollte doch mal etwas sein (extrem selten), können wir einzelne LEDs austauschen, ohne die ganze Decke neu zu machen. 10 Jahre Garantie inklusive.'
                    },
                    {
                      q: 'Wie viel Strom spare ich wirklich?',
                      a: 'Eine alte 60W Glühbirne kostet bei 5 Stunden täglich ca. 33€ pro Jahr an Strom. Eine vergleichbare 6W LED nur 3,30€ – das sind 90% Ersparnis! Bei einem Wohnzimmer mit 10 LEDs sparst du etwa 300€ pro Jahr. Nach 3-4 Jahren hat sich die LED-Beleuchtung selbst bezahlt.'
                    },
                  ].map((faq, i) => (
                    <div key={i} className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border-2 border-slate-200 hover:border-cyan-400 transition-all duration-200 shadow-lg hover:shadow-xl">
                      <h4 className="font-bold text-slate-900 mb-3 text-lg">{faq.q}</h4>
                      <p className="text-slate-700 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Regionale Verfügbarkeit */}
              <div className="bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
                {/* Background Decorations */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-300 rounded-full opacity-10 blur-3xl" />
                
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">LED-Beleuchtung in ganz NRW</h3>
                  <p className="text-white/90 leading-relaxed mb-6 text-lg">
                    Wir sind in allen größeren Städten und Regionen in Nordrhein-Westfalen für Sie da. Vom ersten Beratungsgespräch 
                    bis zur fertigen Montage – <strong>alles aus einer Hand, direkt vor Ihrer Haustür.</strong>
                  </p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                    {[
                      { city: 'LED Beleuchtung Köln', link: '/einsatzgebiete/abflussreinigung-koeln' },
                      { city: 'LED Beleuchtung Düsseldorf', link: '/einsatzgebiete/abflussreinigung-duesseldorf' },
                      { city: 'LED Beleuchtung Dortmund', link: '/einsatzgebiete/abflussreinigung-dortmund' },
                      { city: 'LED Beleuchtung Essen', link: '/einsatzgebiete/rohrreinigung-essen' },
                      { city: 'LED Beleuchtung Duisburg', link: '/einsatzgebiete/rohrreinigung-notdienst-duisburg' },
                      { city: 'LED Beleuchtung Bochum', link: '/einsatzgebiete/rohrreinigung-bochum' },
                      { city: 'LED Beleuchtung Wuppertal', link: '/einsatzgebiete/rohrreinigung-wuppertal' },
                      { city: 'LED Beleuchtung Bonn', link: '/einsatzgebiete/abflussreinigung-bonn' },
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

              {/* Abschluss-CTA */}
              <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
                {/* Background Decorations */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-300 rounded-full opacity-10 blur-3xl" />
                
                <div className="max-w-2xl mx-auto relative z-10">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                    Lass uns dein Licht planen
                  </h3>
                  <p className="text-white/90 text-lg leading-relaxed mb-8">
                    <strong>Hunderte Familien in NRW</strong> haben bereits ihre Räume mit LED-Beleuchtung verwandelt. 
                    Sie genießen jetzt perfektes Licht – <strong>individuell, effizient und smart.</strong>
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
                  <p className="text-sm text-white/80 font-semibold">
                    Kostenlose Beratung · Festpreis-Angebot · 10 Jahre Garantie
                  </p>
                </div>
              </div>
            </div>

            {/* Premium Sidebar */}
            <div className="lg:col-span-1">
              {/* Premium CTA - Sticky */}
              <div className="sticky top-24 z-10">
                <div className="bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
                  <h3 className="text-2xl font-bold mb-4">Kostenlose Lichtplanung</h3>
                  <p className="mb-6 text-white/90">Wir kommen vorbei, schauen uns alles an und erstellen dein individuelles Lichtkonzept – <strong>kostenlos.</strong></p>
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
                      3D-Lichtplanung inklusive
                    </p>
                    <p className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      Festpreis-Garantie
                    </p>
                  </div>
                </div>
              </div>

              {/* Related - Not Sticky, stays at bottom */}
              <div className="mt-8 bg-slate-50 rounded-2xl p-6 border-2 border-slate-200 shadow-lg">
                <h4 className="font-bold text-slate-900 mb-4 text-lg">Interessiert dich auch:</h4>
                <div className="space-y-3">
                  <Link href="/leistungen/lichtdecken" className="block p-4 bg-white rounded-xl hover:bg-cyan-50 hover:border-cyan-400 transition-all duration-200 border-2 border-slate-200 shadow-sm hover:shadow-md group">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-200">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="2"/>
                          <circle cx="12" cy="12" r="6"/>
                      </svg>
                      </div>
                      <div className="flex-1">
                        <span className="font-bold text-slate-900 block mb-1">Lichtdecken</span>
                        <p className="text-xs text-slate-600">Vollflächiges LED-Licht</p>
                      </div>
                    </div>
                  </Link>
                  <Link href="/leistungen/spanndecken" className="block p-4 bg-white rounded-xl hover:bg-cyan-50 hover:border-cyan-400 transition-all duration-200 border-2 border-slate-200 shadow-sm hover:shadow-md group">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-200">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="8" width="18" height="10" rx="2"/>
                          <path d="M3 8l9 6 9-6"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <span className="font-bold text-slate-900 block mb-1">Spanndecken</span>
                        <p className="text-xs text-slate-600">Basis für jedes Lichtkonzept</p>
                      </div>
                    </div>
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

