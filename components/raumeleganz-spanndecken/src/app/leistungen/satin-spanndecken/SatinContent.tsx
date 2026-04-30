'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function SatinContent() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    {
      src: '/images/satin-01.webp',
      alt: 'Edle Satin-Spanndecke mit sanftem Glanz und LED-Beleuchtung im Wohnzimmer',
      title: 'Satin-Eleganz',
      subtitle: 'Edel ohne zu glänzen – perfekte Balance',
      location: 'Referenzprojekt NRW',
      details: 'Satin mit LED-Spots',
      result: 'Hochwertig und dezent',
    },
    {
      src: '/images/satin-02.webp',
      alt: 'Moderne Satin-Spanndecke mit dezenter Reflexion und zeitlosem Design',
      title: 'Sanfte Reflexion',
      subtitle: 'Licht ohne Blendung',
      location: 'Referenzprojekt NRW',
      details: 'Satin mit indirekter Beleuchtung',
      result: 'Beruhigende Atmosphäre',
    },
    {
      src: '/images/satin-03.webp',
      alt: 'Satin-Spanndecke mit LED-Integration und gleichmäßiger Lichtverteilung',
      title: 'Dezente Eleganz',
      subtitle: 'Praktisch und schick zugleich',
      location: 'Referenzprojekt NRW',
      details: 'Satin abwaschbar',
      result: 'Edle Oberfläche',
    },
    {
      src: '/images/satin-04.webp',
      alt: 'Premium Satin-Spanndecke mit warmem Lichtkonzept im Wohnraum',
      title: 'Warmes Ambiente',
      subtitle: 'Licht trifft edle Oberfläche',
      location: 'Referenzprojekt NRW',
      details: 'Satin mit dimmbaren Spots',
      result: 'Wohnliche Atmosphäre',
    },
    {
      src: '/images/satin-05.webp',
      alt: 'Elegante Satin-Spanndecke mit sanftem Halbglanz und moderner Optik',
      title: 'Moderne Raumgestaltung',
      subtitle: 'Zeitloses Design',
      location: 'Referenzprojekt NRW',
      details: 'Satin Premium-Qualität',
      result: 'Stilvolle Eleganz',
    },
    {
      src: '/images/satin-06.webp',
      alt: 'Satin-Spanndecke mit indirekter LED-Beleuchtung und edler Oberfläche',
      title: 'Sanftes Lichtspiel',
      subtitle: 'Perfekte Lichtverteilung',
      location: 'Referenzprojekt NRW',
      details: 'Satin mit Lichtkonzept',
      result: 'Harmonische Ausleuchtung',
    },
    {
      src: '/images/satin-07.webp',
      alt: 'Dezente Satin-Spanndecke mit minimalistischem Design und Lichtakzenten',
      title: 'Dezente Perfektion',
      subtitle: 'Weniger ist mehr',
      location: 'Referenzprojekt NRW',
      details: 'Satin minimalistisch',
      result: 'Zeitlose Schönheit',
    },
    {
      src: '/images/satin-08.webp',
      alt: 'Moderne Satin-Spanndecke mit LED-Spots und sanfter Lichtreflexion',
      title: 'LED & Satin',
      subtitle: 'Perfekte Kombination',
      location: 'Referenzprojekt NRW',
      details: 'Satin mit LED-Technik',
      result: 'Moderne Lichtgestaltung',
    },
    {
      src: '/images/satin-09.webp',
      alt: 'Hochwertige Satin-Spanndecke mit eleganter Atmosphäre im Wohnbereich',
      title: 'Edle Atmosphäre',
      subtitle: 'Hochwertig und einladend',
      location: 'Referenzprojekt NRW',
      details: 'Satin Premium-Finish',
      result: 'Luxus-Feeling',
    },
    {
      src: '/images/satin-10.webp',
      alt: 'Satin-Spanndecke mit perfekter Lichtverteilung und zeitloser Eleganz',
      title: 'Perfekte Reflexion',
      subtitle: 'Satin at its best',
      location: 'Referenzprojekt NRW',
      details: 'Satin Perfektion',
      result: 'Eleganz pur',
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
                <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0a4 4 0 004-4v-1a2 2 0 012-2h2a2 2 0 012 2v1a4 4 0 01-4 4H7z"/>
              </svg>
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">Satin-Spanndecken</h1>
              <p className="text-cyan-700 font-bold text-lg">Edel, aber nicht protzig – 70% wählen Satin</p>
            </div>
          </div>

          <div className="max-w-3xl">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              <strong className="text-slate-900">Sie wollen eine Decke, die hochwertig aussieht – aber nicht schreit: "Schau mich an!"?</strong> Dann ist Satin genau richtig. 
              <strong className="text-cyan-700"> Der goldene Mittelweg zwischen Matt und Hochglanz.</strong> Sanft glänzend wie Seide, 
              praktisch wie Plastik. 70% unserer Kunden wählen Satin – weil es einfach überall funktioniert.
            </p>
            <p className="text-base text-slate-600 leading-relaxed mb-6">
              Keine Spiegelungen wie bei Hochglanz. Keine Langeweile wie bei Matt. Nur eine wunderschöne, seidige Oberfläche, 
              die Licht sanft streut und jedem Raum diese <strong className="text-cyan-700">dezente Eleganz</strong> verleiht. 
              Ob Wohnzimmer, Schlafzimmer oder Küche – Satin passt sich an, ohne sich aufzudrängen. Es wirkt edler als Matt, 
              aber bleibt <strong>alltagstauglich und pflegeleicht</strong>. Fettspritzer in der Küche? Einfach abwischen. Fertig.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full text-cyan-700 font-bold border-2 border-cyan-200">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                Dezent edel
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-slate-900 font-bold border-2 border-slate-200 shadow-md">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Für 90% aller Räume
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-slate-900 font-bold border-2 border-slate-200 shadow-md">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
                Zeitlos schön
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
                    <div className="flex flex-wrap gap-3 mb-3">
                      <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg text-white text-sm font-semibold border border-white/30">
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
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Warum 70% unserer Kunden Satin wählen</h2>
                <p className="text-slate-700 leading-relaxed text-lg mb-6">
                  <strong>"Ich will, dass es schön aussieht – aber nicht protzig."</strong> Das hören wir ständig. Und genau dafür gibt es Satin. 
                  <strong className="text-cyan-700"> Die perfekte Balance zwischen edel und alltagstauglich.</strong>
                </p>
                <p className="text-slate-700 leading-relaxed text-lg mb-6">
                  Satin reflektiert Licht sanft – <strong>ohne Spiegeleffekt</strong>. Es wirkt <strong className="text-cyan-700">hochwertiger als Matt</strong>, aber 
                  <strong> dezenter als Hochglanz</strong>. Das Ergebnis? Eine Decke, die sich anfühlt wie Seide, aber pflegeleicht 
                  ist wie Plastik. Sie müssen sich keine Gedanken über Fingerabdrücke machen oder ob es "zu viel" ist. Satin funktioniert einfach – 
                  <strong> in fast jedem Raum, mit fast jedem Einrichtungsstil</strong>.
                </p>
                <p className="text-slate-700 leading-relaxed text-lg mb-6">
                  Viele Kunden beschreiben es als <strong className="text-cyan-700">"seidige Eleganz"</strong>. Die Oberfläche fällt positiv auf, 
                  wenn man genau hinschaut – aber sie schreit nicht danach, beachtet zu werden. Perfekt für Menschen, die Qualität schätzen, 
                  aber nicht auffallen wollen. Sie bekommen den <strong>Look eines teuren Hotels</strong>, fühlen sich aber trotzdem zuhause. 
                  Und das Beste: <strong>Fettspritzer in der Küche? Einfach abwischen. Fertig.</strong> Satin ist so pflegeleicht wie Hochglanz, 
                  aber ohne den Spiegeleffekt.
                </p>

                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border-2 border-cyan-200 shadow-lg">
                  <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-600">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                    Das sagen unsere Kunden:
                  </h3>
                  <div className="space-y-3">
                    <p className="text-slate-700 leading-relaxed italic">
                      "Sieht aus wie Seide – fühlt sich an wie im Luxushotel, aber ist total pflegeleicht."
                    </p>
                    <p className="text-slate-700 leading-relaxed italic">
                      "Nicht zu matt, nicht zu glänzend. Genau richtig für unser Wohnzimmer."
                    </p>
                    <p className="text-slate-700 leading-relaxed italic">
                      "Gäste fragen immer: Was ist das für eine Decke? Die fühlt sich so edel an."
                    </p>
                  </div>
                </div>
              </div>

              {/* Premium Vorteile Liste */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Wo Satin richtig gut funktioniert</h3>
                <ul className="space-y-4">
                  {[
                    { 
                      title: 'Wohnzimmer (Top-Choice)', 
                      desc: 'Das Herzstück Ihres Zuhauses. Satin reflektiert das Licht vom Fernseher und Lampen sanft, ohne zu blenden. Bei Tageslicht wirkt es dezent, abends edel. 70% unserer Wohnzimmer-Kunden wählen Satin.' 
                    },
                    { 
                      title: 'Schlafzimmer (Wohlfühlen garantiert)', 
                      desc: 'Satin hat etwas Beruhigendes. Kein grelles Matt, keine Spiegelungen wie bei Hochglanz. Das Licht wird weich und warm gestreut – perfekt für Räume, in denen Sie abschalten wollen.' 
                    },
                    { 
                      title: 'Küche & Esszimmer (Praktisch & Schick)', 
                      desc: 'In Räumen, die viel aushalten müssen, zeigt Satin seine praktische Seite. Fettspritzer? Einfach abwischen. Feuchtigkeit? Kein Problem. Aber gleichzeitig sieht es edler aus als Matt.' 
                    },
                    { 
                      title: 'Flur & Diele (Elegant)', 
                      desc: 'In Räumen, die Sie oft durchqueren, aber nicht stundenlang nutzen, macht Satin richtig Sinn. Es fällt positiv auf, wirkt hochwertig – aber lenkt nicht ab.' 
                    },
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

              {/* Satin vs Andere - Premium Design */}
              <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-slate-200 shadow-xl">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Satin vs. die Alternativen</h3>
                <p className="text-slate-700 leading-relaxed text-lg mb-8">
                  Sie sind sich unsicher, welche Oberfläche die richtige ist? Hier der ehrliche Vergleich:
                </p>
                <div className="grid sm:grid-cols-3 gap-6">
                  {[
                    { 
                      title: 'Matt', 
                      desc: 'Keine Reflexionen, zeitlos', 
                      pros: 'Dezent, günstig, keine Reflexionen',
                      cons: 'Wirkt oft "zu einfach"',
                      gradient: 'from-slate-100 to-slate-200', 
                      color: 'slate',
                      highlight: false
                    },
                    { 
                      title: 'Satin (70% wählen das)', 
                      desc: 'Dezenter Glanz, vielseitig', 
                      pros: 'Edel, pflegeleicht, für fast alle Räume',
                      cons: 'Keine – der goldene Mittelweg',
                      gradient: 'from-blue-100 to-blue-200', 
                      color: 'blue',
                      highlight: true
                    },
                    { 
                      title: 'Hochglanz', 
                      desc: 'Spiegeleffekt, raumvergrößernd', 
                      pros: 'Max. Lichtreflektion, modern',
                      cons: 'Fingerabdrücke sichtbar, kann "zu viel" sein',
                      gradient: 'from-purple-100 to-purple-200', 
                      color: 'purple',
                      highlight: false
                    }
                  ].map((type, i) => (
                    <div key={i} className={`bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border-2 transition-all duration-200 ${
                      type.highlight ? 'border-cyan-400 shadow-xl ring-2 ring-cyan-200' : 'border-slate-200 hover:border-cyan-400 hover:shadow-lg'
                    }`}>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${type.gradient} flex items-center justify-center mb-4`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`text-${type.color}-700`}>
                          <circle cx="12" cy="12" r="10"/>
                          <circle cx="12" cy="12" r="6"/>
                        </svg>
                      </div>
                      <h4 className="font-bold text-slate-900 text-lg mb-2">{type.title}</h4>
                      <p className="text-slate-700 text-sm mb-4 leading-relaxed">{type.desc}</p>
                      <div className="space-y-2">
                        <div>
                          <p className="text-xs font-bold text-green-600 mb-1">VORTEILE:</p>
                          <p className="text-xs text-slate-700">{type.pros}</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-orange-600 mb-1">NACHTEILE:</p>
                          <p className="text-xs text-slate-700">{type.cons}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Premium FAQ */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Häufig gestellte Fragen</h3>
                <div className="space-y-4">
                  {[
                    {
                      q: 'Ist Satin schwieriger zu reinigen als Matt?',
                      a: 'Nein, im Gegenteil! Durch die leicht glänzende Oberfläche perlt Schmutz sogar besser ab als bei Matt. Fettspritzer in der Küche? Einfach feucht abwischen und fertig. Satin ist genauso pflegeleicht wie Matt – aber wirkt deutlich edler.'
                    },
                    {
                      q: 'Sieht man Fingerabdrücke auf Satin-Spanndecken?',
                      a: 'Kaum. Satin liegt genau in der Mitte zwischen Matt und Hochglanz. Bei Hochglanz sieht man jeden Fingerabdruck – bei Satin nicht. Klar, wenn Sie direkt mit fettigen Händen an die Decke fassen, hinterlässt das Spuren. Aber mal ehrlich: Wer macht das schon?'
                    },
                    {
                      q: 'Passt Satin zu modernem oder eher klassischem Einrichtungsstil?',
                      a: 'Beides! Das ist das Schöne an Satin – es ist so vielseitig. In modernen Lofts wirkt es edel-minimalistisch. In klassischen Altbauten dezent-elegant. In skandinavischen Wohnungen hell und freundlich. Satin ist der Allrounder unter den Spanndecken.'
                    },
                    {
                      q: 'Wie viel teurer ist Satin im Vergleich zu Matt?',
                      a: 'Nur minimal – etwa 5-10% Aufpreis. Für ein 20m² Wohnzimmer reden wir von ca. 80-120€ Unterschied. Viele Kunden sagen später: "Hätte ich gewusst, dass der Unterschied so gering ist, hätte ich direkt Satin genommen." Es lohnt sich wirklich.'
                    },
                    {
                      q: 'Kann ich Satin mit LED-Beleuchtung kombinieren?',
                      a: 'Absolut – das ist sogar eine unserer beliebtesten Kombinationen! LED-Profile + Satin = das Licht wird sanft reflektiert, ohne zu grell zu wirken. Das Ergebnis ist eine weiche, hochwertige Ausleuchtung. Perfekt für Wohnzimmer, Schlafzimmer oder auch Küchen.'
                    },
                  ].map((faq, i) => (
                    <div key={i} className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border-2 border-slate-200 hover:border-cyan-400 transition-all duration-200 shadow-lg hover:shadow-xl">
                      <h4 className="font-bold text-slate-900 mb-3 text-lg">{faq.q}</h4>
                      <p className="text-slate-700 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Premium Abschluss-CTA */}
              <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
                {/* Background Decorations */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-300 rounded-full opacity-10 blur-3xl" />
                
                <div className="max-w-2xl mx-auto relative z-10">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                    Bereit für Ihre seidige Traumdecke?
                  </h3>
                  <p className="text-white/90 text-lg leading-relaxed mb-8">
                    Satin ist keine Kompromiss-Lösung – es ist die <strong>klügste Entscheidung</strong>. 
                    Edel, pflegeleicht, vielseitig. Lassen Sie sich kostenlos beraten und halten Sie alle Muster selbst in der Hand.
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
                <p className="mb-6 text-white/90">Wir bringen Ihnen alle Oberflächen zum Vergleichen mit – <strong>kostenlos!</strong> Dann spüren Sie selbst den Unterschied.</p>
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
                    Matt, Satin & Hochglanz vergleichen
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
                <h4 className="font-bold text-warm-900 mb-4">Interessiert Sie auch:</h4>
                <div className="space-y-3">
                  <Link href="/leistungen/spanndecke-matt" className="block p-3 bg-white rounded-lg hover:bg-craft-50 transition-colors duration-200 border border-warm-200">
                    <span className="font-semibold text-warm-900">Matte Spanndecken</span>
                    <p className="text-xs text-warm-600 mt-1">Dezenter als Satin, keine Reflexionen</p>
                  </Link>
                  <Link href="/leistungen/lackspanndecken" className="block p-3 bg-white rounded-lg hover:bg-craft-50 transition-colors duration-200 border border-warm-200">
                    <span className="font-semibold text-warm-900">Hochglanz (Lack)</span>
                    <p className="text-xs text-warm-600 mt-1">Mehr Reflexion als Satin</p>
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
