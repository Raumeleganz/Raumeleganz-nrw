import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt - Kostenlose Beratung | Raumeleganz Spanndecken",
  description: "Kontaktieren Sie uns für eine kostenlose Beratung zu Ihrem Spanndecken-Projekt. Telefon, E-Mail oder direkt vor Ort in Düsseldorf.",
};

export default function KontaktPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-yellow-600 to-yellow-500 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Kontaktieren Sie uns
            </h1>
            <p className="text-xl text-white/90">
              Wir freuen uns auf Ihre Anfrage und beraten Sie gerne kostenlos
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Anfrage senden
                </h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Vorname *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-600/20 outline-none transition-all"
                        placeholder="Max"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Nachname *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-600/20 outline-none transition-all"
                        placeholder="Mustermann"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-600/20 outline-none transition-all"
                      placeholder="max@beispiel.de"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-600/20 outline-none transition-all"
                      placeholder="0211 123 456 78"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Stadt
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-600/20 outline-none transition-all"
                      placeholder="z.B. Düsseldorf"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Ihre Nachricht *
                    </label>
                    <textarea
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-600/20 outline-none transition-all resize-none"
                      placeholder="Beschreiben Sie Ihr Projekt..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 w-4 h-4 text-yellow-600 rounded focus:ring-2 focus:ring-yellow-600/20"
                    />
                    <label className="text-sm text-gray-600">
                      Ich habe die <a href="/datenschutz" className="text-yellow-600 hover:underline">Datenschutzerklärung</a> gelesen und akzeptiere diese. *
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-yellow-600 to-yellow-500 text-white text-lg font-semibold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Anfrage absenden
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-white rounded-3xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Kontaktinformationen
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-yellow-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Telefon</p>
                        <a href="tel:+4921112345678" className="text-gray-600 hover:text-yellow-600 transition-colors">
                          0211 123 456 78
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-yellow-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">E-Mail</p>
                        <a href="mailto:info@raumeleganz-spanndecken.de" className="text-gray-600 hover:text-yellow-600 transition-colors">
                          info@raumeleganz-spanndecken.de
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-yellow-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Adresse</p>
                        <p className="text-gray-600">
                          Musterstraße 123<br />
                          40210 Düsseldorf
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-yellow-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Öffnungszeiten</p>
                        <p className="text-gray-600">
                          Mo - Fr: 08:00 - 18:00 Uhr<br />
                          Sa: 10:00 - 14:00 Uhr
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-3xl shadow-xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">
                    Kostenlose Vor-Ort-Beratung
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    Wir kommen gerne zu Ihnen nach Hause und beraten Sie direkt vor Ort. Kostenlos und unverbindlich!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

