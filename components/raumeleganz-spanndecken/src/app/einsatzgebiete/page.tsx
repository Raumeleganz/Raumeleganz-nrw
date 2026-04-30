'use client';

import Link from 'next/link';
import { getAllCities } from '@/data/cities.generated';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function EinsatzgebietePage() {
  const cities = getAllCities();
  const [searchTerm, setSearchTerm] = useState('');
  
  // Sortiere Städte alphabetisch
  const sortedCities = [...cities].sort((a, b) => a.name.localeCompare(b.name));
  
  // Filter Cities
  const filteredCities = sortedCities.filter(city => 
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Gruppiere Städte nach Anfangsbuchstaben
  const groupedCities = filteredCities.reduce((acc, city) => {
    const firstLetter = city.name[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(city);
    return acc;
  }, {} as Record<string, typeof filteredCities>);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Premium Design */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-300 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-300 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border-2 border-slate-200 shadow-lg mb-6">
              <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm font-bold text-slate-900">Über 90 Städte in NRW</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Spanndecken
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600">
                direkt bei Ihnen vor Ort
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-slate-700 leading-relaxed mb-12 max-w-3xl mx-auto">
              Von Köln bis Dortmund, von Düsseldorf bis Essen – wir sind überall in Nordrhein-Westfalen für Sie da. 
              Mit <strong className="text-cyan-700">regionalen Teams</strong>, kurzen Anfahrtswegen und persönlicher Betreuung direkt in Ihrer Stadt.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ihre Stadt suchen..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 pl-14 bg-white border-2 border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-cyan-200 focus:border-cyan-500 transition-all text-lg shadow-xl"
                />
                <svg className="w-6 h-6 text-cyan-600 absolute left-5 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { 
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>, 
                  text: 'Regionale Teams vor Ort' 
                },
                { 
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>, 
                  text: 'Schnelle Terminvergabe' 
                },
                { 
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>, 
                  text: 'Kostenlose Beratung' 
                },
                { 
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>, 
                  text: 'Kurze Anfahrtswege' 
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border-2 border-slate-200 shadow-md hover:border-cyan-400 hover:shadow-lg transition-all duration-200">
                  <span className="text-cyan-600">{item.icon}</span>
                  <span className="text-sm font-bold text-slate-900">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Warum Regional Section - Komplett neuer Content */}
      <section className="py-24 px-6 bg-gradient-to-br from-white via-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border-2 border-slate-200 shadow-md mb-6">
              <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-bold text-slate-900">Regional · Persönlich · Zuverlässig</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Ihr{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600">
                Spanndecken-Partner
              </span>
              {' '}aus der Nachbarschaft
            </h2>
            <p className="text-lg sm:text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
              Vergessen Sie unpersönliche Hotlines und endlose Warteschleifen. Bei uns sprechen Sie mit <strong className="text-cyan-700">echten Menschen aus Ihrer Region</strong>, 
              die wissen, wo Ihre Stadt ist, wie die Parkplatzsituation aussieht und welche Besonderheiten Ihr Altbau hat.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left: Why Local Matters - Emotional Content */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Mehr als nur eine neue Decke</h3>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl border-2 border-cyan-200 shadow-lg">
                    <p className="text-slate-700 leading-relaxed mb-4">
                      <strong className="text-slate-900 text-lg">Stellen Sie sich vor:</strong> Sie kommen nach Hause und blicken an die Decke – 
                      kein vergilbter Putz mehr, keine Risse, keine Spuren der Zeit. Stattdessen eine makellose, moderne Oberfläche, 
                      die sanft im LED-Licht schimmert.
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                      <strong className="text-cyan-700">Genau dieses Gefühl möchten wir Ihnen geben.</strong> Eine Spanndecke ist nicht nur eine 
                      technische Lösung – sie ist der erste Schritt zu einem Zuhause, in dem Sie sich wieder rundum wohlfühlen.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border-2 border-blue-200 shadow-lg">
                    <h4 className="font-bold text-slate-900 text-lg mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Warum unsere Kunden uns weiterempfehlen
                    </h4>
                    <ul className="space-y-3 text-slate-700">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        <span><strong className="text-slate-900">Keine anonymen Großfirmen:</strong> Bei uns kennen Sie Ihren Ansprechpartner persönlich</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        <span><strong className="text-slate-900">Echte Erfahrung:</strong> Unsere Monteure kennen jede Herausforderung – von Altbau bis Neubau</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        <span><strong className="text-slate-900">Schnell und stressfrei:</strong> Montage in 6-8 Stunden, komplett staubfrei</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        <span><strong className="text-slate-900">Langfristige Betreuung:</strong> Auch nach der Montage sind wir für Sie da</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border-2 border-purple-200 shadow-lg">
                    <p className="text-slate-700 leading-relaxed">
                      <strong className="text-purple-700 text-lg block mb-3">Von der ersten Idee bis zur fertigen Decke:</strong>
                      Wir begleiten Sie durch jeden Schritt – von der kostenlosen Beratung vor Ort über die transparente Kalkulation 
                      bis zur professionellen Montage. <strong className="text-slate-900">Kein Stress, keine Überraschungen, nur Handwerkskunst, 
                      auf die Sie sich verlassen können.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Why Regional Matters */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 p-8 sm:p-10 rounded-3xl shadow-2xl text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">Der Regional-Vorteil</h3>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-cyan-400 font-bold text-lg">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">Kennen die Gegend</h4>
                      <p className="text-white/80 text-sm leading-relaxed">
                        Ob enge Altstadtgassen in Köln oder Parkhäuser in Dortmund – unsere Teams kennen jeden Winkel Ihrer Stadt 
                        und wissen, wie sie ihr Material am besten zu Ihnen bekommen.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-400 font-bold text-lg">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">Verstehen Ihre Situation</h4>
                      <p className="text-white/80 text-sm leading-relaxed">
                        Denkmalschutz im Bonner Villenviertel? Hellhörige Mietwohnung in Bochum? Unser Team kennt die regionalen Besonderheiten 
                        und hat die passenden Lösungen parat.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-400 font-bold text-lg">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">Sind auch danach für Sie da</h4>
                      <p className="text-white/80 text-sm leading-relaxed">
                        Kein Call-Center in einem anderen Bundesland – Ihr Monteur wohnt nur 15 Minuten entfernt. 
                        Falls Sie Jahre später mal eine Frage haben, ist er schnell wieder bei Ihnen.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-cyan-400 mb-1">12</div>
                      <div className="text-xs text-white/70 font-semibold">Regionale Teams</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-blue-400 mb-1">90+</div>
                      <div className="text-xs text-white/70 font-semibold">Städte in NRW</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-purple-400 mb-1">24/7</div>
                      <div className="text-xs text-white/70 font-semibold">Erreichbar</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comparison Card */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-slate-200 shadow-xl">
                <h4 className="text-xl font-bold text-slate-900 mb-6">Regional vs. Überregional</h4>
                
                <div className="space-y-4">
                  {[
                    { 
                      label: 'Terminfindung', 
                      regional: 'Binnen 2 Tagen', 
                      other: '2-3 Wochen Wartezeit' 
                    },
                    { 
                      label: 'Ansprechpartner', 
                      regional: 'Ihr Monteur direkt', 
                      other: 'Anonymes Call-Center' 
                    },
                    { 
                      label: 'Ortskenntnisse', 
                      regional: 'Kennt jede Straße', 
                      other: 'Muss Google Maps nutzen' 
                    },
                    { 
                      label: 'Nachbetreuung', 
                      regional: '15 Min entfernt', 
                      other: 'Neue Firma beauftragen' 
                    },
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-3 gap-3 items-center text-sm">
                      <div className="font-bold text-slate-700">{row.label}</div>
                      <div className="text-center">
                        <span className="inline-block px-3 py-1 bg-cyan-50 text-cyan-700 rounded-lg border border-cyan-200 font-bold text-xs">
                          {row.regional}
                        </span>
                      </div>
                      <div className="text-center">
                        <span className="inline-block px-3 py-1 bg-slate-100 text-slate-500 rounded-lg border border-slate-200 text-xs">
                          {row.other}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Grid - Alphabetisch */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Alle {filteredCities.length} Städte im Überblick
            </h2>
            <p className="text-lg sm:text-xl text-slate-700">
              {searchTerm ? `Suchergebnisse für "${searchTerm}"` : 'Wählen Sie Ihre Stadt und entdecken Sie unsere Leistungen vor Ort'}
            </p>
          </div>

          {/* Alphabetische Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {Object.keys(groupedCities).sort().map((letter) => (
              <button
                key={letter}
                onClick={() => {
                  const element = document.getElementById(`letter-${letter}`);
                  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:text-white text-slate-700 font-bold transition-all duration-200"
              >
                {letter}
              </button>
            ))}
          </div>

          {/* Cities by Letter */}
          <div className="space-y-12">
            {Object.keys(groupedCities).sort().map((letter) => (
              <div key={letter} id={`letter-${letter}`} className="scroll-mt-24">
                <h3 className="text-3xl font-bold text-cyan-700 mb-6 pb-2 border-b-2 border-cyan-200">
                  {letter}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {groupedCities[letter].map((city) => (
                    <Link
                      key={city.slug}
                      href={`/einsatzgebiete/${city.slug}`}
                      className="group relative overflow-hidden bg-white rounded-xl border-2 border-slate-200 p-5 hover:border-cyan-400 transition-all duration-200 ease-out hover:shadow-xl hover:scale-[1.02]"
                    >
                      {/* Top Accent */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                      
                      {/* Location Icon */}
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                          <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>

                        <div className="flex-1 min-w-0">
                          {/* City Name */}
                          <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-cyan-700 transition-colors truncate">
                            {city.name}
                          </h4>

                          {/* Postal Code & District */}
                          <p className="text-sm text-slate-600 mb-2">
                            {city.postalCode}
                          </p>

                          {/* Arrow */}
                          <div className="flex items-center gap-1 text-cyan-600 font-bold text-sm group-hover:gap-2 transition-all duration-200">
                            <span>Mehr erfahren</span>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {filteredCities.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-slate-600">
                Keine Städte gefunden für "{searchTerm}". Versuchen Sie eine andere Suchanfrage.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Häufige Fragen zu unseren Einsatzgebieten
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Ist meine Stadt wirklich dabei?',
                a: 'Mit über 90 Städten in ganz NRW sind wir sehr gut aufgestellt. Nutzen Sie einfach unsere Suchfunktion oben oder scrollen Sie durch die Liste. Sollte Ihre Stadt nicht dabei sein, kontaktieren Sie uns – wir prüfen gerne, ob wir auch dort tätig werden können.'
              },
              {
                q: 'Fallen Anfahrtskosten an?',
                a: 'Für die kostenlose Erstberatung vor Ort berechnen wir keine Anfahrtskosten innerhalb unseres Einsatzgebietes. Bei der finalen Montage sind die Anfahrtskosten bereits im Festpreis enthalten – Sie zahlen nur, was im Angebot steht.'
              },
              {
                q: 'Wie schnell bekomme ich einen Termin?',
                a: 'Da wir regional aufgestellt sind, können wir sehr flexibel reagieren. In der Regel bekommen Sie innerhalb von 2-3 Werktagen einen Termin für die kostenlose Vor-Ort-Beratung. Die Montage selbst planen wir dann je nach Verfügbarkeit und Ihren Wünschen.'
              },
              {
                q: 'Arbeiten Sie auch außerhalb von NRW?',
                a: 'Unser Haupteinsatzgebiet ist Nordrhein-Westfalen. Für größere Projekte oder bei besonderen Anfragen sind wir aber auch bereit, über die Landesgrenzen hinaus tätig zu werden. Sprechen Sie uns einfach an!'
              },
              {
                q: 'Wer kommt zur Beratung – immer das gleiche Team?',
                a: 'Ja, wir arbeiten mit festen regionalen Teams. Das bedeutet: Der Monteur, der Sie berät, ist in der Regel auch bei der Montage dabei. So haben Sie einen direkten Ansprechpartner, der Ihr Projekt von Anfang bis Ende begleitet.'
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-2xl border-2 border-slate-200 overflow-hidden hover:border-cyan-400 hover:shadow-lg transition-all duration-200"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-bold text-slate-900 pr-4">
                    {faq.q}
                  </h3>
                  <svg
                    className="w-6 h-6 text-cyan-600 flex-shrink-0 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-slate-700 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Emotional */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 p-12 md:p-16 text-center shadow-2xl">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ihre Stadt ist dabei?
                <br />
                Dann los – wir freuen uns auf Sie!
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Buchen Sie jetzt Ihre kostenlose Vor-Ort-Beratung und lassen Sie sich von unseren regionalen Experten persönlich beraten. Unverbindlich, kompetent, direkt bei Ihnen zu Hause.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-50 transition-all duration-200 ease-out hover:scale-105 shadow-2xl"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Jetzt Beratungstermin buchen
                </Link>
                <Link
                  href="tel:+4921112345678"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-200 ease-out hover:scale-105"
                >
                  Direkt anrufen: 0211 123 456 78
                </Link>
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-white/90">
                <div className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Kostenlose Beratung</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Keine Anfahrtskosten</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Unverbindlich & persönlich</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
