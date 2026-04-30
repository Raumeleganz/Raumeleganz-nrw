'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const categories = [
  {
    id: 'spanndecken',
    title: 'Spanndecken',
    tagline: 'Neue Decke in 1 Tag – ohne Schmutz',
    description: 'Verwandle deine Räume in nur 6-8 Stunden. Unsere Spanndecken überspannen alte, rissige oder fleckige Decken – komplett staubfrei und sofort nutzbar. Ob matt, satin oder hochglänzend: Du entscheidest.',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <rect x="8" y="16" width="48" height="32" rx="4" fill="url(#grad-ceiling)" />
        <path d="M12 16Q32 22 52 16" stroke="#C76015" strokeWidth="2" opacity="0.5" />
        <path d="M12 48Q32 42 52 48" stroke="#C76015" strokeWidth="2" opacity="0.5" />
        <circle cx="20" cy="28" r="3" fill="#FFB86F" opacity="0.8" />
        <circle cx="32" cy="28" r="3" fill="#FFB86F" opacity="0.8" />
        <circle cx="44" cy="28" r="3" fill="#FFB86F" opacity="0.8" />
        <defs>
          <linearGradient id="grad-ceiling" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFF8F0" />
            <stop offset="100%" stopColor="#FFD6A5" />
          </linearGradient>
        </defs>
      </svg>
    ),
    benefits: [
      'Montage in nur 6-8 Stunden',
      '100% staubfrei – keine Renovierung nötig',
      'Perfekte Oberfläche ohne Fugen oder Risse',
      'Verdeckt Rohre, Kabel und alte Strukturen',
      '10 Jahre Garantie auf Material & Verarbeitung'
    ],
    badge: (
      <div className="inline-flex items-center gap-2">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 1L9 5L13 3L10 8L14 8L9 11L10 15L8 12L6 15L7 11L2 8L6 8L3 3L7 5L8 1Z" fill="currentColor" />
        </svg>
        <span>Fertig in 1 Tag</span>
      </div>
    ),
    image: '/images/satin-01.webp',
    imageAlt: 'Edle Satin-Spanndecke mit sanftem Glanz und LED-Beleuchtung im Wohnzimmer',
    einsatzgebiete: ['Wohnzimmer', 'Schlafzimmer', 'Küche', 'Flur'],
    featured: true,
    gradient: 'from-orange-50 via-amber-50 to-yellow-50',
    relatedLinks: ['beleuchtung-spanndecke', 'spanndecke-kosten'],
  },
  {
    id: 'lackspanndecken',
    title: 'Lackspanndecken',
    tagline: 'Spiegeleffekt für mehr Raumtiefe',
    description: 'Lackspanndecken reflektieren Licht wie ein sanfter Spiegel und lassen niedrige Räume optisch höher wirken. Perfekt fürs Wohnzimmer, Bad oder als Design-Statement.',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <rect x="8" y="16" width="48" height="32" rx="4" fill="url(#grad-gloss)" />
        <ellipse cx="24" cy="26" rx="8" ry="4" fill="white" opacity="0.6" />
        <ellipse cx="40" cy="30" rx="10" ry="5" fill="white" opacity="0.4" />
        <path d="M16 20L20 24L24 20" stroke="white" strokeWidth="2" opacity="0.5" strokeLinecap="round" />
        <defs>
          <linearGradient id="grad-gloss" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFD6A5" />
            <stop offset="50%" stopColor="#E87823" />
            <stop offset="100%" stopColor="#C76015" />
          </linearGradient>
        </defs>
      </svg>
    ),
    benefits: [
      'Bis zu 90% Lichtreflektion',
      'Räume wirken bis zu 30% größer',
      'Abwaschbar & pflegeleicht',
      'Elegante Spiegeleffekte'
    ],
    badge: (
      <div className="inline-flex items-center gap-2">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 1L9 4L12 2L10 6L14 6L10 9L11 13L8 10L5 13L6 9L2 6L6 6L4 2L7 4L8 1Z" fill="currentColor" opacity="0.9" />
          <path d="M8 3L9 5L10 4L9 7L11 7L9 9L10 11L8 9L6 11L7 9L5 7L7 7L6 4L7 5L8 3Z" fill="currentColor" />
        </svg>
        <span>Bis 90% Reflektion</span>
      </div>
    ),
    image: '/images/lack-01.webp',
    imageAlt: 'Hochglanz Lackspanndecke mit Spiegeleffekt und LED-Spots im modernen Wohnraum',
    einsatzgebiete: ['Bad', 'Wohnzimmer', 'Showroom', 'Dunkle Räume'],
    featured: true,
    gradient: 'from-amber-50 via-orange-50 to-red-50',
    relatedLinks: ['spanndecken', 'beleuchtung-spanndecke'],
  },
  {
    id: 'spanndecke-matt',
    title: 'Spanndecke matt',
    tagline: 'Samtige Ruhe ohne Reflexe',
    description: 'Matt bedeutet Konzentration: Keine Reflexionen stören beim Arbeiten oder Fernsehen. Spanndecken in matt wirken hochwertig-zurückhaltend und passen perfekt zu minimalistischem Interior.',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <rect x="8" y="16" width="48" height="32" rx="4" fill="url(#grad-matte)" />
        <rect x="10" y="18" width="44" height="28" rx="2" fill="url(#texture-matte)" opacity="0.3" />
        <path d="M16 28H48M16 36H48" stroke="#A67C52" strokeWidth="1" opacity="0.2" />
        <defs>
          <linearGradient id="grad-matte" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E8D4BF" />
            <stop offset="100%" stopColor="#D4B896" />
          </linearGradient>
          <pattern id="texture-matte" width="4" height="4" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.5" fill="#8B6543" />
          </pattern>
        </defs>
      </svg>
    ),
    benefits: [
      'Blendfrei – ideal für Home-Office',
      'Samtweiche, edle Optik',
      'Keine Lichtreflexionen',
      'Minimalistisch & modern'
    ],
    badge: (
      <div className="inline-flex items-center gap-2">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M8 3L8 8L11 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <span>Zeitlos elegant</span>
      </div>
    ),
    image: '/images/satin-02.webp',
    imageAlt: 'Moderne Satin-Spanndecke mit dezenter Reflexion und zeitlosem Design',
    einsatzgebiete: ['Home-Office', 'TV-Raum', 'Schlafzimmer', 'Konferenzraum'],
    gradient: 'from-stone-50 via-neutral-50 to-zinc-50',
    relatedLinks: ['spanndecken', 'satin-spanndecken'],
  },
  {
    id: 'satin-spanndecken',
    title: 'Satin-Spanndecken',
    tagline: 'Weicher Schimmer – elegant & ruhig',
    description: 'Die perfekte Mitte zwischen matt und glänzend: Satin-Spanndecken schimmern sanft, ohne zu spiegeln. Licht wird gleichmäßig verteilt.',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <rect x="8" y="16" width="48" height="32" rx="4" fill="url(#grad-satin)" />
        <ellipse cx="28" cy="28" rx="12" ry="6" fill="white" opacity="0.3" />
        <ellipse cx="38" cy="34" rx="10" ry="5" fill="white" opacity="0.2" />
        <path d="M12 24Q32 28 52 24" stroke="white" strokeWidth="1.5" opacity="0.4" />
        <defs>
          <linearGradient id="grad-satin" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFF8F0" />
            <stop offset="50%" stopColor="#FFE4C4" />
            <stop offset="100%" stopColor="#E8D4BF" />
          </linearGradient>
        </defs>
      </svg>
    ),
    benefits: [
      'Sanfter Seidenglanz',
      'Gleichmäßige Lichtverteilung',
      'Kombinierbar mit LED-Linien',
      'Zeitlos elegant'
    ],
    badge: (
      <div className="inline-flex items-center gap-2">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="5" fill="currentColor" opacity="0.2" />
          <circle cx="6" cy="6" r="2" fill="currentColor" opacity="0.6" />
          <circle cx="10" cy="9" r="1.5" fill="currentColor" opacity="0.4" />
        </svg>
        <span>Sanfter Halbglanz</span>
      </div>
    ),
    image: '/images/satin-03.webp',
    imageAlt: 'Satin-Spanndecke mit LED-Integration und gleichmäßiger Lichtverteilung',
    einsatzgebiete: ['Schlafzimmer', 'Flur', 'Esszimmer', 'Empfang'],
    gradient: 'from-amber-50 via-yellow-50 to-orange-50',
    relatedLinks: ['beleuchtung-spanndecke', 'spanndecke-matt'],
  },
  {
    id: 'beleuchtung-spanndecke',
    title: 'Beleuchtung Spanndecke',
    tagline: 'Licht, das Räume schweben lässt',
    description: 'LED-Profile, Spots oder vollflächige Lichtdecken: Wir integrieren modernste Lichttechnik in deine Spanndecke. Dimmbar, Smart-Home-fähig und energiesparend.',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <rect x="8" y="20" width="48" height="24" rx="3" fill="url(#grad-light)" />
        <circle cx="20" cy="32" r="4" fill="#FFB86F" />
        <circle cx="32" cy="32" r="4" fill="#FFD6A5" />
        <circle cx="44" cy="32" r="4" fill="#FFB86F" />
        <path d="M20 36L18 46M32 36L32 46M44 36L46 46" stroke="#FFD6A5" strokeWidth="2" opacity="0.6" />
        <path d="M8 20H56M8 44H56" stroke="#E87823" strokeWidth="3" strokeLinecap="round" />
        <defs>
          <linearGradient id="grad-light" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFEFD9" />
            <stop offset="100%" stopColor="#FFB86F" />
          </linearGradient>
        </defs>
      </svg>
    ),
    benefits: [
      'LED-Profile umlaufend',
      'Dimmbar & Smart-Home-kompatibel',
      'Energiesparend',
      'UGR <19 – blendfrei'
    ],
    badge: (
      <div className="inline-flex items-center gap-2">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 2V4M8 12V14M3 8H1M15 8H13M4.5 4.5L3 3M13 3L11.5 4.5M11.5 11.5L13 13M3 13L4.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="8" cy="8" r="3" fill="currentColor" />
        </svg>
        <span>Smart-Home-Ready</span>
      </div>
    ),
    image: '/images/licht-01.webp',
    imageAlt: 'Vollflächige Lichtdecke mit gleichmäßiger LED-Ausleuchtung ohne Schatten',
    einsatzgebiete: ['Alle Räume', 'Wohnzimmer', 'Küche', 'Flur'],
    gradient: 'from-yellow-50 via-amber-50 to-orange-50',
    relatedLinks: ['lichtdecken', 'satin-spanndecken'],
  },
  {
    id: 'spanndecke-kosten',
    title: 'Spanndecke Kosten',
    tagline: 'Transparent & planbar',
    description: 'Was kostet eine Spanndecke wirklich? Mit unserem Festpreis-Angebot weißt du von Anfang an, was dich erwartet – ohne versteckte Kosten.',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <rect x="10" y="18" width="44" height="28" rx="3" fill="url(#grad-cost)" />
        <path d="M16 26H48M16 34H40" stroke="#A67C52" strokeWidth="2" strokeLinecap="round" />
        <circle cx="44" cy="34" r="6" fill="#E87823" />
        <path d="M42 34H46M44 32V36" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <defs>
          <linearGradient id="grad-cost" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFF8F0" />
            <stop offset="100%" stopColor="#E8D4BF" />
          </linearGradient>
        </defs>
      </svg>
    ),
    benefits: [
      'Festpreis-Garantie',
      'Transparente Kalkulation',
      'Kostenloses Aufmaß',
      'Finanzierung möglich'
    ],
    badge: (
      <div className="inline-flex items-center gap-2">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M5 8L7 10L11 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>Festpreis-Garantie</span>
      </div>
    ),
    image: '/images/satin-04.webp',
    imageAlt: 'Premium Satin-Spanndecke mit warmem Lichtkonzept im Wohnraum',
    einsatzgebiete: ['Info-Seite', 'Planung', 'Beratung', 'Kalkulation'],
    gradient: 'from-green-50 via-emerald-50 to-teal-50',
    relatedLinks: ['spanndecken', 'spanndecke-matt'],
  },
  {
    id: 'lichtdecken',
    title: 'Lichtdecken',
    tagline: 'Wenn deine Decke selbst zur Sonne wird',
    description: 'Vollflächiges, blendfreies Licht – deine gesamte Decke wird zur Lichtquelle. Perfekt fürs Bad, Büro oder überall, wo Atmosphäre zählt.',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <rect x="10" y="20" width="44" height="24" rx="3" fill="url(#grad-lightceiling)" />
        <circle cx="32" cy="32" r="18" fill="url(#glow)" opacity="0.6" />
        <circle cx="22" cy="30" r="2" fill="#FFF" opacity="0.9" />
        <circle cx="32" cy="30" r="2" fill="#FFF" opacity="0.9" />
        <circle cx="42" cy="30" r="2" fill="#FFF" opacity="0.9" />
        <path d="M15 20L15 15M32 20L32 15M49 20L49 15" stroke="#E87823" strokeWidth="2" strokeLinecap="round" />
        <defs>
          <linearGradient id="grad-lightceiling" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFE5B4" />
            <stop offset="100%" stopColor="#FFD6A5" />
          </linearGradient>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF" />
            <stop offset="100%" stopColor="#FFD6A5" />
          </radialGradient>
        </defs>
      </svg>
    ),
    benefits: [
      'Vollflächiges Licht',
      '100% gleichmäßig',
      'RGBW-Steuerung',
      'Ideal für Bäder & Büros'
    ],
    badge: (
      <div className="inline-flex items-center gap-2">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 1L9 4L12 2L10 6L14 7L10 8L12 12L8 10L4 12L6 8L2 7L6 6L4 2L7 4L8 1Z" fill="currentColor" />
          <circle cx="8" cy="8" r="2" fill="currentColor" opacity="0.6" />
        </svg>
        <span>Vollflächiges Licht</span>
      </div>
    ),
    image: '/images/licht-02.webp',
    imageAlt: 'Moderne LED-Lichtdecke mit indirekter Beleuchtung im Wohnraum',
    einsatzgebiete: ['Bad', 'Büro', 'Praxis', 'Wellness'],
    gradient: 'from-blue-50 via-cyan-50 to-sky-50',
    relatedLinks: ['beleuchtung-spanndecke', 'satin-spanndecken'],
  },
  {
    id: 'motiv-spanndecken',
    title: 'Motiv-Spanndecken',
    tagline: 'Deine Decke wird zum Kunstwerk',
    description: 'Sternenhimmel, Wolken, Kunst oder dein eigenes Bild – in fotorealistischer Qualität auf deine Decke gedruckt. Über 1000 Motive zur Auswahl.',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <rect x="10" y="16" width="44" height="32" rx="4" fill="url(#grad-motiv)" />
        <path d="M20 28Q30 24 40 28T52 28" stroke="white" strokeWidth="2" opacity="0.6" strokeLinecap="round" />
        <path d="M20 36Q30 32 40 36T52 36" stroke="white" strokeWidth="2" opacity="0.6" strokeLinecap="round" />
        <circle cx="24" cy="32" r="3" fill="white" opacity="0.8" />
        <circle cx="36" cy="35" r="4" fill="white" opacity="0.6" />
        <circle cx="48" cy="32" r="3" fill="white" opacity="0.8" />
        <defs>
          <linearGradient id="grad-motiv" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="50%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#F472B6" />
          </linearGradient>
        </defs>
      </svg>
    ),
    benefits: [
      'Fotorealistischer UV-Druck',
      'Über 1000 Motive',
      'Eigene Bilder möglich',
      '10+ Jahre farbecht'
    ],
    badge: (
      <div className="inline-flex items-center gap-2">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2 14L6 10L10 14L14 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M2 8L6 4L10 8L14 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="4" cy="6" r="1.5" fill="currentColor" />
        </svg>
        <span>Individuelles Design</span>
      </div>
    ),
    image: '/images/satin-05.webp',
    imageAlt: 'Elegante Satin-Spanndecke mit sanftem Halbglanz und moderner Optik',
    einsatzgebiete: ['Kinderzimmer', 'Restaurant', 'Showroom', 'Spa'],
    gradient: 'from-purple-50 via-pink-50 to-rose-50',
    relatedLinks: ['lichtdecken', 'spanndecken'],
  },
];

export default function LeistungenDetail() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-white via-slate-50/30 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-300 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-300 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
            Wählen Sie Ihre{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600">
              perfekte Decke
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto">
            Von klassisch bis individuell – jede Spanndecke wird maßgefertigt und perfekt auf Ihre Räume abgestimmt.
          </p>
        </div>

        {/* Bento Grid Layout - Asymmetrisch & Modern */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {categories.map((category, index) => {
            const isFeatured = category.featured;
            const gridClass = isFeatured 
              ? 'lg:col-span-2 lg:row-span-2' 
              : 'lg:col-span-1';

            return (
              <motion.article
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onHoverStart={() => setHoveredCard(category.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className={`group relative ${gridClass}`}
              >
                <Link href={`/leistungen/${category.id}`} className="block h-full">
                  <div className="relative h-full p-6 sm:p-8 rounded-3xl overflow-hidden bg-white border-2 border-slate-200 shadow-xl hover:shadow-2xl hover:border-cyan-400 transition-all duration-200 ease-out group-hover:scale-[1.02]">
                    <div className="relative h-full flex flex-col">
                      {/* Product Image */}
                      <div className="relative mb-6 -mt-6 sm:-mt-8 -mx-6 sm:-mx-8 h-40 sm:h-48 overflow-hidden rounded-t-3xl">
                        <img 
                          src={category.image} 
                          alt={category.imageAlt}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        
                        {/* Icon Overlay */}
                        <div className="absolute bottom-4 left-4 w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-2xl p-2.5 sm:p-3 shadow-2xl">
                          {category.icon}
                        </div>
                        
                        {/* Badge Overlay */}
                        <div className="absolute top-4 right-4">
                          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-slate-900 font-bold text-xs sm:text-sm rounded-full border-2 border-slate-200 shadow-lg">
                            {category.badge}
                          </span>
                        </div>
                      </div>

                      {/* Title & Tagline */}
                      <h3 className={`font-bold text-slate-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 transition-all duration-200 ${isFeatured ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'}`}>
                        {category.title}
                      </h3>
                      <p className={`text-cyan-700 font-bold mb-3 sm:mb-4 ${isFeatured ? 'text-base' : 'text-sm'}`}>
                        {category.tagline}
                      </p>

                      {/* Description */}
                      <p className={`text-slate-700 leading-relaxed mb-3 sm:mb-4 ${isFeatured ? 'text-base' : 'text-sm'}`}>
                        {category.description}
                      </p>

                      {/* Einsatzgebiete */}
                      {category.einsatzgebiete && (
                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <svg className="w-4 h-4 text-cyan-600" fill="none" viewBox="0 0 16 16">
                              <path d="M2 6L8 2L14 6V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                              <path d="M6 14V9H10V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Ideal für</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {category.einsatzgebiete.map((gebiet) => (
                              <span
                                key={gebiet}
                                className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-lg border border-slate-200"
                              >
                                {gebiet}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Benefits */}
                      <ul className="space-y-2 mb-auto">
                        {category.benefits.map((benefit, i) => (
                          <li
                            key={i}
                            className={`flex items-start gap-2 text-slate-800 ${isFeatured ? 'text-sm' : 'text-xs'}`}
                          >
                            <svg
                              width={isFeatured ? "18" : "16"}
                              height={isFeatured ? "18" : "16"}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-cyan-600 flex-shrink-0 mt-0.5"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            {benefit}
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <div className="mt-6 pt-6 border-t-2 border-slate-200">
                        <div className="flex items-center gap-2 text-cyan-700 group-hover:text-cyan-600 font-bold text-sm group-hover:gap-3 transition-all duration-200">
                          <span>Mehr erfahren</span>
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="group-hover:translate-x-1 transition-transform duration-200"
                          >
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>

        {/* SEO Content Section - Emotional & Informativ */}
        <div className="relative mb-16 sm:mb-20">
          <div className="bg-gradient-to-br from-white via-slate-50 to-white rounded-3xl p-8 sm:p-12 lg:p-16 border-2 border-slate-200 shadow-xl">
            {/* Main Heading */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Warum Spanndecken die{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600">
                  Zukunft der Deckengestaltung
                </span>
                {' '}sind
              </h2>
              <p className="text-lg sm:text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
                Stellen Sie sich vor: Morgens kommen wir bei Ihnen an, und abends haben Sie eine perfekte neue Decke – ohne Staub, ohne Chaos, ohne Stress. Genau das macht Spanndecken zur Revolution in der Raumgestaltung.
              </p>
            </div>

            {/* Story Section */}
            <div className="prose prose-lg max-w-none mb-12">
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-12">
                {/* Left Column - Emotional Story */}
                <div className="space-y-6">
                  <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-cyan-200 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">Das Ende der Renovierungs-Albträume</h3>
                    </div>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      Kennen Sie das? Sie planen eine Deckenrenovierung und vor Ihrem inneren Auge erscheint sofort: Möbel ausräumen, alles abdecken, wochenlanger Staub in jeder Ritze, Handwerker die kommen und gehen, und am Ende sieht die Decke doch nicht perfekt aus.
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                      <strong className="text-cyan-700">Mit Spanndecken gehört das der Vergangenheit an.</strong> Ihre Möbel bleiben stehen. Ihr Leben geht weiter. Und nach nur einem Tag haben Sie eine Decke, die aussieht wie aus einem Hochglanz-Magazin – perfekt, fugenlos, makellos.
                    </p>
                  </div>

                  <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-blue-200 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">Gestalten Sie, was Sie lieben</h3>
                    </div>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      Ihre Decke ist mehr als nur weiße Farbe über Ihrem Kopf. Sie ist Teil Ihres Zuhauses, Teil Ihrer Wohlfühlatmosphäre. Mit Spanndecken öffnen sich Welten der Gestaltung: 
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                      <strong className="text-blue-700">Matt für ruhige Arbeitsräume.</strong> Satin für elegante Wohnbereiche. Hochglanz für beeindruckende Spiegeleffekte. LED-Lichtdecken für atmosphärische Beleuchtung. Oder sogar Sternenhimmel fürs Kinderzimmer. <strong>Ihre Fantasie ist die einzige Grenze.</strong>
                    </p>
                  </div>
                </div>

                {/* Right Column - Facts & Benefits */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 sm:p-8 rounded-2xl border-2 border-purple-200 shadow-lg">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Für wen eignen sich Spanndecken besonders?</h3>
                    
                    <div className="space-y-4">
                      {[
                        {
                          icon: (
                            <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                          ),
                          title: 'Junge Familien',
                          desc: 'Sie haben kleine Kinder und können sich keine wochenlange Baustelle leisten? Perfekt! Spanndecken sind in einem Tag montiert – ganz ohne Staub und Lärm.'
                        },
                        {
                          icon: (
                            <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          ),
                          title: 'Vermieter & Eigentümer',
                          desc: 'Ihre Mietwohnung oder Eigentumswohnung braucht eine neue Decke? Spanndecken werten jede Immobilie auf und überzeugen neue Mieter sofort.'
                        },
                        {
                          icon: (
                            <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          ),
                          title: 'Gewerbetreibende',
                          desc: 'Ihr Ladenlokal, Ihre Praxis oder Ihr Büro soll professionell wirken? Spanndecken schaffen eine hochwertige Atmosphäre – und das über Nacht.'
                        },
                        {
                          icon: (
                            <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          ),
                          title: 'Altbau-Liebhaber',
                          desc: 'Ihre wunderschöne Altbauwohnung hat rissige, unebene Decken? Spanndecken verdecken alle Makel und bewahren trotzdem den Charme Ihrer hohen Räume.'
                        },
                        {
                          icon: (
                            <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                          ),
                          title: 'Qualitätsbewusste',
                          desc: 'Sie legen Wert auf hochwertige Materialien und perfekte Verarbeitung? Mit 10 Jahren Garantie und bis zu 30 Jahren Haltbarkeit sind Sie bestens aufgehoben.'
                        },
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-purple-200">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                            <p className="text-sm text-slate-700 leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Comparison Table */}
              <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl border-2 border-slate-200 shadow-xl mb-12">
                <div className="text-center mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                    Spanndecken vs. klassische Renovierung
                  </h3>
                  <p className="text-slate-700">
                    Der direkte Vergleich zeigt: Spanndecken sind in fast allen Bereichen überlegen
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b-2 border-slate-200">
                        <th className="py-4 px-4 text-slate-900 font-bold">Kriterium</th>
                        <th className="py-4 px-4 text-center">
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            Spanndecken
                          </div>
                        </th>
                        <th className="py-4 px-4 text-center">
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-600 text-white font-bold rounded-xl">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            Klassisch
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {[
                        { label: 'Montagezeit', spann: '6-8 Stunden', classic: '3-5 Tage' },
                        { label: 'Staubentwicklung', spann: '0% – komplett staubfrei', classic: 'Massiv – überall Staub' },
                        { label: 'Sofort nutzbar', spann: 'Ja, direkt nach Montage', classic: 'Nein, Trocknungszeit nötig' },
                        { label: 'Oberfläche', spann: 'Perfekt glatt, fugenlos', classic: 'Abhängig vom Handwerker' },
                        { label: 'Haltbarkeit', spann: '20-30+ Jahre', classic: '5-10 Jahre bis Nachbesserung' },
                        { label: 'Gestaltungsfreiheit', spann: '200+ Farben, LED möglich', classic: 'Nur Farbe, begrenzt' },
                        { label: 'Raumhöhe verloren', spann: 'Nur 3-5 cm', classic: '0-2 cm' },
                        { label: 'Preis pro m²', spann: '79€-160€', classic: '50€-120€ + Folgekosten' },
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                          <td className="py-4 px-4 font-bold text-slate-900">{row.label}</td>
                          <td className="py-4 px-4 text-center">
                            <span className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-50 text-cyan-700 font-bold rounded-lg border border-cyan-200">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                              {row.spann}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-center">
                            <span className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-600 font-semibold rounded-lg border border-slate-300">
                              {row.classic}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border-2 border-cyan-200">
                  <p className="text-slate-900 leading-relaxed">
                    <strong className="text-cyan-700 text-lg">Unser Fazit:</strong> Spanndecken kosten auf den ersten Blick etwas mehr, aber wenn Sie die gesparte Zeit, den fehlenden Stress, die längere Haltbarkeit und die perfekte Qualität mit einrechnen, sind Spanndecken die <strong>wirtschaftlichere und bessere Wahl</strong>.
                  </p>
                </div>
              </div>

              {/* Regional Availability */}
              <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 p-6 sm:p-8 lg:p-10 rounded-2xl shadow-2xl text-white">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-bold">Ihr regionaler Partner in NRW</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                    Überall in Nordrhein-Westfalen für Sie im Einsatz
                  </h3>
                  <p className="text-white/90 max-w-3xl mx-auto">
                    Von Köln über Düsseldorf bis Dortmund – unser erfahrenes Team ist in ganz NRW unterwegs und garantiert Ihnen kurze Anfahrtswege, schnelle Reaktionszeiten und persönliche Betreuung.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {[
                    'Köln', 'Düsseldorf', 'Dortmund', 'Essen',
                    'Duisburg', 'Bochum', 'Wuppertal', 'Bielefeld',
                    'Bonn', 'Münster', 'Mönchengladbach', 'Gelsenkirchen'
                  ].map((city, i) => (
                    <div key={i} className="flex items-center gap-2 p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
                      <svg className="w-4 h-4 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-bold text-white">{city}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <p className="text-white/90 mb-4">
                    Und natürlich auch in allen umliegenden Städten und Gemeinden
                  </p>
                  <Link
                    href="/einsatzgebiete"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-cyan-50 transition-colors"
                  >
                    Alle Einsatzgebiete ansehen
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="relative mb-16 sm:mb-20">
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 py-8 sm:py-12 px-6 sm:px-8 bg-white rounded-3xl border-2 border-slate-200 shadow-2xl">
            {[
              { 
                icon: (
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                  </svg>
                ),
                text: 'B1 schwer entflammbar' 
              },
              { 
                icon: (
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                text: '10 Jahre Garantie' 
              },
              { 
                icon: (
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                text: '100% staubfrei' 
              },
              { 
                icon: (
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                text: 'Regionale Teams' 
              }
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-900">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section - Expanded & Optimized */}
        <div className="relative">
          <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl border-2 border-slate-200">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-md border-2 border-slate-200">
                <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-bold text-slate-900">Häufig gestellte Fragen</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Alles, was Sie über{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600">
                  Spanndecken
                </span>
                {' '}wissen müssen
            </h2>
              <p className="text-base sm:text-lg text-slate-700 max-w-3xl mx-auto">
                Hier finden Sie Antworten auf die wichtigsten Fragen rund um Spanndecken, Montage, Kosten und Pflege.
              </p>
            </div>
            
            {/* FAQ Grid - 2 Columns on Desktop */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  q: 'Wie lange dauert die Montage einer Spanndecke?',
                  a: 'Ein durchschnittliches Wohnzimmer (ca. 18m²) ist in nur 6-8 Stunden fertig montiert – komplett staubfrei und sofort nutzbar. Größere Räume oder komplexe LED-Installationen können 1-2 Tage benötigen. Der große Vorteil: Sie können den Raum direkt nach der Montage wieder nutzen – keine Trocknungszeiten!',
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  ),
                  q: 'Kann ich Spanndecken im Bad oder in Feuchträumen einsetzen?',
                  a: 'Ja, absolut! Unsere Spanndecken sind zu 100% feuchtraumgeeignet, schimmelresistent und abwaschbar. Sie eignen sich perfekt fürs Bad, die Küche oder den Keller – auch mit integrierter LED-Beleuchtung. Das Material ist wasserabweisend und kann sogar bei einem Wasserschaden bis zu 100 Liter Wasser pro m² auffangen.',
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  q: 'Bekomme ich ein transparentes Festpreis-Angebot?',
                  a: 'Ja, garantiert! Nach der kostenlosen Besichtigung und dem Aufmaß erhalten Sie ein detailliertes Festpreis-Angebot – inklusive Material, Montage und Entsorgung der Altmaterialien. Was draufsteht, wird bezahlt. Keine versteckten Kosten, keine bösen Überraschungen. Ihre Zufriedenheit ist unsere Garantie.',
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  ),
                  q: 'Wie pflege ich meine Spanndecke?',
                  a: 'Spanndecken sind extrem pflegeleicht! Ein feuchtes Mikrofasertuch reicht völlig aus. Bei Hochglanz-Decken empfehlen wir einen milden Glasreiniger für streifenfreien Glanz. Keine teuren Spezialreiniger nötig. Die antistatische Oberfläche zieht keinen Staub an – ideal für Allergiker.',
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  q: 'Welche Garantie gibt es auf Spanndecken?',
                  a: 'Sie erhalten von uns 10 Jahre Herstellergarantie auf Material und Verarbeitung – schriftlich garantiert. Das Material selbst hält in der Regel 20-30 Jahre und mehr. Die Farben sind lichtecht und verblassen nicht. Bei fachgerechter Montage durch unser Team haben Sie ein Leben lang Freude an Ihrer Spanndecke.',
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  q: 'Kann ich nachträglich noch LED-Beleuchtung einbauen lassen?',
                  a: 'Ja, das ist grundsätzlich möglich! LED-Profile, Spots oder vollflächige Lichtdecken können auch nachträglich noch integriert werden. Am besten planen wir die Beleuchtung jedoch direkt bei der ersten Montage mit ein – das spart Kosten und Zeit. Wir erstellen Ihnen gerne ein individuelles Lichtkonzept für Ihre Räume.',
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  ),
                  q: 'Sind Spanndecken auch für Mietwohnungen geeignet?',
                  a: 'Ja, absolut! Spanndecken werden mit speziellen Profilen montiert, die bei einem späteren Auszug rückstandsfrei entfernt werden können. Viele Vermieter schätzen Spanndecken sogar, da sie die Wohnung optisch aufwerten und die Bestandsdecke schützen. Sprechen Sie vorab mit Ihrem Vermieter – in den meisten Fällen gibt es grünes Licht.',
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  ),
                  q: 'Wie viel kostet eine Spanndecke pro Quadratmeter?',
                  a: 'Die Kosten liegen zwischen 79€ und 160€ pro m², abhängig von Oberfläche (matt/satin/hochglanz), Farbe und zusätzlichen Features wie LED-Integration. Ein durchschnittliches Wohnzimmer (20m²) kostet somit zwischen 1.580€ und 3.200€ inklusive Material und Montage. Für ein exaktes Angebot kommen wir gerne kostenlos zu Ihnen.',
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="group p-6 bg-white rounded-2xl border-2 border-slate-200 hover:border-cyan-400 hover:shadow-xl transition-all duration-200 ease-out"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      {faq.icon}
                    </div>
                    <h3 className="font-bold text-slate-900 text-base sm:text-lg leading-tight pt-1">{faq.q}</h3>
                  </div>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed pl-14">{faq.a}</p>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                Noch Fragen? Wir beraten Sie gerne!
              </h3>
              <p className="text-slate-700 mb-6 max-w-2xl mx-auto">
                Kontaktieren Sie uns für ein kostenloses Beratungsgespräch. Wir beantworten alle Ihre Fragen und erstellen Ihnen ein individuelles Angebot.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-bold text-base rounded-xl shadow-2xl hover:shadow-cyan-500/50 transition-all duration-200 ease-out hover:scale-105 group"
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
                  Kostenlose Beratung anfragen
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                    className="group-hover:translate-x-1 transition-transform duration-200"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
                <a
                  href="tel:+4920189083052"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-900 font-bold text-base rounded-xl border-2 border-slate-200 hover:border-cyan-400 hover:shadow-lg transition-all duration-200 ease-out hover:scale-105"
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
                    className="text-cyan-600"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Jetzt anrufen
                </a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
