'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { initializeTracking, removeTracking } from '@/lib/tracking';

interface CookiePreferences {
  essential: boolean;
  externalMedia: boolean;
  analytics: boolean;
  marketing: boolean;
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    externalMedia: false,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after a short delay
      setTimeout(() => setShowBanner(true), 1000);
    } else {
      // Load saved preferences
      try {
        const savedPreferences = JSON.parse(cookieConsent);
        setPreferences(savedPreferences);
      } catch (e) {
        console.error('Error parsing cookie preferences:', e);
      }
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookieConsent', JSON.stringify(prefs));
    setPreferences(prefs);
    setShowBanner(false);
    setShowSettings(false);

    // Initialize tracking based on new preferences
    if (prefs.analytics || prefs.marketing) {
      console.log('[CookieBanner] Initializing tracking...');
      initializeTracking();
    } else {
      console.log('[CookieBanner] No tracking consent given');
    }
  };

  const acceptEssential = () => {
    savePreferences({
      essential: true,
      externalMedia: false,
      analytics: false,
      marketing: false,
    });
  };

  const acceptAll = () => {
    savePreferences({
      essential: true,
      externalMedia: true,
      analytics: true,
      marketing: true,
    });
  };

  const saveCustomSettings = () => {
    savePreferences(preferences);
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      {showBanner && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[9998]"
            onClick={() => setShowSettings(false)}
          />

          {/* Banner Container */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-[9999] p-4 sm:p-6"
          >
            <div className="max-w-7xl mx-auto">
              {showSettings ? (
                // Settings View (Second Level)
                <div className="bg-white rounded-3xl shadow-2xl border border-warm-200 overflow-hidden max-h-[85vh] flex flex-col">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-craft-600 to-amber-600 p-6 sm:p-8">
                    <div className="flex items-start justify-between">
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                          Ihre Datenschutzeinstellungen
                        </h2>
                        <p className="text-white/90 text-sm sm:text-base">
                          Wir respektieren Ihre Privatsphäre. Wählen Sie, welche Kategorien Sie zulassen möchten.
                        </p>
                      </div>
                      <button
                        onClick={() => setShowSettings(false)}
                        className="text-white/80 hover:text-white transition-colors ml-4"
                        aria-label="Einstellungen schließen"
                      >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
                    {/* Essential Cookies */}
                    <div className="border border-warm-200 rounded-2xl p-6 bg-warm-50/50">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-warm-900">Essenziell</h3>
                            <span className="inline-flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full mt-1">
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              Immer aktiv
                            </span>
                          </div>
                        </div>
                        <div className="relative inline-block w-14 h-7 flex-shrink-0 cursor-not-allowed opacity-50">
                          <input
                            type="checkbox"
                            checked={true}
                            disabled
                            className="sr-only"
                          />
                          <div className="w-14 h-7 bg-green-500 rounded-full shadow-inner"></div>
                          <div className="absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition transform translate-x-7"></div>
                        </div>
                      </div>
                      <p className="text-sm text-warm-700 mb-3">
                        Diese Cookies sind für die grundlegende Funktion der Website erforderlich. Sie ermöglichen die Seitennavigation und den Zugriff auf geschützte Bereiche.
                      </p>
                      <div className="text-xs text-warm-600 space-y-1 bg-white/50 p-3 rounded-lg">
                        <p><span className="font-bold">Rechtsgrundlage:</span> Art. 6 Abs. 1 lit. f DSGVO</p>
                        <p><span className="font-bold">Speicherdauer:</span> Session-basiert (max. 24 Stunden)</p>
                      </div>
                    </div>

                    {/* External Media */}
                    <div className="border border-warm-200 rounded-2xl p-6 hover:border-craft-300 transition-colors">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-craft-100 to-amber-100 flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-craft-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-warm-900">Externe Medien (YouTube)</h3>
                            <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded-full mt-1">
                              Optional
                            </span>
                          </div>
                        </div>
                        <label className="relative inline-block w-14 h-7 flex-shrink-0 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={preferences.externalMedia}
                            onChange={(e) => setPreferences({ ...preferences, externalMedia: e.target.checked })}
                            className="sr-only peer"
                          />
                          <div className="w-14 h-7 bg-gray-300 peer-checked:bg-craft-500 rounded-full shadow-inner transition-colors"></div>
                          <div className="absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition transform peer-checked:translate-x-7"></div>
                        </label>
                      </div>
                      <p className="text-sm text-warm-700 mb-3">
                        Ermöglicht das Abspielen von Videos. Einbindung erfolgt über eine <span className="font-bold">Zwei-Klick-Lösung</span>: Erst nach Ihrem aktiven Klick wird eine Verbindung zu YouTube hergestellt.
                      </p>
                      <div className="text-xs text-warm-600 space-y-1 bg-warm-50 p-3 rounded-lg">
                        <p><span className="font-bold">Rechtsgrundlage:</span> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</p>
                        <p><span className="font-bold">Verarbeitungsdauer:</span> Nur während aktiver Nutzung</p>
                        <p><span className="font-bold">Drittanbieter:</span> Google Ireland Limited (YouTube)</p>
                      </div>
                    </div>

                    {/* Analytics & Statistics */}
                    <div className="border border-warm-200 rounded-2xl p-6 hover:border-craft-300 transition-colors">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-warm-900">Statistik & Analyse</h3>
                            <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full mt-1">
                              Optional
                            </span>
                          </div>
                        </div>
                        <label className="relative inline-block w-14 h-7 flex-shrink-0 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={preferences.analytics}
                            onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                            className="sr-only peer"
                          />
                          <div className="w-14 h-7 bg-gray-300 peer-checked:bg-blue-500 rounded-full shadow-inner transition-colors"></div>
                          <div className="absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition transform peer-checked:translate-x-7"></div>
                        </label>
                      </div>
                      <p className="text-sm text-warm-700 mb-3">
                        Ermöglicht uns die Analyse des Nutzerverhaltens (Besucherzahlen, Seitenaufrufe, Verweildauer) zur Optimierung der Website. Wir verwenden <span className="font-bold">Google Analytics</span> mit aktivierter IP-Anonymisierung.
                      </p>
                      <div className="text-xs text-warm-600 space-y-1 bg-warm-50 p-3 rounded-lg">
                        <p><span className="font-bold">Rechtsgrundlage:</span> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</p>
                        <p><span className="font-bold">Verarbeitungsdauer:</span> Bis zu 2 Jahre</p>
                        <p><span className="font-bold">Drittanbieter:</span> Google Ireland Limited</p>
                        <p><span className="font-bold">Datenübermittlung:</span> USA (Drittland ohne angemessenes Datenschutzniveau)</p>
                      </div>
                    </div>

                    {/* Marketing & Advertising */}
                    <div className="border border-warm-200 rounded-2xl p-6 hover:border-craft-300 transition-colors">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-warm-900">Marketing & Werbung</h3>
                            <span className="inline-flex items-center gap-1 text-xs font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded-full mt-1">
                              Optional
                            </span>
                          </div>
                        </div>
                        <label className="relative inline-block w-14 h-7 flex-shrink-0 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={preferences.marketing}
                            onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                            className="sr-only peer"
                          />
                          <div className="w-14 h-7 bg-gray-300 peer-checked:bg-purple-500 rounded-full shadow-inner transition-colors"></div>
                          <div className="absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition transform peer-checked:translate-x-7"></div>
                        </label>
                      </div>
                      <p className="text-sm text-warm-700 mb-3">
                        Ermöglicht Conversion-Tracking und personalisierte Werbung basierend auf Ihrem Surfverhalten. Wir verwenden <span className="font-bold">Google Ads</span> für Remarketing und Kampagnen-Messung.
                      </p>
                      <div className="text-xs text-warm-600 space-y-1 bg-warm-50 p-3 rounded-lg">
                        <p><span className="font-bold">Rechtsgrundlage:</span> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</p>
                        <p><span className="font-bold">Verarbeitungsdauer:</span> Bis zu 13 Monate</p>
                        <p><span className="font-bold">Drittanbieter:</span> Google Ireland Limited</p>
                        <p><span className="font-bold">Datenübermittlung:</span> USA (Drittland ohne angemessenes Datenschutzniveau)</p>
                      </div>
                    </div>
                  </div>

                  {/* Footer Buttons */}
                  <div className="border-t border-warm-200 p-6 bg-warm-50">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={acceptEssential}
                        className="flex-1 px-6 py-3 bg-white border-2 border-warm-300 text-warm-800 font-bold rounded-xl hover:bg-warm-50 transition-all duration-200"
                      >
                        Nur Essenziell
                      </button>
                      <button
                        onClick={saveCustomSettings}
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-craft-600 to-amber-600 text-white font-bold rounded-xl hover:shadow-xl transition-all duration-200 hover:scale-[1.02]"
                      >
                        Auswahl speichern
                      </button>
                      <button
                        onClick={acceptAll}
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-craft-600 to-amber-600 text-white font-bold rounded-xl hover:shadow-xl transition-all duration-200 hover:scale-[1.02]"
                      >
                        Alle akzeptieren
                      </button>
                    </div>
                    <p className="text-xs text-warm-600 text-center mt-4">
                      Weitere Informationen finden Sie in unserer{' '}
                      <Link href="/datenschutz" className="text-craft-600 hover:text-craft-700 underline font-bold">
                        Datenschutzerklärung
                      </Link>
                    </p>
                  </div>
                </div>
              ) : (
                // Simple Banner (First Level)
                <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-warm-200">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-craft-100 to-amber-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-craft-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h2 className="text-xl sm:text-2xl font-bold text-warm-900 mb-2">
                        Ihre Privatsphäre ist uns wichtig
                      </h2>
                      <p className="text-warm-700 text-sm sm:text-base leading-relaxed">
                        Diese Website verwendet <span className="font-bold">Cookies und Tracking-Tools</span> zur Verbesserung der Nutzererfahrung, Analyse des Nutzerverhaltens und für personalisierte Werbung. Sie können Ihre Einstellungen jederzeit anpassen.
                      </p>
                      <p className="text-sm text-warm-600 mt-2">
                        Weitere Informationen:{' '}
                        <Link href="/datenschutz" className="text-craft-600 hover:text-craft-700 underline font-bold">
                          Datenschutzerklärung
                        </Link>
                      </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto">
                      <button
                        onClick={acceptEssential}
                        className="px-6 py-3 bg-gradient-to-r from-craft-600 to-amber-600 text-white font-bold rounded-xl hover:shadow-xl transition-all duration-200 hover:scale-[1.02] whitespace-nowrap"
                      >
                        Verstanden
                      </button>
                      <button
                        onClick={() => setShowSettings(true)}
                        className="px-6 py-3 bg-white border-2 border-warm-300 text-warm-800 font-bold rounded-xl hover:bg-warm-50 transition-all duration-200 whitespace-nowrap"
                      >
                        Einstellungen
                      </button>
                    </div>
                  </div>

                  {/* Trust indicators */}
                  <div className="flex flex-wrap items-center gap-4 mt-6 pt-6 border-t border-warm-200">
                    <div className="flex items-center gap-2 text-sm text-warm-700">
                      <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <span className="font-bold">Ihre Wahl</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-warm-700">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="font-bold">DSGVO-konform</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-warm-700">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="font-bold">Jederzeit widerrufbar</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

