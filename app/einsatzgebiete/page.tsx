import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { nrwCities } from "@/data/cities.generated";
import Link from "next/link";
import { MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Einsatzgebiete - 90+ Städte in NRW | Raumeleganz Spanndecken",
  description: "Wir sind in über 90 Städten in Nordrhein-Westfalen für Sie da. Finden Sie Ihren Spanndecken-Experten in Ihrer Nähe.",
};

export default function EinsatzgebietePage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-yellow-600 to-yellow-500 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Unsere Einsatzgebiete
            </h1>
            <p className="text-xl text-white/90">
              In über 90 Städten in NRW für Sie vor Ort
            </p>
          </div>
        </section>

        {/* Cities Grid */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Alle Städte in NRW
              </h2>
              <p className="text-xl text-gray-600">
                Klicken Sie auf Ihre Stadt für weitere Informationen
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {nrwCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/einsatzgebiete/${city.slug}`}
                  className="group p-6 bg-white rounded-2xl border border-gray-200 hover:border-yellow-600/40 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-gray-900 group-hover:text-yellow-600 transition-colors">
                        {city.name}
                      </h3>
                      {city.population && (
                        <p className="text-sm text-gray-500 mt-1">
                          {city.population.toLocaleString('de-DE')} Einw.
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ihre Stadt nicht dabei?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Kein Problem! Kontaktieren Sie uns und wir finden eine Lösung
            </p>
            <a 
              href="/kontakt"
              className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-600 to-yellow-500 text-white text-lg font-semibold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Jetzt Kontakt aufnehmen
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

