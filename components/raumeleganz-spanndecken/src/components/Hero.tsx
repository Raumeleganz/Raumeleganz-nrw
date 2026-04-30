'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Sanftere Parallax-Animation - erst spät einsetzend
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  // Bild-Slider State
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    {
      src: '/images/lack-07.webp',
      alt: 'Hochglanz Lackspanndecke im Badezimmer mit Marmor und LED-Beleuchtung',
      title: 'Lackspanndecke im Badezimmer',
      location: 'Referenzprojekt NRW'
    },
    {
      src: '/images/lack-08.webp',
      alt: 'Lackspanndecke mit LED-Spots und brillantem Spiegeleffekt',
      title: 'Spiegeleffekt & LED-Beleuchtung',
      location: 'Hochglanz Premium'
    },
    {
      src: '/images/satin-01.webp',
      alt: 'Edle Satin-Spanndecke mit sanftem Glanz und LED-Beleuchtung im Wohnzimmer',
      title: 'Satin-Spanndecke',
      location: 'Eleganz & Stil'
    },
    {
      src: '/images/licht-01.webp',
      alt: 'Vollflächige Lichtdecke mit gleichmäßiger LED-Ausleuchtung ohne Schatten',
      title: 'Lichtdecke',
      location: 'Perfektes Licht'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[85vh] sm:min-h-screen flex items-center overflow-hidden pt-8 sm:pt-0">
      {/* Premium Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/30 via-transparent to-purple-100/40" />
      </div>

      {/* Premium Light Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        {/* Top Light Effect */}
        <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-cyan-200/40 via-blue-100/20 to-transparent blur-xl sm:blur-2xl" />

        {/* Corner Accent Lights */}
        <div className="hidden sm:block absolute top-20 right-20 w-96 h-96 bg-cyan-300 rounded-full blur-3xl" />
        
        <div className="hidden sm:block absolute bottom-32 left-20 w-80 h-80 bg-purple-300 rounded-full blur-3xl" />

      </div>

      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-16 md:py-20"
      >
        {/* Mobile Top Info Banner */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="lg:hidden mb-6 sm:mb-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-lg border-2 border-cyan-200">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-600">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span className="font-bold text-slate-900">Kostenlose Beratung</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-lg border-2 border-purple-200">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <span className="font-bold text-slate-900">10 Jahre Garantie</span>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-5 sm:space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 text-xs sm:text-sm font-bold rounded-xl mb-3 sm:mb-4 md:mb-6 border border-cyan-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-600">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                Individuelle Raumgestaltung
              </motion.span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-[1.15] sm:leading-tight mb-3 sm:mb-4 md:mb-5">
                Ihre{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Traumdecke
                  </span>
                  <motion.span
                    animate={{
                      scaleX: [0, 1],
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.8,
                      ease: 'easeOut',
                    }}
                    className="absolute bottom-0.5 sm:bottom-1 md:bottom-2 left-0 right-0 h-1.5 sm:h-2 md:h-3 bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-200 -z-0"
                    style={{ transformOrigin: 'left' }}
                  />
                </span>
                <br />
                wird Wirklichkeit
              </h1>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-700 leading-relaxed max-w-xl">
                Stellen Sie sich vor: Sie kommen nach Hause und Ihre Decke strahlt in sanftem LED-Licht – perfekt abgestimmt auf Ihre Stimmung. <strong className="text-slate-900">Genau so fühlt sich eine Spanndecke von uns an.</strong> Ob matt, glänzend oder mit individuellen Lichtkonzepten – wir verwandeln Ihre Räume in nur 6-8 Stunden in ein modernes Zuhause, in dem Sie sich rundum wohlfühlen. <strong className="text-cyan-700">Staubfrei, stressfrei, wunderschön.</strong>
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/projekte"
                  className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-bold text-base sm:text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-200 ease-out will-change-transform w-full sm:w-auto"
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
                    className="group-hover:rotate-12 transition-transform duration-200 flex-shrink-0"
                  >
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                  </svg>
                  Inspiration ansehen
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/kontakt"
                  className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white text-slate-900 font-bold text-base sm:text-lg rounded-xl border-2 border-slate-200 hover:border-cyan-400 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 transition-all duration-200 ease-out shadow-lg hover:shadow-xl will-change-transform w-full sm:w-auto"
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
                    className="text-cyan-600 group-hover:scale-110 transition-transform duration-200 flex-shrink-0"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  Jetzt beraten lassen
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 md:gap-6 lg:gap-8"
            >
              {[
                { 
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-600">
                      <path d="M12 19l7-7 3 3-7 7-3-3z"/>
                      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
                      <path d="M2 2l7.586 7.586"/>
                      <circle cx="11" cy="11" r="2"/>
                    </svg>
                  ),
                  text: 'Individuelles Design' 
                },
                { 
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                    </svg>
                  ),
                  text: 'Express-Montage' 
                },
                { 
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
                      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                      <path d="M4 22h16"/>
                      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
                      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
                      <path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>
                    </svg>
                  ),
                  text: 'Premium-Qualität' 
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 sm:gap-2.5 px-4 py-2 bg-white rounded-xl border-2 border-slate-200 shadow-md">
                  {item.icon}
                  <span className="text-xs sm:text-sm font-bold text-slate-900">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Visual Side - Image Slider */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Premium Image Slider */}
            <div className="relative aspect-[4/3] max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
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
                    className="w-full h-full object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 backdrop-blur-sm rounded-full text-white text-sm font-bold shadow-lg flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
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
                      {image.location}
                    </span>
                    </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <h3 className="text-white text-2xl font-bold drop-shadow-2xl">
                      {image.title}
                    </h3>
                  </div>
                </div>
              ))}
              
              {/* Navigation Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
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
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg z-10"
                aria-label="Vorheriges Bild"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                    </svg>
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % images.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg z-10"
                aria-label="Nächstes Bild"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                    </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1 sm:gap-2 text-cyan-600 bg-white rounded-full shadow-xl border-2 border-cyan-200 px-4 py-2"
        >
          <span className="text-xs font-bold text-slate-900 hidden sm:block">Mehr entdecken</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="sm:w-6 sm:h-6 text-cyan-600"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

