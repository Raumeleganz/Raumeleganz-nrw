'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function MattContent() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    {
      src: '/images/satin-10.webp',
      alt: 'Satin-Spanndecke mit perfekter Lichtverteilung und zeitloser Eleganz',
      title: 'Zeitlose Eleganz',
      subtitle: 'Dezent, aber nicht langweilig',
      location: 'Referenzprojekt NRW',
      details: 'Matt reinweiß mit Spots',
      result: 'Familie Schmidt: "Sieht aus wie neu verputzt – aber ohne den Stress"',
    },
    {
      src: '/images/lack-06.webp',
      alt: 'Spiegelglatte Lackspanndecke mit makelloser Premium-Oberfläche',
      title: 'Ruhe pur',
      subtitle: 'Keine Ablenkung, nur Entspannung',
      location: 'Referenzprojekt NRW',
      details: 'Matt cremeweiß ohne Beleuchtung',
      result: 'Frau Bauer: "Endlich kann ich wieder durchschlafen"',
    },
    {
      src: '/images/lack-07.webp',
      alt: 'Hochglanz Lackspanndecke im Badezimmer mit Marmor und LED-Beleuchtung',
      title: 'Altbau-Charme bewahrt',
      subtitle: 'Passt perfekt zu historischen Räumen',
      location: 'Referenzprojekt NRW',
      details: 'Matt warmweiß',
      result: 'Herr Wagner: "Sieht aus wie traditionell verputzt – keiner merkt den Unterschied"',
    },
    {
      src: '/images/lack-08.webp',
      alt: 'Lackspanndecke mit LED-Spots und brillantem Spiegeleffekt',
      title: 'Homeoffice ohne Ablenkung',
      subtitle: 'Keine Reflexionen am Bildschirm',
      location: 'Referenzprojekt NRW',
      details: 'Matt hellgrau mit LED-Panel',
      result: 'Designer Klein: "Perfekt zum Arbeiten – keinerlei Störungen"',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Premium Hero */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/leistungen" className="inline-flex items-center gap-2 text-slate-600 hover:text-cyan-600 mb-6 transition-colors duration-200 font-semibold">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Zurück zu Leistungen
          </Link>
          
          <div className="flex items-center gap-6 mb-8">
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-500 via-slate-600 to-slate-700 flex items-center justify-center shadow-xl">
                <svg width="48" height="48" viewBox="0 0 80 80" fill="none">
                  <rect x="10" y="20" width="60" height="40" rx="4" fill="white" opacity="0.9"/>
                  <path d="M15 20L15 15M40 20L40 15M65 20L65 15" stroke="white" strokeWidth="3" strokeLinecap="round" />
                  <path d="M15 60L15 65M40 60L40 65M65 60L65 65" stroke="white" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-2">Matte Spanndecken</h1>
              <p className="text-cyan-700 font-bold text-xl sm:text-2xl">Dezent, zeitlos, für immer schön</p>
            </div>
          </div>

          <div className="max-w-3xl">
            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed mb-6">
              Keine Reflexionen. Keine Experimente. Keine Trends, die nächstes Jahr out sind. Nur eine perfekte, 
              matte Decke, die sich zurücknimmt und deinen Raum strahlen lässt. <strong className="text-cyan-700">Das ist Matt – der Klassiker.</strong>
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-slate-600 to-slate-700 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-200">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
                Zeitlos schön
              </div>
              <div className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-xl text-slate-900 font-bold border-2 border-slate-200 shadow-lg hover:border-cyan-400 hover:shadow-xl transition-all duration-200">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Keine Reflexionen
              </div>
              <div className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-xl text-slate-900 font-bold border-2 border-slate-200 shadow-lg hover:border-cyan-400 hover:shadow-xl transition-all duration-200">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                </svg>
                Für jeden Raum
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optimierter Image Slider */}
      <section className="relative bg-white py-12">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative h-[400px] md:h-[550px] rounded-2xl overflow-hidden shadow-2xl">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
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
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                  {/* Top Info */}
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-white rounded-full text-slate-900 text-xs font-bold border-2 border-slate-200 shadow-lg">
                      {index + 1}/{images.length}
                    </span>
                    <span className="px-3 py-1.5 bg-gradient-to-r from-slate-600 to-slate-700 backdrop-blur-sm rounded-full text-white text-xs font-bold flex items-center gap-1.5 shadow-lg">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                      {image.location}
                    </span>
                  </div>

                  {/* Bottom Info */}
                  <div>
                    <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                      {image.title}
                    </h3>
                    <p className="text-white/90 text-base md:text-lg mb-3">
                      {image.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-lg text-white text-sm border border-white/30">
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
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-white w-8 shadow-lg'
                      : 'bg-white/60 hover:bg-white w-2'
                  }`}
                  aria-label={`Bild ${index + 1} anzeigen`}
                />
              ))}
            </div>

            {/* Arrow Navigation */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg z-20"
              aria-label="Vorheriges Bild"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % images.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg z-20"
              aria-label="Nächstes Bild"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
              {/* Emotionale Story */}
              <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-slate-200 shadow-xl">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Warum Matt nie aus der Mode kommt</h2>
                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                  Trends kommen und gehen. Hochglanz hatte seine Zeit. Satin ist gerade beliebt. Aber Matt? 
                  <strong className="text-cyan-700"> Matt ist der Klassiker, der immer funktioniert.</strong>
                </p>
                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                  Eine matte Spanndecke sieht aus wie eine perfekt verputzte, frisch gestrichene Decke – nur dass sie <strong>nie vergilbt</strong>, 
                  <strong> nie Risse bekommt</strong> und <strong>nie neu gestrichen werden muss</strong>. Du hast das Gefühl einer traditionellen Decke, 
                  aber mit allen Vorteilen moderner Technik.
                </p>
                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                  Besonders in <strong className="text-cyan-700">Altbauten</strong> spielt Matt seine Stärken aus. Die Optik passt perfekt zu Stuck, Holzböden und klassischer Einrichtung. 
                  Niemand erkennt, dass es eine Spanndecke ist – und das ist auch gut so.
                </p>

                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 md:p-8 border-2 border-cyan-200 my-8 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 mb-4 text-xl">Das sagen unsere Kunden:</h4>
                      <div className="space-y-3">
                        <p className="text-slate-700 leading-relaxed italic flex items-start gap-2">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-cyan-600 flex-shrink-0 mt-1">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                          </svg>
                          <span>"Keiner glaubt, dass das eine Spanndecke ist – sieht aus wie frisch verputzt."</span>
                        </p>
                        <p className="text-slate-700 leading-relaxed italic flex items-start gap-2">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-cyan-600 flex-shrink-0 mt-1">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                          </svg>
                          <span>"Endlich keine Reflexionen mehr am TV. Perfekt fürs Wohnzimmer."</span>
                        </p>
                        <p className="text-slate-700 leading-relaxed italic flex items-start gap-2">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-cyan-600 flex-shrink-0 mt-1">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                          </svg>
                          <span>"Zeitlos – auch in 10 Jahren wird Matt noch gut aussehen."</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Optionen - Große Cards mit Gradients */}
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 md:p-12 border-2 border-slate-200 shadow-xl">
                <h3 className="text-3xl font-bold text-slate-900 mb-8">Wann Matt die beste Wahl ist</h3>
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 border-2 border-slate-200 hover:border-cyan-400 transition-all duration-200 hover:shadow-xl">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-slate-500 to-slate-700 rounded-2xl flex items-center justify-center shadow-lg">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                        </svg>
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-2xl font-bold text-slate-900 mb-3">Altbau & Klassische Räume</h4>
                        <p className="text-slate-700 leading-relaxed mb-4 text-lg">
                          In Altbauten wirkt Matt am natürlichsten. Stuck an den Wänden? Holzdielen? Hohe Zimmer? 
                          Matt fügt sich nahtlos ein. Es sieht aus wie eine traditionelle Decke – nur dass es <strong>nie Risse bekommt oder vergilbt</strong>.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1.5 bg-gradient-to-r from-slate-100 to-slate-200 rounded-lg text-sm font-bold text-slate-700 border border-slate-300">Authentisch</span>
                          <span className="px-3 py-1.5 bg-gradient-to-r from-slate-100 to-slate-200 rounded-lg text-sm font-bold text-slate-700 border border-slate-300">Traditionell</span>
                          <span className="px-3 py-1.5 bg-gradient-to-r from-slate-100 to-slate-200 rounded-lg text-sm font-bold text-slate-700 border border-slate-300">Zeitlos</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-white to-cyan-50 rounded-2xl p-8 border-2 border-cyan-200 hover:border-cyan-400 transition-all duration-200 hover:shadow-xl">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="7" width="20" height="14" rx="2"/>
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                        </svg>
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-2xl font-bold text-slate-900 mb-3">Homeoffice & Arbeitszimmer</h4>
                        <p className="text-slate-700 leading-relaxed mb-4 text-lg">
                          Reflexionen stören beim Arbeiten. Eine matte Decke reflektiert kein Licht – weder vom Bildschirm noch vom Fenster. 
                          Du kannst dich <strong>besser konzentrieren</strong>, und deine Zoom-Calls sehen professioneller aus.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1.5 bg-gradient-to-r from-cyan-100 to-cyan-200 rounded-lg text-sm font-bold text-cyan-700 border border-cyan-300">Keine Reflexionen</span>
                          <span className="px-3 py-1.5 bg-gradient-to-r from-cyan-100 to-cyan-200 rounded-lg text-sm font-bold text-cyan-700 border border-cyan-300">Konzentriert arbeiten</span>
                          <span className="px-3 py-1.5 bg-gradient-to-r from-cyan-100 to-cyan-200 rounded-lg text-sm font-bold text-cyan-700 border border-cyan-300">Professionell</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-white to-purple-50 rounded-2xl p-8 border-2 border-purple-200 hover:border-purple-400 transition-all duration-200 hover:shadow-xl">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                          <circle cx="12" cy="7" r="4"/>
                        </svg>
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-2xl font-bold text-slate-900 mb-3">Schlafzimmer (Ruhig & Entspannt)</h4>
                        <p className="text-slate-700 leading-relaxed mb-4 text-lg">
                          Keine Lichtreflexionen, die dich beim Einschlafen stören. Keine Spiegelungen, die dich morgens wecken. 
                          Matt ist die <strong>ruhigste, entspannteste Oberfläche</strong> – perfekt für Räume, in denen du abschalten willst.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1.5 bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg text-sm font-bold text-purple-700 border border-purple-300">Beruhigend</span>
                          <span className="px-3 py-1.5 bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg text-sm font-bold text-purple-700 border border-purple-300">Keine Ablenkung</span>
                          <span className="px-3 py-1.5 bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg text-sm font-bold text-purple-700 border border-purple-300">Entspannend</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Matt vs Andere */}
              <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-slate-200 shadow-xl">
                <h3 className="text-3xl font-bold text-slate-900 mb-8">Ehrlicher Vergleich: Wann Matt, wann nicht?</h3>
                <div className="grid gap-6">
                  <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200">
                    <div className="flex items-start gap-4 mb-4">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-green-600 flex-shrink-0">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <h4 className="text-2xl font-bold text-slate-900">Matt ist perfekt, wenn...</h4>
                    </div>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex gap-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-600 flex-shrink-0 mt-1">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        Du zeitlose Optik willst, die nie aus der Mode kommt
                      </li>
                      <li className="flex gap-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-600 flex-shrink-0 mt-1">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        Du in einem Altbau wohnst und die klassische Optik beibehalten willst
                      </li>
                      <li className="flex gap-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-600 flex-shrink-0 mt-1">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        Du keine Reflexionen willst (Homeoffice, TV-Zimmer)
                      </li>
                      <li className="flex gap-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-600 flex-shrink-0 mt-1">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        Du eine beruhigende Atmosphäre brauchst (Schlafzimmer)
                      </li>
                      <li className="flex gap-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-600 flex-shrink-0 mt-1">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        Du die günstigste Option suchst (Matt ist 10-15% günstiger als Satin/Hochglanz)
                      </li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 rounded-2xl p-8 border-2 border-orange-200">
                    <div className="flex items-start gap-4 mb-4">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-600 flex-shrink-0">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="12" y1="8" x2="12" y2="12"/>
                        <line x1="12" y1="16" x2="12.01" y2="16"/>
                      </svg>
                      <h4 className="text-2xl font-bold text-slate-900">Matt ist nicht ideal, wenn...</h4>
                    </div>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex gap-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-600 flex-shrink-0 mt-1">
                          <line x1="18" y1="6" x2="6" y2="18"/>
                          <line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                        Du einen dunklen Raum optisch aufhellen willst (→ Hochglanz)
                      </li>
                      <li className="flex gap-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-600 flex-shrink-0 mt-1">
                          <line x1="18" y1="6" x2="6" y2="18"/>
                          <line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                        Du einen edleren Look suchst (→ Satin)
                      </li>
                      <li className="flex gap-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-600 flex-shrink-0 mt-1">
                          <line x1="18" y1="6" x2="6" y2="18"/>
                          <line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                        Du maximale Lichtreflektion brauchst (→ Hochglanz)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-8">Häufig gestellte Fragen</h3>
                <div className="space-y-6">
                  {[
                    {
                      q: 'Sieht Matt nicht "billig" aus im Vergleich zu Satin/Hochglanz?',
                      a: 'Nein – Matt ist nicht billig, sondern klassisch. Es wirkt wie eine perfekt verputzte Decke. Viele Menschen bevorzugen gerade diese dezente Optik. Matt ist nicht weniger hochwertig als die anderen, nur zurückhaltender im Design.'
                    },
                    {
                      q: 'Kann ich Matt auch in der Küche oder im Bad verwenden?',
                      a: 'Absolut! Matte Spanndecken sind genauso abwaschbar und feuchtraumgeeignet wie Satin oder Hochglanz. Der einzige Unterschied: Wenn du Fettspritzer hast, sieht man die auf Matt etwas schneller – aber einfach feucht abwischen und fertig.'
                    },
                    {
                      q: 'Ist Matt wirklich günstiger als Satin?',
                      a: 'Ja, etwa 10-15% günstiger. Für ein 20m² Wohnzimmer sparst du ca. 100-150€ im Vergleich zu Satin. Das Material kostet weniger, und die Montage ist etwas schneller, weil jede kleine Welle bei Hochglanz/Satin sichtbar wäre.'
                    },
                    {
                      q: 'Wird Matt im Laufe der Zeit vergilben?',
                      a: 'Nein. Anders als gestrichene Decken vergilbt Matt nicht. Das Material ist UV-beständig und behält seine Farbe. In 10 Jahren sieht die Decke noch genauso aus wie am ersten Tag – versprochen.'
                    },
                    {
                      q: 'Passt Matt zu LED-Beleuchtung?',
                      a: 'Ja, sehr gut! LED-Spots in matten Decken sind eine super Kombi. Das Licht wird nicht reflektiert, sondern weich gestreut – perfekt für eine angenehme Atmosphäre. Viele Homeoffice-Kunden schwören auf Matt + LED.'
                    },
                  ].map((faq, i) => (
                    <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-cyan-400 transition-all duration-200">
                      <h4 className="font-bold text-slate-900 text-lg mb-3">{faq.q}</h4>
                      <p className="text-slate-700 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-8">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 text-white rounded-2xl p-8 shadow-2xl sticky top-24">
                <div className="text-center mb-6">
                  <div className="inline-flex p-4 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Muster sehen?</h3>
                  <p className="mb-6 text-white/95 text-lg">
                    Wir zeigen dir <strong>Matt im Vergleich</strong> zu Satin & Hochglanz – dann entscheidest du.
                  </p>
                </div>
                <Link
                  href="/kontakt"
                  className="block w-full px-6 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-50 hover:scale-[1.02] transition-all duration-200 text-center shadow-lg mb-4"
                >
                  Jetzt Termin vereinbaren
                </Link>
                <a
                  href="tel:+4921234567890"
                  className="block w-full px-6 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/20 hover:scale-[1.02] transition-all duration-200 text-center"
                >
                  0212 / 34 567 890
                </a>
                <div className="mt-6 pt-6 border-t border-white/30 space-y-3 text-sm text-white/95">
                  <p className="flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Kostenloser Muster-Vergleich
                  </p>
                  <p className="flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Ehrliche Beratung
                  </p>
                  <p className="flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Festpreis-Garantie
                  </p>
                </div>
              </div>

              {/* Vorteile Box */}
              <div className="bg-slate-50 rounded-2xl p-8 border-2 border-slate-200 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Warum Matt?</h3>
                <div className="space-y-4">
                  {[
                    { title: 'Zeitlos & klassisch', desc: 'Nie aus der Mode' },
                    { title: 'Keine Reflexionen', desc: 'Perfekt für TV & Homeoffice' },
                    { title: 'Günstigster Preis', desc: '10-15% günstiger als Satin' },
                    { title: 'Für alle Räume', desc: 'Vielseitig einsetzbar' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-slate-600 flex-shrink-0">
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
              <div className="bg-slate-50 rounded-2xl p-8 shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Alternativen:</h3>
                <div className="space-y-3">
                  <Link href="/leistungen/satin-spanndecken" className="block p-4 bg-white rounded-xl hover:bg-cyan-50 transition-all duration-200 border border-slate-200 hover:border-cyan-400 hover:shadow-md">
                    <span className="font-semibold text-slate-900 flex items-center gap-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0a4 4 0 004-4v-1a2 2 0 012-2h2a2 2 0 012 2v1a4 4 0 01-4 4H7z"/>
                      </svg>
                      Satin-Spanndecken
                    </span>
                    <p className="text-xs text-slate-600 mt-1">Edler als Matt</p>
                  </Link>
                  <Link href="/leistungen/lackspanndecken" className="block p-4 bg-white rounded-xl hover:bg-cyan-50 transition-all duration-200 border border-slate-200 hover:border-cyan-400 hover:shadow-md">
                    <span className="font-semibold text-slate-900 flex items-center gap-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 3l14 9-14 9V3z" fill="currentColor"/>
                      </svg>
                      Hochglanz (Lack)
                    </span>
                    <p className="text-xs text-slate-600 mt-1">Maximale Reflexion</p>
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
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Bereit für deine{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                zeitlose Decke?
              </span>
            </h2>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-white/90 leading-relaxed mb-10 max-w-3xl mx-auto">
              Matt ist keine riskante Entscheidung – es ist die <strong className="text-cyan-300">sicherste Wahl</strong>. 
              Klassisch, zeitlos, reflexionsfrei. Lass dich kostenlos beraten und vergleiche die Muster live bei dir zuhause.
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
                  Kostenlose Beratung vereinbaren
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
                { icon: '✓', text: 'Kostenlose Muster-Beratung', color: 'from-cyan-500 to-blue-500' },
                { icon: '✓', text: 'Festpreis-Garantie', color: 'from-blue-500 to-purple-500' },
                { icon: '✓', text: '10 Jahre Garantie', color: 'from-purple-500 to-pink-500' },
                { icon: '✓', text: 'Montage in 1 Tag', color: 'from-pink-500 to-cyan-500' },
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

