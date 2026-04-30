'use client';

import Link from 'next/link';

export default function HomePageClient() {
  return (
    <>
      {/* Problem → Lösung Section - SIDE BY SIDE DESIGN */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-300 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-300 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-800">Das Problem</span>
              {' '}vs.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600">Die Lösung</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Klassische Deckenrenovierung vs. moderne Spanndecken – Der direkte Vergleich
            </p>
          </div>

          {/* Side-by-Side Comparison */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 px-4">
            {/* PROBLEM SIDE */}
            <div className="space-y-6">
              {/* Problem Header */}
              <div className="text-center">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-slate-600 to-slate-700 text-white rounded-2xl shadow-2xl mb-6">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                    <line x1="12" y1="9" x2="12" y2="13"/>
                    <line x1="12" y1="17" x2="12.01" y2="17"/>
                  </svg>
                  <span className="font-bold text-lg">Klassische Renovierung</span>
            </div>
          </div>

              {/* Problem Cards */}
              <div className="space-y-4">
                {[
                  {
                    icon: (
                      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                      </svg>
                    ),
                    title: 'Risse & Verfärbungen',
                    desc: 'Alterserscheinungen, Wasserflecken und vergilbte Farbe – jeder Blick nach oben ist eine Erinnerung an die überfällige Renovierung.',
                    badge: '5 Tage'
                  },
                  {
                    icon: (
                      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    title: 'Tagelanger Dreck',
                    desc: 'Möbel ausräumen, abschleifen, grundieren, spachteln – tagelanger Staub, Chaos in der Wohnung und wochenlanger Stress.',
                    badge: 'Aufwändig'
                  },
                  {
                    icon: (
                      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                      </svg>
                    ),
                    title: 'Eingeschränkt',
                    desc: 'LED-Beleuchtung? Kompliziert. Moderne Designs? Fast unmöglich. Ihre Design-Träume bleiben oft Wunschdenken.',
                    badge: 'Hohe Kosten'
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-xl border-2 border-slate-200 hover:border-slate-400 transition-all duration-200 ease-out hover:shadow-2xl group">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-slate-100 to-gray-100 flex items-center justify-center text-slate-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                          <span className="px-3 py-1 bg-gradient-to-r from-slate-600 to-slate-700 text-white text-xs font-bold rounded-lg">{item.badge}</span>
                    </div>
                        <p className="text-sm text-slate-700 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Problem Summary */}
              <div className="relative">
                {/* Arrow Divider */}
                <div className="flex justify-center mb-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-600 to-slate-700 text-white rounded-full text-sm font-bold shadow-xl">
                    <span>Das Ergebnis</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ),
                      label: 'Extremer Stress'
                    },
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      ),
                      label: 'Viel Dreck'
                    },
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ),
                      label: 'Tagelang'
                    },
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ),
                      label: 'Hohe Kosten'
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-white border-2 border-slate-300 rounded-xl shadow-lg">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-600 to-slate-700 text-white flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <span className="text-sm font-bold text-slate-900">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* SOLUTION SIDE */}
            <div className="space-y-6">
              {/* Solution Header */}
              <div className="text-center">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white rounded-2xl shadow-2xl mb-6">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <span className="font-bold text-lg">Moderne Spanndecken</span>
                </div>
              </div>

              {/* Solution Cards */}
              <div className="space-y-4">
                {[
                  {
                    icon: (
                      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                      </svg>
                    ),
                    title: 'Fertig in 6-8 Stunden',
                    desc: 'Morgens beginnen, abends fertig. Keine Vorbereitung, kein Ausräumen. Alle Makel verschwinden sofort unter der neuen Decke.',
                    badge: '1 Tag'
                  },
                  {
                    icon: (
                      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.232 3.298-1.537 3.298H19c-.414 0-.808.202-1.03.542l-.22.346a2.25 2.25 0 01-1.91 1.058h-7.68a2.25 2.25 0 01-1.91-1.058l-.22-.346A1.25 1.25 0 004 19.5h-.765c-1.77 0-2.77-2.066-1.537-3.298L3.1 14.8" />
                      </svg>
                    ),
                    title: '100% Staubfrei',
                    desc: 'Keine Schleif-Orgien, kein Putzstaub in allen Ecken. Saubere Montage – Ihre Möbel bleiben stehen, Ihr Leben geht weiter.',
                    badge: 'Sauber'
                  },
                  {
                    icon: (
                      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                      </svg>
                    ),
                    title: 'Design ohne Grenzen',
                    desc: 'Über 200 Farben, LED-Integration, Sternenhimmel, Lichtdecken – Ihre Vision wird Realität. Was früher unmöglich war, ist jetzt Standard.',
                    badge: '200+ Optionen'
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-xl border-2 border-cyan-200 hover:border-cyan-400 transition-all duration-200 ease-out hover:shadow-2xl group">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center text-cyan-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                          <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white text-xs font-bold rounded-lg">{item.badge}</span>
                    </div>
                        <p className="text-sm text-slate-700 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Solution Summary */}
              <div className="relative">
                {/* Arrow Divider */}
                <div className="flex justify-center mb-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white rounded-full text-sm font-bold shadow-xl">
                    <span>Die smarte Alternative</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      ),
                      label: 'Blitzschnell'
                    },
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ),
                      label: '100% Sauber'
                    },
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      ),
                      label: 'Vielseitig'
                    },
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      ),
                      label: 'Langlebig'
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-white border-2 border-cyan-300 rounded-xl shadow-lg">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 text-white flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <span className="text-sm font-bold text-slate-900">{item.label}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href="/leistungen"
                  className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 ease-out text-sm shadow-xl"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                  Alle Möglichkeiten entdecken
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Professional & Modern */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header with Stats */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-100 to-blue-100 border-2 border-cyan-200 rounded-xl mb-6 shadow-lg">
              <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-bold text-cyan-700">Geprüfte Qualität</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Die Vorteile moderner{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600">
                Spanndecken
              </span>
            </h2>
            
            <p className="text-xl text-slate-700 max-w-3xl mx-auto mb-12 leading-relaxed">
              Entdecken Sie, warum Spanndecken die zeitgemäße Alternative zur klassischen Deckenrenovierung sind
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { number: '6-8h', label: 'Montagezeit' },
                { number: '10 Jahre', label: 'Garantie' },
                { number: '100%', label: 'Staubfrei' },
                { number: '200+', label: 'Farben & Designs' },
              ].map((stat, i) => (
                <div key={i} className="bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 rounded-2xl p-6 border-2 border-cyan-200 shadow-lg">
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 mb-2">{stat.number}</div>
                  <div className="text-sm text-slate-700 font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Grid - 4 Main Benefits */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Express-Montage ohne Chaos',
                subtitle: 'In 6-8 Stunden fertig',
                desc: 'Morgens beginnen wir, abends haben Sie Ihre neue Decke. Keine tagelange Baustelle, kein Staub, keine Vorbereitung nötig. Ihre Möbel bleiben stehen, Ihr Alltag läuft weiter.',
                features: ['Keine Vorbereitung nötig', '100% staubfrei', 'Sofort nutzbar'],
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Transparente Festpreise',
                subtitle: 'Keine versteckten Kosten',
                desc: 'Sie erhalten ein verbindliches Angebot mit allen Positionen. Material, Montage, Anfahrt – alles inklusive. Was im Angebot steht, wird auch bezahlt. Keine Nachforderungen.',
                features: ['Festpreis garantiert', 'Alle Kosten transparent', 'Ratenzahlung möglich'],
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: 'Premium-Qualität mit Garantie',
                subtitle: '10 Jahre Herstellergarantie',
                desc: 'Geprüfte Materialien, zertifizierte Montage und 10 Jahre Garantie auf alles. Ihre Spanndecke bleibt über Jahre formstabil, farbecht und makellos – darauf geben wir Ihnen unser Wort.',
                features: ['Zertifizierte Qualität', '10 Jahre Garantie', 'Langlebig & wartungsfrei'],
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                ),
                title: 'Unbegrenzte Gestaltungsfreiheit',
                subtitle: '200+ Farben & LED-Integration',
                desc: 'Matt, Satin oder Hochglanz. Über 200 Farben zur Auswahl. LED-Beleuchtung direkt integriert. Sternenhimmel, Lichtdecken, Fotodruck – alles möglich. Ihre Vision wird Realität.',
                features: ['200+ Farboptionen', 'LED-Integration', 'Individuelle Designs'],
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="group"
              >
                <div className="h-full bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-cyan-400 transition-all duration-200 ease-out hover:shadow-2xl hover:shadow-cyan-200/50">
                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 text-white flex items-center justify-center flex-shrink-0 shadow-xl">
                      {benefit.icon}
                </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-1">
                    {benefit.title}
                  </h3>
                      <p className="text-sm font-bold text-cyan-600">
                        {benefit.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-700 leading-relaxed mb-6">
                    {benefit.desc}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2">
                    {benefit.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-900 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Benefits - Compact */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>,
                title: 'Energieeffizient',
                desc: 'Natürliche Dämmwirkung senkt Heizkosten nachweislich',
              },
              {
                icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>,
                title: 'Schalloptimiert',
                desc: 'Verbesserte Raumakustik durch spezielle Oberflächenstruktur',
              },
              {
                icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
                title: 'Wasserdicht',
                desc: 'Bis zu 100L/m² Wasserschutz – ideal für Feuchträume',
              },
            ].map((extra, i) => (
              <div key={i} className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border-2 border-cyan-200">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-cyan-600 mb-4 shadow-md">
                  {extra.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{extra.title}</h4>
                <p className="text-sm text-slate-700">{extra.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Premium Design */}
      <section className="py-20 px-6 bg-gradient-to-br from-cyan-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white border-2 border-cyan-200 rounded-xl mb-6 shadow-lg">
              <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              <span className="text-sm font-bold text-cyan-700">Unser bewährter Prozess</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600">5 Schritten</span> zu Ihrer Traumdecke
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Vom ersten Kontakt bis zur fertigen Spanndecke – transparent, planbar und ohne böse Überraschungen
            </p>
          </div>

          <div>
            {/* First 3 cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            {[
              {
                step: '01',
                title: 'Erstgespräch',
                time: '15 Min',
                  desc: 'Telefonisch oder per E-Mail besprechen wir Ihre Wünsche und beantworten erste Fragen.',
                color: 'from-cyan-500 to-cyan-600',
              },
              {
                step: '02',
                title: 'Vor-Ort-Termin',
                time: '45 Min',
                  desc: 'Wir vermessen Ihre Räume und besprechen Details wie Farbe, Oberfläche und Beleuchtung.',
                color: 'from-blue-500 to-blue-600',
              },
              {
                step: '03',
                title: 'Festpreis-Angebot',
                time: '24 Std',
                  desc: 'Sie erhalten ein transparentes Angebot ohne versteckte Kosten – alles inklusive.',
                color: 'from-purple-500 to-purple-600',
              },
              ].map((process, index) => (
                <div key={index} className="bg-white rounded-xl p-5 shadow-lg border-2 border-slate-200 hover:border-cyan-400 transition-all duration-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${process.color} text-white flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <span className="text-xl font-bold">{process.step}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900">{process.title}</h3>
                      <span className={`text-xs font-bold bg-gradient-to-r ${process.color} bg-clip-text text-transparent`}>
                        {process.time}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">{process.desc}</p>
                </div>
              ))}
            </div>

            {/* Last 2 cards centered */}
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {[
              {
                step: '04',
                title: 'Produktion',
                time: '1-2 Wochen',
                  desc: 'Ihre Spanndecke wird millimetergenau und individuell mit Premium-Materialien gefertigt.',
                color: 'from-indigo-500 to-indigo-600',
              },
              {
                step: '05',
                title: 'Montage & Fertigstellung',
                time: '6-8 Std',
                  desc: 'Wir montieren Ihre Decke in 6-8 Stunden – staubfrei, leise und sofort nutzbar.',
                color: 'from-violet-500 to-violet-600',
              },
            ].map((process, index) => (
                <div key={index} className="bg-white rounded-xl p-5 shadow-lg border-2 border-slate-200 hover:border-cyan-400 transition-all duration-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${process.color} text-white flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <span className="text-xl font-bold">{process.step}</span>
                  </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900">{process.title}</h3>
                      <span className={`text-xs font-bold bg-gradient-to-r ${process.color} bg-clip-text text-transparent`}>
                          {process.time}
                        </span>
                      </div>
                </div>
                  <p className="text-sm text-slate-700 leading-relaxed">{process.desc}</p>
                </div>
              ))}
              </div>
          </div>

          {/* CTA Button */}
          <div className="mt-16 text-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-bold text-lg rounded-xl hover:shadow-2xl transition-all duration-200 ease-out hover:scale-105 shadow-xl"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Jetzt kostenlosen Beratungstermin vereinbaren
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
