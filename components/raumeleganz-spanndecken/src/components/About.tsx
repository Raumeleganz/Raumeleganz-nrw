'use client';

import Link from 'next/link';

export default function About() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border-2 border-slate-200 shadow-md mb-6">
            <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-bold text-slate-900">Wer wir wirklich sind</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Keine Werbeversprechen.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600">
              Echte Menschen.
            </span>
          </h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            Hinter jeder Spanndecke steht ein Mensch, der morgens mit Stolz zur Arbeit geht – nicht weil er muss, sondern weil er will.
          </p>
        </div>

        {/* Main Story Section */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl mb-20 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Founder Story */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-cyan-400 font-bold">Geschäftsführer</p>
                  <p className="text-2xl font-bold">Thomas Bergmann</p>
                </div>
              </div>

              <div className="relative pl-6 border-l-4 border-cyan-400">
                <p className="text-lg leading-relaxed mb-4">
                  "Als ich 2009 in meiner Garage angefangen habe, wusste ich eins: <strong className="text-cyan-400">Ich will keine Firma sein, die Nummern montiert</strong>. 
                  Ich will eine Firma sein, bei der jeder Kunde das Gefühl hat, dass ihm jemand wirklich zuhört."
                </p>
                <p className="text-white/80 leading-relaxed">
                  Was als Ein-Mann-Show begann, ist heute ein Team von 12 Menschen – Väter, Mütter, Handwerker mit Herzblut. 
                  Jeder von ihnen hätte bei großen Konzernen mehr verdient. Aber sie bleiben, weil sie hier etwas spüren, 
                  das in der Baubranche selten geworden ist: <strong className="text-cyan-400">Echte Wertschätzung.</strong>
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                {[
                  { number: '16+', label: 'Jahre Erfahrung', icon: '🎯' },
                  { number: '800+', label: 'Projekte', icon: '⚡' },
                  { number: '12', label: 'Team-Mitglieder', icon: '👥' },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                    <div className="text-3xl mb-1">{stat.icon}</div>
                    <div className="text-2xl font-bold text-cyan-400 mb-1">{stat.number}</div>
                    <div className="text-xs text-white/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Team Values */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Was uns anders macht</h3>
              
              {[
                {
                  title: 'Kein Akkord, kein Druck',
                  text: 'Unsere Monteure werden nicht nach Geschwindigkeit bezahlt, sondern nach Qualität. Das Ergebnis? Kein Stress, keine Fehler, glückliche Kunden.',
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  title: 'Ehrliche Beratung',
                  text: 'Wir verkaufen Ihnen nicht die teuerste Lösung, sondern die beste für Ihre Situation. Manchmal ist das eine 2.000€ Spanndecke – manchmal reicht auch etwas Einfacheres.',
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  title: 'Familie geht vor',
                  text: 'Krankes Kind zu Hause? Schulferien? Bei uns darf Familie Priorität haben. Unsere Monteure sind ausgeruht, motiviert – und das merken Sie am Ergebnis.',
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  ),
                },
                {
                  title: 'Garantie ohne Kleingedrucktes',
                  text: '10 Jahre Garantie heißt bei uns 10 Jahre Garantie. Punkt. Keine Ausreden, keine Diskussionen. Wenn etwas nicht stimmt, machen wir es neu.',
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                },
              ].map((value, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-200">
                  <div className="flex-shrink-0 w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{value.title}</h4>
                    <p className="text-sm text-white/70 leading-relaxed">{value.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section - Premium */}
        <div className="text-center bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 rounded-3xl p-12 sm:p-16 shadow-2xl text-white relative overflow-hidden">
          {/* Background Decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full opacity-10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full opacity-10 blur-3xl" />

          <div className="relative max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="text-sm font-bold">Lassen Sie uns reden</span>
            </div>
            
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              Bereit für ein ehrliches Gespräch?
            </h3>
            <p className="text-lg text-white/90 mb-10">
              Kein Verkaufsdruck, keine Tricksereien. Nur ein Gespräch zwischen Menschen, 
              die gemeinsam die beste Lösung für Ihre Räume finden wollen.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 font-bold text-lg rounded-xl shadow-2xl hover:bg-slate-50 transition-all duration-200 hover:scale-[1.02]"
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
                Kontakt aufnehmen
              </Link>

              <Link
                href="tel:+4921234567890"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-200 hover:scale-[1.02]"
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
                Jetzt anrufen
              </Link>
            </div>

            {/* Trust Points */}
            <div className="flex flex-wrap justify-center gap-6 pt-8 border-t border-white/20">
              {[
                { icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ), text: 'Kostenlose Beratung' },
                { icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ), text: 'Termin binnen 48h' },
                { icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ), text: '10 Jahre Garantie' },
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-2 text-white/90">
                  {point.icon}
                  <span className="text-sm font-semibold">{point.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

