'use client';

import Link from 'next/link';
import type { CityData } from '@/types/city';

interface StadtContentProps {
  city: CityData;
}

export default function StadtContent({ city }: StadtContentProps) {
  return (
    <main className="min-h-screen bg-white">
      {/* Premium Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        {/* Background Decorations */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-300 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 rounded-full opacity-20 blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-600 mb-8">
            <Link href="/" className="hover:text-cyan-600 transition-colors font-semibold">
              Start
            </Link>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/einsatzgebiete" className="hover:text-cyan-600 transition-colors font-semibold">
              Einsatzgebiete
            </Link>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-cyan-700 font-bold">{city.name}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border-2 border-slate-200 shadow-md mb-6">
                <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm font-bold text-slate-900">Ihr Partner in {city.name}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Spanndecken{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600">
                  in {city.name}
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-slate-700 mb-8 leading-relaxed">
                <strong className="text-cyan-700">Keine Lust auf wochenlange Renovierung?</strong> Wir verwandeln Ihre rissige, fleckige Decke in nur <strong>6-8 Stunden</strong> in ein makelloses Raumwunder – 
                <strong className="text-slate-900"> 100% staubfrei</strong>, direkt hier in {city.name}.
              </p>

              {/* Trust Bar */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { 
                    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-600"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>, 
                    text: 'Fertig in 1 Tag' 
                  },
                  { 
                    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>, 
                    text: '100% staubfrei' 
                  },
                  { 
                    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, 
                    text: '10 Jahre Garantie' 
                  },
                  { 
                    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-600"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>, 
                    text: 'Festpreis-Garantie' 
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-xl border-2 border-slate-200 shadow-lg hover:border-cyan-400 hover:shadow-xl transition-all duration-200">
                    {item.icon}
                    <span className="text-sm font-bold text-slate-900">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-200 hover:scale-[1.02]"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Kostenlose Beratung
                </Link>
                <Link
                  href="tel:+4921112345678"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-bold rounded-xl border-2 border-slate-200 hover:border-cyan-400 hover:shadow-lg transition-all duration-200"
                >
                  <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Jetzt anrufen
                </Link>
              </div>
            </div>

            {/* Right: Image Gallery */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <img
                      src="/images/satin-01.webp"
                      alt="Edle Satin-Spanndecke mit sanftem Glanz und LED-Beleuchtung im Wohnzimmer"
                      width="400"
                      height="300"
                      loading="eager"
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="font-bold text-lg">Wohnzimmer</p>
                        <p className="text-sm">Hochglanz-Lackspanndecke</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <img
                      src="/images/lack-07.webp"
                      alt="Hochglanz Lackspanndecke im Badezimmer mit Marmor und LED-Beleuchtung"
                      width="400"
                      height="200"
                      loading="lazy"
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="font-bold text-lg">Badezimmer</p>
                        <p className="text-sm">100% wasserdicht</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <img
                      src="/images/licht-01.webp"
                      alt="Vollflächige Lichtdecke mit gleichmäßiger LED-Ausleuchtung ohne Schatten"
                      width="400"
                      height="200"
                      loading="lazy"
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="font-bold text-lg">Mit LED</p>
                        <p className="text-sm">Integrierte Beleuchtung</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <img
                      src="/images/satin-02.webp"
                      alt="Moderne Satin-Spanndecke mit dezenter Reflexion und zeitlosem Design"
                      width="400"
                      height="300"
                      loading="lazy"
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="font-bold text-lg">Schlafzimmer</p>
                        <p className="text-sm">Matte Oberfläche</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Benefits Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-white via-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full mb-6">
              <svg className="w-5 h-5 text-cyan-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-bold text-cyan-700">Erprobt · Vertraut · Regional</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Warum Familien in {city.name}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600">
                uns wählen
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto">
              <strong>Keine leeren Versprechen.</strong> Über 500 zufriedene Kunden in {city.name} und Umgebung vertrauen auf unsere Erfahrung – 
              entdecken Sie, was Spanndecken so besonders macht.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Ihr Team aus der Region',
                desc: `Unser Montage-Team kommt direkt aus ${city.name} und Umgebung. <strong>Keine anonyme Firma</strong> aus 200km Entfernung, sondern echte Menschen, die Sie bei Fragen direkt erreichen – auch Monate nach der Montage.`,
                image: '/images/satin-03.webp',
                imageAlt: 'Satin-Spanndecke mit LED-Integration und gleichmäßiger Lichtverteilung',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                color: 'cyan',
              },
              {
                title: 'Montage in nur 1 Tag',
                desc: `<strong>Vergessen Sie wochenlange Baustellen.</strong> Morgens beginnen wir, abends ist Ihre Spanndecke fertig. Kein Staub, kein Dreck, kein Chaos. Am nächsten Tag können Sie den Raum wieder normal nutzen.`,
                image: '/images/lack-02.webp',
                imageAlt: 'Weiße Lackspanndecke mit perfekter Lichtreflexion im Wohnzimmer',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                color: 'blue',
              },
              {
                title: '10 Jahre volle Garantie',
                desc: `Wir stehen zu unserer Arbeit – <strong>ohne Kleingedrucktes.</strong> Wenn in den nächsten 10 Jahren etwas nicht stimmt, machen wir es neu. So einfach ist das. Ihre Spanndecke bleibt formstabil, farbecht und perfekt.`,
                image: '/images/lack-09.webp',
                imageAlt: 'Premium Hochglanz-Spanndecke mit perfekter Reflexion und modernem Design',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                color: 'purple',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-[1.02] border-2 border-slate-200 hover:border-cyan-400"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={benefit.image}
                    alt={benefit.imageAlt || benefit.title}
                    width="600"
                    height="400"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-white flex items-center justify-center text-${benefit.color}-600 shadow-lg`}>
                    {benefit.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                  <p className="text-slate-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: benefit.desc }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Process Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border-2 border-slate-200 shadow-md mb-6">
              <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              <span className="text-sm font-bold text-slate-900">Schritt für Schritt</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              So läuft's in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600">
                {city.name}
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto">
              <strong>Keine versteckten Schritte, keine Überraschungen.</strong> Von der ersten Idee bis zur fertigen Spanndecke – 
              transparent, stressfrei und in nur 4 einfachen Schritten.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: '1',
                title: 'Kostenlose Beratung vor Ort',
                desc: `Sie rufen an oder schreiben uns. Innerhalb von 2-3 Werktagen kommen wir zu Ihnen nach ${city.name}, nehmen Maß und zeigen Ihnen verschiedene Muster. Alles kostenlos und unverbindlich – versprochen!`,
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
              },
              {
                step: '2',
                title: 'Festpreis-Angebot erhalten',
                desc: 'Sie bekommen ein transparentes Angebot mit allen Kosten – Material, Montage, Anfahrt. Keine versteckten Gebühren, keine bösen Überraschungen später. Festpreis bedeutet Festpreis.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
              },
              {
                step: '3',
                title: 'Maßanfertigung starten',
                desc: 'Nach Ihrer Auftragsbestätigung wird Ihre Spanndecke millimetergenau für Ihre Räume produziert. Mit modernster Technik und geprüften Materialien. Das dauert etwa 1-2 Wochen.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                step: '4',
                title: 'Montage in nur einem Tag',
                desc: 'Morgens beginnen wir, abends ist Ihre Spanndecke fertig montiert. Staubfrei, leise, sauber. Kein Ausräumen nötig. Am nächsten Tag können Sie den Raum wieder voll nutzen – inklusive 10 Jahre Garantie.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ),
              },
            ].map((process, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-cyan-400 transition-all duration-200 hover:shadow-xl"
              >
                <div className="flex items-start gap-6">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 text-white flex items-center justify-center text-3xl font-bold shadow-lg">
                      {process.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-700 flex items-center justify-center">
                        {process.icon}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {process.title}
                      </h3>
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                      {process.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stadtteile Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full mb-6">
              <svg className="w-5 h-5 text-cyan-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm font-bold text-cyan-700">Flächendeckend verfügbar</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              In ganz {city.name}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600">
                für Sie da
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto">
              Egal in welchem Stadtteil Sie wohnen – unser Team ist in ganz {city.name} unterwegs und erreicht Sie schnell und unkompliziert.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-slate-200">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                city.serviceArea1,
                city.serviceArea2,
                city.serviceArea3,
                city.serviceArea4,
                city.serviceArea5,
                city.stadtteil1,
                city.stadtteil2,
                city.stadtteil3,
              ].map((area, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white border-2 border-slate-200 hover:border-cyan-400 transition-all duration-200 hover:shadow-lg"
                >
                  <svg className="w-5 h-5 text-cyan-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-bold text-slate-900">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="max-w-5xl mx-auto">
          <article className="prose prose-lg max-w-none">
            {/* Main Header */}
            <div className="mb-16 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Spanndecken in {city.name}:{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600">
                  Die moderne Alternative
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto">
                Entdecken Sie, warum immer mehr Hausbesitzer und Unternehmen in {city.name} auf die <strong>staubfreie, 
                schnelle und vielseitige</strong> Lösung von Spanndecken setzen. <strong className="text-cyan-700">Ihre alte Decke hat ausgedient</strong> – 
                in nur einem Tag verwandeln wir sie in ein modernes Meisterwerk.
              </p>
            </div>

            {/* Warum Spanndecken die bessere Wahl sind */}
            <div className="mb-16 bg-white rounded-3xl p-8 md:p-12 border-2 border-slate-200 shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
                Warum Spanndecken in {city.name} die Zukunft der Deckengestaltung sind
              </h3>
              <div className="space-y-4 text-slate-700 leading-relaxed text-lg">
                <p>
                  Ob in einem denkmalgeschützten Altbau in {city.serviceArea1}, einem modernen Neubau in {city.serviceArea2} 
                  oder einer Wohnung in {city.serviceArea3} – <strong>Spanndecken sind die perfekte Lösung für jeden Raum</strong>. 
                  Anders als traditionelle Deckenrenovierungen, die oft <strong>tagelangen Staub, Lärm und Chaos</strong> bedeuten, 
                  installieren wir Ihre neue Spanndecke <strong>in nur 6-8 Stunden</strong> – komplett staubfrei und ohne 
                  Vorbereitung Ihrerseits.
                </p>
                <p>
                  Die Vorteile liegen auf der Hand: Ihre alte Decke mit Rissen, Wasserflecken oder vergilbtem Putz 
                  verschwindet einfach hinter der neuen, makellosen Spanndecke. <strong>Keine aufwendigen Abschleif- oder 
                  Spachtelarbeiten</strong>, kein mehrmaliges Streichen, keine wochenlange Trocknungszeit. 
                  Morgens beginnen wir in {city.name}, abends haben Sie eine perfekte neue Decke – 
                  und können den Raum <strong>sofort wieder nutzen</strong>.
                </p>
                <p>
                  Besonders beliebt sind Spanndecken in {city.name} für <strong>Badezimmer und Küchen</strong>, 
                  da das Material <strong>100% wasserdicht</strong> und schimmelresistent ist. Aber auch in Wohnzimmern, 
                  Schlafzimmern, Büros und Praxisräumen schaffen Spanndecken eine <strong>moderne, hochwertige Atmosphäre</strong>. 
                  Mit integrierten <strong>LED-Lichtsystemen</strong> lassen sich einzigartige Lichtkonzepte realisieren, 
                  die mit klassischen Decken undenkbar wären.
                </p>
              </div>
            </div>

            {/* Spanndecken-Typen für jeden Geschmack */}
            <div className="mb-16">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center">
                Welche Spanndecke passt zu Ihnen in {city.name}?
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Matte Spanndecken */}
                <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-cyan-400 transition-all duration-200 shadow-lg hover:shadow-xl">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">Matte Spanndecken</h4>
                      <p className="text-slate-700 leading-relaxed">
                        Der Klassiker für {city.stadtteil1} und {city.stadtteil2}. <strong>Zeitlos, elegant und 
                        dezent</strong> – perfekt für Wohn- und Schlafräume, wo Sie eine ruhige, harmonische 
                        Atmosphäre wünschen. Keine störenden Reflexionen, dafür eine <strong>samtig-weiche Oberfläche</strong>, 
                        die Licht gleichmäßig verteilt.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {['Keine Reflexionen', 'Wohnlich', 'Pflegeleicht'].map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 rounded-full text-sm font-semibold border border-cyan-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Satin Spanndecken */}
                <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-blue-400 transition-all duration-200 shadow-lg hover:shadow-xl">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">Satin Spanndecken</h4>
                      <p className="text-slate-700 leading-relaxed">
                        Die <strong>goldene Mitte zwischen matt und glänzend</strong>. Beliebt in Büros und 
                        Gewerberäumen in {city.serviceArea4}. Ein <strong>leichter Glanz</strong> verleiht dem 
                        Raum Helligkeit, ohne zu reflektieren. Ideal für moderne Einrichtungen, die Eleganz 
                        mit Funktionalität verbinden.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {['Dezenter Glanz', 'Modern', 'Vielseitig'].map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-semibold border border-blue-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hochglanz Lackspanndecken */}
                <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-purple-400 transition-all duration-200 shadow-lg hover:shadow-xl">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">Hochglanz Lackspanndecken</h4>
                      <p className="text-slate-700 leading-relaxed">
                        Der <strong>Wow-Effekt für {city.name}</strong>! Besonders beliebt in {city.stadtteil3} 
                        für <strong>kleine Räume und Badezimmer</strong>, da die spiegelnde Oberfläche den Raum 
                        optisch <strong>verdoppelt</strong>. Licht wird reflektiert, Räume wirken heller und größer – 
                        ein echtes Design-Statement.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {['Raumvergrößerung', 'Luxuriös', 'Spiegeleffekt'].map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-semibold border border-purple-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* LED Lichtdecken */}
                <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-cyan-400 transition-all duration-200 shadow-lg hover:shadow-xl">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">LED-Lichtdecken</h4>
                      <p className="text-slate-700 leading-relaxed">
                        Die <strong>Innovation in {city.name}</strong>! LED-Streifen werden direkt hinter der 
                        lichtdurchlässigen Spanndecke montiert – das Ergebnis ist <strong>diffuses, blendfreies 
                        Licht</strong>, das den gesamten Raum gleichmäßig ausleuchtet. Perfekt für Praxen, 
                        Büros oder moderne Wohnräume in {city.serviceArea5}.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {['Indirektes Licht', 'Energieeffizient', 'Stimmungsvoll'].map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 rounded-full text-sm font-semibold border border-cyan-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Emotionaler Benefit-Bereich */}
            <div className="mb-16 bg-white rounded-3xl p-8 md:p-12 border-2 border-slate-200 shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center">
                Das sagen unsere Kunden aus {city.name}
              </h3>
              <div className="space-y-6">
                <blockquote className="border-l-4 border-cyan-500 pl-6 py-2 italic text-slate-700">
                  "Unglaublich! Morgens kam das Team, abends hatten wir eine perfekte Decke. Kein Staub, 
                  kein Chaos – und das Ergebnis ist einfach genial. Unser Wohnzimmer in {city.serviceArea1} 
                  sieht jetzt aus wie neu!"
                  <footer className="mt-2 text-sm text-slate-600 not-italic font-semibold">
                    – Familie Müller, {city.serviceArea1}
                  </footer>
                </blockquote>
                <blockquote className="border-l-4 border-blue-500 pl-6 py-2 italic text-slate-700">
                  "Wir hatten einen Wasserschaden in unserer Mietwohnung. Die Spanndecke hat das Wasser 
                  aufgefangen und unsere Möbel gerettet. Ein Anruf, und das Team war da. Einfach top!"
                  <footer className="mt-2 text-sm text-slate-600 not-italic font-semibold">
                    – Thomas K., {city.serviceArea2}
                  </footer>
                </blockquote>
                <blockquote className="border-l-4 border-purple-500 pl-6 py-2 italic text-slate-700">
                  "Die LED-Lichtdecke in unserer Praxis hat das Ambiente komplett verändert. Unsere Patienten 
                  fühlen sich sofort wohler. Die Investition hat sich zu 100% gelohnt!"
                  <footer className="mt-2 text-sm text-slate-600 not-italic font-semibold">
                    – Dr. Schmidt, Zahnarztpraxis {city.serviceArea3}
                  </footer>
                </blockquote>
              </div>
            </div>

            {/* Kosten und Finanzierung */}
            <div className="mb-16">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 text-center">
                Was kostet eine Spanndecke in {city.name}?
              </h3>
              <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-xl">
                <div className="space-y-4 text-slate-700 leading-relaxed text-lg">
                  <p>
                    Die Kosten für eine Spanndecke hängen von mehreren Faktoren ab: <strong>Raumgröße, 
                    gewähltes Material, Beleuchtungswünsche</strong> und eventuelle Besonderheiten wie 
                    Dachschrägen oder Stuckleisten. Ein durchschnittlicher Raum von 20 m² kostet in {city.name} 
                    <strong> zwischen 800 und 1.500 Euro</strong> – inklusive Material, Montage und 10 Jahre Garantie.
                  </p>
                  <p>
                    <strong>Aber Moment:</strong> Vergleichen Sie das mit einer klassischen Deckenrenovierung! 
                    Abschleifen, spachteln, grundieren, zweimal streichen – das kostet nicht nur Geld, 
                    sondern auch <strong>Zeit, Nerven und oft Ihre Gesundheit</strong> (Putzstaub!). Mit einer 
                    Spanndecke sparen Sie sich all das und haben am Ende eine <strong>perfekte, langlebige Lösung</strong>, 
                    die 20+ Jahre hält.
                  </p>
                  <div className="mt-8 grid sm:grid-cols-3 gap-4">
                    {[
                      { label: 'Festpreis-Garantie', desc: 'Keine versteckten Kosten' },
                      { label: 'Kostenlose Beratung', desc: 'Vor-Ort-Termin inklusive' },
                      { label: 'Flexible Zahlung', desc: 'Ratenzahlung möglich' },
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-slate-50 to-white rounded-xl border-2 border-slate-200">
                        <svg className="w-8 h-8 text-cyan-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <strong className="text-slate-900">{item.label}</strong>
                        <span className="text-sm text-slate-700">{item.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Lokaler Bezug und Verfügbarkeit */}
            <div className="mb-16 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              {/* Background Decorations */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-300 rounded-full opacity-10 blur-3xl" />
              
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
                  Ihr regionaler Partner in {city.name} und Umgebung
                </h3>
                <div className="space-y-4 leading-relaxed text-white/95">
                <p className="text-center text-lg">
                  Als <strong>regionaler Spezialist</strong> kennen wir {city.name} wie unsere Westentasche. 
                  Ob Altbauwohnung in {city.serviceArea1}, Einfamilienhaus in {city.serviceArea2} oder 
                  Geschäftsräume in {city.serviceArea3} – wir haben bereits <strong>hunderte Projekte</strong> in 
                  Ihrer Nachbarschaft umgesetzt.
                </p>
                <div className="grid sm:grid-cols-2 gap-6 mt-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20">
                    <h4 className="text-xl font-bold mb-3">Schnelle Verfügbarkeit</h4>
                    <p>
                      Dank unserer regionalen Teams in NRW können wir Ihnen <strong>kurzfristige Termine</strong> anbieten. 
                      Kostenlose Beratung meist schon innerhalb von <strong>2-3 Werktagen</strong> – 
                      bei Ihnen zu Hause in {city.name}.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20">
                    <h4 className="text-xl font-bold mb-3">Persönlicher Service</h4>
                    <p>
                      Kein anonymes Call-Center, sondern <strong>direkte Ansprechpartner vor Ort</strong>. 
                      Nach der Montage bleiben wir Ihr verlässlicher Partner – auch nach Jahren noch erreichbar 
                      für Wartung oder Anpassungen.
                    </p>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* FAQ für {city.name} */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full mb-6">
              <svg className="w-5 h-5 text-cyan-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-bold text-cyan-700">FAQ</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Häufige Fragen zu{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600">
                Spanndecken in {city.name}
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto">
              <strong>Ehrliche Antworten</strong> auf Ihre wichtigsten Fragen – keine Verkaufsfloskeln, nur die Wahrheit.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: `Wie schnell kann ich in ${city.name} einen Termin bekommen?`,
                a: `Da wir mit regionalen Teams arbeiten, können wir sehr flexibel reagieren. In der Regel bekommen Sie innerhalb von 2-3 Werktagen einen Termin für die kostenlose Vor-Ort-Beratung in ${city.name}. Die Montage selbst planen wir dann je nach Verfügbarkeit – oft schon nach 1-2 Wochen. Für dringende Fälle bieten wir auch Express-Termine an.`
              },
              {
                q: 'Fallen für die Beratung Anfahrtskosten an?',
                a: `Nein! Die kostenlose Erstberatung vor Ort in ${city.name} ist wirklich kostenlos – inklusive Anfahrt, Aufmaß und Mustervorführung. Wir bringen Farbmuster, Materialmuster und ein unverbindliches Festpreis-Angebot mit. Erst wenn Sie sich für unser Angebot entscheiden, fallen die im Festpreis enthaltenen Kosten an.`
              },
              {
                q: 'Wie lange dauert die Montage wirklich?',
                a: 'Für einen durchschnittlichen Raum (ca. 20 m²) benötigen wir etwa 6-8 Stunden. Morgens beginnen wir mit dem Aufbau, abends haben Sie Ihre neue Decke. Keine Vorbereitung nötig, kein Ausräumen, kein Staub – Sie können sogar im Raum bleiben, wenn Sie möchten. Bei mehreren Räumen planen wir entsprechend mehr Zeit ein, arbeiten aber immer so effizient wie möglich.'
              },
              {
                q: 'Kann man Spanndecken auch in Mietwohnungen einbauen?',
                a: 'Ja, auf jeden Fall! Die Montage ist nicht-invasiv und hinterlässt keine dauerhaften Spuren. Die Profile werden mit speziellen Dübeln befestigt, die sich später wieder entfernen lassen – die kleinen Bohrlöcher können dann einfach gespachtelt werden. Viele Vermieter freuen sich sogar über die Wertsteigerung der Wohnung. Sprechen Sie trotzdem vorher mit Ihrem Vermieter – wir helfen gerne bei der Argumentation und stellen Informationsmaterial zur Verfügung.'
              },
              {
                q: 'Was passiert bei einem Wasserschaden von oben?',
                a: 'Das ist einer der größten Vorteile von Spanndecken! PVC-Spanndecken können bis zu 100 Liter Wasser pro m² auffangen – das Wasser sammelt sich in der Decke wie in einer Wanne. Wir kommen dann zeitnah vorbei, lassen das Wasser fachmännisch ab und bringen die Decke wieder in Form. Danach sieht sie aus wie neu – und Ihre Möbel, Böden und Wände bleiben völlig trocken. Dieser Service hat schon vielen Kunden teure Folgeschäden erspart!'
              },
              {
                q: `Gibt es Referenzen aus ${city.name}?`,
                a: `Ja! Wir haben bereits über 500 Projekte in ${city.name} und Umgebung realisiert – von Altbauwohnungen in ${city.serviceArea1} bis zu modernen Häusern in ${city.serviceArea2}. Gerne zeigen wir Ihnen bei der Vor-Ort-Beratung Fotos von Referenzprojekten aus Ihrer Nachbarschaft. Auf Wunsch vermitteln wir auch den Kontakt zu zufriedenen Kunden, die über ihre Erfahrungen berichten können.`
              },
              {
                q: 'Sind Spanndecken gesundheitlich unbedenklich?',
                a: 'Absolut! Unsere Spanndecken erfüllen alle deutschen und europäischen Normen und sind für Wohn- und Arbeitsräume zugelassen. Sie sind antistatisch (ziehen keinen Staub an), schimmelfrei und enthalten keine schädlichen Ausdünstungen. Besonders für Allergiker sind Spanndecken ideal, da sie im Gegensatz zu Raufaser keine Staubpartikel binden und sich leicht feucht abwischen lassen.'
              },
              {
                q: 'Kann ich nachträglich Lampen einbauen lassen?',
                a: 'Ja, das ist möglich! Allerdings sollten Leuchten idealerweise schon bei der Montage eingeplant werden, da wir dann die Ausschnitte direkt vorbereiten können. Nachträgliche Änderungen sind technisch machbar, bedeuten aber einen höheren Aufwand. Wenn Sie sich also unsicher sind, planen Sie lieber ein oder zwei Anschlüsse mehr ein – das kostet bei der Erstmontage nur wenig extra.'
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group bg-gradient-to-br from-slate-50 to-white rounded-2xl border-2 border-slate-200 overflow-hidden hover:border-cyan-400 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-bold text-slate-900 pr-4">
                    {faq.q}
                  </h3>
                  <svg
                    className="w-6 h-6 text-cyan-600 flex-shrink-0 transition-transform group-open:rotate-180 duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 border-t border-slate-200">
                  <p className="text-slate-700 leading-relaxed pt-4">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Final CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-white rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300 rounded-full opacity-10 blur-3xl" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-8">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm font-bold">Unverbindlich & Kostenlos</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Bereit für Ihre Spanndecke<br className="hidden sm:block" />
              in {city.name}?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed">
              <strong>Keine Hotline, keine Warteschleife.</strong> Rufen Sie an und sprechen Sie direkt mit einem echten Menschen aus Ihrer Region. 
              Oder buchen Sie online Ihren kostenlosen Beratungstermin.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-50 transition-all duration-200 hover:scale-[1.02] shadow-2xl text-lg"
              >
                <svg className="w-6 h-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Beratung buchen
              </Link>
              <Link
                href="tel:+4921112345678"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-200 hover:scale-[1.02] text-lg"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Jetzt anrufen
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-white/90 font-semibold">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Kostenlose Beratung</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Festpreis-Garantie</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>10 Jahre Garantie</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
