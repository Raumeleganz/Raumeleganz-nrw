'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Colorful Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFE4C4] via-[#FFD6A5] to-[#FFC08A]">
        {/* Overlay Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E87823' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Decorative Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Right Circle */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-12 -right-12 w-64 h-64 bg-craft-400 rounded-full opacity-20 blur-2xl"
        />

        {/* Bottom Left Circle */}
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute -bottom-12 -left-12 w-72 h-72 bg-warm-400 rounded-full opacity-20 blur-2xl"
        />

        {/* Small Floating Elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
            className={`absolute w-${8 + (i % 3) * 4} h-${8 + (i % 3) * 4} rounded-full opacity-30`}
            style={{
              left: `${10 + i * 10}%`,
              top: `${20 + (i % 3) * 30}%`,
              background: i % 2 === 0 ? '#E87823' : '#FFB86F',
            }}
          />
        ))}

        {/* Geometric Shapes */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 right-1/4 w-24 h-24 border-4 border-craft-500 rounded-xl opacity-20"
        />
        
        <motion.div
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-20 left-1/4 w-32 h-32 border-4 border-warm-600 rounded-full opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg mb-8"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-craft-600"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </motion.div>
            <span className="text-craft-700 font-semibold">Kostenlose Erstberatung</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-warm-900 mb-6 leading-tight"
          >
            Bereit für Ihre{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-craft-600">
                Traumdecke?
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute bottom-1 left-0 right-0 h-4 bg-craft-300/50 -z-0 rounded"
                style={{ transformOrigin: 'left' }}
              />
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-warm-800 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Lassen Sie uns gemeinsam Ihre Vorstellungen verwirklichen! 
            Wir beraten Sie unverbindlich und erstellen ein individuelles Konzept – 
            <span className="font-semibold text-craft-700"> kostenlos und persönlich</span>.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/kontakt"
                className="group inline-flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-craft-500 to-craft-600 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-200"
              >
                <svg
                  width="24"
                  height="24"
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
                Kostenlos beraten lassen
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="tel:+4920189083052"
                className="group inline-flex items-center gap-3 px-8 py-5 bg-white text-craft-700 font-bold text-lg rounded-full border-3 border-craft-600 hover:bg-craft-50 transition-all duration-200 shadow-xl"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:rotate-12 transition-transform duration-200"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Jetzt anrufen
              </a>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-4 text-sm text-warm-700"
          >
            {[
              { 
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="#10B981" opacity="0.2" />
                    <path d="M8 12L11 15L16 9" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
                text: 'Kostenlose Beratung' 
              },
              { 
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="2" fill="#E87823" opacity="0.2" />
                    <path d="M8 8L16 16M16 8L8 16" stroke="#E87823" strokeWidth="2" strokeLinecap="round" />
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="#E87823" strokeWidth="1.5" />
                  </svg>
                ),
                text: '3D-Visualisierung' 
              },
              { 
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" fill="#C76015" opacity="0.2" />
                    <circle cx="12" cy="12" r="6" fill="#E87823" opacity="0.3" />
                    <circle cx="12" cy="12" r="3" fill="#C76015" />
                    <path d="M12 3V5M12 19V21M21 12H19M5 12H3" stroke="#E87823" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ),
                text: 'Festpreis-Garantie' 
              },
              { 
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" fill="#FFB86F" opacity="0.3" />
                    <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" stroke="#E87823" strokeWidth="2" strokeLinejoin="round" />
                  </svg>
                ),
                text: 'Express-Montage möglich' 
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                className="flex items-center gap-3 bg-white/70 backdrop-blur-sm px-5 py-3 rounded-full shadow-md"
              >
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <span className="font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 pt-12 border-t-2 border-white/50"
          >
            <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: (
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                      <rect x="8" y="8" width="32" height="32" rx="6" fill="url(#grad-palette)" />
                      <circle cx="18" cy="18" r="4" fill="#E87823" />
                      <circle cx="30" cy="18" r="4" fill="#C76015" />
                      <circle cx="18" cy="30" r="4" fill="#FFB86F" />
                      <circle cx="30" cy="30" r="4" fill="#A67C52" />
                      <path d="M12 12L20 20M28 12L36 20M12 28L20 36M28 28L36 36" stroke="white" strokeWidth="2" opacity="0.3" />
                      <defs>
                        <linearGradient id="grad-palette" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#FFF8F0" />
                          <stop offset="100%" stopColor="#FFD6A5" />
                        </linearGradient>
                      </defs>
                    </svg>
                  ),
                  title: 'Individuelle Planung',
                  description: 'Perfekt abgestimmt auf Ihre Räume',
                },
                {
                  icon: (
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                      <circle cx="24" cy="24" r="18" fill="url(#grad-coin)" />
                      <circle cx="24" cy="24" r="14" stroke="#A67C52" strokeWidth="2" />
                      <path d="M24 14V34M18 20L24 17L30 20M18 28L24 31L30 28" stroke="#A67C52" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      <defs>
                        <linearGradient id="grad-coin" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#FFD6A5" />
                          <stop offset="100%" stopColor="#E87823" />
                        </linearGradient>
                      </defs>
                    </svg>
                  ),
                  title: 'Faire Preise',
                  description: 'Transparente Kosten ohne versteckte Gebühren',
                },
                {
                  icon: (
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                      <rect x="10" y="20" width="28" height="18" rx="3" fill="url(#grad-toolbox)" />
                      <path d="M16 20V16C16 13.79 17.79 12 20 12H28C30.21 12 32 13.79 32 16V20" stroke="#C76015" strokeWidth="2.5" strokeLinecap="round" />
                      <rect x="22" y="28" width="4" height="6" rx="1" fill="#8B6543" />
                      <circle cx="18" cy="31" r="2" fill="#E87823" />
                      <circle cx="30" cy="31" r="2" fill="#E87823" />
                      <defs>
                        <linearGradient id="grad-toolbox" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#FFB86F" />
                          <stop offset="100%" stopColor="#C76015" />
                        </linearGradient>
                      </defs>
                    </svg>
                  ),
                  title: 'Alles aus einer Hand',
                  description: 'Von Beratung bis Montage',
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.9 + i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                    className="inline-block mb-4"
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="font-bold text-warm-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-warm-700">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

