import type { Metadata } from 'next';
import About from '@/components/About';

export const metadata: Metadata = {
  title: 'Über uns | Raumeleganz Spanndecken',
  description: 'Die Menschen hinter Raumeleganz: Erfahren Sie, wer wir sind, wofür wir stehen und warum hunderte Familien in NRW uns vertrauen.',
};

export default function UeberUnsPage() {
  return (
    <div className="relative min-h-screen">
      {/* Premium Page Hero */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-300 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 rounded-full opacity-20 blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border-2 border-slate-200 shadow-md mb-6">
            <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="text-sm font-bold text-slate-900">Die Menschen hinter Raumeleganz</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Mehr als nur{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600">
              Handwerk
            </span>
            <br />
            Eine Herzensangelegenheit
          </h1>
          <p className="text-lg sm:text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
            Wir sind <strong className="text-cyan-700">keine anonyme Firma mit Verkaufsnummern</strong>. Wir sind echte Menschen aus NRW, 
            die jeden Morgen mit dem Anspruch aufstehen, Ihren Räumen neues Leben einzuhauchen. Lernen Sie uns kennen!
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {[
              { icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ), text: 'Zertifizierter Meisterbetrieb', gradient: 'from-cyan-500 to-blue-600' },
              { icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ), text: 'Familiengeführt', gradient: 'from-blue-500 to-purple-600' },
              { icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ), text: 'Regional in ganz NRW', gradient: 'from-purple-500 to-pink-600' },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 px-5 py-3 bg-white rounded-xl border-2 border-slate-200 shadow-lg">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${badge.gradient} flex items-center justify-center text-white`}>
                  {badge.icon}
                </div>
                <span className="text-sm font-bold text-slate-900">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Component */}
      <About />

      {/* Timeline Section - Komplett neu */}
      <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border-2 border-slate-200 shadow-md mb-6">
              <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-bold text-slate-900">Unsere Reise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Von der{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600">
                ersten Idee
              </span>
              {' '}bis heute
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              Jede große Geschichte beginnt mit einem ersten Schritt. Hier ist unsere – ehrlich, ungeschönt und mit all den Höhen und Tiefen, die dazugehören.
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                year: '2009',
                title: 'Der Anfang in einer Garage',
                story: 'Was heute ein etabliertes Unternehmen ist, begann in einer 40m² Garage in Düsseldorf. Mit einem gebrauchten Transporter, drei Werkzeugkoffern und der Vision, Spanndecken anders zu machen – persönlicher, hochwertiger, ehrlicher.',
                gradient: 'from-cyan-500 to-blue-600',
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
              {
                year: '2014',
                title: 'Der erste Mitarbeiter',
                story: 'Marco, unser erster Angestellter, arbeitet heute noch bei uns. Damals waren wir zu zweit, heute sind wir stolz auf unser 12-köpfiges Team. Jeder mit seiner eigenen Geschichte, aber alle mit demselben Ziel: perfekte Arbeit abliefern.',
                gradient: 'from-blue-500 to-purple-600',
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
              {
                year: '2017',
                title: 'Die härteste Lektion',
                story: 'Ein Großprojekt ging schief – nicht wegen unserer Arbeit, sondern wegen eines zahlungsunfähigen Kunden. 22.000€ Verlust, fast das Aus. Aber wir lernten, wuchsen daran und führten strengere Prozesse ein. Heute sind wir stärker als je zuvor.',
                gradient: 'from-purple-500 to-pink-600',
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                ),
              },
              {
                year: '2025',
                title: 'Heute: Unsere Verantwortung',
                story: 'Über 800 Projekte, 12 Mitarbeiter, hunderte zufriedene Familien. Aber die Zahlen sind nicht das, woran wir uns messen. Es sind die Dankesnachrichten, die Weiterempfehlungen, die Kunden, die sagen: "Das war die beste Entscheidung." Das ist unser Erfolg.',
                gradient: 'from-cyan-500 to-cyan-600',
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div key={i} className="group bg-white rounded-3xl border-2 border-slate-200 p-8 shadow-lg hover:shadow-2xl hover:border-cyan-400 transition-all duration-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {item.year}
                  </div>
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} bg-opacity-10 flex items-center justify-center text-cyan-600 group-hover:scale-110 transition-transform duration-200`}>
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-700 leading-relaxed">{item.story}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

