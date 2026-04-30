'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Startseite', href: '/' },
    { label: 'Leistungen', href: '/leistungen' },
    { label: 'Einsatzgebiete', href: '/einsatzgebiete' },
    { label: 'Projekte', href: '/projekte' },
    { label: 'Über uns', href: '/ueber-uns' },
    { label: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <>
      {/* Premium Top Info Bar */}
      <div className="bg-gradient-to-r from-slate-800 via-gray-800 to-slate-900 text-white py-3 hidden md:block shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            {/* Left Side - Contact Info */}
            <div className="flex items-center gap-8">
              <a 
                href="tel:+4920189083052" 
                className="flex items-center gap-2.5 hover:text-cyan-300 transition-colors duration-200 group"
              >
                <div className="p-1.5 bg-white/10 rounded-full group-hover:bg-cyan-500/20 transition-all duration-200">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <span className="font-semibold">+49 (0) 20189083052</span>
              </a>
              
              <div className="flex items-center gap-2.5 text-white/80">
                <div className="p-1.5 bg-white/5 rounded-full">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <span className="font-medium">Mo-Fr: 8:00-18:00 | Sa: 9:00-14:00</span>
              </div>
            </div>

            {/* Right Side - Premium USPs */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-400/30">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span className="font-semibold text-cyan-300">Kostenlose Beratung</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-400/30">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <span className="font-semibold text-purple-300">10 Jahre Garantie</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full border border-amber-400/30">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <span className="font-semibold text-amber-300">Montage in 1 Tag</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Main Header */}
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Premium Logo */}
          <Link href="/" className="group flex items-center gap-3.5 transition-all duration-200 ease-out will-change-transform">
            <div className="relative group-hover:scale-105 transition-transform duration-200 ease-out will-change-transform">
              {/* Modern Gradient Icon */}
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-lg"
              >
                <defs>
                  <linearGradient id="logo-gradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#06B6D4" />
                    <stop offset="50%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
                
                {/* Rounded Square Background */}
                <rect 
                  x="4" 
                  y="4" 
                  width="44" 
                  height="44" 
                  rx="12" 
                  fill="url(#logo-gradient)"
                  className="transition-opacity duration-200 group-hover:opacity-90"
                />
                
                {/* Ceiling/Deck Icon */}
                <g transform="translate(14, 14)">
                  {/* Top Layer */}
                  <rect x="2" y="4" width="20" height="3" rx="1.5" fill="white" opacity="0.95"/>
                  {/* Middle Layer */}
                  <rect x="2" y="10" width="20" height="3" rx="1.5" fill="white" opacity="0.75"/>
                  {/* Bottom Layer */}
                  <rect x="2" y="16" width="20" height="3" rx="1.5" fill="white" opacity="0.95"/>
                  {/* Light Spots - Static for Performance */}
                  <circle cx="7" cy="12" r="1.5" fill="#FCD34D" opacity="0.8"/>
                  <circle cx="12" cy="12" r="1.5" fill="#FBBF24" opacity="0.9"/>
                  <circle cx="17" cy="12" r="1.5" fill="#FCD34D" opacity="0.8"/>
                </g>
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="text-2xl font-bold text-slate-900 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-purple-600 transition-all duration-200">
                Raumeleganz
              </span>
              <span className="text-xs font-semibold text-slate-600 tracking-wide uppercase">
                Premium Spanndecken · NRW
              </span>
            </div>
          </Link>

          {/* Premium Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-all duration-200 ease-out group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-200 ease-out group-hover:w-3/4 rounded-full" />
              </Link>
            ))}
          </nav>

          {/* Premium CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 ease-out will-change-transform group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="relative z-10"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              <span className="relative z-10">Kostenlose Beratung</span>
            </Link>
          </div>

          {/* Premium Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2.5 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all duration-200"
            aria-label="Menü öffnen"
          >
            <motion.svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={isMenuOpen ? { rotate: 90 } : { rotate: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </motion.svg>
          </button>
        </div>
      </div>

      {/* Premium Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white shadow-lg animate-fade-in">
          <div className="mx-auto max-w-7xl px-4 py-5">
            {/* Premium Mobile Contact Info */}
            <div className="mb-5 p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl border-2 border-cyan-200">
              <div className="space-y-3 text-sm">
                <a 
                  href="tel:+4920189083052" 
                  className="flex items-center gap-3 text-slate-800 font-bold hover:text-cyan-600 transition-colors duration-200"
                >
                  <div className="p-2 bg-cyan-500 rounded-lg">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <span>0212 / 34 567 890</span>
                </a>
                <div className="flex items-center gap-3 text-slate-600 text-xs">
                  <div className="p-1.5 bg-slate-200 rounded-lg">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <span>Mo-Fr: 8-18 Uhr | Sa: 9-14 Uhr</span>
                </div>
              </div>
            </div>

            {/* Premium Navigation */}
            <nav className="space-y-1.5 mb-5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3.5 text-slate-700 hover:text-slate-900 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 rounded-xl transition-all duration-200 ease-out font-semibold border border-transparent hover:border-cyan-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Premium CTA & USPs */}
            <div className="space-y-4">
              <Link
                href="/kontakt"
                onClick={() => setIsMenuOpen(false)}
                className="block px-5 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-bold text-center rounded-xl shadow-lg hover:shadow-2xl transition-all duration-200 ease-out"
              >
                Kostenlose Beratung
              </Link>
              
              {/* Premium USPs Grid */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2 p-3 bg-cyan-50 rounded-lg border border-cyan-200">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-600 flex-shrink-0">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span className="font-semibold text-slate-700">Kostenlos</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600 flex-shrink-0">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  <span className="font-semibold text-slate-700">10 Jahre</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-amber-50 rounded-lg border border-amber-200">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600 flex-shrink-0">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <span className="font-semibold text-slate-700">1 Tag</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg border border-green-200">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 flex-shrink-0">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span className="font-semibold text-slate-700">Ganz NRW</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      </header>
    </>
  );
}

