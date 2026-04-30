'use client';

import Link from 'next/link';
import { useState } from 'react';
import { trackEvent, trackConversion } from '@/lib/tracking';

export default function KontaktForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Track conversion & event
    trackEvent('form_submit', 'conversions', 'Kontaktformular', 1);
    trackConversion(); // Google Ads Conversion
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Premium Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        {/* Background Decorations */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-300 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 rounded-full opacity-20 blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border-2 border-slate-200 shadow-md mb-6">
              <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="text-sm font-bold text-slate-900">Wir hören zu</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Keine Hotline.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600">
                Echte Menschen.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed mb-8">
              Vergessen Sie Warteschleifen und Standardantworten. Hier spricht niemand von einem Skript ab. 
              <strong className="text-cyan-700"> Sie erreichen direkt Menschen, die Ihr Handwerk verstehen</strong> – 
              und die sich Zeit nehmen, Ihnen wirklich zuzuhören.
            </p>

            {/* Quick Contact Options */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                href="tel:+49123456789"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-xl border-2 border-slate-200 shadow-lg hover:border-cyan-400 hover:shadow-xl transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-600 font-semibold">Direkter Draht</p>
                  <p className="text-sm font-bold text-slate-900">+49 (0) 123 456789</p>
                </div>
              </a>

              <a
                href="mailto:info@raumeleganz-spanndecken.de"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-xl border-2 border-slate-200 shadow-lg hover:border-blue-400 hover:shadow-xl transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-600 font-semibold">E-Mail</p>
                  <p className="text-sm font-bold text-slate-900">info@raumeleganz.de</p>
                </div>
              </a>
            </div>

            {/* What to Expect */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-slate-200 inline-block">
              <p className="text-sm font-bold text-slate-900 mb-3">Was Sie erwarten können:</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-700">
                {[
                  { icon: (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ), text: 'Antwort binnen 24h' },
                  { icon: (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ), text: 'Ehrliche Beratung' },
                  { icon: (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ), text: 'Kein Verkaufsdruck' },
                  { icon: (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ), text: 'Kostenfreies Angebot' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="text-cyan-600">{item.icon}</div>
                    <span className="font-semibold">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Emotional Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Why Contact Us Box */}
              <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-3xl p-8 text-white shadow-2xl">
                <h2 className="text-2xl font-bold mb-4">
                  Warum uns anrufen?
                </h2>
                <p className="text-white/80 leading-relaxed mb-6">
                  Weil Sie bei uns nicht Nummer 1.487 in der Warteschleife sind. 
                  Weil wir ehrlich sagen, wenn eine Spanndecke vielleicht gar nicht die beste Lösung für Sie ist. 
                  Und weil wir nach dem Gespräch nicht dreimal am Tag nachfassen.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      title: 'Direkter Kontakt',
                      text: 'Sie sprechen mit Thomas oder Marco – nicht mit einem Call-Center.',
                      icon: (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      ),
                    },
                    {
                      title: 'Keine Standard-Antworten',
                      text: 'Jedes Projekt ist anders. Deshalb hören wir zu, statt von einem Skript abzulesen.',
                      icon: (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ),
                    },
                    {
                      title: 'Ehrlich, auch wenns wehtut',
                      text: 'Wenn wir denken, dass eine andere Lösung besser wäre – sagen wir das. Auch wenn wir damit weniger verdienen.',
                      icon: (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      ),
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                      <div className="flex-shrink-0 w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-bold text-white mb-1">{item.title}</p>
                        <p className="text-sm text-white/70 leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-6">So erreichen Sie uns</h3>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 mb-1">Telefon</p>
                      <a
                        href="tel:+49123456789"
                        className="text-cyan-600 hover:text-cyan-700 transition-colors font-bold"
                      >
                        +49 (0) 123 456789
                      </a>
                      <p className="text-sm text-slate-600 mt-1">Mo-Fr: 8:00 - 18:00 Uhr</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 mb-1">E-Mail</p>
                      <a
                        href="mailto:info@raumeleganz-spanndecken.de"
                        className="text-cyan-600 hover:text-cyan-700 transition-colors font-bold break-all"
                      >
                        info@raumeleganz.de
                      </a>
                      <p className="text-sm text-slate-600 mt-1">Antwort innerhalb 24h</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 mb-1">Adresse</p>
                      <p className="text-slate-700">
                        Musterstraße 123
                        <br />
                        12345 Musterstadt
                      </p>
                      <p className="text-sm text-slate-600 mt-1">Termin nach Vereinbarung</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 rounded-2xl p-8 text-white shadow-lg">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Öffnungszeiten
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-white/20">
                    <span className="font-medium">Montag - Freitag</span>
                    <span className="font-bold">8:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/20">
                    <span className="font-medium">Samstag</span>
                    <span className="font-bold">9:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Sonntag</span>
                    <span className="font-bold">Geschlossen</span>
                  </div>
                </div>
                <p className="text-sm text-white/70 mt-4 italic">
                  * Außerhalb dieser Zeiten erreichen Sie uns per E-Mail – wir antworten spätestens am nächsten Werktag.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 md:p-10 border-2 border-slate-200 shadow-2xl">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">
                    Schreiben Sie uns
                  </h2>
                  <p className="text-slate-700 leading-relaxed">
                    Erzählen Sie uns von Ihrem Projekt. Wir melden uns innerhalb von 24 Stunden – 
                    <strong className="text-cyan-700"> persönlich, nicht automatisiert</strong>.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="py-12 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                      <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Nachricht erhalten!</h3>
                    <p className="text-slate-700 mb-4">
                      Danke für Ihre Nachricht. Wir melden uns innerhalb von 24 Stunden persönlich bei Ihnen.
                    </p>
                    <p className="text-sm text-slate-600">
                      (Keine automatische Antwort. Ein echter Mensch liest Ihre Nachricht.)
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-slate-900 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200"
                        placeholder="Ihr vollständiger Name"
                      />
                    </div>

                    {/* Email & Phone */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-bold text-slate-900 mb-2">
                          E-Mail *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200"
                          placeholder="ihre@email.de"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-bold text-slate-900 mb-2">
                          Telefon (optional)
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200"
                          placeholder="+49 123 456789"
                        />
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <label htmlFor="service" className="block text-sm font-bold text-slate-900 mb-2">
                        Wofür interessieren Sie sich?
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200"
                      >
                        <option value="">Bitte wählen Sie...</option>
                        <option value="spanndecken">Klassische Spanndecken</option>
                        <option value="lackspanndecken">Lackspanndecken (Hochglanz)</option>
                        <option value="matt">Matte Spanndecken</option>
                        <option value="satin">Satin-Spanndecken</option>
                        <option value="beleuchtung">LED-Beleuchtung</option>
                        <option value="lichtdecken">Lichtdecken</option>
                        <option value="motiv">Motiv-Spanndecken</option>
                        <option value="beratung">Allgemeine Beratung</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-slate-900 mb-2">
                        Erzählen Sie uns von Ihrem Projekt *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200 resize-none"
                        placeholder="Welche Räume? Wie groß? Was ist Ihr Ziel? Je mehr wir wissen, desto besser können wir Sie beraten..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:scale-[1.02]"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Wird gesendet...</span>
                        </>
                      ) : (
                        <>
                          <span>Nachricht absenden</span>
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </>
                      )}
                    </button>

                    <p className="text-sm text-slate-600 text-center leading-relaxed">
                      * Pflichtfelder · Ihre Daten werden vertraulich behandelt und nicht weitergegeben.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Trust Section */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 rounded-3xl p-12 border-2 border-slate-200 shadow-xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Das macht{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600">
                  den Unterschied
                </span>
              </h3>
              <p className="text-lg text-slate-700 max-w-3xl mx-auto">
                Warum hunderte Familien in NRW uns weiterempfehlen – und immer wieder anrufen.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: (
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: 'Antwort binnen 24h',
                  text: 'Keine Warteschleifen. Keine Bots. Ein echter Mensch liest Ihre Nachricht und antwortet.',
                  gradient: 'from-cyan-500 to-blue-600',
                },
                {
                  icon: (
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  ),
                  title: 'Ehrliche Beratung',
                  text: 'Wir sagen auch mal "Das brauchen Sie nicht". Weil langfristige Zufriedenheit wichtiger ist als ein schneller Verkauf.',
                  gradient: 'from-blue-500 to-purple-600',
                },
                {
                  icon: (
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: 'Regional & Nah',
                  text: 'Wir sind wirklich in Ihrer Nähe. Kein Subunternehmer aus 200km Entfernung, sondern Ihr lokales Team.',
                  gradient: 'from-purple-500 to-pink-600',
                },
                {
                  icon: (
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: '10 Jahre Garantie',
                  text: 'Keine Ausreden, kein Kleingedrucktes. Wenn etwas nicht stimmt, machen wir es neu. Punkt.',
                  gradient: 'from-cyan-500 to-cyan-600',
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-lg hover:shadow-2xl hover:border-cyan-400 transition-all duration-200 hover:scale-[1.02]">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-4 shadow-lg`}>
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2 text-lg">{item.title}</h4>
                  <p className="text-sm text-slate-700 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Emotional CTA */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-3xl p-12 sm:p-16 shadow-2xl text-white overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full opacity-10 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400 rounded-full opacity-10 blur-3xl" />

            <div className="relative text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-bold text-white">Noch unsicher?</span>
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Lassen Sie uns einfach{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                  reden
                </span>
              </h3>

              <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-4 max-w-3xl mx-auto">
                Sie müssen sich nicht sofort entscheiden. Rufen Sie an, stellen Sie Ihre Fragen, 
                lassen Sie sich beraten – und dann entscheiden Sie in Ruhe, ob wir zusammenpassen.
              </p>

              <p className="text-white/70 mb-10 max-w-2xl mx-auto italic">
                "Die besten Kunden sind die, die sich Zeit nehmen. Weil sie am Ende am zufriedensten sind."
                <span className="block text-sm mt-2 text-cyan-400">– Thomas, Geschäftsführer</span>
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-10">
                <a
                  href="tel:+49123456789"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 font-bold text-lg rounded-xl shadow-2xl hover:bg-slate-50 transition-all duration-200 hover:scale-[1.02]"
                >
                  <svg className="w-6 h-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Jetzt anrufen
                </a>

                <a
                  href="mailto:info@raumeleganz-spanndecken.de"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-200 hover:scale-[1.02]"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  E-Mail schreiben
                </a>
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap justify-center gap-6 pt-8 border-t border-white/20">
                <div className="flex items-center gap-2 text-white/90">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-bold">+49 (0) 123 456789</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-semibold">Mo-Fr: 8:00 - 18:00 Uhr</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-semibold">info@raumeleganz.de</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

