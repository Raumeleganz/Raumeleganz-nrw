'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    id: 'spanndecken',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <rect x="8" y="16" width="48" height="32" rx="4" fill="url(#grad1)" />
        <circle cx="20" cy="28" r="3" fill="#FFB86F" opacity="0.8" />
        <circle cx="32" cy="28" r="3" fill="#FFB86F" opacity="0.8" />
        <circle cx="44" cy="28" r="3" fill="#FFB86F" opacity="0.8" />
        <path d="M20 31 L18 42" stroke="#FFD6A5" strokeWidth="2" opacity="0.5" />
        <path d="M32 31 L32 42" stroke="#FFD6A5" strokeWidth="2" opacity="0.5" />
        <path d="M44 31 L46 42" stroke="#FFD6A5" strokeWidth="2" opacity="0.5" />
        <defs>
          <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#FFF8F0" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'Spanndecken-Installation',
    description: 'Hochwertige Spanndecken in verschiedenen Designs – glänzend, matt oder mit Struktur. Perfekt für Wohn-, Büro- und Badräume.',
    features: ['Schnelle Montage', 'Keine Renovierung nötig', 'Langlebig & pflegeleicht'],
    color: 'from-craft-100 to-craft-200',
    accentColor: 'craft-500',
  },
  {
    id: 'led-beleuchtung',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <circle cx="32" cy="28" r="12" fill="url(#grad2)" />
        <path d="M32 40 L32 50" stroke="#E87823" strokeWidth="3" strokeLinecap="round" />
        <path d="M28 50 L36 50" stroke="#E87823" strokeWidth="3" strokeLinecap="round" />
        <g opacity="0.7">
          <path d="M32 18 L32 12" stroke="#FFB86F" strokeWidth="2" strokeLinecap="round" />
          <path d="M42 22 L46 18" stroke="#FFB86F" strokeWidth="2" strokeLinecap="round" />
          <path d="M46 32 L52 32" stroke="#FFB86F" strokeWidth="2" strokeLinecap="round" />
          <path d="M22 22 L18 18" stroke="#FFB86F" strokeWidth="2" strokeLinecap="round" />
          <path d="M18 32 L12 32" stroke="#FFB86F" strokeWidth="2" strokeLinecap="round" />
        </g>
        <defs>
          <linearGradient id="grad2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFD6A5" />
            <stop offset="100%" stopColor="#E87823" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'LED-Beleuchtung',
    description: 'Integrierte LED-Systeme für perfekte Atmosphäre. Von indirekter Beleuchtung bis zu RGB-Farbwechsel – alles ist möglich.',
    features: ['Energieeffizient', 'Stimmungsvolles Licht', 'Smart Home-kompatibel'],
    color: 'from-warm-100 to-warm-200',
    accentColor: 'warm-600',
  },
  {
    id: 'design-beratung',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <rect x="12" y="12" width="40" height="40" rx="6" fill="url(#grad3)" />
        <path d="M20 28 L28 28 L28 20" stroke="#C76015" strokeWidth="2" strokeLinecap="round" />
        <circle cx="38" cy="32" r="8" stroke="#E87823" strokeWidth="2" fill="none" />
        <path d="M20 44 L44 20" stroke="#FFB86F" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <circle cx="24" cy="40" r="2" fill="#E87823" />
        <circle cx="40" cy="24" r="2" fill="#E87823" />
        <defs>
          <linearGradient id="grad3" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFEFD9" />
            <stop offset="100%" stopColor="#FFD6A5" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'Design-Beratung',
    description: 'Individuelle Planung für Ihren Raum. Wir beraten Sie zu Farben, Formen und Beleuchtungskonzepten für maximale Wirkung.',
    features: ['Kostenlose Erstberatung', '3D-Visualisierung', 'Mustermaterial'],
    color: 'from-craft-50 to-warm-100',
    accentColor: 'craft-600',
  },
  {
    id: 'lichtdecken',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <rect x="10" y="20" width="44" height="24" rx="3" fill="url(#grad4)" />
        <circle cx="32" cy="32" r="18" fill="url(#glow)" opacity="0.6" />
        <circle cx="22" cy="30" r="2" fill="#FFF" opacity="0.9" />
        <circle cx="32" cy="30" r="2" fill="#FFF" opacity="0.9" />
        <circle cx="42" cy="30" r="2" fill="#FFF" opacity="0.9" />
        <path d="M15 20L15 15M32 20L32 15M49 20L49 15" stroke="#E87823" strokeWidth="2" strokeLinecap="round" />
        <defs>
          <linearGradient id="grad4" x1="0" y1="0" x2="1" y2="1">
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
    title: 'Lichtdecken',
    description: 'Vollflächiges, blendfreies Licht – deine gesamte Decke wird zur Lichtquelle. Perfekt fürs Bad, Büro oder überall, wo Atmosphäre zählt.',
    features: ['100% blendfrei', 'RGBW-Steuerung', 'Energieeffizient'],
    color: 'from-yellow-100 to-orange-100',
    accentColor: 'craft-500',
  },
  {
    id: 'motiv-spanndecken',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <rect x="10" y="16" width="44" height="32" rx="4" fill="url(#grad5)" />
        <path d="M20 28Q30 24 40 28T52 28" stroke="white" strokeWidth="2" opacity="0.6" strokeLinecap="round" />
        <path d="M20 36Q30 32 40 36T52 36" stroke="white" strokeWidth="2" opacity="0.6" strokeLinecap="round" />
        <circle cx="24" cy="32" r="3" fill="white" opacity="0.8" />
        <circle cx="36" cy="35" r="4" fill="white" opacity="0.6" />
        <circle cx="48" cy="32" r="3" fill="white" opacity="0.8" />
        <defs>
          <linearGradient id="grad5" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="50%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#F472B6" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'Motiv-Spanndecken',
    description: 'Deine Decke wird zum Kunstwerk. Sternenhimmel, Wolken, Kunst oder dein eigenes Bild – in fotorealistischer Qualität.',
    features: ['Fotorealistisch', 'Über 1000 Motive', 'Eigene Bilder möglich'],
    color: 'from-purple-100 to-pink-100',
    accentColor: 'purple-600',
  },
];

export default function Services() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-warm-50/30 to-white">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-craft-100 text-craft-700 text-sm font-semibold rounded-full mb-4">
            Unsere Leistungen
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-warm-900 mb-4">
            Was wir für Sie{' '}
            <span className="bg-gradient-to-r from-craft-500 to-craft-700 bg-clip-text text-transparent">
              erschaffen
            </span>
          </h2>
          <p className="text-lg text-warm-700 max-w-2xl mx-auto">
            Von der ersten Idee bis zur perfekten Umsetzung – 
            Ihr Raum verdient das Beste.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="relative h-full bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-200 ease-out overflow-hidden border border-warm-100">
                {/* Colored Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-40 group-hover:opacity-60 transition-opacity duration-200`} />

                {/* Content */}
                <div className="relative p-8 flex flex-col h-full">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                    className="w-20 h-20 mb-6 drop-shadow-lg"
                  >
                    {service.icon}
                  </motion.div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-warm-900 mb-3 group-hover:text-craft-600 transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-warm-700 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 + i * 0.1 }}
                          className="flex items-center gap-2 text-sm text-warm-800"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`text-${service.accentColor} flex-shrink-0`}
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover Arrow */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="mt-6 flex items-center gap-2 text-craft-600 font-semibold group-hover:gap-4 transition-all duration-200"
                  >
                    <span>Mehr erfahren</span>
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
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </motion.div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4 border-craft-300/30 rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <Link
              href="/kontakt"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-craft-500 to-craft-600 text-white font-semibold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 ease-out hover:scale-[1.02]"
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
                className="group-hover:scale-110 transition-transform duration-200"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Persönliche Beratung vereinbaren
            </Link>
            
            <Link
              href="/projekte"
              className="text-warm-800 hover:text-craft-600 font-medium transition-colors duration-200 flex items-center gap-2"
            >
              Referenzen ansehen
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

